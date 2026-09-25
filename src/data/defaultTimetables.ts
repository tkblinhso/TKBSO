import { DayOfWeek, Grade, MasterTimetable, ScheduleItem, SessionType } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { getDetailedEnglishLesson } from "./englishLessonDetails";
import { getGradeCurriculumLesson } from "./gradeCurriculums";
import { cleanLessonTitle } from "../utils/lessonTitleHelper";
import { getATGTGrade5LessonInfo } from "./atgtGrade5Data";

export interface TeacherInfo {
  id: string;
  name: string;
  role: string;
  type: "homeroom" | "specialist";
  specialistSubject?: string;
  assignedClasses?: string[];
  subjects: string[];
  teachingPeriods: number;
  concurrentPeriods?: number;
  totalPeriods?: number;
}

export interface CampusInfo {
  id: string;
  name: string;
  shortName: string;
  classes: string[];
  note?: string;
}

export const CAMPUSES: CampusInfo[] = [
  {
    id: "chinh",
    name: "Điểm trường chính",
    shortName: "Điểm Chính",
    classes: ["1A1", "1A2", "1A3", "2A1", "2A2", "3A1", "3A2", "4A1", "4A2", "5A1", "5A2"],
  },
  {
    id: "hai_hung",
    name: "Điểm Hải Hưng",
    shortName: "Hải Hưng",
    classes: ["1A4", "2A3", "3A3", "4A3", "5A3"],
  },
  {
    id: "cay_sao",
    name: "Điểm Cây Sao",
    shortName: "Cây Sao",
    classes: ["3A4", "4A5"],
    note: "Chiều Thứ 3 lớp 3A4 và 4A5 về Điểm trường chính để học. Nhờ cô Châu dạy tiết ĐĐ lớp 3A4 ở phòng Mĩ thuật (Hoặc phòng Hội trường). Nhờ thầy Phương dạy tiết Công nghệ lớp 4A5 ở phòng Mĩ thuật (Hoặc phòng Hội trường).",
  },
  {
    id: "bang_lang",
    name: "Điểm Bằng Lăng",
    shortName: "Bằng Lăng",
    classes: ["2A4", "4A4", "5A4"],
    note: "Chiều thứ 5 tiết TH 2A4 và tiết HĐTN 2A4: Học sinh học tại điểm Bằng Lăng, cô Nghi sử dụng Tivi để dạy cho HS. Chiều thứ 4 lớp 4A4 và lớp 5A4 về Điểm trường chính để học. Thầy Phương dạy tiết ĐĐ lớp 5A4 và tiết ĐĐ lớp 4A4 ở phòng Mĩ thuật. Thầy Quý dạy tiết TD lớp 4A4 tại Điểm trường chính.",
  },
];

export const DEFAULT_CLASSES = [
  "1A1", "1A2", "1A3", "1A4",
  "2A1", "2A2", "2A3", "2A4",
  "3A1", "3A2", "3A3", "3A4",
  "4A1", "4A2", "4A3", "4A4", "4A5",
  "5A1", "5A2", "5A3", "5A4"
];

