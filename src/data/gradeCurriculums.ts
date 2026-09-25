import { Grade } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { findGrade5Integration } from "./grade5IntegrationPlan";
import { cleanLessonTitle } from "../utils/lessonTitleHelper";

import { GRADE_1_CURRICULUM_DATA } from "./curriculums/grade1Curriculum";
import { GRADE_2_CURRICULUM_DATA } from "./curriculums/grade2Curriculum";
import { GRADE_3_CURRICULUM_DATA } from "./curriculums/grade3Curriculum";
import { GRADE_4_CURRICULUM_DATA } from "./curriculums/grade4Curriculum";
import { GRADE_5_CURRICULUM_DATA } from "./curriculums/grade5Curriculum";

export interface LessonInfo {
  lessonTitle: string;
  subSubject?: string;
  curriculumPeriod: number | string;
  songTitle?: string;
  composer?: string;
  songLyrics?: string;
  integrationNotes?: string;
  specificCompetencies?: string[];
  aiIntegration?: string;
  digitalCompetence?: string;
  humanRights?: string;
  defense?: string;
  nutrition?: string;
  environment?: string;
  stem?: string;
  lifeSkills?: string;
  teacherMaterials?: string[];
  studentMaterials?: string[];
  act1Teacher?: string;
  act1Student?: string;
  act2Teacher?: string;
  act2Student?: string;
  act3Teacher?: string;
  act3Student?: string;
  act4Teacher?: string;
  act4Student?: string;
}

// Re-export full comprehensive grade curricula (Weeks 1 to 18+)
export const GRADE_1_CURRICULUM = GRADE_1_CURRICULUM_DATA;
export const GRADE_2_CURRICULUM = GRADE_2_CURRICULUM_DATA;
export const GRADE_3_CURRICULUM = GRADE_3_CURRICULUM_DATA;
export const GRADE_4_CURRICULUM = GRADE_4_CURRICULUM_DATA;
export const GRADE_5_CURRICULUM = GRADE_5_CURRICULUM_DATA;

