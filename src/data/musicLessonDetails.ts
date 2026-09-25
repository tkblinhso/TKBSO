import { Grade, LessonActivity } from "../types";
import { getOfficialMusicWeek, OfficialMusicWeek, ALL_GRADES_MUSIC_CURRICULUM } from "./musicCurriculumData";

export interface MusicLessonDetail {
  songTitle: string;
  composer: string;
  lessonTitle: string;
  songLyrics: string;
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  integrationNotes: string;
  activities: LessonActivity[];
}

export interface SongMasterInfo {
  songTitle: string;
  composer: string;
  mainTheme: string;
  timeSignature: "2/4" | "3/4" | "4/4";
  tempo: string;
  lyrics: string;
}

// Legacy exports preserved for full compatibility
export const GRADE_1_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Vào rừng hoa",
    composer: "Việt Anh",
    mainTheme: "Âm thanh kì diệu",
    timeSignature: "2/4",
    tempo: "Vừa phải, vui tươi",
    lyrics: `Cầm tay nhau cùng đi chơi, giao đàn hoa thơm ngát hương bay.
Hoa màu xanh, hoa màu đỏ, hoa màu vàng, hoa màu tím.
Kìa hoa sim, kìa hoa lan, kìa hoa huệ trắng tinh.
Vào rừng hoa cùng chơi, vui tươi rộn rã bước chân.`
  }
];

export const GRADE_2_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Dàn nhạc trong vườn",
    composer: "Tô Đông Hải",
    mainTheme: "Sắc màu âm thanh",
    timeSignature: "2/4",
    tempo: "Vui tươi, rộn rã",
    lyrics: `Kìa con chim gáy cúc cu đố la, kìa chú vàng anh líu lo lá son.
Kìa chim chích chòe, chích chòe lá đa, một dàn nhạc chim líu lo trong vườn!`
  }
];

export const GRADE_3_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Múa lân",
    composer: "Lê Cao Phan",
    mainTheme: "Lễ hội âm thanh",
    timeSignature: "2/4",
    tempo: "Rộn ràng, vui tươi",
    lyrics: `Thùng thình thùng thình cắc tùng thình thình, múa lân đón rằm tháng Tám.
Chú Cuội chơi trăng cùng bé thơ, tùng rinh rinh tiếng trống rộn vang!`
  }
];

export const GRADE_4_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Chuông gió leng keng",
    composer: "Lê Vinh Phúc",
    mainTheme: "Âm thanh ngày mới",
    timeSignature: "2/4",
    tempo: "Nhẹ nhàng, trong sáng",
    lyrics: `Kìa chuông gió leng keng leng keng, gió reo vui đùa khúc nhạc êm đềm.
Hòa cùng nắng sớm đón chào ngày mới, cho muôn nụ cười rạng rỡ trên môi.`
  }
];

export const GRADE_5_SONGS: SongMasterInfo[] = [
  {
    songTitle: "Chim sơn ca",
    composer: "Hoàng Long - Hoàng Lân",
    mainTheme: "Khúc ca ngày mới",
    timeSignature: "2/4",
    tempo: "Rộn ràng, bay bổng",
    lyrics: `Khúc hát mừng ngày mới sang, chim sơn ca hót vang đón ánh ban mai.
Gió rung rinh từng chiếc lá, tiếng chim vui hòa cùng tiếng suối trong lành.`
  }
];

export function getSongInfoForGradeAndWeek(grade: Grade, week: number): SongMasterInfo {
  const official = getOfficialMusicWeek(grade, week);
  return {
    songTitle: official.songTitle || official.lessonTitle,
    composer: official.composer || "Việt Nam",
    mainTheme: official.theme || "Âm nhạc tiểu học",
    timeSignature: "2/4",
    tempo: "Vừa phải, nhịp nhàng",
    lyrics: official.lyrics || (official.songTitle ? `Giai điệu lời ca bài hát: ${official.songTitle}` : "")
  };
}

/**
 * Tạo chi tiết Kế hoạch bài dạy (KHBD) chuẩn 2 cột theo Công văn 2345/BGDĐT-GDTH
 * Dựa trên đúng Phân phối chương trình mới của Bộ Giáo dục & Đào tạo cho các lớp 1, 2, 3, 4, 5
 * Giáo viên phụ trách: Cô Nguyễn Thị Thanh Tâm
 */