export const DEFAULT_TEACHERS: TeacherInfo[] = [
  // 21 GIÁO VIÊN CHỦ NHIỆM (KHỐI 1 - 5 TẤT CẢ CÁC ĐIỂM TRƯỜNG)
  { id: "tam_1a1", name: "Cô Tâm", role: "GVCN 1A1", type: "homeroom", assignedClasses: ["1A1"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "yen_1a2", name: "Cô Yến", role: "GVCN 1A2", type: "homeroom", assignedClasses: ["1A2"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "diem_1a3", name: "Cô Diễm", role: "GVCN 1A3", type: "homeroom", assignedClasses: ["1A3"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "tu_1a4", name: "Cô Tú", role: "GVCN 1A4", type: "homeroom", assignedClasses: ["1A4"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "hong_2a1", name: "Cô Hồng", role: "GVCN 2A1", type: "homeroom", assignedClasses: ["2A1"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "mai_2a2", name: "Cô Mai (Phượng)", role: "GVCN 2A2 (TT2)", type: "homeroom", assignedClasses: ["2A2"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 16, concurrentPeriods: 7, totalPeriods: 23 },
  { id: "loan_2a3", name: "Cô Loan", role: "GVCN 2A3", type: "homeroom", assignedClasses: ["2A3"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "moi_2a4", name: "Thầy Mới", role: "GVCN 2A4", type: "homeroom", assignedClasses: ["2A4"], subjects: ["Tiếng Việt", "Toán", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "luy_3a1", name: "Thầy Lũy", role: "GVCN 3A1 (TP3)", type: "homeroom", assignedClasses: ["3A1"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TNXH", "Đạo đức", "Công nghệ"], teachingPeriods: 18, concurrentPeriods: 5, totalPeriods: 23 },
  { id: "nhu_3a2", name: "Cô Như", role: "GVCN 3A2", type: "homeroom", assignedClasses: ["3A2"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TNXH", "Đạo đức", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "tao_3a3", name: "Cô Tạo", role: "GVCN 3A3", type: "homeroom", assignedClasses: ["3A3"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TNXH", "Đạo đức", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "chau_3a4", name: "Cô Châu", role: "GVCN 3A4", type: "homeroom", assignedClasses: ["3A4"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TNXH", "Đạo đức", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "vinh_4a1", name: "Thầy Vinh", role: "GVCN 4A1", type: "homeroom", assignedClasses: ["4A1"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "lan_4a2", name: "Cô Lan", role: "GVCN 4A2", type: "homeroom", assignedClasses: ["4A2"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "linh_4a3", name: "Thầy Q. Linh", role: "GVCN 4A3", type: "homeroom", assignedClasses: ["4A3"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "dung_4a4", name: "Cô Dung", role: "GVCN 4A4", type: "homeroom", assignedClasses: ["4A4"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "sanh_4a5", name: "Thầy Sanh", role: "GVCN 4A5", type: "homeroom", assignedClasses: ["4A5"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "mai_5a1", name: "Cô Mai", role: "GVCN 5A1", type: "homeroom", assignedClasses: ["5A1"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN", "Công nghệ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "an_5a2", name: "Thầy An", role: "GVCN 5A2", type: "homeroom", assignedClasses: ["5A2"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "thanh_5a3", name: "Cô Thanh", role: "GVCN 5A3", type: "homeroom", assignedClasses: ["5A3"], subjects: ["Tiếng Việt", "Toán", "Khoa học", "Lịch sử & Địa lí", "HĐTN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "diem_5a4", name: "Cô Diễm", role: "GVCN 5A4 (TT5)", type: "homeroom", assignedClasses: ["5A4"], subjects: ["Tiếng Việt", "Toán", "Lịch sử & Địa lí", "HĐTN"], teachingPeriods: 16, concurrentPeriods: 7, totalPeriods: 23 },

  // GIÁO VIÊN BỘ MÔN / CHUYÊN TOÀN TRƯỜNG
  { id: "huong_an", name: "Cô Hương", role: "GV Chuyên Âm nhạc", type: "specialist", specialistSubject: "Âm nhạc", assignedClasses: ["1A1", "1A2", "1A3", "1A4", "2A1", "2A2", "2A3", "2A4", "3A1", "3A2", "3A3", "3A4", "4A1", "4A2", "4A3", "4A4", "4A5", "5A1", "5A2", "5A3", "5A4"], subjects: ["Âm nhạc", "AN"], teachingPeriods: 21, totalPeriods: 21 },
  { id: "hoang_mt", name: "Thầy Hoàng", role: "GV Chuyên Mĩ thuật (Điểm Chính & Cây Sao)", type: "specialist", specialistSubject: "Mĩ thuật", assignedClasses: ["1A1", "1A2", "1A3", "2A1", "2A2", "3A1", "3A2", "4A1", "4A2", "5A1", "5A2", "3A4", "4A5"], subjects: ["Mĩ thuật", "MT"], teachingPeriods: 13, totalPeriods: 13 },
  { id: "chien_mt", name: "Cô Chiên", role: "GV Chuyên Mĩ thuật (Điểm Hải Hưng & Bằng Lăng)", type: "specialist", specialistSubject: "Mĩ thuật", assignedClasses: ["1A4", "2A3", "3A3", "4A3", "5A3", "2A4", "4A4", "5A4"], subjects: ["Mĩ thuật", "MT"], teachingPeriods: 8, totalPeriods: 8 },
  { id: "quy_td", name: "Thầy Quý", role: "GV Thể dục (Điểm Chính, Cây Sao, Bằng Lăng)", type: "specialist", specialistSubject: "Giáo dục Thể chất", assignedClasses: ["1A1", "1A2", "1A3", "4A1", "4A2", "3A4", "4A5", "2A4", "4A4", "5A4"], subjects: ["Giáo dục Thể chất", "GDTC", "TD"], teachingPeriods: 16, totalPeriods: 16 },
  { id: "kiet_td", name: "Thầy Kiệt", role: "GV Thể dục (Điểm Hải Hưng & 5A1)", type: "specialist", specialistSubject: "Giáo dục Thể chất", assignedClasses: ["1A4", "2A3", "3A3", "4A3", "5A3", "5A1"], subjects: ["Giáo dục Thể chất", "GDTC", "TD"], teachingPeriods: 12, totalPeriods: 12 },
  { id: "nghia_td", name: "Thầy Nghĩa", role: "GV Thể dục (2A1, 2A2, 3A1, 3A2)", type: "specialist", specialistSubject: "Giáo dục Thể chất", assignedClasses: ["2A1", "2A2", "3A1", "3A2"], subjects: ["Giáo dục Thể chất", "GDTC", "TD"], teachingPeriods: 8, totalPeriods: 8 },
  { id: "minh_td", name: "Thầy Minh", role: "GV Thể dục (5A2)", type: "specialist", specialistSubject: "Giáo dục Thể chất", assignedClasses: ["5A2"], subjects: ["Giáo dục Thể chất", "GDTC", "TD"], teachingPeriods: 2, totalPeriods: 2 },
  { id: "tin_bm", name: "Thầy Tín", role: "GV Bộ môn (Đạo đức & TNXH)", type: "specialist", specialistSubject: "Đạo đức", assignedClasses: ["1A1", "1A2", "1A3", "1A4", "2A3", "4A3", "5A3"], subjects: ["Đạo đức", "Tự nhiên và Xã hội", "ĐĐ", "TNXH"], teachingPeriods: 14, totalPeriods: 14 },
  { id: "nhung_th", name: "Cô Nhung", role: "GV Chuyên Tin học (Điểm Chính)", type: "specialist", specialistSubject: "Tin học", assignedClasses: ["1A1", "1A2", "1A3", "2A1", "2A2", "3A1", "3A2", "4A1", "4A2", "5A1", "5A2"], subjects: ["Tin học", "TH"], teachingPeriods: 11, totalPeriods: 11 },
  { id: "xuan_th", name: "Cô Xuân", role: "GV Chuyên Tin học & HĐTN (Hải Hưng)", type: "specialist", specialistSubject: "Tin học", assignedClasses: ["3A1", "4A1", "4A2", "5A1", "5A2", "1A4", "2A3", "3A3", "4A3", "5A3"], subjects: ["Tin học", "TH", "HĐTN"], teachingPeriods: 14, totalPeriods: 14 },
  { id: "nghi_th", name: "Cô Nghi", role: "GV Tin học & HĐTN (Cây Sao & Bằng Lăng)", type: "specialist", specialistSubject: "Tin học", assignedClasses: ["1A1", "1A2", "1A3", "3A4", "4A5", "2A4", "4A4", "5A4"], subjects: ["Tin học", "TH", "HĐTN"], teachingPeriods: 14, totalPeriods: 14 },
  { id: "nhi_ta", name: "Cô Nhi", role: "GV Chuyên Tiếng Anh (Điểm Chính)", type: "specialist", specialistSubject: "Tiếng Anh", assignedClasses: ["3A1", "3A2", "4A1", "4A2", "5A1", "5A2"], subjects: ["Tiếng Anh", "TA"], teachingPeriods: 24, totalPeriods: 24 },
  { id: "nho_ta", name: "Cô Nhớ", role: "GV Chuyên Tiếng Anh (Hải Hưng, Cây Sao, 5A4)", type: "specialist", specialistSubject: "Tiếng Anh", assignedClasses: ["3A3", "4A3", "5A3", "3A4", "4A5", "5A4"], subjects: ["Tiếng Anh", "TA"], teachingPeriods: 24, totalPeriods: 24 },
  { id: "pha_ta", name: "Cô Pha", role: "GV Chuyên Tiếng Anh (4A4)", type: "specialist", specialistSubject: "Tiếng Anh", assignedClasses: ["4A4"], subjects: ["Tiếng Anh", "TA"], teachingPeriods: 4, totalPeriods: 4 },
  { id: "phuong_bm", name: "Thầy/Cô Phương", role: "GV Bộ môn (ĐĐ, TNXH, KH, CN, HĐTN)", type: "specialist", specialistSubject: "Đạo đức", assignedClasses: ["2A2", "4A1", "4A2", "5A1", "5A2", "4A5", "2A4", "4A4", "5A4"], subjects: ["Đạo đức", "Tự nhiên và Xã hội", "Khoa học", "Công nghệ", "HĐTN"], teachingPeriods: 19, totalPeriods: 19 },
  { id: "ha_bm", name: "Cô Hà", role: "GV Bộ môn (TNXH 1A1)", type: "specialist", specialistSubject: "Tự nhiên và Xã hội", assignedClasses: ["1A1"], subjects: ["Tự nhiên và Xã hội", "TNXH"], teachingPeriods: 2, totalPeriods: 2 },
  { id: "uyen_bm", name: "Lê Thị Như Uyển", role: "GV Bộ môn & Người lập TKB (2A1)", type: "specialist", specialistSubject: "Tự nhiên và Xã hội", assignedClasses: ["2A1"], subjects: ["Tự nhiên và Xã hội", "Đạo đức", "HĐTN"], teachingPeriods: 4, totalPeriods: 4 },
];

// ==============================================================================
// THỜI KHÓA BIỂU CHÍNH THỨC TUẦN 2 (Áp dụng từ 14/09/2026 - 18/09/2026)
// TRƯỜNG TIỂU HỌC NHƠN HÒA LẬP (21 LỚP - 4 ĐIỂM TRƯỜNG)
// Người lập: Lê Thị Như Uyển | Hiệu trưởng: Nguyễn Thị Ngọc Hà
// ==============================================================================
export const TIMETABLE_TUAN_2_SLOTS: Record<string, Record<string, string>> = {
  // THỨ HAI (14/09/2026)
  "Thứ Hai_Sáng_1": {
    "1A1": "HĐTN (SHDC)", "1A2": "HĐTN (SHDC)", "1A3": "HĐTN (SHDC)", "1A4": "HĐTN (SHDC)",
    "2A1": "HĐTN (SHDC)", "2A2": "HĐTN (SHDC) (C. Phượng)", "2A3": "HĐTN (SHDC)", "2A4": "HĐTN (SHDC)",
    "3A1": "HĐTN (SHDC)", "3A2": "HĐTN (SHDC)", "3A3": "HĐTN (SHDC)", "3A4": "HĐTN (SHDC)",
    "4A1": "HĐTN (SHDC)", "4A2": "HĐTN (SHDC)", "4A3": "HĐTN (SHDC)", "4A4": "HĐTN (SHDC)", "4A5": "HĐTN (SHDC)",
    "5A1": "HĐTN (SHDC)", "5A2": "HĐTN (SHDC)", "5A3": "HĐTN (SHDC)", "5A4": "HĐTN (SHDC)"
  },
  "Thứ Hai_Sáng_2": {
    "1A1": "TV", "1A2": "TV", "1A3": "TV", "1A4": "TV",
    "2A1": "TV", "2A2": "TV", "2A3": "TV", "2A4": "TV",
    "3A1": "TV", "3A2": "TV", "3A3": "TV", "3A4": "TV",
    "4A1": "TV", "4A2": "TV", "4A3": "TV", "4A4": "TV", "4A5": "TV",
    "5A1": "TV", "5A2": "TV", "5A3": "TV", "5A4": "TV"
  },
  "Thứ Hai_Sáng_3": {
    "1A1": "TV", "1A2": "TV", "1A3": "TV", "1A4": "TV",
    "2A1": "TV", "2A2": "TV", "2A3": "TV", "2A4": "TV",
    "3A1": "TV", "3A2": "TV", "3A3": "TV", "3A4": "AN (Hương)",
    "4A1": "TV", "4A2": "TV", "4A3": "TV", "4A4": "TV", "4A5": "TV",
    "5A1": "TV", "5A2": "TV", "5A3": "TV", "5A4": "TV"
  },
  "Thứ Hai_Sáng_4": {
    "1A1": "T", "1A2": "T", "1A3": "T", "1A4": "T",
    "2A1": "T", "2A2": "T", "2A3": "T", "2A4": "T",
    "3A1": "T", "3A2": "T", "3A3": "T", "3A4": "TV",
    "4A1": "T", "4A2": "T", "4A3": "T", "4A4": "T", "4A5": "AN (Hương)",
    "5A1": "TD (Kiệt)", "5A2": "T", "5A3": "T", "5A4": "TD (T. Quý)"
  },
  "Thứ Hai_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "", "4A3": "", "4A4": "", "4A5": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": ""
  },

  "Thứ Hai_Chiều_1": {
    "1A1": "HĐTN (Nghi)", "1A2": "TNXH (T. Tín)", "1A3": "TH (Nhung)", "1A4": "TD (Kiệt)",
    "2A1": "TNXH (Uyển)", "2A2": "TD (Nghĩa)", "2A3": "BDTV", "2A4": "AN (Hương)",
    "3A1": "TNXH", "3A2": "ĐĐ", "3A3": "TA (Nhớ)", "3A4": "T",
    "4A1": "LS&ĐL", "4A2": "LS&ĐL", "4A3": "KH", "4A4": "LS&ĐL", "4A5": "T",
    "5A1": "T", "5A2": "TA (Nhi)", "5A3": "KH", "5A4": "T"
  },
  "Thứ Hai_Chiều_2": {
    "1A1": "TNXH (C.Hà)", "1A2": "ĐĐ (T. Tín)", "1A3": "HĐTN (Nghi)", "1A4": "BDTV",
    "2A1": "ĐĐ (Uyển)", "2A2": "TNXH (Phượng)", "2A3": "TD (Kiệt)", "2A4": "BDTV",
    "3A1": "ĐĐ", "3A2": "Công nghệ", "3A3": "TA (Nhớ)", "3A4": "Công nghệ",
    "4A1": "HĐTN (Xuân)", "4A2": "TD (T. Quý)", "4A3": "LS&ĐL", "4A4": "AN (Hương)", "4A5": "LS&ĐL",
    "5A1": "ĐĐ (T.Phương)", "5A2": "TA (Nhi)", "5A3": "LS&ĐL", "5A4": "LS&ĐL"
  },
  "Thứ Hai_Chiều_3": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "TH (Nhung)", "4A2": "", "4A3": "Công nghệ", "4A4": "KH", "4A5": "",
    "5A1": "HĐTN (Xuân)", "5A2": "TD (T.Minh)", "5A3": "Công nghệ", "5A4": "AN (Hương)"
  },

  // THỨ BA (15/09/2026)
  "Thứ Ba_Sáng_1": {
    "1A1": "TV", "1A2": "TV", "1A3": "AN (Hương)", "1A4": "TNXH (T. Tín)",
    "2A1": "TH (Nhung)", "2A2": "TV", "2A3": "HĐTN (Xuân)", "2A4": "TD (T. Quý)",
    "3A1": "T", "3A2": "MT (Hoàng)", "3A3": "TV", "3A4": "TV",
    "4A1": "TV", "4A2": "TA (Nhi)", "4A3": "TA (Nhớ)", "4A4": "TV", "4A5": "TV",
    "5A1": "TV", "5A2": "TV", "5A3": "TV", "5A4": "TV"
  },
  "Thứ Ba_Sáng_2": {
    "1A1": "TV", "1A2": "TV", "1A3": "MT (Hoàng)", "1A4": "TV",
    "2A1": "TV", "2A2": "TV", "2A3": "TNXH (T. Tín)", "2A4": "TV",
    "3A1": "TH (Nhung)", "3A2": "TD (Nghĩa)", "3A3": "TV", "3A4": "TV",
    "4A1": "T", "4A2": "TA (Nhi)", "4A3": "TA (Nhớ)", "4A4": "TD (T. Quý)", "4A5": "T",
    "5A1": "T", "5A2": "TV", "5A3": "T", "5A4": "TV"
  },
  "Thứ Ba_Sáng_3": {
    "1A1": "AN (Hương)", "1A2": "MT (Hoàng)", "1A3": "TV", "1A4": "TV",
    "2A1": "TV", "2A2": "T", "2A3": "TV", "2A4": "TV",
    "3A1": "TV", "3A2": "TV", "3A3": "T", "3A4": "T",
    "4A1": "TA (Nhi)", "4A2": "TV", "4A3": "ĐĐ (T.Tín)", "4A4": "TA (Pha)", "4A5": "KH",
    "5A1": "TH (Nhung)", "5A2": "TV", "5A3": "TA (Nhớ)", "5A4": "T"
  },
  "Thứ Ba_Sáng_4": {
    "1A1": "MT (Hoàng)", "1A2": "AN (Hương)", "1A3": "TV", "1A4": "ĐĐ (T. Tín)",
    "2A1": "T", "2A2": "TNXH (Phượng)", "2A3": "TV", "2A4": "T",
    "3A1": "TV", "3A2": "T", "3A3": "ĐĐ", "3A4": "TD (T.Quý)",
    "4A1": "TA (Nhi)", "4A2": "HĐTN (Xuân)", "4A3": "TV", "4A4": "TA (Pha)", "4A5": "Công nghệ",
    "5A1": "LS&ĐL", "5A2": "TH (Nhung)", "5A3": "TA (Nhớ)", "5A4": "KH (T.Phương)"
  },
  "Thứ Ba_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "", "4A3": "", "4A4": "", "4A5": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": ""
  },

  "Thứ Ba_Chiều_1": {
    "1A1": "TD (T.Quý)", "1A2": "TNXH (T. Tín)", "1A3": "BDTV", "1A4": "TD (Kiệt)",
    "2A1": "BDTV", "2A2": "TD (T. Nghĩa)", "2A3": "T", "2A4": "MT (Chiên)",
    "3A1": "MT (Hoàng)", "3A2": "TNXH", "3A3": "Công nghệ", "3A4": "TH (Nghi)",
    "4A1": "AN (Hương)", "4A2": "T", "4A3": "T", "4A4": "T", "4A5": "ĐĐ (T.Phương)",
    "5A1": "TA (Nhi)", "5A2": "T", "5A3": "TH (Xuân)", "5A4": "TA (Nhớ)"
  },
  "Thứ Ba_Chiều_2": {
    "1A1": "TNXH (C.Hà)", "1A2": "TD (T.Quý)", "1A3": "TNXH (T. Tín)", "1A4": "TV",
    "2A1": "TD (T. Nghĩa)", "2A2": "BDTV (Phượng)", "2A3": "TD (Kiệt)", "2A4": "BDT",
    "3A1": "TNXH", "3A2": "AN (Hương)", "3A3": "TNXH", "3A4": "ĐĐ",
    "4A1": "MT (Hoàng)", "4A2": "KH", "4A3": "LS&ĐL", "4A4": "MT (Chiên)", "4A5": "TH (Nghi)",
    "5A1": "TA (Nhi)", "5A2": "Công nghệ", "5A3": "HĐTN (Xuân)", "5A4": "TA (Nhớ)"
  },
  "Thứ Ba_Chiều_3": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "TD (T. Quý)", "4A2": "ĐĐ (T. Phương)", "4A3": "", "4A4": "", "4A5": "HĐTN (Nghi)",
    "5A1": "AN (Hương)", "5A2": "MT (Hoàng)", "5A3": "", "5A4": "MT (Chiên)"
  },

  // THỨ TƯ (16/09/2026)
  "Thứ Tư_Sáng_1": {
    "1A1": "TV", "1A2": "TV", "1A3": "TD (T.Quý)", "1A4": "TV",
    "2A1": "TV", "2A2": "TV", "2A3": "TV", "2A4": "TNXH (T.Phương)",
    "3A1": "TA (Nhi)", "3A2": "TV", "3A3": "TH (Xuân)", "3A4": "TV",
    "4A1": "TV", "4A2": "MT (Hoàng)", "4A3": "TV", "4A4": "TA (Pha)", "4A5": "TV",
    "5A1": "T", "5A2": "AN (Hương)", "5A3": "TA (Nhớ)", "5A4": "TV"
  },
  "Thứ Tư_Sáng_2": {
    "1A1": "TV", "1A2": "TV", "1A3": "TV", "1A4": "TV",
    "2A1": "TV", "2A2": "TV", "2A3": "T", "2A4": "TV",
    "3A1": "TA (Nhi)", "3A2": "T", "3A3": "T", "3A4": "TV",
    "4A1": "TV", "4A2": "TV", "4A3": "TV", "4A4": "TA (Pha)", "4A5": "TV",
    "5A1": "MT (Hoàng)", "5A2": "T", "5A3": "TA (Nhớ)", "5A4": "TV"
  },
  "Thứ Tư_Sáng_3": {
    "1A1": "T", "1A2": "TH (Nhung)", "1A3": "TV", "1A4": "AN (Hương)",
    "2A1": "T", "2A2": "MT (Hoàng)", "2A3": "TH (Xuân)", "2A4": "TV",
    "3A1": "TV", "3A2": "TA (Nhi)", "3A3": "TV", "3A4": "T",
    "4A1": "T", "4A2": "TV", "4A3": "TA (Nhớ)", "4A4": "TV", "4A5": "T",
    "5A1": "LS&ĐL", "5A2": "LS&ĐL", "5A3": "TV", "5A4": "T"
  },
  "Thứ Tư_Sáng_4": {
    "1A1": "TH (Nhung)", "1A2": "T", "1A3": "T", "1A4": "TV",
    "2A1": "MT (Hoàng)", "2A2": "T", "2A3": "AN (Hương)", "2A4": "T",
    "3A1": "T", "3A2": "TA (Nhi)", "3A3": "TNXH", "3A4": "TNXH",
    "4A1": "LS&ĐL", "4A2": "T", "4A3": "TA (Nhớ)", "4A4": "TV", "4A5": "KH",
    "5A1": "TD (Kiệt)", "5A2": "TD (T.Minh)", "5A3": "TV", "5A4": "TD (T. Quý)"
  },
  "Thứ Tư_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "", "4A3": "", "4A4": "", "4A5": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": ""
  },

  "Thứ Tư_Chiều_1": {
    "1A1": "TV", "1A2": "TV", "1A3": "TNXH (T. Tín)", "1A4": "TH (Xuân)",
    "2A1": "TNXH (Uyển)", "2A2": "ĐĐ (Phượng)", "2A3": "TV", "2A4": "TV",
    "3A1": "TD (Nghĩa)", "3A2": "HĐTN", "3A3": "TA (Nhớ)", "3A4": "TD (T.Quý)",
    "4A1": "KH", "4A2": "LS&ĐL", "4A3": "AN (Hương)", "4A4": "TH (Nghi)", "4A5": "MT (Hoàng)",
    "5A1": "TV", "5A2": "TA (Nhi)", "5A3": "T", "5A4": "ĐĐ (T.Phương)"
  },
  "Thứ Tư_Chiều_2": {
    "1A1": "BDTV", "1A2": "BDTV", "1A3": "ĐĐ (T. Tín)", "1A4": "HĐTN (Xuân)",
    "2A1": "HĐTN (Uyển)", "2A2": "BDT (Phượng)", "2A3": "BDT", "2A4": "ĐĐ",
    "3A1": "Công nghệ", "3A2": "TD (Nghĩa)", "3A3": "TA (Nhớ)", "3A4": "MT (Hoàng)",
    "4A1": "Công nghệ", "4A2": "Công nghệ", "4A3": "T", "4A4": "ĐĐ (T.Phương)", "4A5": "TD (T.Quý)",
    "5A1": "TV", "5A2": "TA (Nhi)", "5A3": "AN (Hương)", "5A4": "TH (Nghi)"
  },
  "Thứ Tư_Chiều_3": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "", "4A3": "", "4A4": "TD (T. Quý)", "4A5": "",
    "5A1": "", "5A2": "", "5A3": "KH", "5A4": ""
  },

  // THỨ NĂM (17/09/2026)
  "Thứ Năm_Sáng_1": {
    "1A1": "TD (T.Quý)", "1A2": "T", "1A3": "TV", "1A4": "MT (Chiên)",
    "2A1": "AN (Hương)", "2A2": "T", "2A3": "T", "2A4": "TNXH (T.Phương)",
    "3A1": "HĐTN (Xuân)", "3A2": "TV", "3A3": "TD (Kiệt)", "3A4": "TV",
    "4A1": "TA (Nhi)", "4A2": "TV", "4A3": "T", "4A4": "TV", "4A5": "TA (Nhớ)",
    "5A1": "TV", "5A2": "TV", "5A3": "TV", "5A4": "TV"
  },
  "Thứ Năm_Sáng_2": {
    "1A1": "TV", "1A2": "TD (T.Quý)", "1A3": "TV", "1A4": "TNXH (T. Tín)",
    "2A1": "TV", "2A2": "AN (Hương)", "2A3": "MT (Chiên)", "2A4": "TV",
    "3A1": "TV", "3A2": "TV", "3A3": "TV", "3A4": "T",
    "4A1": "TA (Nhi)", "4A2": "T", "4A3": "TD (Kiệt)", "4A4": "T", "4A5": "TA (Nhớ)",
    "5A1": "T", "5A2": "T", "5A3": "T", "5A4": "T"
  },
  "Thứ Năm_Sáng_3": {
    "1A1": "TV", "1A2": "TV", "1A3": "TD (T.Quý)", "1A4": "TV",
    "2A1": "TV", "2A2": "TV", "2A3": "TV", "2A4": "TV",
    "3A1": "TV", "3A2": "T", "3A3": "MT (Chiên)", "3A4": "TA (Nhớ)",
    "4A1": "TV", "4A2": "TA (Nhi)", "4A3": "TV", "4A4": "LS&ĐL", "4A5": "TV",
    "5A1": "KH", "5A2": "ĐĐ (T.Phương)", "5A3": "TD (Kiệt)", "5A4": "HĐTN (Nghi)"
  },
  "Thứ Năm_Sáng_4": {
    "1A1": "T", "1A2": "TV", "1A3": "T", "1A4": "TV",
    "2A1": "T", "2A2": "TV", "2A3": "TV", "2A4": "T",
    "3A1": "T", "3A2": "TNXH", "3A3": "AN (Hương)", "3A4": "TA (Nhớ)",
    "4A1": "T", "4A2": "TA (Nhi)", "4A3": "KH", "4A4": "HĐTN (Nghi)", "4A5": "T",
    "5A1": "Công nghệ", "5A2": "HĐTN (Xuân)", "5A3": "ĐĐ (T.Tín)", "5A4": "LS&ĐL"
  },
  "Thứ Năm_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "", "4A3": "", "4A4": "", "4A5": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": ""
  },

  "Thứ Năm_Chiều_1": {
    "1A1": "TV", "1A2": "TV", "1A3": "TV", "1A4": "T",
    "2A1": "BDT", "2A2": "TH (Nhung)", "2A3": "TNXH (T. Tín)", "2A4": "TH (Nghi)",
    "3A1": "TD (Nghĩa)", "3A2": "TV", "3A3": "T", "3A4": "TNXH",
    "4A1": "TD (T. Quý)", "4A2": "AN (Hương)", "4A3": "MT (Chiên)", "4A4": "T", "4A5": "TV",
    "5A1": "TA (Nhi)", "5A2": "KH", "5A3": "LS&ĐL", "5A4": "TA (Nhớ)"
  },
  "Thứ Năm_Chiều_2": {
    "1A1": "BDT", "1A2": "BDT", "1A3": "BDT", "1A4": "BDT",
    "2A1": "TD (T. Nghĩa)", "2A2": "HĐTN (Phượng)", "2A3": "ĐĐ (T. Tín)", "2A4": "HĐTN (Nghi)",
    "3A1": "AN (Hương)", "3A2": "TH (Nhung)", "3A3": "HĐTN", "3A4": "HĐTN",
    "4A1": "ĐĐ (T. Phương)", "4A2": "TD (T. Quý)", "4A3": "TH (Xuân)", "4A4": "Công nghệ", "4A5": "LS&ĐL",
    "5A1": "TA (Nhi)", "5A2": "LS&ĐL", "5A3": "MT (Chiên)", "5A4": "TA (Nhớ)"
  },
  "Thứ Năm_Chiều_3": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "TH (Nhung)", "4A3": "HĐTN (Xuân)", "4A4": "", "4A5": "TD (T.Quý)",
    "5A1": "", "5A2": "", "5A3": "", "5A4": ""
  },

  // THỨ SÁU (18/09/2026)
  "Thứ Sáu_Sáng_1": {
    "1A1": "ĐĐ (T. Tín)", "1A2": "HĐTN (Nghi)", "1A3": "TV", "1A4": "TV",
    "2A1": "TV", "2A2": "TV", "2A3": "TV", "2A4": "TD (T. Quý)",
    "3A1": "T", "3A2": "TA (Nhi)", "3A3": "TD (Kiệt)", "3A4": "TA (Nhớ)",
    "4A1": "TV", "4A2": "TV", "4A3": "T", "4A4": "TV", "4A5": "T",
    "5A1": "TV", "5A2": "TV", "5A3": "TV", "5A4": "KH (T.Phương)"
  },
  "Thứ Sáu_Sáng_2": {
    "1A1": "TV", "1A2": "TV", "1A3": "TV", "1A4": "TV",
    "2A1": "TV", "2A2": "TV", "2A3": "TV", "2A4": "TV",
    "3A1": "HĐTN (SHL)", "3A2": "TA (Nhi)", "3A3": "T", "3A4": "TA (Nhớ)",
    "4A1": "T", "4A2": "T", "4A3": "TD (Kiệt)", "4A4": "T", "4A5": "HĐTN (SHL)",
    "5A1": "T", "5A2": "T", "5A3": "T", "5A4": "CN (T.Phương)"
  },
  "Thứ Sáu_Sáng_3": {
    "1A1": "TV", "1A2": "TV", "1A3": "TV", "1A4": "T",
    "2A1": "T", "2A2": "T", "2A3": "T", "2A4": "T",
    "3A1": "TA (Nhi)", "3A2": "T", "3A3": "TV", "3A4": "T",
    "4A1": "KH", "4A2": "KH", "4A3": "TV", "4A4": "KH", "4A5": "TA (Nhớ)",
    "5A1": "KH", "5A2": "KH", "5A3": "TD (Kiệt)", "5A4": "T"
  },
  "Thứ Sáu_Sáng_4": {
    "1A1": "HĐTN (SHL)", "1A2": "HĐTN (SHL)", "1A3": "HĐTN (SHL)", "1A4": "HĐTN (SHL)",
    "2A1": "HĐTN (SHL)", "2A2": "HĐTN (SHL)", "2A3": "HĐTN (SHL)", "2A4": "HĐTN (SHL)",
    "3A1": "TA (Nhi)", "3A2": "HĐTN (SHL)", "3A3": "HĐTN (SHL)", "3A4": "HĐTN (SHL)",
    "4A1": "HĐTN (SHL)", "4A2": "HĐTN (SHL)", "4A3": "HĐTN (SHL)", "4A4": "HĐTN (SHL)", "4A5": "TA (Nhớ)",
    "5A1": "HĐTN (SHL)", "5A2": "HĐTN (SHL)", "5A3": "HĐTN (SHL)", "5A4": "HĐTN (SHL)"
  },
  "Thứ Sáu_Sáng_5": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "", "4A3": "", "4A4": "", "4A5": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": ""
  },

  "Thứ Sáu_Chiều_1": {
    "1A1": "Nghỉ CM", "1A2": "Nghỉ CM", "1A3": "Nghỉ CM", "1A4": "Nghỉ CM",
    "2A1": "Nghỉ CM", "2A2": "Nghỉ CM", "2A3": "Nghỉ CM", "2A4": "Nghỉ CM",
    "3A1": "Nghỉ CM", "3A2": "Nghỉ CM", "3A3": "Nghỉ CM", "3A4": "Nghỉ CM",
    "4A1": "Nghỉ CM", "4A2": "Nghỉ CM", "4A3": "Nghỉ CM", "4A4": "Nghỉ CM", "4A5": "Nghỉ CM",
    "5A1": "Nghỉ CM", "5A2": "Nghỉ CM", "5A3": "Nghỉ CM", "5A4": "Nghỉ CM"
  },
  "Thứ Sáu_Chiều_2": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "", "4A3": "", "4A4": "", "4A5": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": ""
  },
  "Thứ Sáu_Chiều_3": {
    "1A1": "", "1A2": "", "1A3": "", "1A4": "",
    "2A1": "", "2A2": "", "2A3": "", "2A4": "",
    "3A1": "", "3A2": "", "3A3": "", "3A4": "",
    "4A1": "", "4A2": "", "4A3": "", "4A4": "", "4A5": "",
    "5A1": "", "5A2": "", "5A3": "", "5A4": ""
  },
};

// Master timetable matrix based on the uploaded school timetable (THỰC HIỆN TỪ TUẦN 2 - 14/09/2026 - 18/09/2026)
export const DEFAULT_MASTER_TIMETABLE: MasterTimetable = {
  schoolName: "Trường Tiểu Học Nhơn Hòa Lập",
  effectiveDate: "Áp dụng Tuần 2 - Từ ngày 14/9/2026 (NH 2026 - 2027)",
  version: "2026_v9_nhon_hoa_lap_official_tuan2",
  classes: DEFAULT_CLASSES,
  slots: TIMETABLE_TUAN_2_SLOTS,
};

export const DAYS_OF_WEEK: DayOfWeek[] = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"];

// Academic Year 2026 - 2027 Start Date (Week 1 = Monday 07/09/2026)
export const ACADEMIC_YEAR_START_DATE = "07/09/2026";

export interface WeekDateRange {
  week: number;
  startDate: string; // dd/mm/yyyy (Monday / Thứ Hai)
  endDate: string;   // dd/mm/yyyy (Friday / Thứ Sáu)
  dates: string[];   // [T2, T3, T4, T5, T6] in "dd/mm/yyyy"
  datesShort: string[]; // [T2, T3, T4, T5, T6] in "dd/mm"
  label: string;
}

// Robust date string parser (accepts dd/mm/yyyy or dd-mm-yyyy)
export function parseDateString(dateStr: string): Date {
  if (!dateStr) return new Date(2026, 8, 7);
  const parts = dateStr.split(/[\/\-]/);
  if (parts.length >= 2) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parts[2] ? parseInt(parts[2], 10) : 2026;
    if (!isNaN(day) && !isNaN(month)) {
      return new Date(year, month - 1, day);
    }
  }
  return new Date(2026, 8, 7);
}

// Calculate the precise 5-day school week range (Monday to Friday) for any week (1 to 35)
// Week 1 = 07/09/2026 ... Week 2 = 14/09/2026 ... Week 35 = 03/05/2027
export function calculateWeekDateRange(
  week: number = 1,
  baseDateStr: string = ACADEMIC_YEAR_START_DATE
): WeekDateRange {
  const safeWeek = Math.max(1, Math.min(35, isNaN(week) ? 1 : Math.round(week)));
  const baseStart = parseDateString(baseDateStr);

  // Calculate Monday date of the requested week
  const monday = new Date(baseStart);
  monday.setDate(baseStart.getDate() + (safeWeek - 1) * 7);

  const dates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  });

  const datesShort = dates.map((d) => d.substring(0, 5));
  const startDate = dates[0];
  const endDate = dates[4];

  return {
    week: safeWeek,
    startDate,
    endDate,
    dates,
    datesShort,
    label: `Tuần ${safeWeek} (${datesShort[0]} - ${datesShort[4]})`,
  };
}

