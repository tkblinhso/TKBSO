import { MasterTimetable, ScheduleItem, SchoolInfo, Grade, TeacherType } from "../types";
import { 
  DEFAULT_CLASSES, 
  DEFAULT_TEACHERS, 
  TeacherInfo, 
  generateScheduleForClass, 
  generateSpecialistSchedule,
  isSlotMatchingTeacherOrSubject,
  DAYS_OF_WEEK
} from "../data/defaultTimetables";
import { filterPersonalTeacherSchedule } from "./teacherScheduleHelper";

/**
 * Reconcile & recalculate teacher assignments (Phân công chuyên môn / Phân công giáo viên)
 * dynamically from ANY Master Timetable (TKB).
 * 
 * Automatically counts:
 * 1. GVCN (10 Homeroom teachers):
 *    - Number of teaching periods in their assigned class (excluding specialist subjects)
 *    - Taught subjects (Tiếng Việt, Toán, HĐTN, Đạo đức, Khoa học...)
 *    - Concurrent periods (Chủ nhiệm/hội họp)
 *    - Total teaching load
 * 2. GV Bộ môn / Chuyên (8+ Specialist teachers):
 *    - Number of taught periods across the school matching their subject or name tag
 *    - Exact list of assigned classes where they have periods
 *    - Total periods
 * 3. Auto-detect any new teacher name tags in parentheses like (Nga), (Liêm), (Khỏe)...
 */
