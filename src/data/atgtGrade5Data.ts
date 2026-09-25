import { LessonActivity } from "../types";

export interface ATGTGrade5Lesson {
  lessonNumber: number;
  title: string;
  subTitle?: string;
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  part1: {
    periodTitle: string;
    activities: LessonActivity[];
  };
  part2: {
    periodTitle: string;
    activities: LessonActivity[];
  };
}

/**
 * 5 BÀI GIÁO DỤC AN TOÀN GIAO THÔNG LỚP 5
 * Trích xuất chuẩn xác 100% theo Tài liệu Kế hoạch bài dạy Giáo dục An toàn Giao thông Lớp 5 (10 trang).
 * Mỗi bài dạy trong 2 tuần (mỗi tuần 1 tiết 15 phút vào Tiết 4 Thứ Sáu):
 * - Bài 1: Tuần 3 (Tiết 1) & Tuần 4 (Tiết 2)
 * - Bài 2: Tuần 5 (Tiết 1) & Tuần 6 (Tiết 2)
 * - Bài 3: Tuần 7 (Tiết 1) & Tuần 8 (Tiết 2)
 * - Bài 4: Tuần 9 (Tiết 1) & Tuần 10 (Tiết 2)
 * - Bài 5: Tuần 11 (Tiết 1) & Tuần 12 (Tiết 2)
 */