// -------------------------------------------------------------
// SPECIALIST SUBJECT CURRICULUM (Môn Chuyên theo từng khối)
// -------------------------------------------------------------
export function getSpecialistLessonInfo(
  specialistSubject: string,
  grade: Grade,
  week: number,
  periodInWeek: number
): LessonInfo {
  const subLower = specialistSubject.toLowerCase().trim();

  // 1. MĨ THUẬT
  if (subLower.includes("mĩ thuật") || subLower.includes("mỹ thuật") || subLower.includes("bdmt") || subLower === "mt" || subLower.startsWith("mt ") || subLower.includes("(thy)")) {
    if (grade === 5) {
      const g5Mt = findGrade5Integration("Mĩ thuật", week, periodInWeek);
      return {
        lessonTitle: cleanLessonTitle(g5Mt?.lessonTitle || `Chủ đề ${Math.min(week, 8)}: Sắc màu quê hương - Sáng tạo sản phẩm mĩ thuật`),
        curriculumPeriod: week,
        integrationNotes: g5Mt ? `${g5Mt.integrationCode}: ${g5Mt.description}` : "Tích hợp STEM: Khám phá đường nét, màu sắc và sáng tạo nghệ thuật."
      };
    }
    return {
      lessonTitle: cleanLessonTitle(`Chủ đề ${Math.min(week, 8)}: Sắc màu quê hương - Sáng tạo sản phẩm mĩ thuật (Tiết ${((periodInWeek - 1) % 2) + 1})`),
      curriculumPeriod: week,
      integrationNotes: "Tích hợp STEM: Khám phá đường nét, màu sắc và sáng tạo mĩ thuật."
    };
  }

  // 2. TIẾNG ANH (Lớp 1, 2, 3, 4, 5)
  if (subLower.includes("tiếng anh") || subLower.includes("anh văn") || subLower === "ta" || subLower.startsWith("ta ") || subLower.includes("(nương)")) {
    const curP = (week - 1) * 4 + ((periodInWeek - 1) % 4) + 1;
    if (grade === 1) {
      const units1 = ["School Things", "Colors", "Numbers 1-5", "Family", "My Body", "Animals", "Toys", "Food"];
      const uName = units1[(week - 1) % units1.length];
      return {
        lessonTitle: cleanLessonTitle(`Unit ${Math.min(week, 8)}: ${uName} - Lesson ${((periodInWeek - 1) % 2) + 1}`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp nhận biết âm thanh và từ vựng Tiếng Anh sinh động.",
        specificCompetencies: [
          `Nhận diện và phát âm chuẩn các từ vựng chủ đề ${uName}.`,
          "Hào hứng tham gia các trò chơi ngôn ngữ, vận động theo bài hát Tiếng Anh."
        ]
      };
    }
    if (grade === 2) {
      const units2 = ["In the Classroom", "My House", "At the Zoo", "My Birthday", "Shapes", "Clothes", "Sports", "Activities"];
      const uName = units2[(week - 1) % units2.length];
      return {
        lessonTitle: cleanLessonTitle(`Unit ${Math.min(week, 8)}: ${uName} - Lesson ${((periodInWeek - 1) % 2) + 1}`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp học qua chơi (STEM / Play-based learning).",
        specificCompetencies: [
          `Nắm vững từ vựng và mẫu câu giao tiếp đơn giản chủ đề ${uName}.`,
          "Tự tin đối thoại theo cặp và phản xạ với giáo viên."
        ]
      };
    }
    if (grade === 3) {
      return {
        lessonTitle: cleanLessonTitle(`Unit ${Math.min(week, 10)}: My School & Friends - Lesson ${((periodInWeek - 1) % 3) + 1} (Vocabulary & Phonics)`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp trò chơi tương tác số, rèn luyện 4 kỹ năng Nghe - Nói - Đọc - Viết."
      };
    }
    if (grade === 4) {
      return {
        lessonTitle: cleanLessonTitle(`Unit ${Math.min(week, 10)}: My Week & Daily Activities - Lesson ${((periodInWeek - 1) % 3) + 1} (Communication & Grammar)`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp NLS: Sử dụng thẻ từ vựng số Flashcard, luyện phát âm chuẩn."
      };
    }
    // Grade 5
    const g5Ta = findGrade5Integration("Tiếng Anh", week, periodInWeek);
    return {
      lessonTitle: cleanLessonTitle(g5Ta?.lessonTitle || `Unit ${Math.min(week, 10)}: All About Us & Life Skills - Lesson ${((periodInWeek - 1) % 3) + 1} (Grammar & Skills)`),
      curriculumPeriod: curP,
      integrationNotes: g5Ta ? `${g5Ta.integrationCode}: ${g5Ta.description}` : "Tích hợp AI: Phát âm chuẩn xác qua giọng đọc máy (1.A1.1), NLS 1.1.CB1a."
    };
  }

  // 3. TIN HỌC (Lớp 1-5)
  if (subLower.includes("tin học") || subLower.includes("t.học") || subLower === "th" || subLower.startsWith("th ") || subLower.includes("(phương)")) {
    const curP = (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1;
    if (grade <= 2) {
      return {
        lessonTitle: cleanLessonTitle(`Làm quen thế giới số: Trò chơi rèn luyện tư duy logic (Tiết ${((periodInWeek - 1) % 2) + 1})`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp phát triển Năng lực số (CV 3456) và an toàn thiết bị điện tử."
      };
    }
    if (grade === 3) {
      return {
        lessonTitle: cleanLessonTitle(`Chủ đề ${Math.min(week, 6)}: Máy tính và em - Thao tác chuột và bàn phím (Tiết ${((periodInWeek - 1) % 2) + 1})`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp NLS 1.1.CB1a: Khám phá thiết bị số an toàn, bảo vệ mắt."
      };
    }
    if (grade === 4) {
      return {
        lessonTitle: cleanLessonTitle(`Chủ đề ${Math.min(week, 6)}: Soạn thảo văn bản và chèn hình ảnh minh họa (Tiết ${((periodInWeek - 1) % 2) + 1})`),
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp NLS: Kỹ năng định dạng tài liệu số chuẩn A4, bảo mật thông tin."
      };
    }
    const g5Th = findGrade5Integration("Tin học", week, periodInWeek);
    return {
      lessonTitle: cleanLessonTitle(g5Th?.lessonTitle || `Chủ đề ${Math.min(week, 6)}: Khám phá thế giới số & Ứng dụng AI trong học tập (Tiết ${((periodInWeek - 1) % 2) + 1})`),
      curriculumPeriod: curP,
      integrationNotes: g5Th ? `${g5Th.integrationCode}: ${g5Th.description}` : "Tích hợp NLS (CV 3456): 1.1.CB1a, 5.2.CB1a, An toàn thông tin mạng."
    };
  }

  // 4. ÂM NHẠC
  if (subLower.includes("âm nhạc") || subLower.includes("am nhac") || subLower.includes("bdan") || subLower === "an" || subLower.startsWith("an ") || subLower.includes("(tâm)")) {
    const isEnhance = subLower.includes("tăng cường") || subLower.includes("bồi dưỡng") || subLower.includes("bdan") || subLower.includes("tcan") || periodInWeek > 1;
    const detail = getDetailedMusicLesson(grade, week, isEnhance, isEnhance ? "Chiều" : "Sáng");
    let integNotes = detail.integrationNotes;
    if (grade === 5) {
      const g5An = findGrade5Integration("Âm nhạc", week, periodInWeek);
      if (g5An) {
        integNotes = `${g5An.integrationCode}: ${g5An.description} (${detail.integrationNotes})`;
      }
    }
    return {
      lessonTitle: cleanLessonTitle(detail.lessonTitle),
      songTitle: detail.songTitle,
      composer: detail.composer,
      songLyrics: detail.songLyrics,
      curriculumPeriod: isEnhance ? `TC${week}` : week,
      integrationNotes: integNotes,
      specificCompetencies: detail.specificCompetencies,
      teacherMaterials: detail.teacherMaterials,
      studentMaterials: detail.studentMaterials,
      act1Teacher: detail.activities[0]?.teacherActivity,
      act1Student: detail.activities[0]?.studentActivity,
      act2Teacher: detail.activities[1]?.teacherActivity,
      act2Student: detail.activities[1]?.studentActivity,
      act3Teacher: detail.activities[2]?.teacherActivity,
      act3Student: detail.activities[2]?.studentActivity,
      act4Teacher: detail.activities[3]?.teacherActivity,
      act4Student: detail.activities[3]?.studentActivity,
    };
  }

  // 5. GIÁO DỤC THỂ CHẤT
  if (subLower.includes("thể chất") || subLower.includes("gdtc")) {
    if (grade === 5) {
      const g5Gdtc = findGrade5Integration("GDTC", week, periodInWeek);
      return {
        lessonTitle: cleanLessonTitle(g5Gdtc?.lessonTitle || `Bài tập phát triển chung & Đội hình đội ngũ (Tiết ${((periodInWeek - 1) % 2) + 1})`),
        curriculumPeriod: (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1,
        integrationNotes: g5Gdtc ? `${g5Gdtc.integrationCode}: ${g5Gdtc.description}` : "Tích hợp GDDD: Lợi ích vận động và chế độ uống nước đầy đủ."
      };
    }
    return {
      lessonTitle: cleanLessonTitle(`Bài tập phát triển chung & Đội hình đội ngũ (Tiết ${((periodInWeek - 1) % 2) + 1})`),
      curriculumPeriod: (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1,
      integrationNotes: "Tích hợp GDDD: Lợi ích vận động và chế độ uống nước đầy đủ."
    };
  }

  // 6. HĐTN
  if (grade === 5) {
    const g5Hdtn = findGrade5Integration("HĐTN", week, periodInWeek);
    if (g5Hdtn) {
      return {
        lessonTitle: cleanLessonTitle(g5Hdtn.lessonTitle || `Hoạt động trải nghiệm: Sinh hoạt dưới cờ & GD theo chủ đề - Tuần ${week}`),
        curriculumPeriod: (week - 1) * 3 + periodInWeek,
        integrationNotes: `${g5Hdtn.integrationCode}: ${g5Hdtn.description}`
      };
    }
  }
  return {
    lessonTitle: cleanLessonTitle(`Hoạt động trải nghiệm: Hoạt động giáo dục theo chủ đề - Tuần ${week}`),
    curriculumPeriod: week,
    integrationNotes: "Tích hợp rèn nếp sống tự lập và kỹ năng giao tiếp."
  };
}

// -------------------------------------------------------------
// MASTER LOOKUP FUNCTION: GET EXACT LESSON BY GRADE & SUBJECT
// -------------------------------------------------------------
export function getGradeCurriculumLesson(
  grade: Grade,
  subject: string,
  week: number,
  periodInWeek: number = 1
): LessonInfo {
  const normSub = subject.toLowerCase().trim();

  // Pick curriculum dictionary by grade
  let gradeDict = GRADE_5_CURRICULUM;
  if (Number(grade) === 1) gradeDict = GRADE_1_CURRICULUM;
  else if (Number(grade) === 2) gradeDict = GRADE_2_CURRICULUM;
  else if (Number(grade) === 3) gradeDict = GRADE_3_CURRICULUM;
  else if (Number(grade) === 4) gradeDict = GRADE_4_CURRICULUM;
  else if (Number(grade) === 5) gradeDict = GRADE_5_CURRICULUM;

  // Match subject key
  for (const [key, fn] of Object.entries(gradeDict)) {
    if (normSub.includes(key) || key.includes(normSub)) {
      const res = fn(week, periodInWeek);
      // Synchronize Grade 5 official integration plan
      if (Number(grade) === 5) {
        const g5 = findGrade5Integration(subject, week, periodInWeek);
        if (g5) {
          if (!res.integrationNotes || !res.integrationNotes.includes(g5.integrationCode)) {
            res.integrationNotes = res.integrationNotes 
              ? `${g5.integrationCode}: ${g5.description} (${res.integrationNotes})`
              : `${g5.integrationCode}: ${g5.description}`;
          }
          if (res.lessonTitle.includes(`Tuần ${week}`) && g5.lessonTitle) {
            res.lessonTitle = g5.lessonTitle;
          }
        }
      }
      res.lessonTitle = cleanLessonTitle(res.lessonTitle);
      return res;
    }
  }

  // Fallback for specialist subjects
  if (normSub.includes("tiếng anh") || normSub.includes("anh văn") || normSub.includes("ta") ||
      normSub.includes("tin học") || normSub.includes("th") ||
      normSub.includes("âm nhạc") || normSub.includes("an") ||
      normSub.includes("mĩ thuật") || normSub.includes("mt") ||
      normSub.includes("thể chất") || normSub.includes("gdtc")) {
    const spec = getSpecialistLessonInfo(subject, grade, week, periodInWeek);
    spec.lessonTitle = cleanLessonTitle(spec.lessonTitle);
    return spec;
  }

  const g5Fallback = Number(grade) === 5 ? findGrade5Integration(subject, week, periodInWeek) : undefined;
  const fallbackTitle = cleanLessonTitle(g5Fallback?.lessonTitle || `${subject} - Phân phối chương trình tuần ${week} (Tiết ${periodInWeek})`);
  return {
    lessonTitle: fallbackTitle,
    curriculumPeriod: (week - 1) * 2 + periodInWeek,
    integrationNotes: g5Fallback 
      ? `${g5Fallback.integrationCode}: ${g5Fallback.description}`
      : `Tích hợp GDPT 2018 môn ${subject}.`
  };
}
