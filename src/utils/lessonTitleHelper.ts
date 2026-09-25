/**
 * Utility to clean lesson titles for Lesson Plans (KHBD), Schedule View (LBG), and Word Export:
 * - Bỏ không cần ghi lớp mấy (loại bỏ "Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5", "Khối 1-5"...)
 * - Bỏ từ "bài học" của mỗi tiết (loại bỏ tiền tố "Bài học: ", "BÀI HỌC: ", cụm "Bài học")
 */
export function cleanLessonTitle(title: string | undefined | null): string {
  if (!title) return "";
  let res = title;

  // 1. Loại bỏ tiền tố hoặc cụm từ "Bài học:", "BÀI HỌC:", "Bài học -" hoặc "Bài học "
  res = res.replace(/^bài\s+học\s*[:–-]?\s*/i, "");
  res = res.replace(/\bbài\s+học\s*[:–-]?\s*/gi, "");
  res = res.replace(/\bbài\s+học\b/gi, "");

  // 2. Loại bỏ thông tin khối lớp (Lớp 1, Lớp 2, Lớp 3, Lớp 4, Lớp 5, Khối 1-5, Lớp 1A... Lớp 5E)
  res = res.replace(/\s*[-–:]\s*lớp\s*[1-5][A-Za-z]?\s*[-–:]\s*/gi, " - ");
  res = res.replace(/\s*[-–:]\s*lớp\s*[1-5][A-Za-z]?\b/gi, "");
  res = res.replace(/\blớp\s*[1-5][A-Za-z]?\s*[-–:]\s*/gi, "");
  res = res.replace(/\blớp\s*[1-5][A-Za-z]?\b/gi, "");

  res = res.replace(/\s*[-–:]\s*khối\s*[1-5]\s*[-–:]\s*/gi, " - ");
  res = res.replace(/\s*[-–:]\s*khối\s*[1-5]\b/gi, "");
  res = res.replace(/\bkhối\s*[1-5]\s*[-–:]\s*/gi, "");
  res = res.replace(/\bkhối\s*[1-5]\b/gi, "");

  // 3. Chuẩn hóa dấu phân cách và khoảng trắng thừa
  res = res.replace(/\s*-\s*-\s*/g, " - ");
  res = res.replace(/\s*:\s*:\s*/g, ": ");
  res = res.replace(/\s{2,}/g, " ").trim();
  res = res.replace(/^[-–:,\s]+/, "").replace(/[-–:,\s]+$/, "").trim();

  return res;
}