export const ATGT_GRADE_5_LESSONS: Record<number, ATGTGrade5Lesson> = {
  // =========================================================================
  // BÀI 1: ĐIỀU KHIỂN XE ĐẠP CHUYỂN HƯỚNG AN TOÀN (Trang 1 - 2 PDF)
  // =========================================================================
  1: {
    lessonNumber: 1,
    title: "Bài 1: Điều khiển xe đạp chuyển hướng an toàn",
    subTitle: "An toàn giao thông",
    specificCompetencies: [
      "Hiểu và ghi nhớ cách điều khiển chuyển hướng an toàn.",
      "Biết cách phối hợp các động tác điều khiển xe đạp khi chuyển hướng.",
      "Có ý thức chấp hành các quy định về điều khiển xe đạp khi tham gia giao thông.",
      "Nhận biết và phòng tránh một số hành vi nguy hiểm khi điều khiển xe đạp chuyển hướng.",
      "Thực hiện, chia sẻ và hướng dẫn người khác cùng thực hiện."
    ],
    teacherMaterials: [
      "Tài liệu giáo dục An toàn giao thông.",
      "Mô hình an toàn giao thông.",
      "Tranh ảnh minh họa các bộ phận xe đạp và tình huống chuyển hướng xe đạp an toàn."
    ],
    studentMaterials: [
      "Vở ghi chép."
    ],
    part1: {
      periodTitle: "Bài 1: Điều khiển xe đạp chuyển hướng an toàn (Tiết 1)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Tổ chức trò chơi “kể các bộ phận của xe đạp”.
- Cho quan sát tranh yêu cầu học sinh kể các bộ phận của xe đạp còn thiếu.
- GV tổng hợp lại ý kiến của Học sinh (HS) tuyên dương.
- Xe như thế nào chúng ta mới điều khiển được?
- GV kết luận: Khi điều khiển xe đạp an toàn thì xe phải có đủ các bộ phận và có thể di chuyển được.`,
          studentActivity: `- Học sinh lần lượt kể tên các bộ phận của xe đạp.
- Lần lượt kể tên các bộ phận còn thiếu khi quan sát tranh.
- HS quan sát tranh và suy nghĩ.
- HS trả lời câu hỏi: Xe phải có đủ các bộ phận hoạt động tốt thì mới điều khiển an toàn được.
- HS trả lời, lắng nghe và tiếp thu.`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `* 1. Tìm hiểu các bước điều khiển xe đạp chuyển hướng an toàn:
- GV yêu cầu HS quan sát tranh và nêu các bước điều khiển xe đạp chuyển hướng an toàn đối với đường nông thôn không có tín hiệu đèn và đường có tín hiệu đèn.
- Giáo viên yêu cầu học sinh trình bày theo nhóm.
- GV Nhận xét – tuyên dương.
- GV liên hệ giáo dục HS thực tế qua hình ảnh giao thông tại địa phương.
- GV tổ chức HS tìm ra những phương cách phòng tránh tai nạn giao thông khi điều khiển xe đạp.
- Yêu cầu học sinh tìm hiểu một số hành vi nguy hiểm khi chuyển hướng.
- GV kết luận.
- GV tuyên dương, nhận xét.`,
          studentActivity: `- HS quan sát tranh và thảo luận theo nhóm.
- HS báo cáo kết quả thảo luận của nhóm về các bước điều khiển xe đạp chuyển hướng an toàn.
- HS nêu cá nhân ý kiến nhận xét, bổ sung.
- HS thực hiện theo nhóm (4 học sinh) tìm hiểu thực tế giao thông tại địa phương.
- HS nêu phần cần ghi nhớ về các bước chuyển hướng an toàn.
- Học sinh tự nêu các hành vi nguy hiểm khi chuyển hướng xe đạp (rẽ đột ngột, không quan sát, sang đường ẩu).`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- Cho học sinh nhắc lại các bước cơ bản khi điều khiển xe đạp chuyển hướng an toàn vừa khám phá.
- Hướng dẫn học sinh quan sát tranh xác định động tác báo hiệu xin đường khi chuyển hướng.
- GV nhận xét, tuyên dương các câu trả lời chính xác.`,
          studentActivity: `- Học sinh nhắc lại các bước chuyển hướng an toàn: Xác định hướng rẽ -> Giảm tốc độ -> Ra tín hiệu báo rẽ -> Quan sát an toàn và chuyển hướng từ từ.
- Quan sát tranh và thực hiện mô phỏng động tác đưa tay xin đường.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Nhắc nhở học sinh luôn chú ý quan sát và thực hiện chuyển hướng xe đạp đúng quy định khi đi học và về nhà.
- Dặn dò học sinh chuẩn bị nội dung thực hành nhận xét tranh cho Tiết 2.`,
          studentActivity: `- Lắng nghe giáo viên dặn dò và cam kết thực hiện đúng quy định chuyển hướng an toàn khi đi xe đạp.`
        }
      ]
    },
    part2: {
      periodTitle: "Bài 1: Điều khiển xe đạp chuyển hướng an toàn (Tiết 2)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Tổ chức cho học sinh nhắc lại các bước điều khiển xe đạp chuyển hướng an toàn đã học ở Tiết 1.
- Tuyên dương học sinh ghi nhớ tốt kiến thức và dẫn dắt vào phần Thực hành, Vận dụng.`,
          studentActivity: `- Học sinh hào hứng tham gia trả lời, nhắc lại các bước chuyển hướng an toàn khi đi xe đạp nơi có đèn tín hiệu và nơi không có đèn tín hiệu.`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `- Cho học sinh quan sát lại các bức tranh trong tài liệu ATGT về hành vi chuyển hướng đúng và hành vi nguy hiểm khi chuyển hướng.
- Nhấn mạnh các điểm cần ghi nhớ để chuẩn bị cho phần thực hành nhận xét tình huống.`,
          studentActivity: `- Học sinh quan sát tranh, khắc sâu các quy tắc an toàn và các hành vi nguy hiểm cần phòng tránh.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- Yêu cầu học sinh quan sát tranh và nhận xét cách chuyển hướng của bạn nhỏ trong tranh.
- Yêu cầu học sinh liên hệ thực tế của bản thân khi tham gia giao thông.
- GV Nhận xét tuyên dương.`,
          studentActivity: `- Thảo luận nhóm đôi quan sát tranh và phân tích hành vi của bạn nhỏ trong từng bức tranh.
- HS trả lời: Nêu rõ bạn nhỏ chuyển hướng đúng hay sai, có nguy hiểm gì.
- Lần lượt nêu liên hệ thực tế của bản thân khi đi xe đạp tham gia giao thông hằng ngày.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Tổ chức cho học sinh kể cho nhau nghe cách chuyển hướng từ nhà đến trường và ngược lại.
- GV tổng kết, nhận xét, dặn dò học sinh chia sẻ và hướng dẫn người thân, bạn bè cùng thực hiện chuyển hướng xe đạp an toàn.`,
          studentActivity: `- HS thực hiện kể cho bạn nghe cách chuyển hướng từ nhà đến trường và ngược lại theo lộ trình thực tế của mình.
- HS trình bày trước lớp, chia sẻ kinh nghiệm xử lý an toàn tại các điểm giao cắt trên đường đi học.`
        }
      ]
    }
  },

  // =========================================================================
  // BÀI 2: PHÒNG TRÁNH TAI NẠN GIAO THÔNG NƠI TẦM NHÌN BỊ CHE KHUẤT (Trang 3 - 4 PDF)
  // =========================================================================
  2: {
    lessonNumber: 2,
    title: "Bài 2: Phòng tránh tai nạn giao thông nơi tầm nhìn bị che khuất",
    subTitle: "An toàn giao thông",
    specificCompetencies: [
      "Nhận biết được một số tình huống có thể xảy ra tai nạn giao thông ở những nơi khuất tầm nhìn.",
      "Hình thành khả năng dự đoán và biết cách phòng tránh một số tình huống có thể xảy ra tai nạn giao thông ở nơi che khuất tầm nhìn.",
      "Chia sẻ với người khác về cách phòng tránh tai nạn giao thông ở những nơi khuất tầm nhìn."
    ],
    teacherMaterials: [
      "Tài liệu giáo dục An toàn giao thông.",
      "Thiết bị trình chiếu, nghe nhìn.",
      "Mô hình an toàn giao thông."
    ],
    studentMaterials: [
      "Vở ghi chép."
    ],
    part1: {
      periodTitle: "Bài 2: Phòng tránh tai nạn giao thông nơi tầm nhìn bị che khuất (Tiết 1)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Tổ chức trò chơi “lái xe an toàn”.
- Hướng dẫn một học sinh dùng xe đạp và thực hiện những động tác khi sang đường.
- GV thực hiện và đặt câu hỏi: Xác định đúng sai trong bức ảnh trên có hành động đúng hay sai?
- GV tổng hợp lại ý kiến của Học sinh (HS) tuyên dương.
- GV trình chiếu đoạn video về một vụ tai nạn giao thông ở nơi tầm nhìn bị che khuất.
- GV đặt câu hỏi: Nguyên nhân dẫn đến vụ tai nạn trong đoạn video trên là gì?`,
          studentActivity: `- Học sinh quan sát tranh và trả lời (những hành động đúng và những hành động sai).
- HS quan sát video cẩn thận.
- HS trả lời các câu hỏi của giáo viên.
- HS quan sát tranh/video mô phỏng.
- HS trả lời: Do vị trí bị che khuất tầm nhìn, lái xe không quan sát được chướng ngại vật/phương tiện khác nên dẫn đến tai nạn.`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `* 1. Tìm hiểu những nơi tầm nhìn bị che khuất có thể xảy ra tai nạn giao thông:
- GV yêu cầu HS quan sát tranh và chỉ ra những nơi bị che khuất có thể xảy ra tai nạn giao thông.
- Giáo viên yêu cầu học sinh trình bày.
- GV Nhận xét – tuyên dương.
- GV liên hệ giáo dục HS thực tế qua hình ảnh giao thông tại địa phương.
- GV tổ chức HS tìm ra những phương cách phòng tránh nguy cơ xảy ra tai nạn giao thông nơi tầm nhìn che khuất.
- GV kết luận.
- GV tuyên dương, nhận xét.`,
          studentActivity: `- HS quan sát tranh và thảo luận nhóm.
- HS báo cáo kết quả: Chỉ ra các nơi tầm nhìn bị che khuất (đoạn đường cong cua gấp, ngõ khuất sau tường bao cao, sau xe buýt/xe tải đang đỗ, cây cối rậm rạp che khuất biển báo...).
- HS nêu cá nhân ý kiến bổ sung.
- HS thực hiện theo nhóm (4 học sinh) tìm hiểu nguy cơ giao thông tại địa phương mình.
- HS nêu phần cần ghi nhớ về các phương cách phòng tránh nguy cơ xảy ra tai nạn giao thông nơi tầm nhìn che khuất.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- Cho học sinh chỉ ra các địa điểm cụ thể gần trường học hoặc trên đường làng có tầm nhìn bị che khuất.
- Hướng dẫn học sinh cách đi chậm, bấm chuông cảnh báo và dừng lại quan sát cẩn thận khi tới gần nơi bị che khuất tầm nhìn.
- GV nhận xét, tuyên dương.`,
          studentActivity: `- Học sinh nêu các điểm nguy hiểm gần trường hoặc nơi mình sinh sống.
- Thực hành trả lời cách xử lý an toàn: Đi chậm, giảm tốc độ, bấm chuông hoặc còi báo hiệu, quan sát kĩ hai bên trước khi đi qua.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Nhắc nhở học sinh luôn chú ý cảnh giác khi đi qua những nơi bị che khuất tầm nhìn trên đường đi học hằng ngày.
- Chuẩn bị ý tưởng cho hoạt động đóng vai và vẽ tranh ở Tiết 2.`,
          studentActivity: `- Lắng nghe và ghi nhớ quy tắc phòng tránh tai nạn nơi khuất tầm nhìn.`
        }
      ]
    },
    part2: {
      periodTitle: "Bài 2: Phòng tránh tai nạn giao thông nơi tầm nhìn bị che khuất (Tiết 2)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Khởi động ôn lại các vị trí có tầm nhìn bị che khuất và nguyên nhân dễ dẫn đến tai nạn giao thông đã học ở Tiết 1.
- Dẫn dắt vào phần Thực hành đóng vai và Vận dụng vẽ tranh.`,
          studentActivity: `- Học sinh tham gia trò chơi đố vui, nhắc lại các vị trí nguy hiểm bị che khuất tầm nhìn.`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `- Khắc sâu các kĩ năng quan sát, giảm tốc độ và phát tín hiệu khi đi qua nơi bị khuất tầm nhìn.
- Hướng dẫn các nhóm chuẩn bị kịch bản đóng vai xử lý tình huống giao thông.`,
          studentActivity: `- Học sinh lắng nghe, thảo luận nhanh trong nhóm để phân vai và xây dựng tình huống.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- GV Xây dựng tình huống giao thông khi bị che khuất tầm nhìn.
- GV yêu cầu HS nhận xét và tìm những hành động của các nhân vật trong tình huống khi đến những nơi bị che khuất tầm nhìn.
- GV Nhận xét tuyên dương.`,
          studentActivity: `- HS đóng vai theo yêu cầu, hướng dẫn của GV (mô phỏng người đi xe đạp/đi bộ đi đến góc cua khuất tầm nhìn).
- HS trả lời, nhận xét hành động của các nhân vật trong tình huống: Chỉ ra hành động nào an toàn, hành động nào nguy hiểm và đưa ra cách xử lý đúng.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- GV tổ chức trò chơi “Vẽ tranh: Con đường đến trường”.
- GV yêu cầu chỉ ra những nguy hiểm cũng như cách phòng tránh tai nạn cho trường hợp đó.
- GV nhận xét, đánh giá sản phẩm của học sinh và tuyên dương tinh thần học tập.`,
          studentActivity: `- HS thực hiện vẽ tranh / phác thảo sơ đồ con đường đến trường của mình.
- HS trình bày tranh vẽ trước lớp, chỉ ra các đoạn đường bị che khuất tầm nhìn và nêu rõ cách phòng tránh tai nạn cho từng trường hợp đó.`
        }
      ]
    }
  },

  // =========================================================================
  // BÀI 3: THAM GIA GIAO THÔNG ĐƯỜNG HÀNG KHÔNG AN TOÀN (Trang 5 - 6 PDF)
  // =========================================================================
  3: {
    lessonNumber: 3,
    title: "Bài 3: Tham gia giao thông đường hàng không an toàn",
    subTitle: "An toàn giao thông",
    specificCompetencies: [
      "Tìm hiểu một số qui định khi tham gia giao thông đường hàng không.",
      "Tuân thủ thực hiện các qui định khi tham gia giao thông đường hàng không an toàn.",
      "Nhận biết một số hành vi cần tránh khi tham gia giao thông đường hàng không.",
      "Biết cách xử lí sự cố đơn giản khi tham gia giao thông đường hàng không.",
      "Chia sẻ, nhắc nhở người khác thực hiện các qui định khi tham gia giao thông đường hàng không."
    ],
    teacherMaterials: [
      "Tài liệu giáo dục an toàn giao thông.",
      "Thiết bị trình chiếu, nghe nhìn (video hướng dẫn an toàn bay)."
    ],
    studentMaterials: [
      "Vở ghi chép."
    ],
    part1: {
      periodTitle: "Bài 3: Tham gia giao thông đường hàng không an toàn (Tiết 1)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Cho học sinh xem phim hướng dẫn đường bay an toàn.
- Đặt câu hỏi định hướng: Đoạn phim hướng dẫn hành khách những điều gì khi chuẩn bị lên máy bay?`,
          studentActivity: `- HS quan sát video hướng dẫn an toàn đường bay.
- Trả lời nhanh: Hướng dẫn thắt dây an toàn, tắt điện thoại di động, lắng nghe hướng dẫn của tiếp viên hàng không...`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `* 1. Tìm hiểu những việc cần làm khi tham gia giao thông đường hàng không:
- GV yêu cầu HS quan sát tranh và đọc thông tin để tìm hiểu những việc cần làm khi tham gia giao thông đường hàng không.
- Giáo viên yêu cầu học sinh trình bày.
- GV Nhận xét – tuyên dương.
* 2. Tìm hiểu một số hành vi cần tránh khi tham gia giao thông đường hàng không:
- Yêu cầu quan sát tranh và tìm hiểu một số hành vi không được làm khi tham gia giao thông đường hàng không.
- GV kết luận.
- GV tuyên dương, nhận xét.`,
          studentActivity: `- HS quan sát tranh và thảo luận trong nhóm.
- HS báo cáo kết quả: Những việc cần làm (đến sân bay đúng giờ, làm thủ tục check-in, thắt dây an toàn khi máy bay cất cánh/hạ cánh, tuân thủ hướng dẫn của phi hành đoàn...).
- HS nêu cá nhân ý kiến bổ sung.
- Thảo luận và tham gia trả lời về các hành vi cần tránh (không tự ý mở cửa thoát hiểm, không mang vật phẩm cháy nổ cấm, không gây mất trật tự trên máy bay...).
- HS nêu phần cần ghi nhớ.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- Đưa ra các câu hỏi trắc nghiệm / câu đố nhanh về quy định an toàn hàng không:
  + Khi máy bay chuẩn bị cất cánh, hành khách cần làm gì?
  + Có được tự ý sử dụng các thiết bị điện tử khi máy bay cất/hạ cánh không?
- Nhận xét, chốt kiến thức đúng.`,
          studentActivity: `- Học sinh suy nghĩ, xung phong trả lời nhanh các câu hỏi.
- Khắc sâu các quy định cần tuân thủ nghiêm ngặt khi đi máy bay.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Dặn dò học sinh ghi nhớ các quy định an toàn hàng không và chuẩn bị cho phần nhận xét hành vi trong tranh ở Tiết 2.`,
          studentActivity: `- Lắng nghe và ghi nhớ bài học.`
        }
      ]
    },
    part2: {
      periodTitle: "Bài 3: Tham gia giao thông đường hàng không an toàn (Tiết 2)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Tổ chức trò chơi trắc nghiệm vui: "Hành khách thông thái" ôn lại các quy định đường hàng không đã học ở Tiết 1.
- Dẫn dắt vào phần Thực hành và Vận dụng.`,
          studentActivity: `- Học sinh tham gia trò chơi, lựa chọn đáp án đúng/sai về hành vi an toàn hàng không.`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `- Chiếu lại hình ảnh các tình huống trong tài liệu ATGT về hành vi đúng và chưa đúng khi đi máy bay.
- Nhắc lại kỹ năng ứng xử và xử lý sự cố đơn giản (sử dụng mặt nạ dưỡng khí, áo phao theo hướng dẫn).`,
          studentActivity: `- Học sinh quan sát, củng cố quy tắc ứng xử an toàn trên máy bay.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- Yêu cầu quan sát và chỉ ra những hành vi chưa đúng khi tham gia giao thông đường hàng không.
- GV yêu cầu HS nhận xét và tìm những hành động của các nhân vật trong tình huống khi tham gia giao thông đường hàng không.
- GV Nhận xét tuyên dương.`,
          studentActivity: `- Thảo luận nhóm và nêu các hành vi chưa đúng trong từng bức tranh.
- HS trả lời: Phân tích vì sao hành vi đó chưa đúng, hành vi đó có thể gây nguy hiểm gì và tìm ra hành động đúng mà nhân vật cần thực hiện.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Yêu cầu học sinh tự xây dựng những việc cần làm khi mình tham gia giao thông đường hàng không.
- GV nhận xét, tuyên dương các kế hoạch an toàn chi tiết của học sinh.`,
          studentActivity: `- HS thực hiện tự xây dựng danh sách những việc cần làm khi mình tham gia giao thông đường hàng không (chuẩn bị giấy tờ, đến sân bay, lên máy bay, thắt dây an toàn, xử lý tình huống...).
- HS trình bày sản phẩm trước lớp, chia sẻ và nhắc nhở các bạn cùng thực hiện.`
        }
      ]
    }
  },

  // =========================================================================
  // BÀI 4: ỨNG XỬ KHI GẶP SỰ CỐ GIAO THÔNG (Trang 7 - 8 PDF)
  // =========================================================================
  4: {
    lessonNumber: 4,
    title: "Bài 4: Ứng xử khi gặp sự cố giao thông",
    subTitle: "An toàn giao thông",
    specificCompetencies: [
      "Nhận biết một số sự cố giao thông thường gặp.",
      "Biết cách ứng xử một số tình huống giao thông không an toàn.",
      "Thực hiện, chia sẻ với người khác những kĩ năng xử lí sự cố giao thông."
    ],
    teacherMaterials: [
      "Tài liệu giáo dục an toàn giao thông.",
      "Thiết bị trình chiếu, nghe nhìn.",
      "Tranh các sự cố giao thông (ùn tắc, hỏng xe, va chạm, tai nạn giao thông)."
    ],
    studentMaterials: [
      "Vở ghi chép."
    ],
    part1: {
      periodTitle: "Bài 4: Ứng xử khi gặp sự cố giao thông (Tiết 1)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Cho học sinh xem phim về sự cố giao thông (ùn tắc giao thông, va chạm xe cộ trên đường).
- Đặt câu hỏi tìm hiểu nguyên nhân xảy ra sự cố trong video.`,
          studentActivity: `- HS quan sát video chú ý.
- Tham gia trả lời câu hỏi: Nêu nguyên nhân gây ra sự cố giao thông (do thời tiết xấu, xe cộ đông đúc không chấp hành luật, phóng nhanh vượt ẩu, xe bị hỏng hóc giữa đường...).`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `* 1. Tìm hiểu một số sự cố giao thông thường xảy ra:
- GV yêu cầu HS quan sát tranh và nêu nguyên nhân gây ra sự cố giao thông.
- Giáo viên yêu cầu học sinh trình bày.
- Yêu cầu học sinh tìm hiểu một số nguyên nhân khác gây ra sự cố.
- GV Nhận xét – tuyên dương.
* 2. Tìm hiểu cách ứng xử khi gặp sự cố:
- Yêu cầu quan sát tranh và đọc thông tin về cách ứng xử khi gặp sự cố:
  + Khi xảy ra tắc đường.
  + Khi nhìn thấy tai nạn giao thông.
- GV kết luận.
- GV tuyên dương, nhận xét.`,
          studentActivity: `- HS quan sát tranh và thảo luận trong nhóm.
- HS báo cáo kết quả thảo luận về các sự cố thường gặp (tắc đường, ngập nước, tai nạn giao thông, hỏng xe).
- HS nêu cá nhân ý kiến về các nguyên nhân khác dẫn đến sự cố giao thông.
- Thảo luận và tham gia trả lời về cách ứng xử:
  + Khi tắc đường: Kiên nhẫn xếp hàng, không chen lấn, không đi lên vỉa hè, tuân theo sự điều tiết của chú CSGT.
  + Khi thấy tai nạn: Giữ bình tĩnh, không tụ tập gây cản trở, hô hoán người lớn hỗ trợ, gọi số 115 (cấp cứu) hoặc 113 (công an).
- HS nêu phần cần ghi nhớ.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- Cho học sinh nhắc lại các số điện thoại khẩn cấp cần liên hệ khi gặp tai nạn giao thông (115, 113).
- Đặt câu hỏi củng cố: "Nếu em đang đi bộ thấy hai xe máy va chạm nhau trên đường, em sẽ làm gì đầu tiên?"
- Nhận xét và chốt câu trả lời đúng.`,
          studentActivity: `- Học sinh nhắc lại các số điện thoại khẩn cấp: 115 (Cấp cứu y tế), 113 (Cảnh sát giao thông / Công an).
- Trả lời: Báo ngay cho người lớn ở gần đó nhất để giúp đỡ người bị nạn, không tự ý xông vào đường xe cộ đông đúc.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Dặn dò học sinh ghi nhớ các nguyên tắc ứng xử khi gặp sự cố giao thông và chuẩn bị sắm vai tình huống cho Tiết 2.`,
          studentActivity: `- Lắng nghe và ghi nhớ bài học.`
        }
      ]
    },
    part2: {
      periodTitle: "Bài 4: Ứng xử khi gặp sự cố giao thông (Tiết 2)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Khởi động ôn lại các nguyên tắc ứng xử khi gặp ùn tắc giao thông và tai nạn giao thông đã học ở Tiết 1.
- Dẫn dắt vào phần Sắm vai xử lý tình huống và xây dựng Bảng quy tắc.`,
          studentActivity: `- Học sinh tham gia trả lời nhanh các câu hỏi ôn tập.`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `- Hướng dẫn các nhóm phân tích các tình huống thực hành sắm vai:
  + Tình huống 1: Em đang trên đường đi học thì đường bị tắc nghẽn nghiêm trọng.
  + Tình huống 2: Em chứng kiến một vụ va chạm giao thông nhẹ giữa hai xe đạp.
- Nhấn mạnh các kĩ năng: Giữ bình tĩnh, ứng xử văn minh, giúp đỡ nhau.`,
          studentActivity: `- Các nhóm tiếp nhận tình huống, bàn bạc phân vai và lên kịch bản xử lý.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `* a/ Sắm vai và xử lí tình huống:
- GV yêu cầu HS sắm vai xử lí tình huống.
- GV Nhận xét tuyên dương.
* b/ Kể lại một số tình huống giao thông mà em đã gặp và cách xử lý của những người có mặt tại đó:
- Yêu cầu cả lớp nhận xét cách xử lí đó và rút ra bài học.`,
          studentActivity: `- Thảo luận 2 nhóm chung một tình huống và nêu cách xử lí.
- HS trả lời, lên biểu diễn sắm vai xử lý tình huống trước lớp.
- HS nêu câu chuyện thực tế về tình huống giao thông mình đã từng gặp hoặc chứng kiến.
- HS trả lời nhận xét cách xử lý của những người trong câu chuyện và rút ra bài học kinh nghiệm cho bản thân.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Hướng dẫn học sinh tự xây dựng bảng qui tắc ứng xử khi gặp sự cố giao thông.
- GV nhận xét, tuyên dương các bảng quy tắc sáng tạo, thiết thực của các em.`,
          studentActivity: `- HS thực hiện tự xây dựng bảng qui tắc ứng xử khi gặp sự cố giao thông (viết khẩu hiệu, quy tắc ứng xử ngắn gọn vào vở/phiếu).
- HS trình bày bảng qui tắc trước lớp, cam kết thực hiện và chia sẻ với người thân trong gia đình.`
        }
      ]
    }
  },

  // =========================================================================
  // BÀI 5: EM LÀM TUYÊN TRUYỀN VIÊN AN TOÀN GIAO THÔNG (Trang 9 - 10 PDF)
  // =========================================================================
  5: {
    lessonNumber: 5,
    title: "Bài 5: Em làm tuyên truyền viên an toàn giao thông",
    subTitle: "An toàn giao thông",
    specificCompetencies: [
      "Nhận biết vai trò, ý nghĩa của công tác tuyên truyền an toàn giao thông.",
      "Biết các bước làm công tác tuyên truyền và lập kế hoạch thực hiện.",
      "Nhận biết các hình thức tuyên truyền an toàn giao thông.",
      "Thực hiện, chia sẻ với người khác các kỹ năng tuyên truyền an toàn giao thông."
    ],
    teacherMaterials: [
      "Tài liệu giáo dục an toàn giao thông.",
      "Thiết bị trình chiếu, nghe nhìn.",
      "Bài hát về an toàn giao thông (Chúng em với an toàn giao thông, Đi xe đạp an toàn...)."
    ],
    studentMaterials: [
      "Vở ghi chép."
    ],
    part1: {
      periodTitle: "Bài 5: Em làm tuyên truyền viên an toàn giao thông (Tiết 1)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Cho học sinh nghe bài hát về an toàn giao thông.
- Đặt câu hỏi nêu nội dung bài hát: Bài hát gửi gắm thông điệp gì đến tất cả chúng ta?`,
          studentActivity: `- HS lắng nghe giai điệu và lời bài hát về an toàn giao thông.
- Tham gia trả lời câu hỏi: Nêu thông điệp chấp hành luật giao thông để mang lại niềm vui, an toàn cho mọi người.`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `* 1. Tìm hiểu vai trò, ý nghĩa của công tác tuyên truyền an toàn giao thông:
- GV yêu cầu HS quan sát tranh và nêu:
  + Ai làm tuyên truyền viên an toàn giao thông?
  + Có những hình thức tuyên truyền an toàn giao thông nào?
- GV Nhận xét – tuyên dương.
* 2. Thực hiện công tác tuyên truyền an toàn giao thông:
- Cho học sinh tìm hiểu các bước làm công tác tuyên truyền an toàn giao thông.
- Cho học sinh lập kế hoạch thực hiện.
- GV kết luận.
- GV tuyên dương, nhận xét.`,
          studentActivity: `- HS quan sát tranh và thảo luận nhóm.
- HS báo cáo kết quả:
  + Ai cũng có thể làm tuyên truyền viên ATGT (thầy cô, học sinh, chú công an, bố mẹ...).
  + Các hình thức tuyên truyền: Vẽ tranh cổ động, phát thanh măng non, biểu diễn tiểu phẩm, phát tờ rơi, làm khẩu hiệu tuyên truyền...
- HS nêu cá nhân ý kiến bổ sung.
- Lắng nghe và tìm hiểu các bước làm công tác tuyên truyền.
- HS lập kế hoạch thực hiện gồm 4 bước (Xác định chủ đề -> Lựa chọn hình thức -> Chuẩn bị nội dung -> Tiến hành tuyên truyền).
- Trình bày kế hoạch trước lớp.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- Cho học sinh nhắc lại 4 bước lập kế hoạch làm công tác tuyên truyền an toàn giao thông.
- GV hướng dẫn học sinh lựa chọn chủ đề tuyên truyền phù hợp với lứa tuổi học sinh tiểu học (đội mũ bảo hiểm, đi xe đạp an toàn, không dàn hàng ngang...).`,
          studentActivity: `- Học sinh nêu lại 4 bước của kế hoạch tuyên truyền ATGT.
- Thảo luận nhanh lựa chọn chủ đề mình quan tâm nhất để chuẩn bị cho Tiết 2.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Dặn dò học sinh chuẩn bị nội dung, tranh vẽ hoặc khẩu hiệu tuyên truyền ATGT cho tiết thực hành tiếp theo.`,
          studentActivity: `- Lắng nghe và chuẩn bị sản phẩm tuyên truyền cho tiết sau.`
        }
      ]
    },
    part2: {
      periodTitle: "Bài 5: Em làm tuyên truyền viên an toàn giao thông (Tiết 2)",
      activities: [
        {
          name: "1. Hoạt động Khởi động",
          teacherActivity: `- Cho cả lớp hát vang bài hát về ATGT để tạo không khí hào hứng.
- Ôn lại 4 bước thực hiện công tác tuyên truyền an toàn giao thông đã học ở Tiết 1.`,
          studentActivity: `- Cả lớp hát vui tươi, trả lời nhanh các câu hỏi ôn tập.`
        },
        {
          name: "2. Hoạt động Khám phá",
          teacherActivity: `- Hướng dẫn học sinh nhận biết các tranh vẽ mô tả quy trình thực hiện công tác tuyên truyền ATGT trong tài liệu.
- Nhắc lại yêu cầu sắp xếp tranh theo đúng quy trình.`,
          studentActivity: `- Học sinh quan sát tranh, thảo luận nhóm để nhận diện các bước trong quy trình.`
        },
        {
          name: "3. Hoạt động Luyện tập - Thực hành",
          teacherActivity: `- Yêu cầu học sinh sắp xếp các tranh theo qui trình thực hiện công tác tuyên truyền.
- GV nhận xét, tuyên dương các nhóm sắp xếp đúng và giải thích rõ ràng.`,
          studentActivity: `- Thảo luận nhóm sắp xếp các bức tranh theo thứ tự logic của quy trình tuyên truyền ATGT.
- HS trình bày thứ tự các tranh và nêu lý do vì sao sắp xếp theo thứ tự đó.`
        },
        {
          name: "4. Hoạt động Vận dụng",
          teacherActivity: `- Yêu cầu học sinh lựa chọn một chủ đề về an toàn giao thông, xây dựng kế hoạch và tuyên truyền vấn đề đó đối với các bạn trong lớp.
- GV nhận xét, đánh giá phần tuyên truyền của các nhóm, biểu dương tinh thần trách nhiệm của những tuyên truyền viên nhí.`,
          studentActivity: `- HS thực hiện lựa chọn chủ đề về an toàn giao thông, xây dựng kế hoạch và tuyên truyền vấn đề đó đối với các bạn trong lớp (bằng lời nói, tranh cổ động hoặc tiểu phẩm ngắn).
- HS trình bày sản phẩm tuyên truyền trước lớp, tự tin lan tỏa thông điệp an toàn giao thông đến tất cả các bạn.`
        }
      ]
    }
  }
};

/**
 * Lấy thông tin bài giảng An toàn Giao thông khối 5 theo tuần học.
 * Tuần 3 bắt đầu dạy Bài 1 Tiết 1.
 * Tuần 4 dạy Bài 1 Tiết 2.
 * Tuần 5 dạy Bài 2 Tiết 1...
 * Mỗi bài dạy trong 2 tuần (10 tiết học / 5 bài).
 * Các tuần tiếp theo sẽ ôn tập và thực hành các bài học trên.
 */
export function getATGTGrade5LessonInfo(week: number): {
  lessonNumber: number;
  part: 1 | 2;
  lessonTitle: string;
  curriculumPeriod: number;
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  activities: LessonActivity[];
} {
  const safeWeek = Math.max(1, week);
  const weekDiff = safeWeek - 1; // 0 for week 1, 1 for week 2, 2 for week 3...
  
  // 5 bài dạy tuần tự (mỗi bài 2 tiết trong 2 tuần), sau đó lặp lại chu kỳ nâng cao & thực hành
  const rawLessonIndex = (Math.floor(weekDiff / 2) % 5) + 1; // 1 to 5
  const lessonNumber = Math.min(5, Math.max(1, rawLessonIndex));
  const part = ((weekDiff % 2) + 1) as 1 | 2;
  const curriculumPeriod = weekDiff + 1; // 1, 2, 3...

  const lessonData = ATGT_GRADE_5_LESSONS[lessonNumber] || ATGT_GRADE_5_LESSONS[1];
  const partData = part === 1 ? lessonData.part1 : lessonData.part2;

  return {
    lessonNumber,
    part,
    lessonTitle: partData.periodTitle,
    curriculumPeriod,
    specificCompetencies: lessonData.specificCompetencies,
    teacherMaterials: lessonData.teacherMaterials,
    studentMaterials: lessonData.studentMaterials,
    activities: partData.activities,
  };
}