// Helper to calculate weekly dates (Monday to Friday)
// Automatically synchronizes based on the week number (Week 1 = 07/09/2026, Week 2 = 14/09/2026, ..., Week 35 = 03/05/2027)
export function getWeekDates(
  startDateOrWeek?: string | number,
  explicitWeek?: number
): string[] {
  // 1. Direct week number passed as first parameter: getWeekDates(2) -> Week 2 dates
  if (typeof startDateOrWeek === "number") {
    return calculateWeekDateRange(startDateOrWeek).dates;
  }

  // 2. Explicit week number provided as second parameter: getWeekDates(startDateStr, week)
  if (typeof explicitWeek === "number" && explicitWeek >= 1 && explicitWeek <= 35) {
    if (typeof startDateOrWeek === "string" && startDateOrWeek.trim() !== "") {
      const cleanDate = startDateOrWeek.trim();
      // If caller passed the academic year start (07/09/2026) while week > 1, use the calculated week
      if (cleanDate === ACADEMIC_YEAR_START_DATE && explicitWeek > 1) {
        return calculateWeekDateRange(explicitWeek).dates;
      }
      // If the provided date is a specific Monday date (e.g., "14/09/2026" for week 2 or custom Monday),
      // compute 5 consecutive school days (Thứ 2 -> Thứ 6) directly from this base date without double-offsetting!
      const base = parseDateString(cleanDate);
      return Array.from({ length: 5 }, (_, i) => {
        const d = new Date(base);
        d.setDate(base.getDate() + i);
        const dd = String(d.getDate()).padStart(2, "0");
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const yyyy = d.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
      });
    }
    return calculateWeekDateRange(explicitWeek).dates;
  }

  // 3. String provided without explicit week: calculate 5 consecutive school days from this date
  if (typeof startDateOrWeek === "string" && startDateOrWeek.trim() !== "") {
    const base = parseDateString(startDateOrWeek.trim());
    return Array.from({ length: 5 }, (_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    });
  }

  return calculateWeekDateRange(1).dates;
}

