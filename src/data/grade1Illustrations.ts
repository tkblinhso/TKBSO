import { LessonIllustration } from "../types";

/**
 * GENERATOR TRANH MINH HỌA SGK LỚP 1 (BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Cung cấp tranh minh họa trực quan, sắc nét, chuẩn trang sách giáo khoa Toán 1 và Tiếng Việt 1.
 */

// Helper to sanitize lesson title
function cleanLessonTitle(title: string): string {
  return title
    .replace(/^tiết\s+\d+[:\s-]*/i, "")
    .replace(/^bài\s+\d+[:\s-]*/i, "")
    .replace(/\(tiết\s+\d+\)/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Creates an SVG string with textbook-styled visual artwork
 */
function createTextbookSvg(params: {
  bookTitle: string; // e.g. "SGK TIẾNG VIỆT 1 - KẾT NỐI TRI THỨC"
  lessonBanner: string; // e.g. "BÀI 6: O O, DẤU HỎI"
  mainTitle: string; // e.g. "CON BÊ ĂN CỎ"
  pageStr: string; // e.g. "Trang 24"
  bgColorTop: string;
  bgColorBottom: string;
  accentColor: string;
  drawGraphic: string; // SVG inner elements
}): string {
  const { bookTitle, lessonBanner, mainTitle, pageStr, bgColorTop, bgColorBottom, accentColor, drawGraphic } = params;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="600" height="380" style="background:#ffffff; border-radius:12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <defs>
    <linearGradient id="bgGrad_${accentColor.replace('#', '')}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${bgColorTop}" />
      <stop offset="100%" stop-color="${bgColorBottom}" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.1" />
    </filter>
  </defs>

  <!-- Card Border & Background -->
  <rect x="8" y="8" width="584" height="364" rx="16" fill="url(#bgGrad_${accentColor.replace('#', '')})" stroke="#CBD5E1" stroke-width="2" filter="url(#shadow)"/>

  <!-- Top Header Ribbon -->
  <path d="M 8 24 Q 8 8 24 8 L 576 8 Q 592 8 592 24 L 592 56 L 8 56 Z" fill="${accentColor}" />
  <text x="30" y="36" fill="#FFFFFF" font-size="12" font-weight="700" letter-spacing="1">BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG</text>
  <rect x="470" y="18" width="105" height="26" rx="13" fill="#FFFFFF" fill-opacity="0.25"/>
  <text x="522" y="35" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">${pageStr}</text>

  <!-- Lesson Banner -->
  <rect x="30" y="70" width="540" height="36" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  <circle cx="50" cy="88" r="8" fill="${accentColor}"/>
  <text x="70" y="93" fill="#1E293B" font-size="14" font-weight="bold">${lessonBanner}</text>
  <text x="550" y="93" fill="#64748B" font-size="12" font-weight="600" text-anchor="end">${bookTitle}</text>

  <!-- Main Illustration Canvas Area -->
  <g transform="translate(30, 118)">
    <rect x="0" y="0" width="540" height="205" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    
    <!-- Graphic Elements -->
    ${drawGraphic}

    <!-- Main Title Tag inside canvas if provided -->
    ${mainTitle ? `
    <rect x="15" y="12" width="230" height="32" rx="6" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="130" y="33" fill="#92400E" font-size="14" font-weight="900" text-anchor="middle" letter-spacing="0.5">${mainTitle}</text>
    ` : ""}
  </g>

  <!-- Bottom Brand Watermark -->
  <text x="300" y="352" fill="#94A3B8" font-size="11" font-style="italic" text-anchor="middle">Sách Giáo Khoa Lớp 1 - Nhà xuất bản Giáo dục Việt Nam</text>
</svg>`;
}

function makeIllus(
  id: string,
  caption: string,
  svg: string,
  pageNumber: number | string,
  title: string,
  subject: "tieng-viet" | "toan"
): LessonIllustration {
  return {
    id,
    caption,
    imageUrl: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
    svgData: svg,
    svg: svg,
    altText: caption,
    pageNumber,
    title,
    subject,
  };
}

function parseLessonInfo(title: string) {
  const t = title.toLowerCase().trim();
  const m = t.match(/bài\s+(\d+)/i);
  const lessonNum = m ? parseInt(m[1], 10) : undefined;
  const isReview = t.includes("ôn tập") || t.includes("kể chuyện") || t.includes("luyện tập chung");
  const isIntro = t.includes("tiết học đầu tiên") || t.includes("làm quen") || t.includes("nền nếp") || t.includes("tư thế");
  return { lessonNum, isReview, isIntro, t };
}

/**
 * Library of tailored textbook illustrations for Grade 1
 */
export function getGrade1IllustrationsForLesson(
  subject: string,
  lessonTitle: string,
  periodNum: number | string
): LessonIllustration[] {
  const subLower = subject.toLowerCase().trim();
  const { lessonNum, isReview, isIntro, t } = parseLessonInfo(lessonTitle);
  const illustrations: LessonIllustration[] = [];

  // =========================================================================
  // 1. TIẾNG VIỆT 1 (KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
  // =========================================================================
  if (subLower.includes("tiếng việt") || subLower === "tv") {
    // Bài 1: A a (Trang 14-15)
    if (lessonNum === 1 || (!lessonNum && (t.includes("a a") || t.includes("âm a")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 14",
        lessonBanner: "BÀI 1: A A (TIẾT 1 & 2)",
        mainTitle: "NAM VÀ HÀ CA HÁT",
        pageStr: "SGK Trang 14",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#ECFDF5",
        accentColor: "#2563EB",
        drawGraphic: `
          <rect x="30" y="50" width="480" height="135" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <circle cx="160" cy="110" r="30" fill="#FED7AA"/>
          <text x="160" y="115" fill="#9A3412" font-size="13" font-weight="bold" text-anchor="middle">Nam</text>
          <circle cx="260" cy="110" r="30" fill="#FCE7F3"/>
          <text x="260" y="115" fill="#9D174D" font-size="13" font-weight="bold" text-anchor="middle">Hà</text>
          <rect x="185" y="90" width="6" height="30" rx="3" fill="#475569"/>
          <rect x="285" y="90" width="6" height="30" rx="3" fill="#475569"/>
          <circle cx="430" cy="110" r="42" fill="#3B82F6"/>
          <text x="430" y="125" fill="#FFFFFF" font-size="48" font-weight="900" text-anchor="middle">A a</text>
          <text x="210" y="170" fill="#1E3A8A" font-size="16" font-weight="bold">"Nam và Hà ca hát."</text>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 15",
        lessonBanner: "BÀI 1: LUYỆN NÓI - CHÀO HỎI",
        mainTitle: "CHÀO HỎI LỄ PHÉP",
        pageStr: "SGK Trang 15",
        bgColorTop: "#F5F3FF",
        bgColorBottom: "#EFF6FF",
        accentColor: "#7C3AED",
        drawGraphic: `
          <rect x="40" y="30" width="210" height="140" rx="8" fill="#F8FAFC" stroke="#C4B5FD" stroke-width="1.5"/>
          <text x="145" y="55" fill="#6D28D9" font-size="13" font-weight="bold" text-anchor="middle">Tại cổng trường</text>
          <text x="145" y="95" fill="#1E293B" font-size="12" text-anchor="middle">Bé vẫy tay chào bố</text>
          <rect x="60" y="120" width="170" height="28" rx="14" fill="#7C3AED"/>
          <text x="145" y="139" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">"Con chào bố ạ!"</text>
          <rect x="290" y="30" width="210" height="140" rx="8" fill="#F8FAFC" stroke="#C4B5FD" stroke-width="1.5"/>
          <text x="395" y="55" fill="#6D28D9" font-size="13" font-weight="bold" text-anchor="middle">Trước cửa lớp 1A</text>
          <text x="395" y="95" fill="#1E293B" font-size="12" text-anchor="middle">Bé khoanh tay chào cô</text>
          <rect x="310" y="120" width="170" height="28" rx="14" fill="#2563EB"/>
          <text x="395" y="139" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">"Em chào cô ạ!"</text>
        `
      });
      illustrations.push(makeIllus("tv1-b1-il1", "Hình ảnh 1: Tranh nhận biết 'Nam và Hà ca hát' - SGK Tiếng Việt 1 trang 14", svg1, 14, "Tranh nhận biết Âm A a", "tieng-viet"));
      illustrations.push(makeIllus("tv1-b1-il2", "Hình ảnh 2: Tranh luyện nói 'Chào hỏi lễ phép' - SGK Tiếng Việt 1 trang 15", svg2, 15, "Luyện nói Chào hỏi", "tieng-viet"));
      return illustrations;
    }

    // Bài 2: B b, Dấu huyền (Trang 16-17)
    if (lessonNum === 2 || (!lessonNum && (t.includes("b b") || t.includes("âm b")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 16",
        lessonBanner: "BÀI 2: B B - DẤU HUYỀN (TIẾT 1 & 2)",
        mainTitle: "BÀ CHO BÉ BÚP BÊ",
        pageStr: "SGK Trang 16",
        bgColorTop: "#FDF2F8",
        bgColorBottom: "#EFF6FF",
        accentColor: "#DB2777",
        drawGraphic: `
          <circle cx="150" cy="100" r="32" fill="#FEF08A"/>
          <text x="150" y="105" fill="#854D0E" font-size="14" font-weight="bold" text-anchor="middle">Bà</text>
          <circle cx="280" cy="110" r="26" fill="#FED7AA"/>
          <text x="280" y="115" fill="#9A3412" font-size="13" font-weight="bold" text-anchor="middle">Bé</text>
          <rect x="200" y="90" width="30" height="40" rx="8" fill="#F472B6"/>
          <text x="215" y="115" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">Búp bê</text>
          <circle cx="430" cy="105" r="42" fill="#EC4899"/>
          <text x="430" y="120" fill="#FFFFFF" font-size="48" font-weight="900" text-anchor="middle">B b</text>
          <text x="100" y="170" fill="#831843" font-size="16" font-weight="bold">Từ ngữ: ba, bà, ba ba | Câu: "A, bà."</text>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 17",
        lessonBanner: "BÀI 2: ĐỌC CÂU ỨNG DỤNG",
        mainTitle: "A, BÀ.",
        pageStr: "SGK Trang 17",
        bgColorTop: "#FFF1F2",
        bgColorBottom: "#F0FDF4",
        accentColor: "#E11D48",
        drawGraphic: `
          <rect x="40" y="40" width="220" height="130" rx="8" fill="#FFFFFF" stroke="#FDA4AF" stroke-width="2"/>
          <text x="150" y="70" fill="#9F1239" font-size="13" font-weight="bold" text-anchor="middle">Bà đi chợ về</text>
          <text x="150" y="105" fill="#475569" font-size="12" text-anchor="middle">Bà xách làn rau quả</text>
          <text x="150" y="130" fill="#475569" font-size="12" text-anchor="middle">Bé gái ùa ra đón mừng</text>
          <g transform="translate(290, 40)">
            <rect width="210" height="130" rx="10" fill="#FEFCE8" stroke="#EAB308" stroke-width="2"/>
            <text x="105" y="45" fill="#A16207" font-size="14" font-weight="bold" text-anchor="middle">Câu ứng dụng SGK:</text>
            <text x="105" y="90" fill="#BE123C" font-size="32" font-weight="900" text-anchor="middle">A, bà.</text>
          </g>
        `
      });
      illustrations.push(makeIllus("tv1-b2-il1", "Hình ảnh 1: Tranh nhận biết 'Bà cho bé búp bê' - SGK Tiếng Việt 1 trang 16", svg1, 16, "Tranh nhận biết Âm B b", "tieng-viet"));
      illustrations.push(makeIllus("tv1-b2-il2", "Hình ảnh 2: Tranh câu ứng dụng 'A, bà.' - SGK Tiếng Việt 1 trang 17", svg2, 17, "Câu ứng dụng A, bà.", "tieng-viet"));
      return illustrations;
    }

    // Bài 3: C c, Dấu sắc (Trang 18-19)
    if (lessonNum === 3 || (!lessonNum && (t.includes("c c") || t.includes("âm c")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 18",
        lessonBanner: "BÀI 3: C C - DẤU SẮC (TIẾT 1 & 2)",
        mainTitle: "NAM VÀ BỐ CÂU CÁ",
        pageStr: "SGK Trang 18",
        bgColorTop: "#E0F2FE",
        bgColorBottom: "#ECFDF5",
        accentColor: "#0284C7",
        drawGraphic: `
          <path d="M 0 100 Q 250 80 540 100 L 540 205 L 0 205 Z" fill="#7DD3FC"/>
          <ellipse cx="140" cy="115" rx="35" ry="22" fill="#FEF3C7"/>
          <text x="140" y="120" fill="#B45309" font-size="14" font-weight="bold" text-anchor="middle">Bố và Nam</text>
          <line x1="170" y1="105" x2="280" y2="135" stroke="#1E293B" stroke-width="2"/>
          <ellipse cx="295" cy="138" rx="18" ry="10" fill="#F97316"/>
          <text x="295" y="142" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Cá</text>
          <circle cx="430" cy="105" r="42" fill="#0284C7"/>
          <text x="430" y="120" fill="#FFFFFF" font-size="48" font-weight="900" text-anchor="middle">C c</text>
          <text x="80" y="180" fill="#0369A1" font-size="16" font-weight="bold">Từ ngữ: ca, cà, cá | Câu: "A, cá."</text>
        `
      });
      illustrations.push(makeIllus("tv1-b3-il1", "Hình ảnh 1: Tranh nhận biết 'Nam và bố câu cá' - SGK Tiếng Việt 1 trang 18", svg1, 18, "Tranh nhận biết Âm C c", "tieng-viet"));
      return illustrations;
    }

    // Bài 4: E e, Ê ê (Trang 20-21)
    if (lessonNum === 4 || (!lessonNum && (t.includes("e e") || t.includes("ê ê")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 20",
        lessonBanner: "BÀI 4: E E, Ê Ê (TIẾT 1 & 2)",
        mainTitle: "BÉ KỂ MẸ NGHE VỀ BẠN BÈ",
        pageStr: "SGK Trang 20",
        bgColorTop: "#FEF2F2",
        bgColorBottom: "#FFFBEB",
        accentColor: "#DC2626",
        drawGraphic: `
          <circle cx="160" cy="100" r="32" fill="#FED7AA"/>
          <text x="160" y="105" fill="#9A3412" font-size="14" font-weight="bold" text-anchor="middle">Mẹ</text>
          <circle cx="270" cy="110" r="24" fill="#FCE7F3"/>
          <text x="270" y="115" fill="#9D174D" font-size="13" font-weight="bold" text-anchor="middle">Bé</text>
          <circle cx="430" cy="105" r="42" fill="#EF4444"/>
          <text x="430" y="120" fill="#FFFFFF" font-size="44" font-weight="900" text-anchor="middle">E - Ê</text>
          <text x="60" y="175" fill="#991B1B" font-size="16" font-weight="bold">Từ ngữ: bè, bé, bế | Câu: "Bà bế bé."</text>
        `
      });
      illustrations.push(makeIllus("tv1-b4-il1", "Hình ảnh 1: Tranh nhận biết 'Bé kể mẹ nghe về bạn bè' - SGK Tiếng Việt 1 trang 20", svg1, 20, "Tranh nhận biết E e, Ê ê", "tieng-viet"));
      return illustrations;
    }

    // Bài 5: Ôn tập và kể chuyện (Tuần 1 - Trang 22-23)
    if ((isReview && (lessonNum === 5 || t.includes("tuần 1") || t.includes("dế mèn"))) || lessonNum === 5) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 22",
        lessonBanner: "BÀI 5: ÔN TẬP VÀ KỂ CHUYỆN (TIẾT 1 & 2)",
        mainTitle: "ĐOÀN TÀU CHỮ CÁI",
        pageStr: "SGK Trang 22",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#FEF3C7",
        accentColor: "#4F46E5",
        drawGraphic: `
          <rect x="40" y="80" width="80" height="60" rx="8" fill="#EF4444"/>
          <text x="80" y="115" fill="#FFFFFF" font-size="18" font-weight="900" text-anchor="middle">TÀU</text>
          <rect x="130" y="90" width="60" height="50" rx="6" fill="#3B82F6"/>
          <text x="160" y="122" fill="#FFFFFF" font-size="24" font-weight="bold" text-anchor="middle">a</text>
          <rect x="200" y="90" width="60" height="50" rx="6" fill="#10B981"/>
          <text x="230" y="122" fill="#FFFFFF" font-size="24" font-weight="bold" text-anchor="middle">b</text>
          <rect x="270" y="90" width="60" height="50" rx="6" fill="#F59E0B"/>
          <text x="300" y="122" fill="#FFFFFF" font-size="24" font-weight="bold" text-anchor="middle">c</text>
          <rect x="340" y="90" width="60" height="50" rx="6" fill="#8B5CF6"/>
          <text x="370" y="122" fill="#FFFFFF" font-size="24" font-weight="bold" text-anchor="middle">e</text>
          <rect x="410" y="90" width="60" height="50" rx="6" fill="#EC4899"/>
          <text x="440" y="122" fill="#FFFFFF" font-size="24" font-weight="bold" text-anchor="middle">ê</text>
          <text x="270" y="170" fill="#1E293B" font-size="15" font-weight="bold" text-anchor="middle">Từ ghép ôn tập: ba, bè, be, bé, cá bé, bè cá, bế bé</text>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 23",
        lessonBanner: "KỂ CHUYỆN THEO TRANH",
        mainTitle: "BÚP BÊ VÀ DẾ MÈN",
        pageStr: "SGK Trang 23",
        bgColorTop: "#FEF3C7",
        bgColorBottom: "#ECFDF5",
        accentColor: "#059669",
        drawGraphic: `
          <rect x="30" y="20" width="220" height="80" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="140" y="45" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">Tranh 1: Búp bê quét nhà</text>
          <rect x="280" y="20" width="220" height="80" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="390" y="45" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">Tranh 2: Dế mèn hát tặng</text>
          <rect x="30" y="110" width="220" height="80" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="140" y="135" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">Tranh 3: Búp bê vui cười</text>
          <rect x="280" y="110" width="220" height="80" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="390" y="135" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">Tranh 4: Bạn bè thân thiết</text>
        `
      });
      illustrations.push(makeIllus("tv1-b5-il1", "Hình ảnh 1: Bảng ôn đoàn tàu chữ cái - SGK Tiếng Việt 1 trang 22", svg1, 22, "Bảng ôn chữ cái Tuần 1", "tieng-viet"));
      illustrations.push(makeIllus("tv1-b5-il2", "Hình ảnh 2: Kể chuyện 'Búp bê và dế mèn' - SGK Tiếng Việt 1 trang 23", svg2, 23, "Kể chuyện Búp bê và dế mèn", "tieng-viet"));
      return illustrations;
    }

    // Bài 6: O o, Dấu hỏi (Trang 24-25)
    if (lessonNum === 6 || (!lessonNum && (t.includes("o o") || t.includes("âm o")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 24",
        lessonBanner: "BÀI 6: O O, DẤU HỎI (TIẾT 1 & 2)",
        mainTitle: "ĐÀN BÒ GẶM CỎ",
        pageStr: "SGK Trang 24",
        bgColorTop: "#FEF9C3",
        bgColorBottom: "#ECFDF5",
        accentColor: "#D97706",
        drawGraphic: `
          <path d="M 0 120 Q 200 80 540 110 L 540 205 L 0 205 Z" fill="#BBF7D0"/>
          <circle cx="480" cy="50" r="28" fill="#FDE047" opacity="0.9"/>
          <ellipse cx="320" cy="140" rx="65" ry="42" fill="#CA8A04"/>
          <ellipse cx="250" cy="115" rx="30" ry="24" fill="#B45309"/>
          <ellipse cx="180" cy="160" rx="35" ry="24" fill="#EA580C"/>
          <ellipse cx="145" cy="145" rx="18" ry="15" fill="#C2410C"/>
          <circle cx="470" cy="130" r="36" fill="#F97316" stroke="#C2410C" stroke-width="4"/>
          <text x="470" y="145" fill="#FFFFFF" font-size="44" font-weight="900" text-anchor="middle">O o</text>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 25",
        lessonBanner: "MỤC 4: ĐỌC CÂU ỨNG DỤNG",
        mainTitle: "BÊ CÓ CỎ.",
        pageStr: "SGK Trang 25",
        bgColorTop: "#FEF3C7",
        bgColorBottom: "#F0FDF4",
        accentColor: "#059669",
        drawGraphic: `
          <rect x="40" y="70" width="280" height="110" rx="6" fill="#FEF9C3" stroke="#B45309" stroke-width="2"/>
          <line x1="40" y1="105" x2="320" y2="105" stroke="#78350F" stroke-width="5"/>
          <ellipse cx="180" cy="95" rx="35" ry="28" fill="#D97706"/>
          <g transform="translate(340, 40)">
            <rect width="170" height="130" rx="10" fill="#FFFFFF" stroke="#059669" stroke-width="2.5"/>
            <text x="85" y="40" fill="#047857" font-size="13" font-weight="bold" text-anchor="middle">Câu ứng dụng SGK:</text>
            <rect x="15" y="55" width="140" height="60" rx="8" fill="#ECFDF5"/>
            <text x="85" y="95" fill="#065F46" font-size="24" font-weight="900" text-anchor="middle">Bê có cỏ.</text>
          </g>
        `
      });
      illustrations.push(makeIllus("tv1-b6-il1", "Hình ảnh 1: Tranh nhận biết 'Đàn bò gặm cỏ' - SGK Tiếng Việt 1 trang 24", svg1, 24, "Tranh khởi động Âm O, dấu hỏi", "tieng-viet"));
      illustrations.push(makeIllus("tv1-b6-il2", "Hình ảnh 2: Câu ứng dụng 'Bê có cỏ.' - SGK Tiếng Việt 1 trang 25", svg2, 25, "Câu ứng dụng Bê có cỏ", "tieng-viet"));
      return illustrations;
    }

    // Bài 7: Ô ô, Dấu nặng (Trang 26-27)
    if (lessonNum === 7 || (!lessonNum && (t.includes("ô ô") || t.includes("âm ô")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 26",
        lessonBanner: "BÀI 7: Ô Ô - DẤU NẶNG (TIẾT 1 & 2)",
        mainTitle: "BỐ VÀ HÀ ĐI BỘ TRÊN HÈ PHỐ",
        pageStr: "SGK Trang 26",
        bgColorTop: "#FEF3C7",
        bgColorBottom: "#EFF6FF",
        accentColor: "#EA580C",
        drawGraphic: `
          <rect x="30" y="40" width="300" height="140" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="120" cy="95" r="28" fill="#FED7AA"/>
          <text x="120" y="100" fill="#9A3412" font-size="12" font-weight="bold" text-anchor="middle">Bố</text>
          <circle cx="200" cy="115" r="22" fill="#FCE7F3"/>
          <text x="200" y="120" fill="#9D174D" font-size="11" font-weight="bold" text-anchor="middle">Hà</text>
          <text x="160" y="160" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">Đi dạo trên hè phố</text>
          <circle cx="430" cy="105" r="42" fill="#EA580C"/>
          <text x="430" y="120" fill="#FFFFFF" font-size="46" font-weight="900" text-anchor="middle">Ô ô</text>
          <text x="350" y="170" fill="#C2410C" font-size="14" font-weight="bold">Từ: bố, cô bé, cổ cò</text>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 27",
        lessonBanner: "MỤC 4: ĐỌC CÂU ỨNG DỤNG",
        mainTitle: "BỐ BÊ BỂ CÁ.",
        pageStr: "SGK Trang 27",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#F0FDF4",
        accentColor: "#0284C7",
        drawGraphic: `
          <rect x="40" y="50" width="220" height="120" rx="10" fill="#E0F2FE" stroke="#0284C7" stroke-width="2"/>
          <text x="150" y="85" fill="#0369A1" font-size="13" font-weight="bold" text-anchor="middle">Bể cá cảnh</text>
          <text x="150" y="115" fill="#0284C7" font-size="12" text-anchor="middle">Cá vàng và rong rêu</text>
          <g transform="translate(290, 45)">
            <rect width="210" height="125" rx="10" fill="#FEFCE8" stroke="#EAB308" stroke-width="2"/>
            <text x="105" y="40" fill="#A16207" font-size="13" font-weight="bold" text-anchor="middle">Câu ứng dụng SGK:</text>
            <text x="105" y="85" fill="#1E3A8A" font-size="26" font-weight="900" text-anchor="middle">Bố bê bể cá.</text>
          </g>
        `
      });
      illustrations.push(makeIllus("tv1-b7-il1", "Hình ảnh 1: Tranh nhận biết 'Bố và Hà đi bộ trên hè phố' - SGK Tiếng Việt 1 trang 26", svg1, 26, "Tranh nhận biết Âm Ô ô", "tieng-viet"));
      illustrations.push(makeIllus("tv1-b7-il2", "Hình ảnh 2: Câu ứng dụng 'Bố bê bể cá.' - SGK Tiếng Việt 1 trang 27", svg2, 27, "Câu ứng dụng Bố bê bể cá", "tieng-viet"));
      return illustrations;
    }

    // Bài 8: D d, Đ đ (Trang 28-29)
    if (lessonNum === 8 || (!lessonNum && (t.includes("d d") || t.includes("đ đ")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 28",
        lessonBanner: "BÀI 8: D D, Đ Đ (TIẾT 1 & 2)",
        mainTitle: "DƯỚI GỐC ĐA, CHƠI DUNG DĂNG DUNG DẺ",
        pageStr: "SGK Trang 28",
        bgColorTop: "#ECFDF5",
        bgColorBottom: "#EFF6FF",
        accentColor: "#059669",
        drawGraphic: `
          <rect x="30" y="40" width="300" height="135" rx="8" fill="#F8FAFC" stroke="#A7F3D0" stroke-width="2"/>
          <text x="180" y="70" fill="#065F46" font-size="13" font-weight="bold" text-anchor="middle">Dưới bóng cây đa cổ thụ</text>
          <text x="180" y="105" fill="#475569" font-size="12" text-anchor="middle">Các bạn nhỏ nắm tay nhau</text>
          <text x="180" y="135" fill="#047857" font-size="13" font-weight="bold" text-anchor="middle">Chơi dung dăng dung dẻ</text>
          <circle cx="430" cy="105" r="42" fill="#10B981"/>
          <text x="430" y="120" fill="#FFFFFF" font-size="40" font-weight="900" text-anchor="middle">D - Đ</text>
          <text x="340" y="170" fill="#047857" font-size="14" font-weight="bold">Từ: đá dế, đa đa, ô đỏ</text>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 29",
        lessonBanner: "MỤC 4: ĐỌC CÂU ỨNG DỤNG",
        mainTitle: "BÉ CÓ Ô ĐỎ.",
        pageStr: "SGK Trang 29",
        bgColorTop: "#FEF2F2",
        bgColorBottom: "#EFF6FF",
        accentColor: "#EF4444",
        drawGraphic: `
          <circle cx="140" cy="95" r="30" fill="#FED7AA"/>
          <path d="M 90 75 Q 140 30 190 75 Z" fill="#EF4444"/>
          <text x="140" y="150" fill="#991B1B" font-size="13" font-weight="bold" text-anchor="middle">Bé che ô đỏ đi dạo</text>
          <g transform="translate(280, 45)">
            <rect width="220" height="120" rx="10" fill="#FEFCE8" stroke="#F59E0B" stroke-width="2"/>
            <text x="110" y="40" fill="#B45309" font-size="13" font-weight="bold" text-anchor="middle">Câu ứng dụng SGK:</text>
            <text x="110" y="85" fill="#DC2626" font-size="28" font-weight="900" text-anchor="middle">Bé có ô đỏ.</text>
          </g>
        `
      });
      illustrations.push(makeIllus("tv1-b8-il1", "Hình ảnh 1: Tranh nhận biết dưới gốc đa chơi dung dăng dung dẻ - SGK Tiếng Việt 1 trang 28", svg1, 28, "Tranh nhận biết D d, Đ đ", "tieng-viet"));
      illustrations.push(makeIllus("tv1-b8-il2", "Hình ảnh 2: Câu ứng dụng 'Bé có ô đỏ.' - SGK Tiếng Việt 1 trang 29", svg2, 29, "Câu ứng dụng Bé có ô đỏ", "tieng-viet"));
      return illustrations;
    }

    // Bài 9: Ơ ơ, Dấu ngã (Trang 30-31)
    if (lessonNum === 9 || (!lessonNum && (t.includes("ơ ơ") || t.includes("âm ơ") || t.includes("dấu ngã")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 30",
        lessonBanner: "BÀI 9: Ơ Ơ - DẤU NGÃ (TIẾT 1 & 2)",
        mainTitle: "TÀU DỠ HÀNG Ở CẢNG",
        pageStr: "SGK Trang 30",
        bgColorTop: "#E0F2FE",
        bgColorBottom: "#F0FDF4",
        accentColor: "#0284C7",
        drawGraphic: `
          <rect x="30" y="40" width="300" height="135" rx="8" fill="#F8FAFC" stroke="#BAE6FD" stroke-width="2"/>
          <text x="180" y="70" fill="#0369A1" font-size="13" font-weight="bold" text-anchor="middle">Tàu hàng cập cảng biển</text>
          <text x="180" y="105" fill="#475569" font-size="12" text-anchor="middle">Cần cẩu dỡ container hàng hóa</text>
          <circle cx="430" cy="105" r="42" fill="#0284C7"/>
          <text x="430" y="120" fill="#FFFFFF" font-size="46" font-weight="900" text-anchor="middle">Ơ ơ</text>
          <text x="340" y="170" fill="#0284C7" font-size="14" font-weight="bold">Từ: bờ đê, cá cờ, đỡ bé</text>
        `
      });
      illustrations.push(makeIllus("tv1-b9-il1", "Hình ảnh 1: Tranh nhận biết 'Tàu dỡ hàng ở cảng' - SGK Tiếng Việt 1 trang 30", svg1, 30, "Tranh nhận biết Âm Ơ ơ", "tieng-viet"));
      return illustrations;
    }

    // Bài 10: Ôn tập và kể chuyện (Tuần 2 - Trang 32-33)
    if ((isReview && (lessonNum === 10 || t.includes("tuần 2") || t.includes("đàn kiến con"))) || lessonNum === 10) {
      const svg1 = createTextbookSvg({
        bookTitle: "Tiếng Việt 1 - Trang 32",
        lessonBanner: "BÀI 10: ÔN TẬP VÀ KỂ CHUYỆN (TIẾT 1 & 2)",
        mainTitle: "BẢNG ÔN CHỮ CÁI VÀ DẤU THANH",
        pageStr: "SGK Trang 32",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#FEF3C7",
        accentColor: "#6366F1",
        drawGraphic: `
          <rect x="30" y="30" width="480" height="90" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="270" y="60" fill="#4338CA" font-size="15" font-weight="bold" text-anchor="middle">Chữ cái đã học: d, đ, o, ô, ơ</text>
          <text x="270" y="95" fill="#1E293B" font-size="13" text-anchor="middle">Từ ngữ: bó cỏ, cá cờ, cờ đỏ, bờ đê, đỗ đỏ, dỗ bé</text>
          <rect x="50" y="130" width="440" height="50" rx="8" fill="#FEFCE8" stroke="#F59E0B" stroke-width="1.5"/>
          <text x="270" y="162" fill="#B45309" font-size="16" font-weight="900" text-anchor="middle">"Bờ đê có dế. Bà có đỗ đỏ."</text>
        `
      });
      illustrations.push(makeIllus("tv1-b10-il1", "Hình ảnh 1: Bảng ôn chữ cái và câu ứng dụng - SGK Tiếng Việt 1 trang 32", svg1, 32, "Bảng ôn chữ cái Tuần 2", "tieng-viet"));
      return illustrations;
    }

    // Default for any other Tiếng Việt lesson
    const defaultTvSvg = createTextbookSvg({
      bookTitle: "Tiếng Việt 1 - Tập một",
      lessonBanner: `TIẾNG VIỆT 1: ${lessonTitle.toUpperCase()}`,
      mainTitle: "TRANH MINH HỌA SGK",
      pageStr: "SGK Tiếng Việt 1",
      bgColorTop: "#EFF6FF",
      bgColorBottom: "#ECFDF5",
      accentColor: "#2563EB",
      drawGraphic: `
        <rect x="40" y="40" width="460" height="120" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="270" y="85" fill="#1E3A8A" font-size="18" font-weight="bold" text-anchor="middle">${lessonTitle}</text>
        <text x="270" y="125" fill="#475569" font-size="14" text-anchor="middle">Tranh khởi động và luyện đọc theo chương trình SGK lớp 1</text>
      `
    });
    illustrations.push(makeIllus("tv1-gen-il1", `Hình ảnh minh họa SGK Tiếng Việt 1: ${lessonTitle}`, defaultTvSvg, "SGK", lessonTitle, "tieng-viet"));
    return illustrations;
  }

  // =========================================================================
  // 2. TOÁN 1 (KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
  // =========================================================================
  if (subLower.includes("toán") || subLower === "t") {
    // Tiết học đầu tiên / Làm quen
    if (isIntro || lessonNum === 0 || t.includes("tiết học đầu tiên") || t.includes("làm quen")) {
      const svg1 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 6",
        lessonBanner: "TIẾT HỌC ĐẦU TIÊN: LÀM QUEN VỚI TOÁN 1",
        mainTitle: "CÁC BẠN NHỎ ĐỒNG HÀNH",
        pageStr: "SGK Trang 6",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#FEF3C7",
        accentColor: "#2563EB",
        drawGraphic: `
          <rect x="25" y="30" width="90" height="120" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="70" cy="65" r="22" fill="#FED7AA"/>
          <text x="70" y="105" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">Bạn Nam</text>
          <text x="70" y="125" fill="#64748B" font-size="10" text-anchor="middle">Que tính</text>

          <rect x="125" y="30" width="90" height="120" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="170" cy="65" r="22" fill="#FCE7F3"/>
          <text x="170" y="105" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">Bạn Mai</text>
          <text x="170" y="125" fill="#64748B" font-size="10" text-anchor="middle">Hình phẳng</text>

          <rect x="225" y="30" width="90" height="120" rx="8" fill="#FEFCE8" stroke="#F59E0B" stroke-width="2"/>
          <rect x="250" y="45" width="40" height="35" rx="6" fill="#0284C7"/>
          <text x="270" y="105" fill="#B45309" font-size="12" font-weight="bold" text-anchor="middle">Rô-bốt</text>
          <text x="270" y="125" fill="#64748B" font-size="10" text-anchor="middle">Thông minh</text>

          <rect x="325" y="30" width="90" height="120" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="370" cy="65" r="22" fill="#FED7AA"/>
          <text x="370" y="105" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">Bạn Việt</text>
          <text x="370" y="125" fill="#64748B" font-size="10" text-anchor="middle">Đồng hồ</text>

          <rect x="425" y="30" width="90" height="120" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="470" cy="65" r="22" fill="#FCE7F3"/>
          <text x="470" y="105" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">Bé Mi</text>
          <text x="470" y="125" fill="#64748B" font-size="10" text-anchor="middle">Xúc xắc</text>
          <text x="270" y="175" fill="#1D4ED8" font-size="13" font-weight="bold" text-anchor="middle">5 nhân vật quen thuộc đồng hành cùng học sinh trong SGK Toán 1</text>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 7",
        lessonBanner: "BỘ ĐỒ DÙNG HỌC TOÁN 1",
        mainTitle: "ĐỒ DÙNG HỌC TOÁN",
        pageStr: "SGK Trang 7",
        bgColorTop: "#F0FDF4",
        bgColorBottom: "#EFF6FF",
        accentColor: "#059669",
        drawGraphic: `
          <rect x="30" y="30" width="220" height="130" rx="8" fill="#FFFFFF" stroke="#A7F3D0" stroke-width="2"/>
          <text x="140" y="60" fill="#065F46" font-size="13" font-weight="bold" text-anchor="middle">1. Hộp que tính</text>
          <text x="140" y="90" fill="#475569" font-size="12" text-anchor="middle">Que tính đỏ, xanh, vàng</text>
          <text x="140" y="125" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">2. Khối lập phương</text>
          <rect x="290" y="30" width="220" height="130" rx="8" fill="#FFFFFF" stroke="#BAE6FD" stroke-width="2"/>
          <text x="400" y="60" fill="#0369A1" font-size="13" font-weight="bold" text-anchor="middle">3. Thẻ chữ số 0 - 10</text>
          <text x="400" y="90" fill="#475569" font-size="12" text-anchor="middle">Dấu +, -, =, &gt;, &lt;</text>
          <text x="400" y="125" fill="#0284C7" font-size="12" font-weight="bold" text-anchor="middle">4. Bảng gài cá nhân</text>
        `
      });
      illustrations.push(makeIllus("toan1-intro-il1", "Hình ảnh 1: Làm quen các bạn nhỏ đồng hành trong SGK Toán 1 trang 6", svg1, 6, "Các bạn nhỏ Toán 1", "toan"));
      illustrations.push(makeIllus("toan1-intro-il2", "Hình ảnh 2: Làm quen Bộ đồ dùng học Toán 1 - SGK Toán 1 trang 7", svg2, 7, "Bộ đồ dùng Toán 1", "toan"));
      return illustrations;
    }

    // Bài 1: Các số 0, 1, 2, 3, 4, 5 (Trang 8-13)
    if (lessonNum === 1 || (!lessonNum && (t.includes("0, 1, 2, 3, 4, 5") || t.includes("0 đến 5")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 8",
        lessonBanner: "BÀI 1: CÁC SỐ 0, 1, 2, 3, 4, 5",
        mainTitle: "ĐẾM SỐ LƯỢNG TRONG BỂ CÁ",
        pageStr: "SGK Trang 8",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#ECFDF5",
        accentColor: "#2563EB",
        drawGraphic: `
          <!-- Fish bowls 0 to 5 -->
          <g transform="translate(10, 20)">
            <rect width="80" height="85" rx="8" fill="#F8FAFC" stroke="#38BDF8" stroke-width="1.5"/>
            <text x="40" y="45" fill="#94A3B8" font-size="11" text-anchor="middle">Bể trống</text>
            <text x="40" y="75" fill="#0284C7" font-size="24" font-weight="900" text-anchor="middle">0</text>
          </g>
          <g transform="translate(95, 20)">
            <rect width="80" height="85" rx="8" fill="#F8FAFC" stroke="#38BDF8" stroke-width="1.5"/>
            <circle cx="40" cy="40" r="8" fill="#F97316"/>
            <text x="40" y="75" fill="#0284C7" font-size="24" font-weight="900" text-anchor="middle">1</text>
          </g>
          <g transform="translate(180, 20)">
            <rect width="80" height="85" rx="8" fill="#F8FAFC" stroke="#38BDF8" stroke-width="1.5"/>
            <circle cx="30" cy="40" r="7" fill="#F97316"/>
            <circle cx="50" cy="40" r="7" fill="#F97316"/>
            <text x="40" y="75" fill="#0284C7" font-size="24" font-weight="900" text-anchor="middle">2</text>
          </g>
          <g transform="translate(265, 20)">
            <rect width="80" height="85" rx="8" fill="#F8FAFC" stroke="#38BDF8" stroke-width="1.5"/>
            <circle cx="25" cy="40" r="6" fill="#F97316"/>
            <circle cx="40" cy="40" r="6" fill="#F97316"/>
            <circle cx="55" cy="40" r="6" fill="#F97316"/>
            <text x="40" y="75" fill="#0284C7" font-size="24" font-weight="900" text-anchor="middle">3</text>
          </g>
          <g transform="translate(350, 20)">
            <rect width="80" height="85" rx="8" fill="#F8FAFC" stroke="#38BDF8" stroke-width="1.5"/>
            <circle cx="28" cy="35" r="5" fill="#F97316"/>
            <circle cx="52" cy="35" r="5" fill="#F97316"/>
            <circle cx="28" cy="48" r="5" fill="#F97316"/>
            <circle cx="52" cy="48" r="5" fill="#F97316"/>
            <text x="40" y="75" fill="#0284C7" font-size="24" font-weight="900" text-anchor="middle">4</text>
          </g>
          <g transform="translate(435, 20)">
            <rect width="80" height="85" rx="8" fill="#F8FAFC" stroke="#38BDF8" stroke-width="1.5"/>
            <circle cx="25" cy="35" r="5" fill="#F97316"/>
            <circle cx="40" cy="35" r="5" fill="#F97316"/>
            <circle cx="55" cy="35" r="5" fill="#F97316"/>
            <circle cx="32" cy="48" r="5" fill="#F97316"/>
            <circle cx="48" cy="48" r="5" fill="#F97316"/>
            <text x="40" y="75" fill="#0284C7" font-size="24" font-weight="900" text-anchor="middle">5</text>
          </g>
          <rect x="20" y="125" width="495" height="50" rx="8" fill="#FEFCE8" stroke="#F59E0B" stroke-width="1.5"/>
          <text x="270" y="155" fill="#B45309" font-size="16" font-weight="bold" text-anchor="middle">Dãy số tự nhiên từ 0 đến 5: 0, 1, 2, 3, 4, 5</text>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 10",
        lessonBanner: "BÀI 1: LUYỆN TẬP ĐẾM VÀ VIẾT SỐ",
        mainTitle: "TẬP VIẾT CÁC SỐ 0, 1, 2, 3, 4, 5",
        pageStr: "SGK Trang 10",
        bgColorTop: "#F8FAFC",
        bgColorBottom: "#EFF6FF",
        accentColor: "#0284C7",
        drawGraphic: `
          <g transform="translate(15, 20)">
            <rect width="80" height="90" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
            <text x="40" y="30" fill="#64748B" font-size="11" text-anchor="middle">Số 0</text>
            <text x="40" y="70" fill="#0284C7" font-size="34" font-weight="900" text-anchor="middle">0</text>
          </g>
          <g transform="translate(105, 20)">
            <rect width="80" height="90" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
            <text x="40" y="30" fill="#64748B" font-size="11" text-anchor="middle">Số 1</text>
            <text x="40" y="70" fill="#0284C7" font-size="34" font-weight="900" text-anchor="middle">1</text>
          </g>
          <g transform="translate(195, 20)">
            <rect width="80" height="90" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
            <text x="40" y="30" fill="#64748B" font-size="11" text-anchor="middle">Số 2</text>
            <text x="40" y="70" fill="#0284C7" font-size="34" font-weight="900" text-anchor="middle">2</text>
          </g>
          <g transform="translate(285, 20)">
            <rect width="80" height="90" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
            <text x="40" y="30" fill="#64748B" font-size="11" text-anchor="middle">Số 3</text>
            <text x="40" y="70" fill="#0284C7" font-size="34" font-weight="900" text-anchor="middle">3</text>
          </g>
          <g transform="translate(375, 20)">
            <rect width="80" height="90" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
            <text x="40" y="30" fill="#64748B" font-size="11" text-anchor="middle">Số 4</text>
            <text x="40" y="70" fill="#0284C7" font-size="34" font-weight="900" text-anchor="middle">4</text>
          </g>
          <g transform="translate(465, 20)">
            <rect width="80" height="90" rx="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
            <text x="40" y="30" fill="#64748B" font-size="11" text-anchor="middle">Số 5</text>
            <text x="40" y="70" fill="#0284C7" font-size="34" font-weight="900" text-anchor="middle">5</text>
          </g>
          <rect x="25" y="130" width="490" height="42" rx="8" fill="#FEFCE8" stroke="#F59E0B" stroke-width="1.5"/>
          <text x="270" y="157" fill="#B45309" font-size="14" font-weight="bold" text-anchor="middle">Luyện tập viết các chữ số vào bảng con và đếm đồ vật trong lớp</text>
        `
      });
      illustrations.push(makeIllus("toan1-b1-il1", "Hình ảnh 1: Tranh khám phá các bể cá cảnh (số 0 đến số 5) - SGK Toán 1 trang 8", svg1, 8, "Khám phá các số 0, 1, 2, 3, 4, 5", "toan"));
      illustrations.push(makeIllus("toan1-b1-il2", "Hình ảnh 2: Bài tập thực hành viết số 0, 1, 2, 3, 4, 5 - SGK Toán 1 trang 10", svg2, 10, "Thực hành viết số 0 đến 5", "toan"));
      return illustrations;
    }

    // Bài 2: Các số 6, 7, 8, 9, 10 (Trang 14-19)
    if (lessonNum === 2 || (!lessonNum && (t.includes("6, 7, 8, 9, 10") || t.includes("6 đến 10")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 14",
        lessonBanner: "BÀI 2: CÁC SỐ 6, 7, 8, 9, 10",
        mainTitle: "ĐẾM SINH VẬT THIÊN NHIÊN",
        pageStr: "SGK Trang 14",
        bgColorTop: "#FEF3C7",
        bgColorBottom: "#ECFDF5",
        accentColor: "#D97706",
        drawGraphic: `
          <rect x="20" y="30" width="90" height="95" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="65" y="55" fill="#1E293B" font-size="11" text-anchor="middle">6 con ong</text>
          <text x="65" y="90" fill="#D97706" font-size="28" font-weight="900" text-anchor="middle">6</text>

          <rect x="120" y="30" width="90" height="95" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="165" y="55" fill="#1E293B" font-size="11" text-anchor="middle">7 con chim</text>
          <text x="165" y="90" fill="#2563EB" font-size="28" font-weight="900" text-anchor="middle">7</text>

          <rect x="220" y="30" width="90" height="95" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="265" y="55" fill="#1E293B" font-size="11" text-anchor="middle">8 bông hoa</text>
          <text x="265" y="90" fill="#DB2777" font-size="28" font-weight="900" text-anchor="middle">8</text>

          <rect x="320" y="30" width="90" height="95" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="365" y="55" fill="#1E293B" font-size="11" text-anchor="middle">9 sao biển</text>
          <text x="365" y="90" fill="#059669" font-size="28" font-weight="900" text-anchor="middle">9</text>

          <rect x="420" y="30" width="100" height="95" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="470" y="55" fill="#1E293B" font-size="11" text-anchor="middle">10 bọ rùa</text>
          <text x="470" y="90" fill="#DC2626" font-size="28" font-weight="900" text-anchor="middle">10</text>

          <rect x="20" y="135" width="500" height="45" rx="8" fill="#FEFCE8" stroke="#F59E0B" stroke-width="1.5"/>
          <text x="270" y="162" fill="#B45309" font-size="15" font-weight="bold" text-anchor="middle">Dãy số tự nhiên từ 0 đến 10: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</text>
        `
      });
      illustrations.push(makeIllus("toan1-b2-il1", "Hình ảnh 1: Tranh khám phá đếm sinh vật thiên nhiên (số 6 đến 10) - SGK Toán 1 trang 14", svg1, 14, "Khám phá các số 6, 7, 8, 9, 10", "toan"));
      return illustrations;
    }

    // Bài 3: Nhiều hơn, ít hơn, bằng nhau (Trang 20-23)
    if (lessonNum === 3 || (!lessonNum && (t.includes("nhiều hơn") || t.includes("ít hơn") || t.includes("bằng nhau")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 20",
        lessonBanner: "BÀI 3: NHIỀU HƠN, ÍT HƠN, BẰNG NHAU",
        mainTitle: "3 CON ẾCH VÀ 2 LÁ SEN",
        pageStr: "SGK Trang 20",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#ECFDF5",
        accentColor: "#059669",
        drawGraphic: `
          <rect x="30" y="30" width="220" height="130" rx="8" fill="#FFFFFF" stroke="#A7F3D0" stroke-width="2"/>
          <text x="140" y="60" fill="#065F46" font-size="13" font-weight="bold" text-anchor="middle">3 con ếch và 2 lá sen</text>
          <text x="140" y="95" fill="#1E293B" font-size="12" text-anchor="middle">Số ếch nhiều hơn số lá sen</text>
          <text x="140" y="125" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">Số lá sen ít hơn số ếch</text>
          <rect x="290" y="30" width="220" height="130" rx="8" fill="#FFFFFF" stroke="#FED7AA" stroke-width="2"/>
          <text x="400" y="60" fill="#9A3412" font-size="13" font-weight="bold" text-anchor="middle">3 chú thỏ và 3 củ cà rốt</text>
          <text x="400" y="100" fill="#C2410C" font-size="13" font-weight="bold" text-anchor="middle">Số thỏ BẰNG số cà rốt</text>
          <text x="400" y="125" fill="#475569" font-size="12" text-anchor="middle">(Ghép đôi 1 - 1 vừa vặn)</text>
        `
      });
      illustrations.push(makeIllus("toan1-b3-il1", "Hình ảnh 1: Tranh khám phá Nhiều hơn, ít hơn, bằng nhau - SGK Toán 1 trang 20", svg1, 20, "Nhiều hơn, ít hơn, bằng nhau", "toan"));
      return illustrations;
    }

    // Bài 4: So sánh số (Trang 24-31)
    if (lessonNum === 4 || (!lessonNum && (t.includes("so sánh số") || t.includes("lớn hơn") || t.includes("bé hơn")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 24",
        lessonBanner: "BÀI 4: SO SÁNH SỐ (TIẾT 1 & 2)",
        mainTitle: "5 > 3",
        pageStr: "SGK Trang 24",
        bgColorTop: "#FEF2F2",
        bgColorBottom: "#F0FDF4",
        accentColor: "#DC2626",
        drawGraphic: `
          <g transform="translate(20, 20)">
            <ellipse cx="65" cy="70" rx="55" ry="18" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
            <circle cx="45" cy="50" r="14" fill="#EF4444"/>
            <circle cx="68" cy="48" r="14" fill="#DC2626"/>
            <circle cx="90" cy="52" r="14" fill="#B91C1C"/>
            <circle cx="56" cy="34" r="13" fill="#EF4444"/>
            <circle cx="78" cy="35" r="13" fill="#DC2626"/>
            <circle cx="65" cy="110" r="18" fill="#EF4444"/>
            <text x="65" y="117" fill="#FFFFFF" font-size="20" font-weight="900" text-anchor="middle">5</text>
          </g>
          <g transform="translate(180, 10)">
            <rect x="40" y="10" width="70" height="48" rx="14" fill="#0284C7" stroke="#0369A1" stroke-width="3"/>
            <circle cx="60" cy="32" r="6" fill="#1E293B"/>
            <circle cx="90" cy="32" r="6" fill="#1E293B"/>
            <rect x="0" y="68" width="150" height="55" rx="10" fill="#FEFCE8" stroke="#F59E0B" stroke-width="2.5"/>
            <text x="75" y="107" fill="#B45309" font-size="36" font-weight="900" text-anchor="middle">5 &gt; 3</text>
            <text x="75" y="142" fill="#1E293B" font-size="14" font-weight="bold" text-anchor="middle">Năm lớn hơn Ba</text>
          </g>
          <g transform="translate(380, 20)">
            <ellipse cx="65" cy="70" rx="55" ry="18" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
            <circle cx="50" cy="50" r="15" fill="#22C55E"/>
            <circle cx="75" cy="52" r="15" fill="#16A34A"/>
            <circle cx="62" cy="35" r="14" fill="#4ADE80"/>
            <circle cx="65" cy="110" r="18" fill="#16A34A"/>
            <text x="65" y="117" fill="#FFFFFF" font-size="20" font-weight="900" text-anchor="middle">3</text>
          </g>
        `
      });
      const svg2 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 28",
        lessonBanner: "BÀI 4: BÀI TẬP ĐIỀN DẤU",
        mainTitle: "ĐIỀN DẤU >, <, =",
        pageStr: "SGK Trang 28",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#ECFDF5",
        accentColor: "#0284C7",
        drawGraphic: `
          <rect x="30" y="30" width="220" height="130" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="140" y="55" fill="#1E293B" font-size="13" font-weight="bold" text-anchor="middle">So sánh 4 ô tô và 2 ô tô</text>
          <rect x="60" y="80" width="160" height="45" rx="6" fill="#FEFCE8" stroke="#F59E0B" stroke-width="1.5"/>
          <text x="140" y="110" fill="#B45309" font-size="24" font-weight="900" text-anchor="middle">4 &gt; 2</text>
          <rect x="290" y="30" width="220" height="130" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="400" y="55" fill="#1E293B" font-size="13" font-weight="bold" text-anchor="middle">3 khối và 5 khối lập phương</text>
          <rect x="320" y="80" width="160" height="45" rx="6" fill="#FEFCE8" stroke="#F59E0B" stroke-width="1.5"/>
          <text x="400" y="110" fill="#B45309" font-size="24" font-weight="900" text-anchor="middle">3 &lt; 5</text>
        `
      });
      illustrations.push(makeIllus("toan1-b4-il1", "Hình ảnh 1: Tranh khám phá So sánh số (5 > 3) - SGK Toán 1 trang 24", svg1, 24, "So sánh số 5 > 3", "toan"));
      illustrations.push(makeIllus("toan1-b4-il2", "Hình ảnh 2: Bài tập so sánh số lượng đồ vật - SGK Toán 1 trang 28", svg2, 28, "Bài tập So sánh số", "toan"));
      return illustrations;
    }

    // Bài 5: Mấy và mấy (Trang 32-37)
    if (lessonNum === 5 || (!lessonNum && (t.includes("mấy và mấy") || t.includes("tách gộp")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 32",
        lessonBanner: "BÀI 5: MẤY VÀ MẤY (CẤU TẠO SỐ)",
        mainTitle: "3 VÀ 2 ĐƯỢC 5",
        pageStr: "SGK Trang 32",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#ECFDF5",
        accentColor: "#0284C7",
        drawGraphic: `
          <rect x="30" y="40" width="140" height="85" rx="8" fill="#FFFFFF" stroke="#38BDF8" stroke-width="2"/>
          <text x="100" y="70" fill="#0284C7" font-size="13" font-weight="bold" text-anchor="middle">Mai có 3 con cá</text>
          <text x="100" y="105" fill="#0284C7" font-size="24" font-weight="900" text-anchor="middle">3</text>
          <rect x="190" y="40" width="140" height="85" rx="8" fill="#FFFFFF" stroke="#38BDF8" stroke-width="2"/>
          <text x="260" y="70" fill="#0284C7" font-size="13" font-weight="bold" text-anchor="middle">Nam có 2 con cá</text>
          <text x="260" y="105" fill="#0284C7" font-size="24" font-weight="900" text-anchor="middle">2</text>
          <rect x="350" y="40" width="160" height="85" rx="8" fill="#FEFCE8" stroke="#F59E0B" stroke-width="2"/>
          <text x="430" y="70" fill="#B45309" font-size="13" font-weight="bold" text-anchor="middle">Cả hai bể được:</text>
          <text x="430" y="105" fill="#B45309" font-size="24" font-weight="900" text-anchor="middle">5 con cá</text>
          <rect x="30" y="140" width="480" height="40" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
          <text x="270" y="165" fill="#1D4ED8" font-size="15" font-weight="bold" text-anchor="middle">Sơ đồ tách gộp: 5 gồm 1 và 4 | 5 gồm 2 và 3 | 5 gồm 4 và 1 | 5 gồm 3 và 2</text>
        `
      });
      illustrations.push(makeIllus("toan1-b5-il1", "Hình ảnh 1: Tranh khám phá Mấy và mấy (3 và 2 được 5) - SGK Toán 1 trang 32", svg1, 32, "Mấy và mấy: 3 và 2 được 5", "toan"));
      return illustrations;
    }

    // Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật (Trang 46-50)
    if (lessonNum === 7 || (!lessonNum && (t.includes("hình vuông") || t.includes("hình tròn") || t.includes("hình tam giác") || t.includes("hình chữ nhật")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 46",
        lessonBanner: "BÀI 7: HÌNH VUÔNG, TRÒN, TAM GIÁC, CHỮ NHẬT",
        mainTitle: "CÁC HÌNH HỌC QUANH EM",
        pageStr: "SGK Trang 46",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#ECFDF5",
        accentColor: "#4F46E5",
        drawGraphic: `
          <rect x="25" y="30" width="110" height="120" rx="8" fill="#FFFFFF" stroke="#818CF8" stroke-width="2"/>
          <rect x="55" y="45" width="50" height="50" rx="4" fill="#3B82F6"/>
          <text x="80" y="125" fill="#1E3A8A" font-size="11" font-weight="bold" text-anchor="middle">Hình vuông</text>

          <rect x="155" y="30" width="110" height="120" rx="8" fill="#FFFFFF" stroke="#F472B6" stroke-width="2"/>
          <circle cx="210" cy="70" r="26" fill="#EC4899"/>
          <text x="210" y="125" fill="#9D174D" font-size="11" font-weight="bold" text-anchor="middle">Hình tròn</text>

          <rect x="285" y="30" width="110" height="120" rx="8" fill="#FFFFFF" stroke="#FBBF24" stroke-width="2"/>
          <polygon points="340,45 315,95 365,95" fill="#F59E0B"/>
          <text x="340" y="125" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">Hình tam giác</text>

          <rect x="415" y="30" width="110" height="120" rx="8" fill="#FFFFFF" stroke="#34D399" stroke-width="2"/>
          <rect x="435" y="55" width="70" height="40" rx="4" fill="#10B981"/>
          <text x="470" y="125" fill="#065F46" font-size="11" font-weight="bold" text-anchor="middle">Hình chữ nhật</text>
          <text x="270" y="175" fill="#4338CA" font-size="13" font-weight="bold" text-anchor="middle">Nhận diện các hình phẳng qua đồ vật thực tế: viên gạch hoa, đồng hồ, biển báo</text>
        `
      });
      illustrations.push(makeIllus("toan1-b7-il1", "Hình ảnh 1: Khám phá các hình phẳng qua đồ vật thực tế - SGK Toán 1 trang 46", svg1, 46, "Hình vuông, tròn, tam giác, chữ nhật", "toan"));
      return illustrations;
    }

    // Bài 10: Phép cộng trong phạm vi 10 (Trang 56-67)
    if (lessonNum === 10 || (!lessonNum && (t.includes("phép cộng") || t.includes("cộng trong phạm vi")))) {
      const svg1 = createTextbookSvg({
        bookTitle: "Toán 1 - Trang 56",
        lessonBanner: "BÀI 10: PHÉP CỘNG TRONG PHẠM VI 10",
        mainTitle: "3 + 2 = 5",
        pageStr: "SGK Trang 56",
        bgColorTop: "#EFF6FF",
        bgColorBottom: "#FEF3C7",
        accentColor: "#2563EB",
        drawGraphic: `
          <rect x="40" y="30" width="130" height="90" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="80" cy="65" r="10" fill="#EF4444"/>
          <circle cx="105" cy="65" r="10" fill="#EF4444"/>
          <circle cx="130" cy="65" r="10" fill="#EF4444"/>
          <text x="105" y="105" fill="#DC2626" font-size="16" font-weight="bold" text-anchor="middle">3 bóng đỏ</text>

          <text x="195" y="85" fill="#2563EB" font-size="36" font-weight="900" text-anchor="middle">+</text>

          <rect x="220" y="30" width="130" height="90" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <circle cx="270" cy="65" r="10" fill="#3B82F6"/>
          <circle cx="300" cy="65" r="10" fill="#3B82F6"/>
          <text x="285" y="105" fill="#2563EB" font-size="16" font-weight="bold" text-anchor="middle">2 bóng xanh</text>

          <text x="375" y="85" fill="#059669" font-size="36" font-weight="900" text-anchor="middle">=</text>

          <rect x="400" y="30" width="110" height="90" rx="8" fill="#FEFCE8" stroke="#F59E0B" stroke-width="2"/>
          <text x="455" y="85" fill="#B45309" font-size="40" font-weight="900" text-anchor="middle">5</text>
          <text x="270" y="160" fill="#1D4ED8" font-size="16" font-weight="900" text-anchor="middle">Phép tính: 3 + 2 = 5 (Ba cộng hai bằng năm)</text>
        `
      });
      illustrations.push(makeIllus("toan1-b10-il1", "Hình ảnh 1: Khám phá phép cộng (3 + 2 = 5) - SGK Toán 1 trang 56", svg1, 56, "Phép cộng 3 + 2 = 5", "toan"));
      return illustrations;
    }

    // Default for any other Math lesson
    const defaultToanSvg = createTextbookSvg({
      bookTitle: "Toán 1 - Tập một",
      lessonBanner: `TOÁN 1: ${lessonTitle.toUpperCase()}`,
      mainTitle: "HỌC TOÁN CÙNG RÔ-BỐT",
      pageStr: "SGK Toán 1",
      bgColorTop: "#EFF6FF",
      bgColorBottom: "#ECFDF5",
      accentColor: "#0284C7",
      drawGraphic: `
        <rect x="40" y="40" width="460" height="120" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="270" y="85" fill="#0369A1" font-size="18" font-weight="bold" text-anchor="middle">${lessonTitle}</text>
        <text x="270" y="125" fill="#475569" font-size="14" text-anchor="middle">Thực hành thao tác que tính, hình khối và bài tập theo SGK Toán 1</text>
      `
    });
    illustrations.push(makeIllus("toan1-gen-il1", `Hình ảnh minh họa SGK Toán 1: ${lessonTitle}`, defaultToanSvg, "SGK", lessonTitle, "toan"));
    return illustrations;
  }

  return illustrations;
}

/**
 * Generates an SVG vector graphic for universal subject/grade placeholder
 */
export function createUniversalIllustrationSvg(params: {
  caption: string;
  description: string;
  grade: number;
  subject: string;
  pageStr?: string;
}): string {
  const { caption, description, grade, subject, pageStr = "Hình minh họa" } = params;
  const subLower = (subject || "").toLowerCase();
  let accentColor = "#2563EB";
  let bgTop = "#EFF6FF";
  let bgBottom = "#F0FDF4";

  if (subLower.includes("toán")) {
    accentColor = "#0284C7";
    bgTop = "#EFF6FF";
    bgBottom = "#ECFDF5";
  } else if (subLower.includes("tiếng việt")) {
    accentColor = "#D97706";
    bgTop = "#FEF3C7";
    bgBottom = "#EFF6FF";
  } else if (subLower.includes("tiếng anh")) {
    accentColor = "#4F46E5";
    bgTop = "#EEF2FF";
    bgBottom = "#FDF2F8";
  } else if (subLower.includes("âm nhạc")) {
    accentColor = "#DB2777";
    bgTop = "#FDF2F8";
    bgBottom = "#FFFBEB";
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="600" height="380" style="background:#ffffff; border-radius:12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <defs>
    <linearGradient id="grad_uni" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${bgTop}" />
      <stop offset="100%" stop-color="${bgBottom}" />
    </linearGradient>
  </defs>
  <rect x="8" y="8" width="584" height="364" rx="16" fill="url(#grad_uni)" stroke="#CBD5E1" stroke-width="2"/>
  <path d="M 8 24 Q 8 8 24 8 L 576 8 Q 592 8 592 24 L 592 56 L 8 56 Z" fill="${accentColor}" />
  <text x="30" y="36" fill="#FFFFFF" font-size="12" font-weight="700" letter-spacing="1">SGK TIỂU HỌC - CHƯƠNG TRÌNH GDPT 2018</text>
  <rect x="470" y="18" width="105" height="26" rx="13" fill="#FFFFFF" fill-opacity="0.25"/>
  <text x="522" y="35" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">${pageStr}</text>
  
  <rect x="30" y="70" width="540" height="36" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  <circle cx="50" cy="88" r="8" fill="${accentColor}"/>
  <text x="70" y="93" fill="#1E293B" font-size="13" font-weight="bold">MÔN ${subject.toUpperCase()} - LỚP ${grade}</text>

  <g transform="translate(30, 118)">
    <rect x="0" y="0" width="540" height="205" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    <rect x="20" y="20" width="500" height="60" rx="8" fill="#FEFCE8" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="270" y="55" fill="#B45309" font-size="16" font-weight="bold" text-anchor="middle">${caption}</text>
    <text x="270" y="115" fill="#1E293B" font-size="14" font-weight="600" text-anchor="middle">${description}</text>
    <rect x="180" y="145" width="180" height="36" rx="18" fill="${accentColor}"/>
    <text x="270" y="168" fill="#FFFFFF" font-size="13" font-weight="bold" text-anchor="middle">Tranh Minh Họa Trực Quan</text>
  </g>
  <text x="300" y="352" fill="#94A3B8" font-size="11" font-style="italic" text-anchor="middle">Sách Giáo Khoa Lớp ${grade} - Bộ Giáo Dục và Đào Tạo</text>
</svg>`;
}

export function createAiIllustrationPlaceholder(params: {
  caption: string;
  description: string;
  grade: number;
  subject: string;
  category?: string;
}): LessonIllustration {
  const svg = createUniversalIllustrationSvg(params);
  const id = `illus-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  return {
    id,
    caption: params.caption,
    description: params.description,
    imageUrl: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
    svgData: svg,
    svg: svg,
    altText: params.caption,
    category: params.category || "sgk",
    subject: params.subject,
  };
}

export async function getIllustrationPngBytes(illus: LessonIllustration): Promise<Uint8Array | null> {
  try {
    const svgStr = illus.svg || illus.svgData;
    if (!svgStr && !illus.imageUrl) return null;

    let src = illus.imageUrl;
    if (svgStr) {
      src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;
    }

    if (typeof window === "undefined" || !src) return null;

    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth || 600;
          canvas.height = img.naturalHeight || 380;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve(null);
            return;
          }
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((blob) => {
            if (!blob) {
              resolve(null);
              return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
              if (reader.result instanceof ArrayBuffer) {
                resolve(new Uint8Array(reader.result));
              } else {
                resolve(null);
              }
            };
            reader.readAsArrayBuffer(blob);
          }, "image/png");
        } catch (e) {
          console.warn("Canvas conversion error:", e);
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = src!;
    });
  } catch (err) {
    console.warn("getIllustrationPngBytes error:", err);
    return null;
  }
}