export function computeTeacherAssignmentsFromTimetable(
  timetable: MasterTimetable,
  baseTeachers: TeacherInfo[] = DEFAULT_TEACHERS
): {
  teachers: TeacherInfo[];
  totalSchoolSlots: number;
  syncedHomeroomCount: number;
  syncedSpecialistCount: number;
} {
  const activeClasses = timetable.classes && timetable.classes.length > 0 
    ? timetable.classes 
    : DEFAULT_CLASSES;

  // Clone current teachers list
  const teacherList: TeacherInfo[] = JSON.parse(JSON.stringify(baseTeachers));

  // Count total non-empty slots in the timetable
  let totalSchoolSlots = 0;
  Object.values(timetable.slots || {}).forEach((classRow) => {
    Object.values(classRow || {}).forEach((val) => {
      if (val && val.trim() !== "" && val.trim() !== "SHCM" && val.trim() !== "HỌP") {
        totalSchoolSlots++;
      }
    });
  });

  // Track synced counts
  let syncedHomeroomCount = 0;
  let syncedSpecialistCount = 0;

  // 1. RECONCILE HOMEROOM TEACHERS (GVCN)
  teacherList.forEach((teacher) => {
    if (teacher.type === "homeroom") {
      const targetClass = teacher.assignedClasses?.[0] || teacher.role.replace("GVCN", "").trim() || "1A";
      
      // Generate all slots for this class
      const classSchedule = generateScheduleForClass(timetable, targetClass, 1, undefined, teacher.name);
      
      // Filter out specialist subjects (taught by specialist teachers)
      const personalSchedule = filterPersonalTeacherSchedule(classSchedule, "homeroom", teacher.name);
      
      const teachingPeriods = personalSchedule.length;
      
      // Extract unique subjects taught by GVCN
      const taughtSubjects = Array.from(
        new Set(
          personalSchedule
            .map((s) => s.subject.replace(/\s*\d+$/, "").trim())
            .filter((subj) => Boolean(subj) && !subj.toUpperCase().includes("CHUYÊN"))
        )
      );

      // Concurrent periods: In VN primary schools, standard total load is ~23 periods (e.g. 19 teaching + 4 concurrent)
      const concurrentPeriods = teacher.concurrentPeriods !== undefined 
        ? teacher.concurrentPeriods 
        : Math.max(0, 23 - teachingPeriods);
      const totalPeriods = teachingPeriods + concurrentPeriods;

      teacher.teachingPeriods = teachingPeriods;
      teacher.concurrentPeriods = concurrentPeriods;
      teacher.totalPeriods = totalPeriods;
      teacher.assignedClasses = [targetClass];
      if (taughtSubjects.length > 0) {
        teacher.subjects = taughtSubjects;
      }
      teacher.role = `GVCN ${targetClass}`;

      syncedHomeroomCount++;
    }
  });

  // 2. RECONCILE SPECIALIST TEACHERS (GV BỘ MÔN / CHUYÊN)
  teacherList.forEach((teacher) => {
    if (teacher.type === "specialist") {
      const schedule = generateSpecialistSchedule(
        timetable,
        teacher.name,
        teacher.specialistSubject || "Tiếng Anh",
        1,
        undefined,
        activeClasses
      );

      const teachingPeriods = schedule.length;
      const assignedClasses = Array.from(new Set(schedule.map((s) => s.className))).sort();

      const taughtSubjects = Array.from(
        new Set(
          schedule.map((s) => s.subject.replace(/\s*\d+$/, "").trim()).filter(Boolean)
        )
      );

      teacher.teachingPeriods = teachingPeriods;
      teacher.assignedClasses = assignedClasses.length > 0 
        ? assignedClasses 
        : teacher.assignedClasses || activeClasses;
      if (taughtSubjects.length > 0) {
        teacher.subjects = taughtSubjects;
      }
      teacher.totalPeriods = teachingPeriods + (teacher.concurrentPeriods || 0);
      
      // Format clean role
      const subjName = teacher.specialistSubject || "Bộ môn";
      teacher.role = `GV Chuyên ${subjName} (${teachingPeriods} tiết)`;

      syncedSpecialistCount++;
    }
  });

  // 3. SCAN TIMETABLE FOR NEW TEACHER TAGS IN PARENTHESES
  const knownNames = teacherList.map((t) => t.name.toLowerCase());
  const discoveredTags: Record<string, { count: number; classes: Set<string>; subjects: Set<string> }> = {};

  const IGNORED_TAGS = new Set([
    "CC", "SHL", "SHCM", "HỌP", "BD", "PHT", "PCGD", "T", "TV", "AN", "MT", "TH", "TA", "GDTC", "TNXH", "CN", "DD"
  ]);

  Object.entries(timetable.slots || {}).forEach(([slotKey, classMap]) => {
    Object.entries(classMap || {}).forEach(([cls, cellText]) => {
      if (!cellText) return;
      const match = cellText.match(/\(([A-Za-zÀ-ỹ\s\.]+)\)/);
      if (match && match[1]) {
        const tag = match[1].trim();
        const tagUpper = tag.toUpperCase();
        if (!IGNORED_TAGS.has(tagUpper) && tag.length >= 2) {
          const isAlreadyKnown = knownNames.some((n) => n.includes(tag.toLowerCase()));
          if (!isAlreadyKnown) {
            if (!discoveredTags[tag]) {
              discoveredTags[tag] = { count: 0, classes: new Set(), subjects: new Set() };
            }
            discoveredTags[tag].count++;
            discoveredTags[tag].classes.add(cls);
            // Subject hint
            const subjHint = cellText.split("(")[0].trim();
            if (subjHint) discoveredTags[tag].subjects.add(subjHint);
          }
        }
      }
    });
  });

  // If any new teachers discovered, add them as specialist teachers
  Object.entries(discoveredTags).forEach(([tag, info]) => {
    const existing = teacherList.find((t) => t.name.toLowerCase().includes(tag.toLowerCase()));
    if (!existing && info.count >= 2) {
      const subjectArray = Array.from(info.subjects);
      const mainSubject = subjectArray[0] || "Bộ môn";
      teacherList.push({
        id: `auto_${tag.toLowerCase().replace(/\s+/g, "_")}`,
        name: `GV ${tag}`,
        role: `GV Bộ môn ${mainSubject} (${info.count} tiết)`,
        type: "specialist",
        specialistSubject: mainSubject,
        assignedClasses: Array.from(info.classes).sort(),
        subjects: subjectArray,
        teachingPeriods: info.count,
        totalPeriods: info.count,
      });
      syncedSpecialistCount++;
    }
  });

  return {
    teachers: teacherList,
    totalSchoolSlots,
    syncedHomeroomCount,
    syncedSpecialistCount,
  };
}