// Check if a cell slot matches a specialist teacher or subject
export function isSlotMatchingTeacherOrSubject(
  cellText: string,
  teacherName: string,
  specialistSubject?: string
): boolean {
  if (!cellText || cellText.trim() === "" || cellText === "SHCM" || cellText === "Nghỉ CM") return false;
  const lowerCell = cellText.toLowerCase();
  const lowerName = teacherName.toLowerCase();

  // Match specialist teacher tags from parentheses or text
  if (lowerName.includes("hương")) {
    return lowerCell.includes("(hương)") || lowerCell.includes("hương") || (lowerCell.startsWith("an") && !lowerCell.includes("("));
  }
  if (lowerName.includes("hoàng")) {
    return lowerCell.includes("(hoàng)") || lowerCell.includes("hoàng");
  }
  if (lowerName.includes("chiên")) {
    return lowerCell.includes("(chiên)") || lowerCell.includes("chiên");
  }
  if (lowerName.includes("quý")) {
    return lowerCell.includes("(t.quý)") || lowerCell.includes("(t. quý)") || lowerCell.includes("t.quý") || lowerCell.includes("t. quý") || lowerCell.includes("quý");
  }
  if (lowerName.includes("kiệt")) {
    return lowerCell.includes("(kiệt)") || lowerCell.includes("kiệt");
  }
  if (lowerName.includes("nghĩa")) {
    return lowerCell.includes("(nghĩa)") || lowerCell.includes("(t.nghĩa)") || lowerCell.includes("(t. nghĩa)") || lowerCell.includes("nghĩa");
  }
  if (lowerName.includes("minh")) {
    return lowerCell.includes("(t.minh)") || lowerCell.includes("(t. minh)") || lowerCell.includes("t.minh") || lowerCell.includes("minh");
  }
  if (lowerName.includes("tín")) {
    return lowerCell.includes("(t. tín)") || lowerCell.includes("(t.tín)") || lowerCell.includes("t. tín") || lowerCell.includes("t.tín") || lowerCell.includes("tín");
  }
  if (lowerName.includes("nhung")) {
    return lowerCell.includes("(nhung)") || lowerCell.includes("nhung");
  }
  if (lowerName.includes("xuân")) {
    return lowerCell.includes("(xuân)") || lowerCell.includes("xuân");
  }
  if (lowerName.includes("nghi")) {
    return lowerCell.includes("(nghi)") || lowerCell.includes("nghi");
  }
  if (lowerName.includes("nhi")) {
    return lowerCell.includes("(nhi)") || lowerCell.includes("nhi");
  }
  if (lowerName.includes("nhớ")) {
    return lowerCell.includes("(nhớ)") || lowerCell.includes("nhớ");
  }
  if (lowerName.includes("pha")) {
    return lowerCell.includes("(pha)") || lowerCell.includes("pha");
  }
  if (lowerName.includes("phương") || lowerName.includes("phượng")) {
    return lowerCell.includes("(phượng)") || lowerCell.includes("(c. phượng)") || lowerCell.includes("(c.phượng)") || lowerCell.includes("(t.phương)") || lowerCell.includes("(t. phương)") || lowerCell.includes("(phương)") || lowerCell.includes("phượng");
  }
  if (lowerName.includes("hà")) {
    return lowerCell.includes("(c.hà)") || lowerCell.includes("(c. hà)") || lowerCell.includes("c.hà");
  }
  if (lowerName.includes("uyển")) {
    return lowerCell.includes("(uyển)") || lowerCell.includes("uyển");
  }

  // Legacy fallback
  if (lowerName.includes("thịnh")) {
    return lowerCell.includes("(thịnh)") || lowerCell.includes("thịnh");
  }
  if (lowerName.includes("nương")) {
    return lowerCell.includes("(nương)") || lowerCell.includes("nương");
  }
  if (lowerName.includes("nhàn")) {
    return lowerCell.includes("(nhàn)") || lowerCell.includes("nhàn");
  }

  // Check matching by specialist subject keywords
  if (specialistSubject) {
    const sSub = specialistSubject.toLowerCase();
    if (sSub.includes("tiếng anh") || sSub.includes("anh văn")) {
      return lowerCell.includes("ta (") || lowerCell.includes("tiếng anh") || lowerCell.startsWith("ta");
    }
    if (sSub.includes("tin học")) {
      return lowerCell.includes("th (") || lowerCell.includes("tin học") || lowerCell.includes("t.học") || lowerCell === "th";
    }
    if (sSub.includes("âm nhạc")) {
      return lowerCell.includes("an (") || lowerCell.includes("âm nhạc") || lowerCell.startsWith("an");
    }
    if (sSub.includes("mĩ thuật") || sSub.includes("mỹ thuật")) {
      return lowerCell.includes("mt (") || lowerCell.includes("mĩ thuật") || lowerCell.startsWith("mt");
    }
    if (sSub.includes("thể chất") || sSub.includes("thể dục") || sSub.includes("gdtc")) {
      return lowerCell.includes("td (") || lowerCell.includes("gdtc") || lowerCell.includes("thể chất") || lowerCell.includes("thể dục") || lowerCell.startsWith("td");
    }
  }

  // General tag match
  const nameParts = lowerName.split(" ");
  const lastName = nameParts[nameParts.length - 1];
  if (lastName && lastName.length >= 2 && (lowerCell.includes(`(${lastName})`) || lowerCell.includes(`t.${lastName}`) || lowerCell.includes(`c.${lastName}`))) {
    return true;
  }

  return false;
}