export function getDetailedMusicLesson(
  grade: Grade,
  week: number,
  isEnhance: boolean,
  session: "Sáng" | "Chiều" = "Sáng"
): MusicLessonDetail {
  const official = getOfficialMusicWeek(grade, week);
  const songTitle = official.songTitle || (official.composer ? official.lessonTitle : `Bài học Tuần ${official.week}`);
  const composer = official.composer || "";
  const lyrics = official.lyrics || (official.songTitle ? `Lời ca bài hát "${official.songTitle}" theo Sách giáo khoa Âm nhạc Lớp ${grade}.` : "");
  const baseTitle = official.lessonTitle;
  const subTopics = official.subTopics || ["Hát"];
  const adjustments = official.adjustments || "";

  // 1. CHÍNH KHÓA (Buổi Sáng - Phân phối chương trình chính khóa chuẩn CV 2345)
  if (!isEnhance && session === "Sáng") {
    const lessonTitle = baseTitle;

    // Xác định năng lực đặc thù dựa trên nội dung phân môn
    const specificCompetencies: string[] = [];
    if (subTopics.includes("Hát")) {
      specificCompetencies.push(`Biết hát đúng cao độ, trường độ, phát âm rõ lời và biểu cảm bài hát "${songTitle}"${composer ? ` của nhạc sĩ ${composer}` : ""}.`);
    }
    if (subTopics.includes("Đọc nhạc")) {
      specificCompetencies.push(`Đọc đúng tên nốt, cao độ và trường độ các nốt nhạc theo thang âm hoặc ký hiệu bàn tay.`);
    }
    if (subTopics.includes("Nhạc cụ")) {
      specificCompetencies.push(`Biết sử dụng nhạc cụ gõ (thanh phách, song loan, trống con, maracas...) gõ đệm theo phách, theo nhịp 2/4 hoặc tiết tấu lời ca.`);
    }
    if (subTopics.includes("Lí thuyết âm nhạc")) {
      specificCompetencies.push(`Nhận biết và gọi đúng tên các kí hiệu ghi nhạc (khuông nhạc, khóa Sol, hình nốt, dấu lặng, vạch nhịp, số chỉ nhịp).`);
    }
    if (subTopics.includes("TTAN") || subTopics.includes("Thường thức")) {
      specificCompetencies.push(`Lắng nghe, nhận biết câu chuyện âm nhạc, hình dáng, cách chơi và âm sắc của nhạc cụ dân tộc / nhạc cụ phương Tây.`);
    }
    if (subTopics.includes("Nghe nhạc")) {
      specificCompetencies.push(`Biết lắng nghe, cảm nhận giai điệu trong sáng, vui tươi và bộc lộ cảm xúc khi nghe tác phẩm âm nhạc.`);
    }
    if (subTopics.includes("Ôn tập") || subTopics.includes("Đánh giá")) {
      specificCompetencies.push(`Hệ thống hóa các bài hát, bài đọc nhạc, nhạc cụ đã học; tự tin biểu diễn trước lớp.`);
    }
    if (specificCompetencies.length < 3) {
      specificCompetencies.push("Phát triển cảm thụ thẩm mỹ âm nhạc, tự tin mạnh dạn tham gia biểu diễn nhóm.");
    }

    // Thiết bị dạy học
    const teacherMaterials = [
      "Đàn phím điện tử (Organ / Keyboard), máy tính kết nối tivi/máy chiếu, loa bluetooth giảng dạy.",
      `Học liệu số: File âm thanh mp3/mp4 bài "${songTitle}", video biểu diễn mẫu và tranh ảnh chủ đề "${official.theme}".`,
      "Bộ nhạc cụ gõ chuẩn trường học: Thanh phách gỗ, song loan, trống con, maracas, trai-eng-gồ."
    ];

    const studentMaterials = [
      `Sách giáo khoa Âm nhạc Lớp ${grade}, vở bài tập âm nhạc.`,
      "Nhạc cụ gõ cá nhân (thanh phách / vỗ tay theo phách), tâm thế thoải mái, ngồi ngay ngắn."
    ];

    // Trích xuất chỉ dẫn NLS / AI / QPAN cho các hoạt động
    const nlsNote = adjustments.includes("Năng lực số") ? adjustments.split("Năng lực số:")[1]?.split("Năng lực AI:")[0]?.split("* Lồng ghép")[0]?.trim() : "";
    const aiNote = adjustments.includes("Năng lực AI") ? adjustments.split("Năng lực AI:")[1]?.trim() : "";
    const qpanNote = adjustments.includes("QPAN") ? adjustments.split("* Lồng ghép GD QPAN:")[1]?.split("Năng lực số:")[0]?.trim() : "";

    const activities: LessonActivity[] = [
      {
        name: "1. Khởi động giọng & Kết nối bài học",
        objective: "Tạo tâm thế hào hứng, mở khẩu hình, làm ấm dây thanh quản và kết nối vào chủ đề bài học.",
        teacherActivity: `1. Đón học sinh vào phòng âm nhạc, nhắc nhở tư thế ngồi ngay ngắn, lưng thẳng, hai tay đặt trên đùi.
2. Hướng dẫn học sinh khởi động giọng theo đàn Organ:
   - Giáo viên đàn mẫu âm: Đồ - Mi - Son - Đố - Son - Mi - Đồ (theo âm "La" hoặc "Ma").
   - Bắt nhịp 1 - 2 cho cả lớp luyện thanh 3 lần từ thấp lên cao (nâng nửa cung mỗi lần).
3. Trò chơi khởi động kết nối:
   - Giáo viên mở một đoạn âm thanh ngắn hoặc đàn nét nhạc chủ đề "${official.theme}".
   - Đặt câu hỏi khơi gợi: "Giai điệu vừa rồi gợi cho các em cảm giác gì? Vui tươi, rộn rã hay êm đềm tha thiết?"
4. Nhận xét câu trả lời của học sinh và giới thiệu bài học: "${lessonTitle}".`,
        studentActivity: `1. Ổn định chỗ ngồi, tư thế ngay ngắn, thả lỏng cơ thể sẵn sàng tham gia tiết học.
2. Luyện thanh theo tiếng đàn Organ của cô giáo:
   - Lấy hơi bằng mũi, nén hơi nhẹ ở bụng, mở rộng khẩu hình chữ O/A.
   - Hát đồng thanh mẫu âm "La - Mi - Ma" tròn vành rõ chữ, đúng cao độ tiếng đàn.
3. Chăm chú lắng nghe đoạn nhạc khởi động, hào hứng giơ tay phát biểu cảm nhận.
4. Mở SGK Âm nhạc Lớp ${grade}, trang chủ đề "${official.theme}", sẵn sàng bước vào bài học mới.`
      },
      {
        name: "2. Khám phá & Hình thành kiến thức mới",
        objective: `Học sinh nắm vững nội dung bài học: ${lessonTitle}; tiếp nhận kiến thức trọng tâm bài học.`,
        teacherActivity: `1. Triển khai nội dung trọng tâm theo phân môn (${subTopics.join(", ")}):
${subTopics.includes("Hát") ? `   - Giới thiệu tác phẩm: Giới thiệu nhạc sĩ ${composer || "Việt Nam"} và ý nghĩa bài hát "${songTitle}".
   - Hát mẫu: Giáo viên hát mẫu toàn bài kết hợp đàn Organ (hoặc mở file âm thanh chuẩn mp3).
   - Đọc lời ca: Hướng dẫn học sinh đọc lời ca theo tiết tấu từng câu:
${lyrics ? '     "' + lyrics.split('\n').join(' - ') + '"' : '     "Lời ca chuẩn theo SGK"'}
   - Dạy hát từng câu: Đàn giai điệu 2 lần -> hát mẫu 1 lần -> bắt nhịp cho học sinh hát lại 2-3 lần. Ghép nối các câu liên tiếp cho đến hết bài.
   - Chỉnh sửa cao độ, nhịp điệu: Lắng nghe và uốn nắn những chỗ học sinh hát chưa đúng.` : ""}
${subTopics.includes("Đọc nhạc") ? `   - Giới thiệu bài đọc nhạc: Hướng dẫn học sinh nhận biết các nốt nhạc, khóa Sol, trường độ nốt.
   - Đọc tên nốt theo tiết tấu: Cho học sinh gõ phách đọc tên nốt nhạc.
   - Luyện thang âm: Đàn mẫu và hướng dẫn học sinh đọc cao độ kết hợp ký hiệu bàn tay (Curwen hand signs).
   - Đọc ghép cả bài hòa cùng tiếng đàn Organ.` : ""}
${subTopics.includes("Nhạc cụ") ? `   - Giới thiệu nhạc cụ gõ (thanh phách, song loan, trống con, maracas...): Cấu tạo, cách cầm và âm sắc.
   - Giáo viên thị phạm cách gõ đệm theo phách / theo nhịp 2/4.
   - Hướng dẫn học sinh gõ đệm mẫu tiết tấu chậm rãi.` : ""}
${subTopics.includes("Lí thuyết âm nhạc") ? `   - Hướng dẫn học sinh quan sát ví dụ trực quan trên màn hình chiếu về kí hiệu ghi nhạc.
   - Giải thích khái niệm một cách dễ hiểu, gần gũi với lứa tuổi học sinh tiểu học.` : ""}
${subTopics.includes("TTAN") || subTopics.includes("Thường thức") ? `   - Trình chiếu video/tranh ảnh minh họa nội dung câu chuyện âm nhạc hoặc nhạc cụ dân tộc.
   - Đặt câu hỏi gợi mở để học sinh tìm hiểu xuất xứ, đặc điểm âm sắc và vai trò của âm nhạc.` : ""}
${subTopics.includes("Nghe nhạc") ? `   - Mở tác phẩm nghe nhạc chuẩn chất lượng cao.
   - Hướng dẫn học sinh lắng nghe, cảm nhận tiết tấu, giai điệu và bộc lộ cảm xúc thông qua cử chỉ nhẹ nhàng.` : ""}
${nlsNote ? `2. Hướng dẫn ứng dụng Năng lực số (NLS):
   - ${nlsNote}` : ""}
${aiNote ? `3. Hướng dẫn nhận biết Trí tuệ nhân tạo (AI):
   - ${aiNote}` : ""}`,
        studentActivity: `1. Chăm chú theo dõi cô giáo hướng dẫn và tiếp thu kiến thức mới:
${subTopics.includes("Hát") ? `   - Lắng nghe cô giới thiệu tác giả ${composer || "Việt Nam"} và ý nghĩa bài hát "${songTitle}".
   - Lắng nghe cô hát mẫu trọn vẹn bài hát với nét mặt tươi vui, cảm nhận nhịp điệu.
   - Đọc lời ca to, rõ ràng, đồng thanh theo tiết tấu tay cô bắt nhịp.
   - Tập hát từng câu nối tiếp theo tiếng đàn Organ, chú ý lấy hơi đúng chỗ và phát âm chuẩn xác.
   - Chú ý sửa sai các nốt cao, nốt luyến theo hướng dẫn của cô.` : ""}
${subTopics.includes("Đọc nhạc") ? `   - Đọc tên nốt nhạc to, rõ theo nhịp chỉ huy của giáo viên.
   - Luyện đọc cao độ từng nốt theo ký hiệu bàn tay, phối hợp nhịp nhàng giữa mắt nhìn và giọng đọc.
   - Đọc bài nhạc hòa giọng cùng cả lớp và tiếng đàn.` : ""}
${subTopics.includes("Nhạc cụ") ? `   - Quan sát cô thị phạm cách cầm nhạc cụ gõ đúng tư thế.
   - Luyện tập gõ đệm theo nhịp, phách chậm rãi theo mẫu của cô.` : ""}
${subTopics.includes("TTAN") || subTopics.includes("Nghe nhạc") ? `   - Xem video/tranh ảnh minh họa trên màn hình tivi, ghi nhớ các chi tiết thú vị.
   - Thể hiện cảm xúc hào hứng, đung đưa người nhẹ nhàng theo nét nhạc tha thiết.` : ""}
${nlsNote ? `2. Thực hiện kỹ năng số: Quan sát đúng khoảng cách với màn hình thiết bị, thao tác an toàn theo chỉ dẫn của cô.` : ""}
${aiNote ? `3. Nhận biết và phân biệt: Hiểu được cảm xúc âm nhạc chân thực của con người so với âm thanh mô phỏng của máy móc/AI.` : ""}`
      },
      {
        name: "3. Luyện tập & Thực hành",
        objective: `Củng cố và rèn luyện thành thạo kỹ năng hát, đọc nhạc hoặc gõ đệm nhạc cụ; rèn luyện tinh thần hợp tác nhóm.`,
        teacherActivity: `1. Tổ chức luyện tập đa dạng hình thức:
   - Luyện tập tập thể cả lớp: Vừa hát / đọc nhạc vừa kết hợp gõ đệm thanh phách theo phách / theo nhịp.
   - Luyện tập theo dãy / tổ đối ứng:
     + Dãy 1 thể hiện giai điệu lời ca.
     + Dãy 2 cầm nhạc cụ gõ đệm giữ nhịp.
     + Đổi vai nhịp nhàng giữa các dãy.
   - Luyện tập theo nhóm 4 - 6 học sinh: Tự luyện tập và giúp đỡ lẫn nhau.
2. Giáo viên di chuyển quan sát từng nhóm:
   - Uốn nắn tư thế đứng, cách cầm thanh phách / nhạc cụ gõ.
   - Nhắc nhở các em hát hòa giọng đều đặn, không gào to làm vỡ giọng.
   - Hướng dẫn lồng ghép vận động cơ thể (Body Percussion: vỗ tay, nhún chân nhịp nhàng).
3. Đánh giá thường xuyên: Nhận xét tinh thần tập luyện của từng tổ, khích lệ các em còn rụt rè.`,
        studentActivity: `1. Tích cực tham gia luyện tập theo hiệu lệnh của cô giáo:
   - Cả lớp cùng thực hành hòa giọng nhịp nhàng cùng tiếng gõ đệm thanh phách giòn giã.
   - Tham gia hoạt động đối ứng: Dãy hát to rõ ràng, tròn vành rõ chữ; dãy gõ đệm giữ nhịp thật đều tay.
   - Phối hợp ăn ý với các bạn trong nhóm nhỏ, tự tin trao đổi và góp ý cho nhau.
2. Vận động cơ thể theo điệu nhạc: Vừa thể hiện bài học vừa nhún chân, vỗ tay nhịp nhàng theo phách.
3. Tiếp thu ý kiến nhận xét của cô giáo để hoàn thiện kỹ năng hát và gõ đệm.`
      },
      {
        name: "4. Vận dụng - Sáng tạo & Biểu diễn",
        objective: `Học sinh tự tin biểu diễn trước tập thể, vận dụng kiến thức vào thực tế, bồi dưỡng tình yêu quê hương đất nước và phẩm chất tốt đẹp.`,
        teacherActivity: `1. Tổ chức sân khấu âm nhạc nhỏ tại lớp:
   - Mời đại diện các nhóm lên bục giảng biểu diễn báo cáo kết quả học tập.
   - Khuyến khích nhóm sáng tạo thêm động tác phụ họa hoặc kết hợp hòa tấu nhạc cụ gõ.
2. Hướng dẫn học sinh dưới lớp nhận xét, đánh giá đồng đẳng:
   - Gợi ý tiêu chí: Hát thuộc lời chưa? Gõ đệm có đều nhịp không? Biểu cảm nét mặt có vui tươi, tự tin không?
3. Nhận xét, tuyên dương và củng cố dặn dò:
   - Khen ngợi tinh thần tự tin, sáng tạo của các nhóm. Tuyên dương cá nhân có nhiều tiến bộ.
${qpanNote ? `   - Lồng ghép GD QPAN & Tình yêu quê hương: ${qpanNote}` : `   - Giáo dục tư tưởng: Khắc sâu tình yêu quê hương, mái trường, thầy cô và bạn bè thông qua nội dung bài học.`}
   - Dặn dò học sinh về nhà thể hiện bài học cho ông bà, bố mẹ cùng thưởng thức.`,
        studentActivity: `1. Tự tin bước lên sân khấu lớp biểu diễn cùng nhóm:
   - Cúi đầu chào cô giáo và các bạn với nụ cười rạng rỡ.
   - Phối hợp nhịp nhàng giữa tiếng hát, tiếng gõ đệm nhạc cụ và các động tác vận động phụ họa duyên dáng.
   - Kết thúc tiết mục trong tiếng vỗ tay nồng nhiệt và cúi chào cảm ơn khán giả.
2. Lắng nghe bạn biểu diễn và nhiệt tình cổ vũ:
   - Giơ tay nhận xét bạn với tinh thần xây dựng và khen ngợi những ưu điểm của nhóm bạn.
3. Lắng nghe cô dặn dò, ghi nhớ bài học ý nghĩa về tình cảm quê hương, gia đình và bạn bè.
4. Hân hoan chuẩn bị góc học tập gọn gàng khi kết thúc tiết học.`
      }
    ];

    return {
      songTitle,
      composer,
      lessonTitle,
      songLyrics: lyrics,
      specificCompetencies,
      teacherMaterials,
      studentMaterials,
      integrationNotes: adjustments || "Tích hợp thẩm mỹ âm nhạc & năng lực số",
      activities
    };
  }

  // 2. TĂNG CƯỜNG / BỒI DƯỠNG ÂM NHẠC (Buổi Chiều - Nâng cao kỹ năng, Bộ gõ cơ thể & Biểu diễn sáng tạo)
  const enhanceLessonTitle = `Tăng cường Âm nhạc Lớp ${grade}: Rèn luyện kỹ năng, Body Percussion & Biểu diễn sáng tạo (${baseTitle})`;

  const specificCompetencies = [
    `Rèn luyện kỹ năng luyện thanh nâng cao, mở rộng âm vực, nhả chữ tròn vành rõ tiếng, biết hát biểu cảm sắc thái to - nhỏ (f - p).`,
    `Thực hành thành thạo bộ gõ cơ thể (Body Percussion): kết hợp vỗ tay (Clap), vỗ đùi (Pat), búng tay (Snap), dậm chân (Stamp) theo nhịp bài học.`,
    `Phát triển năng khiếu âm nhạc cá nhân, tự tin biểu diễn đơn ca, song ca, tốp ca kết hợp đạo cụ và múa phụ họa.`
  ];

  const teacherMaterials = [
    "Đàn phím điện tử Organ cài đặt sẵn các tiết điệu (Styles) phong phú: Pop, March, Ballad, Dân ca.",
    "Bộ nhạc cụ gõ đa dạng: Thanh phách gỗ, song loan, trống gõ tay, tambourine lục lạc, maracas quả lắc.",
    `Lời ca in khổ lớn bài hát / bản nhạc và sơ đồ hướng dẫn động tác Body Percussion chi tiết.`
  ];

  const studentMaterials = [
    "Thanh phách gõ cá nhân, nhạc cụ gõ tự chọn của tổ (trống nhỏ, song loan, tambourine).",
    "Trang phục biểu diễn gọn gàng, tâm thế thoải mái sẵn sàng vận động toàn thân."
  ];

  const activities: LessonActivity[] = [
    {
      name: "1. Khởi động giọng chuyên sâu & Trò chơi tiết tấu (Warm-up & Rhythm Echo)",
      objective: "Luyện hơi thở sâu từ cơ hoành, mở rộng quãng giọng và kích hoạt phản xạ tiết tấu nhanh nhạy.",
      teacherActivity: `1. Kiểm tra sĩ số lớp tăng cường, ổn định vị trí theo hình chữ U để tiện quan sát vận động.
2. Hướng dẫn bài tập thở bụng sâu: "Hít vào từ từ bằng mũi (bụng phình ra) - Giữ hơi 4 giây - Thở ra bằng miệng xì nhẹ (Xì... kéo dài 8 giây)". Thực hiện 3 lần.
3. Luyện thanh mở rộng âm vực: Đàn gam Đồ trưởng (C major), cho học sinh luyện theo mẫu âm nảy tiếng (staccato) "Ha - Ha - Ha" và liền tiếng (legato) "Mô - Ô - Ô - Ma".
4. Trò chơi tiết tấu: Giáo viên vỗ mẫu tiết tấu 2/4, học sinh lắng nghe và vỗ lại như tiếng vọng âm thanh.`,
      studentActivity: `1. Đứng vào vị trí hình vòng cung, tư thế vững vàng, hai chân mở rộng bằng vai, thả lỏng vai.
2. Thực hiện bài tập thở cơ hoành theo hiệu lệnh của cô giáo, kiểm soát luồng hơi đều đặn.
3. Luyện thanh theo tiếng đàn Organ: Hát nảy tiếng tròn trịa và hát liền giọng mượt mà theo đúng cao độ.
4. Tham gia trò chơi tiết tấu: Lắng nghe chăm chú và vỗ tay đáp lại chuẩn xác từng nhịp phách mạnh - nhẹ.`
    },
    {
      name: "2. Luyện tập nâng cao: Sắc thái biểu cảm & Hòa giọng bè",
      objective: `Nâng cao độ tinh tế về nhả chữ, ngân nghỉ, luyến láy và thể hiện rõ sắc thái to (f) - nhỏ (p) trong bài học "${songTitle}".`,
      teacherActivity: `1. Hướng dẫn kỹ thuật nhả chữ và lấy hơi sâu: Chỉ rõ chỗ lấy hơi nhanh và chỗ ngân dài đủ phách.
2. Luyện tập sắc thái đối lập:
   - Đoạn 1: Hát vừa phải (mf), tình cảm, êm dịu.
   - Đoạn cao trào: Hát hào sảng, mạnh mẽ (f), bộc lộ niềm vui tươi sáng.
3. Luyện tập hát đối đáp xướng - xô: Nhóm Nam hát vế 1, Nhóm Nữ hát vế 2, cả lớp hòa giọng điệp khúc.
4. Ghi âm phần thể hiện của nhóm bằng máy tính bảng hoặc điện thoại để học sinh nghe lại và tự đánh giá.`,
      studentActivity: `1. Đọc lại lời ca, ghi nhớ mạch cảm xúc và kỹ thuật lấy hơi theo hướng dẫn của cô.
2. Thực hành hát theo sắc thái biểu cảm to - nhỏ, thể hiện sự tinh tế trong giọng hát.
3. Phối hợp ăn ý trong phần đối đáp xướng - xô giữa các nhóm.
4. Lắng nghe lại file ghi âm của nhóm mình, cùng bạn tự đánh giá ưu điểm và điểm cần khắc phục.`
    },
    {
      name: "3. Thực hành chuyên sâu Body Percussion & Hòa tấu bộ gõ",
      objective: `Kết hợp nhuần nhuyễn giữa giọng hát và chuỗi vận động gõ đệm cơ thể (Body Percussion) cùng nhạc cụ gõ đa dạng.`,
      teacherActivity: `1. Hướng dẫn chuỗi động tác Body Percussion 4 bước:
   - Phách 1: Vỗ đùi (Pat)
   - Phách 2: Vỗ tay (Clap)
   - Phách 3: Búng ngón tay hoặc dậm chân (Snap/Stamp)
   - Phách 4: Vỗ tay đôi (Clap - Clap).
2. Thị phạm chậm và bắt nhịp cho học sinh tập không nhạc, sau đó ghép vào bài học "${songTitle}".
3. Phân công hòa tấu bộ gõ: Tổ 1 gõ thanh phách giữ nhịp, Tổ 2 gõ trống con điểm phách mạnh, Tổ 3 lắc tambourine/maracas, Tổ 4 thực hiện Body Percussion.`,
      studentActivity: `1. Quan sát cô giáo thị phạm từng bước vận động cơ thể, luyện tập từ chậm đến nhanh.
2. Vừa thể hiện bài học vừa thực hiện chuỗi động tác Body Percussion ăn khớp với tiết tấu.
3. Nhận nhạc cụ được phân công của tổ, hòa tấu nhịp nhàng tạo nên một dàn nhạc bộ gõ rộn rã.`
    },
    {
      name: "4. Dàn dựng sân khấu & Báo cáo tiết mục biểu diễn",
      objective: `Tự tin biểu diễn tiết mục hoàn chỉnh theo phong cách nghệ thuật sân khấu học đường; biết tự nhận xét và đánh giá bạn.`,
      teacherActivity: `1. Chia lớp thành 2 đội biểu diễn: Đội "Giai Điệu Tuổi Thơ" và Đội "Những Nốt Nhạc Vui".
2. Hướng dẫn cách dàn dựng đội hình sân khấu: Hàng trước múa phụ họa và Body Percussion, hàng sau hòa tấu nhạc cụ gõ.
3. Tổ chức cho từng đội lên sân khấu lớp biểu diễn trên nền nhạc Beat sôi động.
4. Giáo viên tổng kết, tuyên dương sự sáng tạo và tiến bộ của học sinh trong buổi học bồi dưỡng.`,
      studentActivity: `1. Nhanh chóng di chuyển vào vị trí đội hình sân khấu đã được phân công.
2. Tự tin biểu diễn trọn vẹn tiết mục với nụ cười rạng rỡ, động tác dứt khoát, âm nhạc hòa quyện.
3. Cổ vũ nhiệt tình cho đội bạn, mạnh dạn đóng góp ý kiến nhận xét mang tính xây dựng.
4. Hân hoan đón nhận lời khen ngợi và danh hiệu "Ngôi sao Âm nhạc của tuần".`
    }
  ];

  return {
    songTitle,
    composer,
    lessonTitle: enhanceLessonTitle,
    songLyrics: lyrics,
    specificCompetencies,
    teacherMaterials,
    studentMaterials,
    integrationNotes: adjustments ? `Tăng cường: ${adjustments}` : "Tăng cường năng lực thực hành âm nhạc & Body Percussion",
    activities
  };
}