/**
 * Automatically adjust timetable for specific weeks.
 * Starting from Week 3, Grade 5 introduces "An toàn giao thông" (ATGT) (1 lesson per 2 weeks):
 * - Tiết 4 ngày Thứ Sáu: ATGT (An toàn giao thông) cho lớp 5A và 5B
 * - Tiết 5 ngày Thứ Sáu: HĐTN (SHL) cho lớp 5A và 5B (vì tiết ATGT dạy 15 phút kết hợp SHL)
 */
export function getEffectiveTimetableForWeek(
  master: MasterTimetable,
  week: number = 1
): MasterTimetable {
  if (!master || !master.slots) return master;

  const newSlots: Record<string, Record<string, string>> = {};
  for (const [key, val] of Object.entries(master.slots)) {
    newSlots[key] = { ...val };
  }

  // Khối 5: Tiết 4 Thứ Sáu là ATGT (dạy 15 phút), Tiết 5 Thứ Sáu là HĐTN (SHL)
  if (newSlots["Thứ Sáu_Sáng_4"]) {
    newSlots["Thứ Sáu_Sáng_4"] = {
      ...newSlots["Thứ Sáu_Sáng_4"],
      "5A": "ATGT",
      "5B": "ATGT",
    };
  }
  if (newSlots["Thứ Sáu_Sáng_5"]) {
    newSlots["Thứ Sáu_Sáng_5"] = {
      ...newSlots["Thứ Sáu_Sáng_5"],
      "5A": "HĐTN (SHL)",
      "5B": "HĐTN (SHL)",
    };
  }

  return {
    ...master,
    slots: newSlots,
  };
}

// Helper to categorize subject shorthand for sequential weekly period counting
export function getSubjectCategory(raw: string, day: DayOfWeek, period: number): string {
  const clean = raw.trim();
  const cUpper = clean.toUpperCase();
  const cLower = clean.toLowerCase();

  // 0. An toàn giao thông (ATGT)
  if (
    clean === "ATGT" ||
    clean.startsWith("ATGT") ||
    cUpper.includes("ATGT") ||
    cLower.includes("an toàn giao thông")
  ) {
    return "ATGT";
  }

  // 1. Chào cờ / Sinh hoạt dưới cờ (HĐTN)
  if (
    cUpper.includes("HĐTN (CC)") ||
    cUpper.includes("HDTN (CC)") ||
    clean === "CC" ||
    cLower.includes("chào cờ") ||
    cLower.includes("chao co") ||
    cUpper.includes("SHDC") ||
    ((cUpper.includes("HĐTN") || cUpper.includes("HDTN")) && day === "Thứ Hai" && period === 1)
  ) {
    return "HDTN_SHDC";
  }

  // 2. Sinh hoạt lớp (HĐTN)
  if (
    cUpper.includes("HĐTN (SHL)") ||
    cUpper.includes("HDTN (SHL)") ||
    clean === "SHL" ||
    cLower.includes("sinh hoạt lớp") ||
    cLower.includes("sinh hoat lop") ||
    ((cUpper.includes("HĐTN") || cUpper.includes("HDTN")) && day === "Thứ Sáu" && (period === 4 || period === 5 || period === 2 || period === 3))
  ) {
    return "HDTN_SHL";
  }

  // 3. Hoạt động trải nghiệm chủ đề
  if (cUpper.includes("HĐTN") || cUpper.includes("HDTN") || cLower.includes("hoạt động trải nghiệm") || cLower.includes("trai nghiem")) {
    return "HDTN_GDCD";
  }

  // 4. Kĩ năng sống
  if (cUpper.includes("KNS") || cLower.includes("kĩ năng sống") || cLower.includes("kỹ năng sống")) {
    return "KNS";
  }

  // 5. Tăng cường / Bồi dưỡng Tiếng Việt (BDTV, TCTV)
  if (
    cUpper.includes("BDTV") ||
    cUpper.includes("TCTV") ||
    cUpper.includes("T. CƯỜNG TV") ||
    cUpper.includes("T.CƯỜNG TV") ||
    cLower.includes("luyện tiếng việt") ||
    cLower.includes("luyện tv") ||
    cLower.includes("tăng cường tiếng việt") ||
    cLower.includes("bồi dưỡng tiếng việt") ||
    cLower.includes("bồi dưỡng tv") ||
    cLower.includes("ôn tiếng việt")
  ) {
    return "TCTV";
  }

  // 6. Tăng cường / Bồi dưỡng Toán (BDT, TCT)
  if (
    (cUpper.includes("BDT") && !cUpper.includes("BDTV")) ||
    cUpper.includes("TCT") ||
    cUpper.includes("T. CƯỜNG T") ||
    cUpper.includes("T.CƯỜNG T") ||
    cLower.includes("luyện toán") ||
    cLower.includes("luyện t") ||
    cLower.includes("tăng cường toán") ||
    cLower.includes("bồi dưỡng toán") ||
    cLower.includes("ôn toán")
  ) {
    return "TCT";
  }

  // 7. Tiếng Anh
  if (cUpper.includes("TA") || cLower.includes("tiếng anh") || cLower.includes("anh văn") || cLower.includes("english")) {
    return "TA";
  }

  // 8. Tin học
  if (cUpper.includes("TH") || cLower.includes("tin học") || cLower.includes("t.học") || cLower.includes("tin hoc")) {
    return "TH";
  }

  // 9. Công nghệ
  if (clean === "CN" || clean.startsWith("CN ") || cLower.includes("công nghệ") || cLower.includes("cong nghe")) {
    return "CN";
  }

  // 10. Giáo dục Thể chất / Thể dục
  if (
    cUpper.includes("GDTC") ||
    cLower.includes("thể chất") ||
    cLower.includes("thể dục") ||
    clean === "TD" ||
    clean.startsWith("TD") ||
    cUpper.includes("THỂ CHẤT")
  ) {
    return "GDTC";
  }

  // 11. Âm nhạc
  if (cUpper.includes("AN") || cLower.includes("âm nhạc") || cUpper.includes("BDAN") || cLower.includes("am nhac")) {
    return "AN";
  }

  // 12. Mĩ thuật
  if (cUpper.includes("MT") || cLower.includes("mĩ thuật") || cLower.includes("mỹ thuật") || cUpper.includes("BDMT")) {
    return "MT";
  }

  // 13. Tự nhiên và Xã hội
  if (cUpper.includes("TNXH") || cUpper.includes("TN&XH") || cLower.includes("tự nhiên và xã hội") || cLower.includes("tự nhiên & xã hội")) {
    return "TNXH";
  }

  // 14. Lịch sử và Địa lí
  if (cUpper.includes("LS-ĐL") || cUpper.includes("LS&ĐL") || clean === "LS" || clean === "ĐL" || cLower.includes("lịch sử") || cLower.includes("địa lí") || cLower.includes("địa lý")) {
    return "LSDL";
  }

  // 15. Khoa học
  if (clean === "KH" || cLower.includes("khoa học") || cLower.includes("khoa hoc")) {
    return "KH";
  }

  // 16. Đạo đức
  if (cUpper.includes("ĐĐ") || cLower.includes("đạo đức") || cLower.includes("dao duc")) {
    return "DD";
  }

  // 17. Giáo dục địa phương
  if (cUpper.includes("GDĐP") || cLower.includes("địa phương") || cLower.includes("gdđp")) {
    return "GDDP";
  }

  // 18. Tiếng Việt chính khóa
  if (clean === "TV" || clean.startsWith("TV ") || cLower.includes("tiếng việt") || cLower === "tv") {
    return "TV";
  }

  // 19. Toán chính khóa
  if (clean === "T" || clean.startsWith("T ") || cLower.includes("toán") || cLower === "t") {
    return "TOAN";
  }

  return clean;
}

// Helper to generate full weekly schedule items for a specific class (GVCN)
export function generateScheduleForClass(
  master: MasterTimetable,
  targetClass: string,
  week: number = 1,
  startDateStr?: string,
  teacherName: string = "Nguyễn Hoàng Tuấn"
): ScheduleItem[] {
  const effectiveMaster = getEffectiveTimetableForWeek(master, week);
  const items: ScheduleItem[] = [];
  const dates = getWeekDates(startDateStr, week);
  const subjectCounters: Record<string, number> = {};

  DAYS_OF_WEEK.forEach((day, dIdx) => {
    // Sáng (Tiết 1 -> 5)
    for (let p = 1; p <= 5; p++) {
      const key = `${day}_Sáng_${p}`;
      const slotRow = effectiveMaster.slots[key] || {};
      const subjectRaw = (
        slotRow[targetClass] ||
        slotRow[targetClass.toUpperCase()] ||
        slotRow[targetClass.toLowerCase()] ||
        ""
      ).trim();
      if (subjectRaw && subjectRaw !== "") {
        const cat = getSubjectCategory(subjectRaw, day, p);
        subjectCounters[cat] = (subjectCounters[cat] || 0) + 1;
        const pInW = subjectCounters[cat];

        const item = mapRawSubjectToScheduleItem(
          subjectRaw,
          day,
          dates[dIdx],
          "Sáng",
          p,
          targetClass,
          week,
          teacherName,
          undefined,
          pInW
        );
        if (item) items.push(item);
      }
    }

    // Chiều (Tiết 1 -> 4)
    for (let p = 1; p <= 4; p++) {
      const key = `${day}_Chiều_${p}`;
      const slotRow = effectiveMaster.slots[key] || {};
      const subjectRaw = (
        slotRow[targetClass] ||
        slotRow[targetClass.toUpperCase()] ||
        slotRow[targetClass.toLowerCase()] ||
        ""
      ).trim();
      if (subjectRaw && subjectRaw !== "" && subjectRaw !== "SHCM") {
        const cat = getSubjectCategory(subjectRaw, day, p);
        subjectCounters[cat] = (subjectCounters[cat] || 0) + 1;
        const pInW = subjectCounters[cat];

        const item = mapRawSubjectToScheduleItem(
          subjectRaw,
          day,
          dates[dIdx],
          "Chiều",
          p,
          targetClass,
          week,
          teacherName,
          undefined,
          pInW
        );
        if (item) items.push(item);
      }
    }
  });

  return items;
}

// Helper to generate full weekly schedule items for a Specialist Teacher (GV Chuyên Bộ Môn)
export function generateSpecialistSchedule(
  master: MasterTimetable,
  teacherName: string,
  specialistSubject: string,
  week: number = 1,
  startDateStr?: string,
  assignedClasses: string[] = DEFAULT_CLASSES
): ScheduleItem[] {
  const items: ScheduleItem[] = [];
  const dates = getWeekDates(startDateStr, week);
  const classSubjectCounters: Record<string, Record<string, number>> = {};

  DAYS_OF_WEEK.forEach((day, dIdx) => {
    // Sáng (Tiết 1 -> 5)
    for (let p = 1; p <= 5; p++) {
      const key = `${day}_Sáng_${p}`;
      const slotRow = master.slots[key] || {};

      assignedClasses.forEach((cls) => {
        const cell = (slotRow[cls] || "").trim();
        if (cell && isSlotMatchingTeacherOrSubject(cell, teacherName, specialistSubject)) {
          if (!classSubjectCounters[cls]) classSubjectCounters[cls] = {};
          const cat = getSubjectCategory(cell, day, p);
          classSubjectCounters[cls][cat] = (classSubjectCounters[cls][cat] || 0) + 1;
          const pInW = classSubjectCounters[cls][cat];

          const item = mapRawSubjectToScheduleItem(
            cell,
            day,
            dates[dIdx],
            "Sáng",
            p,
            cls,
            week,
            teacherName,
            specialistSubject,
            pInW
          );
          if (item) items.push(item);
        }
      });
    }

    // Chiều (Tiết 1 -> 3)
    for (let p = 1; p <= 3; p++) {
      const key = `${day}_Chiều_${p}`;
      const slotRow = master.slots[key] || {};

      assignedClasses.forEach((cls) => {
        const cell = (slotRow[cls] || "").trim();
        if (cell && cell !== "SHCM" && isSlotMatchingTeacherOrSubject(cell, teacherName, specialistSubject)) {
          if (!classSubjectCounters[cls]) classSubjectCounters[cls] = {};
          const cat = getSubjectCategory(cell, day, p);
          classSubjectCounters[cls][cat] = (classSubjectCounters[cls][cat] || 0) + 1;
          const pInW = classSubjectCounters[cls][cat];

          const item = mapRawSubjectToScheduleItem(
            cell,
            day,
            dates[dIdx],
            "Chiều",
            p,
            cls,
            week,
            teacherName,
            specialistSubject,
            pInW
          );
          if (item) items.push(item);
        }
      });
    }
  });

  return items;
}

// Unified weekly schedule generator based on SchoolInfo
export function generateWeeklyScheduleFromTimetable(
  master: MasterTimetable,
  targetClass: string,
  teacherName: string,
  week: number,
  startDateStr: string,
  teacherType: "homeroom" | "specialist" = "homeroom",
  specialistSubject: string = "Tiếng Anh",
  assignedClasses: string[] = DEFAULT_CLASSES
): ScheduleItem[] {
  const effectiveMaster = getEffectiveTimetableForWeek(master, week);
  if (teacherType === "specialist") {
    return generateSpecialistSchedule(effectiveMaster, teacherName, specialistSubject, week, startDateStr, assignedClasses);
  }
  return generateScheduleForClass(effectiveMaster, targetClass, week, startDateStr, teacherName);
}

// Helper to map shorthand cell string to detailed Lesson Plan Item
export function mapRawSubjectToScheduleItem(
  raw: string,
  day: DayOfWeek,
  dateStr: string,
  session: SessionType,
  period: number,
  className: string,
  week: number,
  teacherName: string,
  specialistSubject?: string,
  subjectPeriodInWeek?: number
): ScheduleItem {
  const clean = raw.trim();
  const gradeNum = ((parseInt(className.charAt(0)) as Grade) || 5) as Grade;

  let subject = `TIẾNG VIỆT ${gradeNum}`;
  let subSubject = "";
  let lessonTitle = clean;
  let curriculumPeriod: string | number = week * 4 + period;
  let integrationNotes = "";
  let note = "";

  // 1. Detect Teacher Annotation Note from parenthesis
  if (clean.includes("Hương")) {
    note = "GV Chuyên Âm nhạc: Cô Hương";
  } else if (clean.includes("Hoàng")) {
    note = "GV Chuyên Mĩ thuật: Thầy Hoàng";
  } else if (clean.includes("Chiên")) {
    note = "GV Chuyên Mĩ thuật: Cô Chiên";
  } else if (clean.includes("T.Quý") || clean.includes("T. Quý") || clean.includes("Quý")) {
    note = "GV Thể dục: Thầy Quý";
  } else if (clean.includes("Kiệt")) {
    note = "GV Thể dục: Thầy Kiệt";
  } else if (clean.includes("Nghĩa")) {
    note = "GV Thể dục: Thầy Nghĩa";
  } else if (clean.includes("T.Minh") || clean.includes("T. Minh")) {
    note = "GV Thể dục: Thầy Minh";
  } else if (clean.includes("T. Tín") || clean.includes("T.Tín")) {
    note = "GV Bộ môn: Thầy Tín";
  } else if (clean.includes("Nhung")) {
    note = "GV Chuyên Tin học: Cô Nhung";
  } else if (clean.includes("Xuân")) {
    note = "GV Chuyên Tin học & HĐTN: Cô Xuân";
  } else if (clean.includes("Nghi")) {
    note = "GV Tin học & HĐTN: Cô Nghi";
  } else if (clean.includes("Nhi")) {
    note = "GV Chuyên Tiếng Anh: Cô Nhi";
  } else if (clean.includes("Nhớ")) {
    note = "GV Chuyên Tiếng Anh: Cô Nhớ";
  } else if (clean.includes("Pha")) {
    note = "GV Chuyên Tiếng Anh: Cô Pha";
  } else if (clean.includes("T.Phương") || clean.includes("T. Phương") || clean.includes("C. Phượng") || clean.includes("Phượng")) {
    note = "GV Bộ môn: Thầy/Cô Phương";
  } else if (clean.includes("C.Hà")) {
    note = "GV Bộ môn: Cô Hà";
  } else if (clean.includes("Uyển")) {
    note = "GV Bộ môn: Cô Uyển";
  } else if (clean.includes("(Thịnh)")) {
    note = "GV Chuyên GDTC: Thầy Thịnh";
  } else if (clean.includes("(Nương)")) {
    note = "GV Chuyên TA: Cô Nương";
  } else if (clean.includes("(Phương)")) {
    note = "GV Chuyên TH: Cô D.Phương";
  } else if (clean.includes("(Thy)")) {
    note = "GV Chuyên MT: Cô Thy";
  } else if (clean.includes("(Tâm)")) {
    note = "GV Chuyên AN: Cô Tâm";
  } else if (clean.includes("(Phước)")) {
    note = "GV Bộ môn: Thầy Phước";
  } else if (clean.includes("(Nhàn)")) {
    note = "GV Bộ môn: Cô Nhàn";
  } else if (clean.includes("(Quan)")) {
    note = "PHT: Phan Ngọc Quan";
  }

  // 1b. AN TOÀN GIAO THÔNG (ATGT) - LỚP 5
  if (
    clean === "ATGT" ||
    clean.startsWith("ATGT") ||
    clean.toUpperCase().includes("ATGT") ||
    clean.toLowerCase().includes("an toàn giao thông")
  ) {
    subject = "AN TOÀN GIAO THÔNG";
    subSubject = "Giáo dục An toàn giao thông";
    if (!note) note = "Tiết học 15 phút kết hợp SHL";
    const atgtInfo = getATGTGrade5LessonInfo(week);
    lessonTitle = atgtInfo.lessonTitle;
    curriculumPeriod = atgtInfo.curriculumPeriod;
    integrationNotes = "Giáo dục văn hóa giao thông, kĩ năng an toàn khi đi đường & điều khiển xe";
  }

  // 2. TIẾNG ANH (TA)
  else if ((clean.includes("TA") || clean.includes("Anh văn") || clean.includes("Tiếng Anh")) && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `TIẾNG ANH ${gradeNum}`;
    if (!note) note = "GV Chuyên: Cô Nương";
    const pInW = subjectPeriodInWeek || ((period % 4) + 1);
    const pYear = (week - 1) * 4 + ((pInW - 1) % 4) + 1;
    const englishDetail = getDetailedEnglishLesson(gradeNum, week, undefined, pInW, pYear);
    lessonTitle = englishDetail.lessonTitle;
    curriculumPeriod = pYear;
    integrationNotes = englishDetail.integrationNotes;
  }

  // 3. TIN HỌC (TH)
  else if ((clean.includes("TH") || clean.includes("T.học") || clean.includes("Tin học")) && !clean.includes("CN") && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `TIN HỌC ${gradeNum}`;
    if (!note) note = "GV Chuyên TH: Cô D.Phương";
    const pInW = subjectPeriodInWeek || ((period % 2) + 1);
    const info = getGradeCurriculumLesson(gradeNum, "Tin học", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp NLS (CV 3456/BGDĐT-GDTH)";
  }

  // 4. CÔNG NGHỆ (CN)
  else if (clean === "CN" || clean.startsWith("CN ") || clean.includes("Công nghệ") || clean.includes("CN (Nhàn)")) {
    subject = `CÔNG NGHỆ ${gradeNum}`;
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "công nghệ", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp STEM sáng tạo & Kĩ năng ứng dụng";
  }

  // 5. ÂM NHẠC (AN / BDAN)
  else if ((clean.includes("AN") || clean.includes("Âm nhạc") || clean.includes("BDAN")) && !clean.includes("HĐTN") && !clean.includes("HDTN") && !clean.includes("Quan")) {
    subject = `ÂM NHẠC ${gradeNum}`;
    const isEnhance = clean.includes("BDAN") || clean.includes("Bồi dưỡng") || session === "Chiều";
    subSubject = isEnhance ? "Bồi dưỡng Âm nhạc" : "Âm nhạc";
    if (!note) note = "GV Chuyên AN: Cô Nguyễn Thị Thanh Tâm";
    const musicDetail = getDetailedMusicLesson(gradeNum, week, isEnhance, session as any);
    lessonTitle = musicDetail.lessonTitle;
    curriculumPeriod = isEnhance ? `BD${week}` : week;
    integrationNotes = musicDetail.integrationNotes;
  }

  // 6. MĨ THUẬT (MT / BDMT)
  else if ((clean.includes("MT") || clean.includes("Mĩ thuật") || clean.includes("BDMT")) && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `MĨ THUẬT ${gradeNum}`;
    const isEnhance = clean.includes("BDMT") || clean.includes("Bồi dưỡng");
    subSubject = isEnhance ? "Bồi dưỡng Mĩ thuật" : "Mĩ thuật";
    if (!note) note = "GV Chuyên MT: Cô Thy";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "Mĩ thuật", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp STEM sáng tạo & QCN";
  }

  // 7. GIÁO DỤC THỂ CHẤT / THỂ DỤC (GDTC, TD)
  else if (
    (clean.includes("GDTC") || clean.toLowerCase().includes("thể chất") || clean.toLowerCase().includes("thể dục") || clean === "TD" || clean.startsWith("TD") || clean.includes("TD (") || clean.includes("TD(")) &&
    !clean.includes("HĐTN") && !clean.includes("HDTN")
  ) {
    subject = `GIÁO DỤC THỂ CHẤT ${gradeNum}`;
    subSubject = gradeNum === 5 ? "Thể dục" : "Giáo dục thể chất";
    if (!note) note = "GV Thể dục";
    const pInW = subjectPeriodInWeek || ((period % 2) + 1);
    const info = getGradeCurriculumLesson(gradeNum, "Giáo dục thể chất", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp rèn luyện thể lực & tác phong nhanh nhẹn";
  }

  // 8. HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN)
  // 8a. Chào cờ / Sinh hoạt dưới cờ
  else if (
    clean.includes("HĐTN (CC)") ||
    clean.includes("HDTN (CC)") ||
    clean === "CC" ||
    clean.toLowerCase().includes("chào cờ") ||
    clean.toLowerCase().includes("sinh hoạt dưới cờ") ||
    clean.toUpperCase().includes("SHDC") ||
    ((clean.includes("HĐTN") || clean.includes("HDTN")) && day === "Thứ Hai" && period === 1)
  ) {
    subject = "HĐTN";
    subSubject = "Sinh hoạt dưới cờ";
    if (!note) note = "Chào cờ đầu tuần";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 1);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp QCN, KNS, Giáo dục truyền thống";
  } 
  // 8b. Sinh hoạt lớp
  else if (
    clean.includes("HĐTN (SHL)") ||
    clean.includes("HDTN (SHL)") ||
    clean === "SHL" ||
    clean.toLowerCase().includes("sinh hoạt lớp") ||
    ((clean.includes("HĐTN") || clean.includes("HDTN")) && day === "Thứ Sáu" && (period === 4 || period === 5 || period === 2 || period === 3))
  ) {
    subject = "HĐTN";
    subSubject = "Sinh hoạt lớp";
    note = "Sinh hoạt cuối tuần";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 3);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp KNS, Tự đánh giá & Kế hoạch tuần tới";
  } 
  // 8c. Hoạt động giáo dục theo chủ đề
  else if (clean.includes("HĐTN") || clean.includes("HDTN") || clean.toLowerCase().includes("trải nghiệm")) {
    subject = "HĐTN";
    subSubject = "Hoạt động giáo dục theo chủ đề";
    if (!note && clean.includes("Thy")) note = "GV Chuyên MT: Cô Thy";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 2);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp KNS & QCN";
  }

  // 9. KĨ NĂNG SỐNG (KNS)
  else if (clean.toUpperCase().includes("KNS") || clean.toLowerCase().includes("kĩ năng sống") || clean.toLowerCase().includes("kỹ năng sống")) {
    subject = `KĨ NĂNG SỐNG ${gradeNum}`;
    subSubject = "Kĩ năng sống";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Giáo dục Kĩ năng sống tuần ${week}: Kĩ năng tự phục vụ và giao tiếp văn minh`;
    curriculumPeriod = `KNS${pInW}`;
    integrationNotes = "Tích hợp rèn thói quen tự lập, tôn trọng và hợp tác";
  }

  // 10. LỊCH SỬ VÀ ĐỊA LÍ (LS-ĐL, LS, ĐL)
  else if (
    clean.includes("LS-ĐL") ||
    clean.includes("LS&ĐL") ||
    clean === "LS" ||
    clean === "ĐL" ||
    clean.toLowerCase().includes("lịch sử") ||
    clean.toLowerCase().includes("địa lí") ||
    clean.toLowerCase().includes("địa lý")
  ) {
    subject = `LỊCH SỬ VÀ ĐỊA LÍ ${gradeNum}`;
    subSubject = clean.includes("ĐL") && !clean.includes("LS") ? "Địa lí" : (clean.includes("LS") && !clean.includes("ĐL") ? "Lịch sử" : "Lịch sử và Địa lí");
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "lịch sử và địa lí", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Giáo dục lòng yêu nước, bảo vệ chủ quyền biên giới & biển đảo";
  }

  // 11. TỰ NHIÊN VÀ XÃ HỘI (TNXH)
  else if (
    clean.toUpperCase().includes("TNXH") ||
    clean.toUpperCase().includes("TN&XH") ||
    clean.toLowerCase().includes("tự nhiên và xã hội") ||
    clean.toLowerCase().includes("tự nhiên & xã hội") ||
    clean.toLowerCase().includes("tu nhien va xa hoi")
  ) {
    subject = `TỰ NHIÊN VÀ XÃ HỘI ${gradeNum}`;
    if (!note) note = clean.includes("Phước") ? "GV Bộ môn: Thầy Phước" : "";
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "tự nhiên và xã hội", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp giáo dục môi trường & chăm sóc sức khỏe";
  }

  // 12. KHOA HỌC (KH)
  else if (clean === "KH" || clean.toLowerCase().includes("khoa học") || clean.toLowerCase().includes("khoa hoc")) {
    subject = `KHOA HỌC ${gradeNum}`;
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "khoa học", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp tư duy khoa học thực nghiệm & STEM";
  }

  // 13. ĐẠO ĐỨC (ĐĐ)
  else if (clean.includes("ĐĐ") || clean.toLowerCase().includes("đạo đức") || clean.toLowerCase().includes("dao duc")) {
    subject = `ĐẠO ĐỨC ${gradeNum}`;
    if (!note && clean.includes("Quan")) note = "PHT: Phan Ngọc Quan";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "đạo đức", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Giáo dục đạo đức & Quyền con người";
  }

  // 14. GIÁO DỤC ĐỊA PHƯƠNG (GDĐP)
  else if (clean.toUpperCase().includes("GDĐP") || clean.toLowerCase().includes("địa phương")) {
    subject = `GIÁO DỤC ĐỊA PHƯƠNG ${gradeNum}`;
    subSubject = "Tài liệu giáo dục địa phương";
    lessonTitle = `Tài liệu Giáo dục địa phương tuần ${week}`;
    curriculumPeriod = `GDĐP${week}`;
    integrationNotes = "Giáo dục truyền thống văn hóa quê hương";
  }

  // 14b. AN TOÀN GIAO THÔNG (ATGT)
  else if (
    clean === "ATGT" ||
    clean.startsWith("ATGT") ||
    clean.includes("ATGT") ||
    clean.toLowerCase().includes("an toàn giao thông") ||
    clean.toLowerCase().includes("atgt") ||
    clean.toLowerCase().includes("giao thông")
  ) {
    subject = `AN TOÀN GIAO THÔNG`;
    subSubject = "An toàn giao thông";
    if (gradeNum === 5) {
      const atgtInfo = getATGTGrade5LessonInfo(week);
      lessonTitle = atgtInfo.lessonTitle;
      curriculumPeriod = atgtInfo.curriculumPeriod;
      integrationNotes = "Giáo dục Luật Giao thông đường bộ, văn hóa giao thông & KNS";
    } else {
      lessonTitle = `Giáo dục An toàn giao thông tuần ${week}`;
      curriculumPeriod = week;
      integrationNotes = "Giáo dục an toàn giao thông";
    }
  }

  // 15. TĂNG CƯỜNG / BỒI DƯỠNG TIẾNG VIỆT (BDTV, TCTV, Luyện TV)
  else if (
    clean === "BDTV" ||
    clean.startsWith("BDTV") ||
    clean.includes("BDTV") ||
    clean === "TCTV" ||
    clean.includes("TCTV") ||
    clean.includes("T. cường TV") ||
    clean.includes("T.cường TV") ||
    clean.toLowerCase().includes("bồi dưỡng tiếng việt") ||
    clean.toLowerCase().includes("bồi dưỡng tv") ||
    clean.toLowerCase().includes("luyện tiếng việt") ||
    clean.toLowerCase().includes("luyện tv") ||
    clean.toLowerCase().includes("tăng cường tiếng việt")
  ) {
    subject = `TIẾNG VIỆT ${gradeNum}`;
    subSubject = clean.includes("BDTV") ? "Bồi dưỡng Tiếng Việt" : "Tăng cường Tiếng Việt";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Bồi dưỡng rèn luyện Tiếng Việt tuần ${week}: Củng cố đọc, viết và diễn đạt`;
    curriculumPeriod = `BDTV${pInW}`;
    integrationNotes = "Rèn luyện kĩ năng đọc, viết và diễn đạt lưu loát";
  }

  // 16. TĂNG CƯỜNG / BỒI DƯỠNG TOÁN (BDT, TCT, Luyện Toán)
  else if (
    clean === "BDT" ||
    clean.startsWith("BDT") ||
    (clean.includes("BDT") && !clean.includes("BDTV")) ||
    clean === "TCT" ||
    clean.includes("TCT") ||
    clean.includes("T. cường T") ||
    clean.includes("T.cường T") ||
    clean.toLowerCase().includes("bồi dưỡng toán") ||
    clean.toLowerCase().includes("luyện toán") ||
    clean.toLowerCase().includes("luyện t") ||
    clean.toLowerCase().includes("tăng cường toán")
  ) {
    subject = `TOÁN ${gradeNum}`;
    subSubject = clean.includes("BDT") ? "Bồi dưỡng Toán" : "Tăng cường Toán";
    if (!note && clean.includes("Phước")) note = "GV Bộ môn: Thầy Phước";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    lessonTitle = `Bồi dưỡng rèn luyện kĩ năng Toán tuần ${week}: Củng cố tính toán và giải toán`;
    curriculumPeriod = `BDT${pInW}`;
    integrationNotes = "Củng cố kĩ năng tính toán và giải toán có lời văn";
  }

  // 17. TIẾNG VIỆT CHÍNH KHÓA (TV)
  else if (
    clean === "TV" ||
    clean.startsWith("TV ") ||
    clean === "Tiếng Việt" ||
    clean.toLowerCase().includes("tiếng việt") ||
    clean.toLowerCase().includes("tieng viet")
  ) {
    subject = `TIẾNG VIỆT ${gradeNum}`;
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "tiếng việt", week, Math.min(pInW, 12));
    lessonTitle = info.lessonTitle;
    subSubject = info.subSubject || "";
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "";
  }

  // 18. TOÁN CHÍNH KHÓA (T)
  else if (
    clean === "T" ||
    clean.startsWith("T ") ||
    clean === "Toán" ||
    clean.toLowerCase().includes("toán") ||
    clean.toLowerCase().includes("toan")
  ) {
    subject = `TOÁN ${gradeNum}`;
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "toán", week, Math.min(pInW, 5));
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "";
  }

  // 19. HỌP TOÀN TRƯỜNG / HỘI ĐỒNG SƯ PHẠM
  else if (clean.toUpperCase() === "HỌP" || clean.toUpperCase().includes("HỌP")) {
    subject = "HỌP";
    subSubject = "Hội đồng sư phạm";
    lessonTitle = "Họp hội đồng sư phạm / Sinh hoạt chuyên môn";
    curriculumPeriod = "";
    if (!note) note = "Họp toàn trường";
    integrationNotes = "";
  }

  // 20. TỰ CHỌN HOẶC MÔN HỌC KHÁC
  else {
    subject = clean.toUpperCase();
    subSubject = "";
    lessonTitle = clean;
    curriculumPeriod = period;
    integrationNotes = "Thực hiện theo kế hoạch nhà trường";
  }

  return {
    id: `item-${day}-${session}-${period}-${className}-${Math.random().toString(36).substring(2, 7)}`,
    day,
    dateStr,
    session,
    period,
    subject,
    subSubject,
    curriculumPeriod,
    lessonTitle: cleanLessonTitle(lessonTitle),
    integrationNotes,
    note,
    teacherName,
    className,
  };
}
