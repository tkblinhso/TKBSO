import { Grade } from "../types";

export interface OfficialMusicWeek {
  week: number;
  period: number;
  theme: string;
  subTopics?: string[];
  lessonTitle: string;
  songTitle?: string;
  composer?: string;
  duration: string;
  adjustments?: string;
  lyrics?: string;
}

export const GRADE_1_MUSIC_CURRICULUM: Record<number, OfficialMusicWeek> = {
  "1": {
    "week": 1,
    "period": 1,
    "theme": "Âm thanh kì diệu",
    "subTopics": [
      "Hát",
      "TTAN",
      "Đọc nhạc"
    ],
    "lessonTitle": "Thường thức âm nhạc: Âm thanh kì diệu - Hát: Vào rừng hoa",
    "songTitle": "Vào rừng hoa",
    "composer": "Việt Anh",
    "duration": "1/ 35 phút",
    "lyrics": "Cầm tay nhau cùng đi chơi, giao đàn hoa thơm ngát hương bay.\nHoa màu xanh, hoa màu đỏ, hoa màu vàng, hoa màu tím.\nKìa hoa sim, kìa hoa lan, kìa hoa huệ trắng tinh.\nVào rừng hoa cùng chơi, vui tươi rộn rã bước chân."
  },
  "2": {
    "week": 2,
    "period": 2,
    "theme": "Âm thanh kì diệu",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Vào rừng hoa - Đọc nhạc: Bậc thang Đô – Rê – Mi",
    "songTitle": "Vào rừng hoa",
    "composer": "Việt Anh",
    "duration": "1/ 35 phút"
  },
  "3": {
    "week": 3,
    "period": 3,
    "theme": "Âm thanh kì diệu",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Vào rừng hoa - Ôn tập đọc nhạc: Bậc thang Đô-Rê-Mi",
    "songTitle": "Vào rừng hoa",
    "composer": "Việt Anh",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a Theo dõi video bài hát 'Vào rừng hoa' trên màn hình máy chiếu để hát kết hợp vỗ tay, gõ đệm theo tiết tấu."
  },
  "4": {
    "week": 4,
    "period": 4,
    "theme": "Âm thanh kì diệu",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Vào rừng hoa - Ôn tập đọc nhạc: Bậc thang Đô-Rê-Mi",
    "songTitle": "Vào rừng hoa",
    "composer": "Việt Anh",
    "duration": "1/ 35 phút"
  },
  "5": {
    "week": 5,
    "period": 5,
    "theme": "Việt Nam yêu thương",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "Nghe nhạc"
    ],
    "lessonTitle": "Hát: Tổ quốc ta",
    "songTitle": "Tổ quốc ta",
    "composer": "Mộng Lân",
    "duration": "1/ 35 phút",
    "adjustments": "* Lồng ghép GD QPAN: Giáo dục cho học sinh về tình yêu quê hương, yêu hòa bình, yêu Tổ quốc Việt Nam xã hội chủ nghĩa.\nNăng lực số: 1.1.CB1a; 2.1.CB1a; 4.3.CB1a; Nhận biết, tương tác với máy tính/loa/tivi để nghe nhạc, quan sát hình ảnh quê hương; biết điều chỉnh âm lượng phù hợp.\nNăng lực AI: Nhận biết con người có cảm xúc yêu quê hương khi nghe/hát, AI không có cảm xúc thật mà chỉ mô phỏng âm thanh.",
    "lyrics": "Đất nước em hòa bình, tiếng chim ca líu lo.\nHoa nở bên sườn đồi, Tổ quốc ta đẹp tươi!"
  },
  "6": {
    "week": 6,
    "period": 6,
    "theme": "Việt Nam yêu thương",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn tập bài hát: Tổ quốc ta - Nhạc cụ: Trống con",
    "songTitle": "Tổ quốc ta",
    "composer": "Mộng Lân",
    "duration": "1/ 35 phút"
  },
  "7": {
    "week": 7,
    "period": 7,
    "theme": "Việt Nam yêu thương",
    "subTopics": [
      "Nghe nhạc",
      "Nhạc cụ"
    ],
    "lessonTitle": "Nghe nhạc: Bài hát: Quốc ca - Ôn tập Nhạc cụ: Trống con",
    "songTitle": "Quốc ca Việt Nam (Tiến quân ca)",
    "composer": "Văn Cao",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; 4.1.CB1a; Sử dụng thiết bị số để nghe Quốc ca và ôn nhạc cụ Trống con; biết bảo quản máy tính, loa trong lớp học.\nNăng lực AI: Nhận biết cảm xúc trang nghiêm, tự hào của con người khi nghe Quốc ca; AI chỉ mô phỏng âm thanh."
  },
  "8": {
    "week": 8,
    "period": 8,
    "theme": "Việt Nam yêu thương",
    "subTopics": [
      "Hát"
    ],
    "lessonTitle": "Ôn tập bài hát: Tổ quốc ta",
    "songTitle": "Tổ quốc ta",
    "composer": "Mộng Lân",
    "duration": "1/ 35 phút"
  },
  "9": {
    "week": 9,
    "period": 9,
    "theme": "Mái trường thân yêu",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Hát: Lớp Một thân yêu",
    "songTitle": "Lớp Một thân yêu",
    "composer": "Bùi Anh Tú",
    "duration": "1/ 35 phút",
    "lyrics": "Kìa tiếng trống trường vang, em bước vào lớp Một.\nTừng trang sách mở ra, bao điều hay đang đón."
  },
  "10": {
    "week": 10,
    "period": 10,
    "theme": "Mái trường thân yêu",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Lớp Một thân yêu - Đọc nhạc: Ban nhạc Đô – Rê - Mi",
    "songTitle": "Lớp Một thân yêu",
    "composer": "Bùi Anh Tú",
    "duration": "1/ 35 phút"
  },
  "11": {
    "week": 11,
    "period": 11,
    "theme": "Mái trường thân yêu",
    "subTopics": [
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn tập đọc nhạc: Ban nhạc Đô – Rê - Mi - Nghe nhạc: Những bông hoa những bài ca",
    "songTitle": "Những bông hoa những bài ca",
    "composer": "Hoàng Long",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.1.CB1a; Lắng nghe, cảm nhận giai điệu bài hát được phát từ loa bluetooth/máy tính/danh sách phát nhạc số.\nNăng lực AI: Nhận biết tìm kiếm bằng giọng nói AI có thể giúp tìm bài hát 'Những bông hoa những bài ca' dưới sự hướng dẫn của giáo viên."
  },
  "12": {
    "week": 12,
    "period": 12,
    "theme": "Mái trường thân yêu",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Lớp Một thân yêu - Ôn tập đọc nhạc: Ban nhạc Đô – Rê - Mi",
    "songTitle": "Lớp Một thân yêu",
    "composer": "Bùi Anh Tú",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; 4.3.CB1a; Ôn tập bài hát, đọc nhạc qua tranh, bản nhạc và trò chơi trình chiếu; giữ khoảng cách an toàn khi quan sát thiết bị số.\nNăng lực AI: Nhận biết robot/trợ lý ảo trả lời hoặc phát nhạc theo lập trình, không có cảm xúc thật như con người."
  },
  "13": {
    "week": 13,
    "period": 13,
    "theme": "Vòng tay bè bạn",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN",
      "Nghe nhạc"
    ],
    "lessonTitle": "Hát: Chào người bạn mới đến",
    "songTitle": "Chào người bạn mới đến",
    "composer": "Lương Bằng Vinh",
    "duration": "1/ 35 phút",
    "lyrics": "Kìa bạn mới đến lớp mình vui ghê, chào bạn nhé cùng hát cùng ca.\nTay trong tay bước trên đường xa, trường lớp mới chan hòa yêu thương."
  },
  "14": {
    "week": 14,
    "period": 14,
    "theme": "Vòng tay bè bạn",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn tập bài hát: Chào người bạn mới đến - Nhạc cụ: Trống con",
    "songTitle": "Chào người bạn mới đến",
    "composer": "Lương Bằng Vinh",
    "duration": "1/ 35 phút"
  },
  "15": {
    "week": 15,
    "period": 15,
    "theme": "Vòng tay bè bạn",
    "subTopics": [
      "TTAN",
      "Nghe nhạc"
    ],
    "lessonTitle": "Thường thức âm nhạc: Trống cái - Nghe nhạc: Vũ khúc thiên nga",
    "composer": "Tchaikovsky",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; 4.3.CB1a; Nhận biết hình dáng, âm thanh Trống cái qua hình ảnh/video; giữ khoảng cách an toàn cho mắt khi quan sát màn hình.\nNăng lực AI: Nhận biết con người có cảm xúc vui tươi khi nghe 'Vũ khúc thiên nga', còn thiết bị AI/loa thông minh chỉ thực hiện lệnh phát âm thanh."
  },
  "16": {
    "week": 16,
    "period": 16,
    "theme": "Ôn tập và đánh giá cuối học kì I",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối học kì I",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Ôn tập cao độ Đô - Rê - Mi qua bản nhạc số, mẫu tiết tấu và tranh chủ đề trình chiếu trên thiết bị lớp học.\nNăng lực AI: Nhận biết công cụ số/AI có thể hỗ trợ hiển thị, phát mẫu nhưng không thay thế việc luyện tập của học sinh."
  },
  "17": {
    "week": 17,
    "period": 17,
    "theme": "Ôn tập và đánh giá cuối học kì I",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối học kì I",
    "duration": "1/ 35 phút"
  },
  "18": {
    "week": 18,
    "period": 18,
    "theme": "Ôn tập và đánh giá cuối học kì I",
    "subTopics": [
      "Đánh giá"
    ],
    "lessonTitle": "Đánh giá cuối học kì I",
    "duration": "1/ 35 phút"
  },
  "19": {
    "week": 19,
    "period": 19,
    "theme": "Nhịp điệu mùa xuân",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "TTAN"
    ],
    "lessonTitle": "Hát: Xúc xắc xúc xẻ",
    "songTitle": "Xúc xắc xúc xẻ",
    "composer": "Nguyễn Ngọc Thiện",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Nhận biết thông tin dạng âm thanh, hình ảnh về ngày Tết trên tivi/máy tính của giáo viên khi học bài 'Xúc xắc xúc xẻ'.\nNăng lực AI: Nhận biết điện thoại/loa có trợ lý ảo AI chỉ hỗ trợ phát thông tin, âm thanh theo lệnh của con người.",
    "lyrics": "Xúc xắc xúc xẻ, năm mới năm me.\nNhà nào còn đèn, mở cửa cho chúng tôi vào!"
  },
  "20": {
    "week": 20,
    "period": 20,
    "theme": "Nhịp điệu mùa xuân",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Xúc xắc xúc xẻ - Đọc nhạc: Những người bạn của Đô – Rê – Mi",
    "songTitle": "Xúc xắc xúc xẻ",
    "composer": "Nguyễn Ngọc Thiện",
    "duration": "1/ 35 phút"
  },
  "21": {
    "week": 21,
    "period": 21,
    "theme": "Nhịp điệu mùa xuân",
    "subTopics": [
      "Đọc nhạc",
      "TTAN"
    ],
    "lessonTitle": "Ôn tập đọc nhạc: Những người bạn của Đô – Rê – Mi - Thường thức âm nhạc: Nhạc sĩ Vôn-găng A-ma-đớt Mô-da",
    "composer": "Wolfgang Amadeus Mozart",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Nhận biết thông tin dạng hình ảnh và âm thanh về nhạc sĩ Mô-da trên thiết bị số.\nNăng lực AI: Nhận biết công cụ số/AI có thể tìm và phát tư liệu, học sinh cần nghe, cảm nhận và trả lời bằng suy nghĩ của mình."
  },
  "22": {
    "week": 22,
    "period": 22,
    "theme": "Nhịp điệu mùa xuân",
    "subTopics": [
      "Hát"
    ],
    "lessonTitle": "Ôn tập bài hát: Xúc xắc xúc xẻ",
    "songTitle": "Xúc xắc xúc xẻ",
    "composer": "Nguyễn Ngọc Thiện",
    "duration": "1/ 35 phút"
  },
  "23": {
    "week": 23,
    "period": 23,
    "theme": "Về miền dân ca",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN",
      "Nghe nhạc"
    ],
    "lessonTitle": "Hát: Gà gáy",
    "songTitle": "Gà gáy",
    "composer": "Dân ca Cống Khao",
    "duration": "1/ 35 phút",
    "lyrics": "Con gà gáy le té le sáng rồi ai ơi, gà gáy té le té le sáng rồi ai ơi.\nNắng sớm lên rồi dậy đi nương thôi, nắng sớm lên rồi dậy đi nương thôi ai ơi!"
  },
  "24": {
    "week": 24,
    "period": 24,
    "theme": "Về miền dân ca",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn tập bài hát: Gà gáy - Nhạc cụ: Thanh phách",
    "songTitle": "Gà gáy",
    "composer": "Dân ca Cống Khao",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Sử dụng máy tính bảng để mở tệp âm thanh bài 'Gà gáy' phục vụ ôn tập theo nhóm.\nNăng lực AI: Nhận biết thiết bị số/AI hỗ trợ phát mẫu, còn thao tác gõ thanh phách và biểu diễn do học sinh thực hiện."
  },
  "25": {
    "week": 25,
    "period": 25,
    "theme": "Về miền dân ca",
    "subTopics": [
      "TTAN"
    ],
    "lessonTitle": "Thường thức âm nhạc: Câu chuyện về thanh phách",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.1.CB1a; Tương tác đơn giản bằng cách chạm màn hình máy tính bảng để xem tranh minh họa câu chuyện về thanh phách.\nNăng lực AI: Nhận biết thiết bị thông minh có thể hỗ trợ trình chiếu/kể chuyện, nhưng không thay thế người kể chuyện và cảm nhận âm nhạc dân tộc."
  },
  "26": {
    "week": 26,
    "period": 26,
    "theme": "Về miền dân ca",
    "subTopics": [
      "Hát",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Gà gáy - Nghe nhạc: Bài hát: Lí cây bông",
    "songTitle": "Lí cây bông",
    "composer": "Dân ca Nam Bộ",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Sử dụng máy tính bảng để mở, nghe lại giai điệu bài 'Gà gáy' phục vụ tự ôn tập.\nNăng lực AI: Nhận biết loa thông minh có thể tự động phát bài 'Lí cây bông' khi nhận lệnh bằng giọng nói."
  },
  "27": {
    "week": 27,
    "period": 27,
    "theme": "Gia đình",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Hát: Cây gia đình",
    "songTitle": "Cây gia đình",
    "composer": "Lê Vy",
    "duration": "1/ 35 phút",
    "lyrics": "Gia đình em có ông có bà, có bố có mẹ và có chúng em.\nCùng chung một mái nhà êm ấm, yêu thương giúp đỡ tháng ngày bên nhau."
  },
  "28": {
    "week": 28,
    "period": 28,
    "theme": "Gia đình",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Cây gia đình - Đọc nhạc: Hát cùng Đô- Rê- Mi-Pha-Son",
    "songTitle": "Cây gia đình",
    "composer": "Lê Vy",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.3.CB1a; 2.1.CB1a; 1.1.CB1a; Nghe file âm thanh trên máy tính, quan sát nốt Đô - Rê - Mi - Pha - Son trên màn hình, giữ tư thế an toàn khi học.\nNăng lực AI: Nhận biết công cụ số/AI có thể phát mẫu âm, nhưng học sinh cần tự đọc và thể hiện cao độ."
  },
  "29": {
    "week": 29,
    "period": 29,
    "theme": "Gia đình",
    "subTopics": [
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn tập đọc nhạc: Hát cùng Đô – Rê – Mi – Pha - Son - Nghe nhạc: Bài hát: Con chim Vành Khuyên",
    "songTitle": "Con chim Vành Khuyên",
    "composer": "Hoàng Vân",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Quan sát hình ảnh/video chú chim vành khuyên trên màn hình máy tính để nhận biết đặc điểm, âm thanh.\nNăng lực AI: Biết chim ảo/trợ lý ảo phát lời chào là do lập trình; chỉ con người có cảm xúc lễ phép, kính trọng thật sự."
  },
  "30": {
    "week": 30,
    "period": 30,
    "theme": "Gia đình",
    "subTopics": [
      "Hát"
    ],
    "lessonTitle": "Ôn tập bài hát: Cây gia đình",
    "songTitle": "Cây gia đình",
    "composer": "Lê Vy",
    "duration": "1/ 35 phút"
  },
  "31": {
    "week": 31,
    "period": 31,
    "theme": "Vui đón hè",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Hát: Ngôi sao lấp lánh",
    "songTitle": "Ngôi sao lấp lánh",
    "composer": "Nhạc Pháp (Lời: Đỗ Anh Hùng)",
    "duration": "1/ 35 phút",
    "lyrics": "Ngôi sao lấp lánh trên trời cao, chiếu sáng lung linh khắp muôn nơi.\nĐêm hè vui ngắm bầu trời sao, đàn em ríu rít ca khúc hát mừng hè sang."
  },
  "32": {
    "week": 32,
    "period": 32,
    "theme": "Vui đón hè",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn tập bài hát: Ngôi sao lấp lánh - Nhạc cụ: Trai-eng-gồ",
    "songTitle": "Ngôi sao lấp lánh",
    "composer": "Nhạc Pháp",
    "duration": "1/ 35 phút"
  },
  "33": {
    "week": 33,
    "period": 33,
    "theme": "Ôn tập và đánh giá cuối năm học",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối năm",
    "duration": "1/ 35 phút"
  },
  "34": {
    "week": 34,
    "period": 34,
    "theme": "Ôn tập và đánh giá cuối năm học",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối năm",
    "duration": "1/ 35 phút"
  },
  "35": {
    "week": 35,
    "period": 35,
    "theme": "Ôn tập và đánh giá cuối năm học",
    "subTopics": [
      "Đánh giá"
    ],
    "lessonTitle": "Đánh giá cuối năm",
    "duration": "1/ 35 phút"
  }
};

export const GRADE_2_MUSIC_CURRICULUM: Record<number, OfficialMusicWeek> = {
  "1": {
    "week": 1,
    "period": 1,
    "theme": "Sắc màu âm thanh",
    "subTopics": [
      "Hát",
      "TTAN",
      "Đọc nhạc"
    ],
    "lessonTitle": "Hát: Dàn nhạc trong vườn",
    "songTitle": "Dàn nhạc trong vườn",
    "composer": "Tô Đông Hải",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Lắng nghe, nhận biết âm thanh bài hát từ máy tính/loa thông minh; tìm kiếm, mở video bài hát trên internet dưới sự hướng dẫn của người lớn.\nNăng lực AI: Nhận biết bài hát do nhạc sĩ Tô Đông Hải sáng tác, phân biệt với đoạn nhạc ngắn do AI tạo ra.",
    "lyrics": "Kìa con chim gáy cúc cu đố la, kìa chú vàng anh líu lo lá son.\nKìa chim chích chòe, chích chòe lá đa, một dàn nhạc chim líu lo trong vườn!"
  },
  "2": {
    "week": 2,
    "period": 2,
    "theme": "Sắc màu âm thanh",
    "subTopics": [
      "Hát",
      "TTAN"
    ],
    "lessonTitle": "Ôn tập bài hát: Dàn nhạc trong vườn - TTAN: Ước mơ của bạn Đô",
    "songTitle": "Dàn nhạc trong vườn",
    "composer": "Tô Đông Hải",
    "duration": "1/ 35 phút"
  },
  "3": {
    "week": 3,
    "period": 3,
    "theme": "Sắc màu âm thanh",
    "subTopics": [
      "Đọc nhạc"
    ],
    "lessonTitle": "Đọc nhạc: Bài số 1",
    "duration": "1/ 35 phút"
  },
  "4": {
    "week": 4,
    "period": 4,
    "theme": "Sắc màu âm thanh",
    "subTopics": [
      "Đọc nhạc",
      "Hát"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 1 - Ôn tập bài hát: Dàn nhạc trong vườn",
    "songTitle": "Dàn nhạc trong vườn",
    "composer": "Tô Đông Hải",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.2.CB1a; Chia sẻ tệp ghi âm bài hát/bài đọc nhạc với người thân qua ứng dụng liên lạc dưới sự giám sát của bố mẹ."
  },
  "5": {
    "week": 5,
    "period": 5,
    "theme": "Em yêu làn điệu dân ca",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN"
    ],
    "lessonTitle": "Hát: Con chim chích chòe",
    "songTitle": "Con chim chích chòe",
    "composer": "Dân ca Bắc Bộ (cải biên: Hoàng Lân)",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.3.CB1a; Giữ tư thế ngồi, khoảng cách an toàn khi quan sát hình ảnh/video trên tivi hoặc máy chiếu.\nNăng lực AI: Nhận biết loa thông minh/thiết bị tích hợp AI có thể hỗ trợ tìm kiếm và phát bài hát nhanh chóng.",
    "lyrics": "Có con chim chích chòe, đậu trên cành tre.\nNó kêu chích chòe, nó hót líu lo!"
  },
  "6": {
    "week": 6,
    "period": 6,
    "theme": "Em yêu làn điệu dân ca",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn tập bài hát: Con chim chích chòe - Nhạc cụ: Song loan",
    "songTitle": "Con chim chích chòe",
    "composer": "Dân ca Bắc Bộ",
    "duration": "1/ 35 phút"
  },
  "7": {
    "week": 7,
    "period": 7,
    "theme": "Em yêu làn điệu dân ca",
    "subTopics": [
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "TTAN: Đàn bầu Việt Nam - Vận dụng - sáng tạo",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a: Quan sát, nhận biết biểu tượng âm thanh, hình ảnh trên trang web chia sẻ video khi giáo viên tìm kiếm tư liệu về đàn bầu."
  },
  "8": {
    "week": 8,
    "period": 8,
    "theme": "Em yêu làn điệu dân ca",
    "subTopics": [
      "Hát"
    ],
    "lessonTitle": "Ôn tập bài hát: Con chim chích chòe",
    "songTitle": "Con chim chích chòe",
    "composer": "Dân ca Bắc Bộ",
    "duration": "1/ 35 phút"
  },
  "9": {
    "week": 9,
    "period": 9,
    "theme": "Mái trường thân yêu",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Hát: Học sinh lớp Hai chăm ngoan",
    "songTitle": "Học sinh lớp Hai chăm ngoan",
    "composer": "Tạ Duy Hiền",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.3.CB1a; Tự điều chỉnh âm lượng loa/tai nghe ở mức vừa phải khi nghe nhạc mẫu để bảo vệ thính giác.\nNăng lực AI: Nhận biết loa thông minh có thể tìm kiếm, phát bài hát bằng giọng nói để tiết kiệm thời gian.",
    "lyrics": "Em là học sinh lớp Hai, em chăm học và em ngoan.\nVâng lời thầy cô yêu quý, xứng danh cháu ngoan Bác Hồ."
  },
  "10": {
    "week": 10,
    "period": 10,
    "theme": "Mái trường thân yêu",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Học sinh lớp Hai chăm ngoan - Đọc nhạc: Bài số 2",
    "songTitle": "Học sinh lớp Hai chăm ngoan",
    "composer": "Tạ Duy Hiền",
    "duration": "1/ 35 phút"
  },
  "11": {
    "week": 11,
    "period": 11,
    "theme": "Mái trường thân yêu",
    "subTopics": [
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn tập đọc nhạc: Bài số 2 - Nghe nhạc: Vui tới trường",
    "songTitle": "Vui tới trường",
    "composer": "Hồ Bắc",
    "duration": "1/ 35 phút"
  },
  "12": {
    "week": 12,
    "period": 12,
    "theme": "Mái trường thân yêu",
    "subTopics": [
      "Đọc nhạc",
      "Hát"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 2 - Ôn tập bài hát: Học sinh lớp Hai chăm ngoan",
    "songTitle": "Học sinh lớp Hai chăm ngoan",
    "composer": "Tạ Duy Hiền",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Tìm kiếm và lựa chọn đúng video bài hát trên môi trường số dưới sự giám sát của người lớn để tự ôn tập."
  },
  "13": {
    "week": 13,
    "period": 13,
    "theme": "Tuổi thơ",
    "subTopics": [
      "Hát",
      "Nghe nhạc",
      "Nhạc cụ",
      "Ôn tập"
    ],
    "lessonTitle": "Hát: Chú chim nhỏ dễ thương",
    "songTitle": "Chú chim nhỏ dễ thương",
    "composer": "Nhạc Pháp",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; 4.3.CB1a; Tìm kiếm hình ảnh chú chim nhỏ trên internet; giữ tư thế, khoảng cách an toàn khi xem bản đồ nước Pháp trên máy chiếu.\nNăng lực AI: Nhận biết tình huống dùng công cụ tìm kiếm thông minh để hỗ trợ tìm nhanh hình ảnh các loài chim.",
    "lyrics": "Lại đây hỡi chú chim nhỏ xinh dễ thương này, lại đây hỡi chú chim nhỏ xinh đáng yêu này.\nCùng bay với cánh chim về nơi ấm êm rồi, cùng cất tiếng hát vang lừng trong nắng mai."
  },
  "14": {
    "week": 14,
    "period": 14,
    "theme": "Tuổi thơ",
    "subTopics": [
      "Hát",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Chú chim nhỏ dễ thương - Nghe nhạc: Múa sư tử thật là vui",
    "songTitle": "Chú chim nhỏ dễ thương",
    "composer": "Nhạc Pháp",
    "duration": "1/ 35 phút"
  },
  "15": {
    "week": 15,
    "period": 15,
    "theme": "Tuổi thơ",
    "subTopics": [
      "Nhạc cụ"
    ],
    "lessonTitle": "Nhạc cụ: Dùng nhạc cụ gõ thể hiện hình tiết tấu",
    "duration": "1/ 35 phút"
  },
  "16": {
    "week": 16,
    "period": 16,
    "theme": "Tuổi thơ",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối học kì I",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; 4.3.CB1a Tìm kiếm và mở lại video các bài hát đã học trong học kì I trên kênh an toàn cho trẻ; bảo vệ mắt khi ôn tập qua màn hình."
  },
  "17": {
    "week": 17,
    "period": 17,
    "theme": "Ôn tập cuối học kì I",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối học kì I",
    "duration": "1/ 35 phút"
  },
  "18": {
    "week": 18,
    "period": 18,
    "theme": "Kiểm tra đánh giá cuối học kì I",
    "subTopics": [
      "Đánh giá",
      "Biểu diễn"
    ],
    "lessonTitle": "Kiểm tra đánh giá cuối học kì I - Biểu diễn bài hát đã học",
    "duration": "1/ 35 phút"
  },
  "19": {
    "week": 19,
    "period": 19,
    "theme": "Mùa xuân",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Hoa lá mùa xuân",
    "songTitle": "Hoa lá mùa xuân",
    "composer": "Hoàng Hà",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.1.CB1a; 1.1.CB1b; Nhận biết, khởi động thiết bị số để chuẩn bị mở file âm thanh; quan sát giáo viên mở trình duyệt tìm video bài hát.\nNăng lực AI: Nhận biết trợ lý ảo trên tivi/loa thông minh có thể tìm kiếm và phát bài hát nhanh chóng, hiệu quả.",
    "lyrics": "Tôi là lá, tôi là hoa, tôi là hoa lá đón xuân sang.\nTôi cùng hát, tôi cùng múa, tôi cùng múa hát ca mừng xuân!"
  },
  "20": {
    "week": 20,
    "period": 20,
    "theme": "Mùa xuân",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Hoa lá mùa xuân - Đọc nhạc: Bài số 3",
    "songTitle": "Hoa lá mùa xuân",
    "composer": "Hoàng Hà",
    "duration": "1/ 35 phút"
  },
  "21": {
    "week": 21,
    "period": 21,
    "theme": "Mùa xuân",
    "subTopics": [
      "Đọc nhạc",
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 3 - TTAN: Câu chuyện về bài hát Chú voi con ở Bản Đôn - Vận dụng - sáng tạo",
    "songTitle": "Chú voi con ở Bản Đôn",
    "composer": "Phạm Tuyên",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.1.CB1a; Chạm màn hình/nhấp chuột để dừng, phát video câu chuyện âm nhạc trên máy tính dưới sự hướng dẫn."
  },
  "22": {
    "week": 22,
    "period": 22,
    "theme": "Mùa xuân",
    "subTopics": [
      "Ôn tập",
      "Vận dụng"
    ],
    "lessonTitle": "Ôn tập: Hát và đọc nhạc - Vận dụng - sáng tạo",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.1.CB1c; Biết bảo quản, không tự ý chạm vào dây cắm, nguồn điện của loa và máy tính để đảm bảo an toàn thiết bị và bản thân."
  },
  "23": {
    "week": 23,
    "period": 23,
    "theme": "Gia đình yêu thương",
    "subTopics": [
      "Hát",
      "Nghe nhạc",
      "TTAN",
      "Nhạc cụ"
    ],
    "lessonTitle": "Hát: Mẹ ơi có biết",
    "songTitle": "Mẹ ơi có biết",
    "composer": "Nguyễn Văn Chung",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Truy cập tệp âm thanh bài hát trên máy tính giáo viên để nghe mẫu.\nNăng lực AI: Nhận biết loa thông minh/tivi thông minh có thể tự động tìm kiếm, phát bài hát để hỗ trợ sinh hoạt gia đình.",
    "lyrics": "Mẹ ơi có biết con yêu mẹ nhiều, nhớ ơn mẹ hiền sớm hôm vất vả.\nCon hứa chăm ngoan nghe lời mẹ dặn, để mẹ luôn nở nụ cười trên môi."
  },
  "24": {
    "week": 24,
    "period": 24,
    "theme": "Gia đình yêu thương",
    "subTopics": [
      "Hát",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Mẹ ơi có biết - Nghe nhạc: Ru con",
    "songTitle": "Ru con",
    "composer": "Dân ca Nam Bộ",
    "duration": "1/ 35 phút"
  },
  "25": {
    "week": 25,
    "period": 25,
    "theme": "Gia đình yêu thương",
    "subTopics": [
      "TTAN",
      "Nhạc cụ",
      "Vận dụng"
    ],
    "lessonTitle": "TTAN - Nhạc cụ: Ma-ra-cát (Maracas) - Vận dụng - sáng tạo",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB; Nhận biết hình ảnh và âm thanh nhạc cụ ma-ra-cát qua video clip ngắn trên máy tính của giáo viên."
  },
  "26": {
    "week": 26,
    "period": 26,
    "theme": "Gia đình yêu thương",
    "subTopics": [
      "Luyện tập",
      "Biểu diễn"
    ],
    "lessonTitle": "Luyện tập và biểu diễn: Mẹ ơi có biết",
    "songTitle": "Mẹ ơi có biết",
    "composer": "Nguyễn Văn Chung",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.1.CB1a; Hợp tác trong nhóm để quan sát video biểu diễn mẫu trên màn hình máy tính trước khi lên sân khấu biểu diễn."
  },
  "27": {
    "week": 27,
    "period": 27,
    "theme": "Những con vật quanh em",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Trang trại vui vẻ",
    "songTitle": "Trang trại vui vẻ",
    "composer": "Nhạc nước ngoài",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.1.CB1a; Sử dụng thiết bị số để nghe và xem video bài hát mẫu một cách chủ động dưới sự hướng dẫn của giáo viên.",
    "lyrics": "Bác Mác-đô-nan có một trang trại, í a í a ô!\nVà trong trang trại bác nuôi bao loài, í a í a ô!"
  },
  "28": {
    "week": 28,
    "period": 28,
    "theme": "Những con vật quanh em",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Trang trại vui vẻ - Đọc nhạc: Bài số 4",
    "songTitle": "Trang trại vui vẻ",
    "composer": "Nhạc nước ngoài",
    "duration": "1/ 35 phút"
  },
  "29": {
    "week": 29,
    "period": 29,
    "theme": "Những con vật quanh em",
    "subTopics": [
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 4 - Nghe nhạc: Vũ khúc Đàn gà con",
    "composer": "Modest Mussorgsky",
    "duration": "1/ 35 phút"
  },
  "30": {
    "week": 30,
    "period": 30,
    "theme": "Những con vật quanh em",
    "subTopics": [
      "Ôn tập",
      "Vận dụng"
    ],
    "lessonTitle": "Ôn tập: Hát và đọc nhạc - Vận dụng - sáng tạo",
    "duration": "1/ 35 phút"
  },
  "31": {
    "week": 31,
    "period": 31,
    "theme": "Mùa hè vui",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "Nghe nhạc",
      "Ôn tập"
    ],
    "lessonTitle": "Hát: Ngày hè vui",
    "songTitle": "Ngày hè vui",
    "composer": "Hoàng Long",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; 4.1.CB1a; Tìm kiếm bài hát đơn giản trên môi trường số; tắt tivi/máy chiếu đúng cách để bảo vệ thiết bị.\nNăng lực AI: Nhận biết loa thông minh hỗ trợ tìm kiếm và phát nhạc bằng giọng nói.",
    "lyrics": "Hè về rực rỡ nắng vàng, tiếng ve ca hát rộn ràng cành cây.\nĐàn em tung tăng vui đùa, đón mùa hè vui tươi tràn ngập ước mơ."
  },
  "32": {
    "week": 32,
    "period": 32,
    "theme": "Mùa hè vui",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Ngày hè vui - Nhạc cụ: Dùng nhạc cụ gõ thể hiện hình tiết tấu",
    "songTitle": "Ngày hè vui",
    "composer": "Hoàng Long",
    "duration": "1/ 35 phút"
  },
  "33": {
    "week": 33,
    "period": 33,
    "theme": "Mùa hè vui",
    "subTopics": [
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Nghe nhạc: Mùa hè ước mong - Vận dụng - sáng tạo",
    "songTitle": "Mùa hè ước mong",
    "composer": "Lê Minh Châu",
    "duration": "1/ 35 phút"
  },
  "34": {
    "week": 34,
    "period": 34,
    "theme": "Ôn tập cuối năm",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối năm",
    "duration": "1/ 35 phút"
  },
  "35": {
    "week": 35,
    "period": 35,
    "theme": "Kiểm tra đánh giá cuối năm",
    "subTopics": [
      "Đánh giá"
    ],
    "lessonTitle": "Kiểm tra đánh giá cuối năm",
    "duration": "1/ 35 phút"
  }
};

export const GRADE_3_MUSIC_CURRICULUM: Record<number, OfficialMusicWeek> = {
  "1": {
    "week": 1,
    "period": 1,
    "theme": "Lễ hội âm thanh",
    "subTopics": [
      "Hát",
      "TTAN",
      "Đọc nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Múa lân",
    "songTitle": "Múa lân",
    "composer": "Lê Cao Phan",
    "duration": "1/ 35 phút",
    "lyrics": "Thùng thình thùng thình cắc tùng thình thình, múa lân đón rằm tháng Tám.\nChú Cuội chơi trăng cùng bé thơ, tùng rinh rinh tiếng trống rộn vang!"
  },
  "2": {
    "week": 2,
    "period": 2,
    "theme": "Lễ hội âm thanh",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Múa lân - Đọc nhạc: Bài số 1",
    "songTitle": "Múa lân",
    "composer": "Lê Cao Phan",
    "duration": "1/ 35 phút"
  },
  "3": {
    "week": 3,
    "period": 3,
    "theme": "Lễ hội âm thanh",
    "subTopics": [
      "Đọc nhạc",
      "TTAN"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 1 - TTAN: Dàn trống dân tộc",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Tìm kiếm, xem video biểu diễn dàn trống dân tộc trên trang web chia sẻ video an toàn.\nNăng lực AI: Phân biệt âm thanh trống thật với âm thanh trống giả lập do AI tạo ra."
  },
  "4": {
    "week": 4,
    "period": 4,
    "theme": "Lễ hội âm thanh",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.1.CB1a; Tắt/mở thiết bị âm thanh số như loa cầm tay, máy nghe nhạc đúng quy trình và an toàn sau hoạt động biểu diễn nhóm."
  },
  "5": {
    "week": 5,
    "period": 5,
    "theme": "Em yêu Tổ quốc Việt Nam",
    "subTopics": [
      "Hát",
      "Nghe nhạc",
      "Nhạc cụ",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Quốc ca Việt Nam",
    "songTitle": "Quốc ca Việt Nam (Tiến quân ca)",
    "composer": "Văn Cao",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Quan sát giáo viên truy cập thư mục và mở file âm thanh mp3 bài Quốc ca Việt Nam trên máy tính.\nNăng lực AI: Nhận biết trợ lý giọng nói có thể hỗ trợ tìm kiếm nhanh bài hát, nhưng cần chọn nguồn chính thống.",
    "lyrics": "Đoàn quân Việt Nam đi chung lòng cứu quốc, bước chân dồn vang trên đường gập ghềnh xa.\nCờ in máu chiến thắng mang hồn nước, súng ngoài xa chen khúc quân hành ca.\nĐường vinh quang xây xác quân thù, thắng gian lao cùng nhau lập chiến khu.\nVì nhân dân chiến đấu không ngừng, tiến mau ra sa trường, tiến lên, cùng tiến lên, nước non Việt Nam ta vững bền."
  },
  "6": {
    "week": 6,
    "period": 6,
    "theme": "Em yêu Tổ quốc Việt Nam",
    "subTopics": [
      "Hát",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Quốc ca Việt Nam - Nghe nhạc: Ca ngợi Tổ quốc",
    "songTitle": "Ca ngợi Tổ quốc",
    "composer": "Hoàng Vân",
    "duration": "1/ 35 phút"
  },
  "7": {
    "week": 7,
    "period": 7,
    "theme": "Em yêu Tổ quốc Việt Nam",
    "subTopics": [
      "Nhạc cụ"
    ],
    "lessonTitle": "Nhạc cụ: Ma-ra-cát (Maracas)",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Quan sát hình ảnh, video giới thiệu cấu tạo và âm thanh nhạc cụ ma-ra-cát trên thiết bị số của giáo viên."
  },
  "8": {
    "week": 8,
    "period": 8,
    "theme": "Em yêu Tổ quốc Việt Nam",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "9": {
    "week": 9,
    "period": 9,
    "theme": "Vui đến trường",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Vui đến trường",
    "songTitle": "Vui đến trường",
    "composer": "Hồ Bắc",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Tìm kiếm và mở video bài hát Vui đến trường trên Youtube theo hướng dẫn của giáo viên.",
    "lyrics": "Vui đến trường trong nắng mai chan hòa, tiếng chim ca rộn rã muôn lời hoa.\nBạn bè thân mến chung một mái trường, học tập chăm ngoan tương lai rạng ngời."
  },
  "10": {
    "week": 10,
    "period": 10,
    "theme": "Vui đến trường",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Vui đến trường - Đọc nhạc: Bài số 2",
    "songTitle": "Vui đến trường",
    "composer": "Hồ Bắc",
    "duration": "1/ 35 phút"
  },
  "11": {
    "week": 11,
    "period": 11,
    "theme": "Vui đến trường",
    "subTopics": [
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 2 - Nghe nhạc: Đi học",
    "songTitle": "Đi học",
    "composer": "Bùi Đình Thảo",
    "duration": "1/ 35 phút"
  },
  "12": {
    "week": 12,
    "period": 12,
    "theme": "Vui đến trường",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 3.1.CB1a; Sử dụng công cụ ghi âm đơn giản trên máy tính bảng để ghi lại phần biểu diễn hát kết hợp vận động cơ thể của nhóm."
  },
  "13": {
    "week": 13,
    "period": 13,
    "theme": "Em yêu làn điệu dân ca",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "Nghe nhạc",
      "TTAN",
      "Ôn tập"
    ],
    "lessonTitle": "Hát: Khúc nhạc trên nương xa",
    "songTitle": "Khúc nhạc trên nương xa",
    "composer": "Dân ca Mông",
    "duration": "1/ 35 phút",
    "lyrics": "Gió reo trên ngàn, sương bay trên nương, khúc sáo ai ngân nga đón ánh bình minh.\nBản làng thân yêu rộn ràng câu hát, tiếng khèn reo vui gọi mùa lúa về."
  },
  "14": {
    "week": 14,
    "period": 14,
    "theme": "Em yêu làn điệu dân ca",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Khúc nhạc trên nương xa - Nhạc cụ: Thể hiện hình tiết tấu bằng nhạc cụ gõ",
    "songTitle": "Khúc nhạc trên nương xa",
    "composer": "Dân ca Mông",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.3.CB1a; Điều chỉnh tư thế ngồi và khoảng cách mắt an toàn khi quan sát hình ảnh tiết tấu trên tivi/máy chiếu."
  },
  "15": {
    "week": 15,
    "period": 15,
    "theme": "Em yêu làn điệu dân ca",
    "subTopics": [
      "Nghe nhạc",
      "TTAN"
    ],
    "lessonTitle": "Nghe nhạc: Suối đàn t'rưng - TTAN: Những khúc hát ru",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.3.CB1a; Điều chỉnh âm lượng loa hoặc thiết bị nghe nhạc số ở mức vừa phải để bảo vệ thính giác khi nghe nhạc."
  },
  "16": {
    "week": 16,
    "period": 16,
    "theme": "Em yêu làn điệu dân ca",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "17": {
    "week": 17,
    "period": 17,
    "theme": "Ôn tập cuối học kì I",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối học kì I",
    "duration": "1/ 35 phút"
  },
  "18": {
    "week": 18,
    "period": 18,
    "theme": "Ôn tập cuối học kì I",
    "subTopics": [
      "Biểu diễn",
      "Đánh giá"
    ],
    "lessonTitle": "Tập biểu diễn/đánh giá cuối học kì I",
    "duration": "1/ 35 phút"
  },
  "19": {
    "week": 19,
    "period": 19,
    "theme": "Đón xuân về",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "TTAN",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Đón xuân về",
    "songTitle": "Đón xuân về",
    "composer": "Phạm Đình Sáu",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Tìm kiếm và mở video bài hát Đón xuân về trên Youtube bằng từ khóa hoặc giọng nói.\nNăng lực AI: Nhận biết tìm kiếm bằng giọng nói là ứng dụng AI hỗ trợ tìm kiếm nhanh.",
    "lyrics": "Gió xuân thoảng đưa hương thơm ngát cành mai, tiếng chim ríu rít hót mừng mùa xuân sang.\nBao bạn nhỏ cùng nhau mừng Tết, áo mới tung tăng đón chào xuân tươi!"
  },
  "20": {
    "week": 20,
    "period": 20,
    "theme": "Đón xuân về",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Đón xuân về - Đọc nhạc: Bài số 3",
    "songTitle": "Đón xuân về",
    "composer": "Phạm Đình Sáu",
    "duration": "1/ 35 phút"
  },
  "21": {
    "week": 21,
    "period": 21,
    "theme": "Đón xuân về",
    "subTopics": [
      "Đọc nhạc",
      "TTAN",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 3 - TTAN: Giới thiệu đàn vi-ô-lông - Nghe nhạc: Mùa xuân ơi",
    "songTitle": "Mùa xuân ơi",
    "composer": "Nguyễn Ngọc Thiện",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.3.CB1a; Quan sát hình ảnh và nghe âm thanh đàn vi-ô-lông qua phần mềm học tập/trang web âm nhạc.\nNăng lực AI: Nhận biết AI có thể nhận diện âm thanh nhạc cụ, nhưng con người mới cảm nhận vẻ đẹp và cảm xúc âm nhạc."
  },
  "22": {
    "week": 22,
    "period": 22,
    "theme": "Đón xuân về",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "23": {
    "week": 23,
    "period": 23,
    "theme": "Đẹp mãi tuổi thơ",
    "subTopics": [
      "Hát",
      "Nghe nhạc",
      "Nhạc cụ",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Đẹp mãi tuổi thơ",
    "songTitle": "Đẹp mãi tuổi thơ",
    "composer": "Hoàng Long",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Tìm kiếm, truy cập video bài hát Đẹp mãi tuổi thơ trên Youtube để luyện tập hát tại nhà.\nNăng lực AI: Nhận biết trợ lý ảo hỗ trợ tìm kiếm, phát nhạc tự động nhưng không phụ thuộc hoàn toàn khi rèn luyện giọng hát.",
    "lyrics": "Tuổi thơ như ánh sao lung linh, tuổi thơ như đóa hoa đầu cành.\nCùng bạn bè hát ca vui say, đẹp mãi trong ta kỷ niệm tuổi thơ!"
  },
  "24": {
    "week": 24,
    "period": 24,
    "theme": "Đẹp mãi tuổi thơ",
    "subTopics": [
      "Nghe nhạc",
      "Hát"
    ],
    "lessonTitle": "Nghe nhạc: Ước mơ hồng - Ôn bài hát: Đẹp mãi tuổi thơ",
    "songTitle": "Ước mơ hồng",
    "composer": "Phạm Tuyên",
    "duration": "1/ 35 phút"
  },
  "25": {
    "week": 25,
    "period": 25,
    "theme": "Đẹp mãi tuổi thơ",
    "subTopics": [
      "Nhạc cụ"
    ],
    "lessonTitle": "Nhạc cụ: Thể hiện các hình tiết tấu bằng nhạc cụ gõ",
    "duration": "1/ 35 phút"
  },
  "26": {
    "week": 26,
    "period": 26,
    "theme": "Đẹp mãi tuổi thơ",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "27": {
    "week": 27,
    "period": 27,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Hát",
      "Đọc nhạc",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Con chim non",
    "songTitle": "Con chim non",
    "composer": "Dân ca Pháp",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Tìm kiếm và xem hình ảnh, thông tin đơn giản về nước Pháp trên internet theo hướng dẫn.\nNăng lực AI: Nhận biết công cụ tìm kiếm thông minh/trợ lý AI có thể gợi ý thông tin nhưng cần kiểm tra với SGK.",
    "lyrics": "Bình minh lên có con chim non, hót véo von đón ngày tươi mới.\nNày chim ngoan hót vang lừng lẫy, cho bao bạn nhỏ rộn rã niềm vui."
  },
  "28": {
    "week": 28,
    "period": 28,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Con chim non - Đọc nhạc: Bài số 4",
    "songTitle": "Con chim non",
    "composer": "Dân ca Pháp",
    "duration": "1/ 35 phút"
  },
  "29": {
    "week": 29,
    "period": 29,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Đọc nhạc",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 4 - Nghe nhạc: Van-xơ Pha-vô-rít",
    "composer": "Wolfgang Amadeus Mozart",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Tìm kiếm, xem video biểu diễn điệu Valse cổ điển trên internet theo hướng dẫn."
  },
  "30": {
    "week": 30,
    "period": 30,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 3.1.CB1a; Sử dụng phần mềm ghi âm đơn giản trên máy tính hoặc máy tính bảng để ghi âm giọng hát của nhóm."
  },
  "31": {
    "week": 31,
    "period": 31,
    "theme": "Vui đón hè",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN",
      "Vận dụng",
      "Ôn tập"
    ],
    "lessonTitle": "Hát: Hè về vui quá",
    "songTitle": "Hè về vui quá",
    "composer": "Trần Tất Toại",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB1a; Tìm kiếm và truy cập video bài hát Hè về vui quá trên Youtube bằng máy tính/máy tính bảng.",
    "lyrics": "Hè về hè về vui quá bạn ơi, rợp trời phượng đỏ tiếng ve rộn ràng.\nTạm biệt sách vở tạm biệt trường lớp, cùng nhau đón một mùa hè tươi vui!"
  },
  "32": {
    "week": 32,
    "period": 32,
    "theme": "Vui đón hè",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Hè về vui quá - Nhạc cụ: Thể hiện hình tiết tấu bằng nhạc cụ gõ",
    "songTitle": "Hè về vui quá",
    "composer": "Trần Tất Toại",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.1.CB1a: Bật/tắt loa bluetooth hoặc máy nghe nhạc của lớp để phát file âm thanh hình tiết tấu an toàn."
  },
  "33": {
    "week": 33,
    "period": 33,
    "theme": "Vui đón hè",
    "subTopics": [
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "TTAN: Cá heo với âm nhạc - Hoạt động Vận dụng - Trải nghiệm",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.1.CB1a; Khởi động và tắt an toàn máy tính bảng/máy tính sau khi xem video câu chuyện âm nhạc.\nNăng lực AI: Nhận biết âm thanh mô phỏng tiếng cá heo hoặc nhạc nền do AI tạo ra có thể chưa giống tiếng thật."
  },
  "34": {
    "week": 34,
    "period": 34,
    "theme": "Vui đón hè",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối năm",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 3.1.CB1a; Dùng chuột hoặc màn hình cảm ứng để chọn và mở các file âm thanh bài đọc nhạc trên máy tính của lớp."
  },
  "35": {
    "week": 35,
    "period": 35,
    "theme": "Vui đón hè",
    "subTopics": [
      "Đánh giá"
    ],
    "lessonTitle": "Kiểm tra đánh giá cuối năm",
    "duration": "1/ 35 phút"
  }
};

export const GRADE_4_MUSIC_CURRICULUM: Record<number, OfficialMusicWeek> = {
  "1": {
    "week": 1,
    "period": 1,
    "theme": "Âm thanh ngày mới",
    "subTopics": [
      "Lí thuyết âm nhạc",
      "Đọc nhạc",
      "Hát",
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "Lí thuyết âm nhạc: Một số kí hiệu ghi nhạc - Đọc nhạc: Bài số 1",
    "duration": "1/ 35 phút"
  },
  "2": {
    "week": 2,
    "period": 2,
    "theme": "Âm thanh ngày mới",
    "subTopics": [
      "Đọc nhạc",
      "Hát"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 1 - Hát: Chuông gió leng keng",
    "songTitle": "Chuông gió leng keng",
    "composer": "Lê Vinh Phúc",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Tìm kiếm thông tin về nhạc sĩ Lê Vinh Phúc và bài hát Chuông gió leng keng trên Google.",
    "lyrics": "Kìa chuông gió leng keng leng keng, gió reo vui đùa khúc nhạc êm đềm.\nHòa cùng nắng sớm đón chào ngày mới, cho muôn nụ cười rạng rỡ trên môi."
  },
  "3": {
    "week": 3,
    "period": 3,
    "theme": "Âm thanh ngày mới",
    "subTopics": [
      "Hát",
      "TTAN"
    ],
    "lessonTitle": "Ôn tập bài hát: Chuông gió leng keng - TTAN: Hình thức biểu diễn trong ca hát",
    "songTitle": "Chuông gió leng keng",
    "composer": "Lê Vinh Phúc",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 3.1.CB2a Sử dụng phần mềm ghi âm hoặc quay video trên điện thoại/máy tính bảng để ghi lại phần biểu diễn của nhóm, xem lại để tự đánh giá và điều chỉnh."
  },
  "4": {
    "week": 4,
    "period": 4,
    "theme": "Âm thanh ngày mới",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "5": {
    "week": 5,
    "period": 5,
    "theme": "Giai điệu quê hương",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Chim sáo",
    "songTitle": "Chim sáo",
    "composer": "Dân ca Khmer Nam Bộ",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a; Truy cập và mở video luyện giọng, video bài hát Chim sáo trên Internet dưới sự hướng dẫn của giáo viên.\nNăng lực AI: NLa Hiểu AI có thể hỗ trợ tạo nhạc đệm nhưng không thay thế cảm xúc, sự sáng tạo khi hát dân ca.",
    "lyrics": "Trong rừng cây xanh sáo đùa sáo bay, trong rừng cây xanh sáo đùa sáo bay.\nNgọt thơm đong đưa những cành trái ngon, đố la lơ lơ đố la lơ lơ chim sáo về."
  },
  "6": {
    "week": 6,
    "period": 6,
    "theme": "Giai điệu quê hương",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Chim sáo - Nhạc cụ: Thể hiện nhạc cụ gõ hoặc nhạc cụ giai điệu",
    "songTitle": "Chim sáo",
    "composer": "Dân ca Khmer Nam Bộ",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Sử dụng thiết bị số để xem video hướng dẫn tư thế thổi recorder/kèn phím; quan sát và thực hành theo hướng dẫn để gõ đệm, thổi nốt đúng."
  },
  "7": {
    "week": 7,
    "period": 7,
    "theme": "Giai điệu quê hương",
    "subTopics": [
      "TTAN",
      "Nghe nhạc"
    ],
    "lessonTitle": "TTAN: Giới thiệu đàn tranh - Nghe nhạc: Lí ngựa ô",
    "songTitle": "Lí ngựa ô",
    "composer": "Dân ca Nam Bộ",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Tìm kiếm, lựa chọn video độc tấu/hòa tấu đàn tranh trên Internet để nhận biết hình dáng, cách chơi và âm sắc nhạc cụ dân tộc."
  },
  "8": {
    "week": 8,
    "period": 8,
    "theme": "Giai điệu quê hương",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "9": {
    "week": 9,
    "period": 9,
    "theme": "Thầy cô với chúng em",
    "subTopics": [
      "Lí thuyết âm nhạc",
      "Đọc nhạc",
      "Hát",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Lí thuyết âm nhạc: Giới thiệu các hình nốt - Đọc nhạc: Bài số 2",
    "duration": "1/ 35 phút"
  },
  "10": {
    "week": 10,
    "period": 10,
    "theme": "Thầy cô với chúng em",
    "subTopics": [
      "Đọc nhạc",
      "Hát"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 2 - Hát: Nếu em là...",
    "songTitle": "Nếu em là...",
    "composer": "Hoàng Long - Hoàng Lân",
    "duration": "1/ 35 phút",
    "lyrics": "Nếu em là mây, em làm mưa tưới mát ruộng đồng.\nNếu em là chim, em làm chim hót vang lời ca.\nNếu em là hoa, em tỏa hương ngát thơm cuộc đời,\nDâng ngàn câu hát tặng thầy cô kính yêu."
  },
  "11": {
    "week": 11,
    "period": 11,
    "theme": "Thầy cô với chúng em",
    "subTopics": [
      "Hát",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Nếu em là... - Nghe nhạc: Điều mong ước tặng thầy",
    "songTitle": "Điều mong ước tặng thầy",
    "composer": "Vũ Hoàng",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.2.CB2a Ghi âm phần hát của nhóm bằng điện thoại/máy tính, chia sẻ tệp lên nhóm học tập trực tuyến; tìm kiếm video bài Điều mong ước tặng thầy trên kênh học liệu chính thức."
  },
  "12": {
    "week": 12,
    "period": 12,
    "theme": "Thầy cô với chúng em",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 5.2.CB2a Truy cập học liệu điện tử để nghe lại bài hát và bài nghe nhạc khi ở nhà."
  },
  "13": {
    "week": 13,
    "period": 13,
    "theme": "Vui đón Tết",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Tết là tết",
    "songTitle": "Tết là tết",
    "composer": "Nhất Trung",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Sử dụng trình duyệt web để tìm kiếm hình ảnh ngày Tết và thông tin ngắn gọn về nhạc sĩ Nhất Trung phục vụ bài học.\nNăng lực AI: NLa-A1-L4 Nhận biết AI hỗ trợ tìm kiếm thông tin nhanh nhưng không thay thế cảm xúc vui tươi, ấm áp của con người khi hát.",
    "lyrics": "Tết tết tết tết đến rồi, Tết tết tết tết đến rồi!\nTết đến trong tim mọi người, đàn em ríu rít mừng vui đón xuân!"
  },
  "14": {
    "week": 14,
    "period": 14,
    "theme": "Vui đón Tết",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Tết là tết - Nhạc cụ: Thể hiện nhạc cụ gõ hoặc nhạc cụ giai điệu",
    "songTitle": "Tết là tết",
    "composer": "Nhất Trung",
    "duration": "1/ 35 phút"
  },
  "15": {
    "week": 15,
    "period": 15,
    "theme": "Vui đón Tết",
    "subTopics": [
      "TTAN"
    ],
    "lessonTitle": "TTAN: Câu chuyện Pi-tơ và chó sói",
    "composer": "Sergei Prokofiev",
    "duration": "1/ 35 phút"
  },
  "16": {
    "week": 16,
    "period": 16,
    "theme": "Vui đón Tết",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "17": {
    "week": 17,
    "period": 17,
    "theme": "Ôn tập cuối học kì I",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập học kì I",
    "duration": "1/ 35 phút"
  },
  "18": {
    "week": 18,
    "period": 18,
    "theme": "Ôn tập và đánh giá cuối học kì I",
    "subTopics": [
      "Đánh giá",
      "Biểu diễn"
    ],
    "lessonTitle": "Kiểm tra đánh giá cuối học kì I - Biểu diễn một số bài hát đã học",
    "duration": "1/ 35 phút"
  },
  "19": {
    "week": 19,
    "period": 19,
    "theme": "Thiên nhiên tươi đẹp",
    "subTopics": [
      "Lí thuyết âm nhạc",
      "Đọc nhạc",
      "Hát",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Lí thuyết âm nhạc: Dấu lặng - Đọc nhạc: Bài số 3",
    "duration": "1/ 35 phút"
  },
  "20": {
    "week": 20,
    "period": 20,
    "theme": "Thiên nhiên tươi đẹp",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Hát: Hạt mưa kể chuyện - Ôn đọc nhạc: Bài số 3",
    "songTitle": "Hạt mưa kể chuyện",
    "composer": "Hoàng Kim Triều",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 4.3.CB2a Điều chỉnh tư thế ngồi thẳng lưng, giữ khoảng cách an toàn với màn hình máy chiếu khi quan sát video bài hát mẫu để bảo vệ thị lực và cột sống.",
    "lyrics": "Hạt mưa tí tách rơi trên cành non, kể chuyện suối nguồn kể chuyện biển xanh.\nMưa cho cây cỏ đâm chồi ngát xanh, mưa cho đồng ruộng bội thu lúa vàng."
  },
  "21": {
    "week": 21,
    "period": 21,
    "theme": "Thiên nhiên tươi đẹp",
    "subTopics": [
      "Hát",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn tập bài hát: Hạt mưa kể chuyện - Nghe nhạc: Không gian xanh",
    "songTitle": "Hạt mưa kể chuyện",
    "composer": "Hoàng Kim Triều",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.2.CB2a Chia sẻ tệp ghi âm giọng hát của nhóm lên nhóm học tập trực tuyến để bạn bè cùng lắng nghe, nhận xét và góp ý."
  },
  "22": {
    "week": 22,
    "period": 22,
    "theme": "Thiên nhiên tươi đẹp",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "23": {
    "week": 23,
    "period": 23,
    "theme": "Tình bạn tuổi thơ",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Tình bạn tuổi thơ",
    "songTitle": "Tình bạn tuổi thơ",
    "composer": "Trần Ngọc Hoa",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Tìm kiếm và mở file âm thanh bài Tình bạn tuổi thơ trên học liệu số hoặc Internet bằng từ khóa đơn giản.\nNăng lực AI: NLa Nhận biết AI có thể hỗ trợ tìm bài hát qua giai điệu nhưng không thay thế cảm xúc tự nhiên khi hát.",
    "lyrics": "Tay cầm tay bạn bè thân mến ơi, cùng sẻ chia niềm vui tiếng cười.\nDưới bóng mát sân trường rộn rã, tình bạn tuổi thơ sáng mãi trong đời."
  },
  "24": {
    "week": 24,
    "period": 24,
    "theme": "Tình bạn tuổi thơ",
    "subTopics": [
      "TTAN",
      "Hát"
    ],
    "lessonTitle": "TTAN: Nhạc sĩ Lưu Hữu Phước và bài hát Reo vang bình minh - Ôn tập bài hát: Tình bạn tuổi thơ",
    "songTitle": "Reo vang bình minh",
    "composer": "Lưu Hữu Phước",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Tìm kiếm thông tin cơ bản về nhạc sĩ Lưu Hữu Phước trên công cụ tìm kiếm số bằng từ khóa chính xác, biết lựa chọn thông tin phù hợp với bài học."
  },
  "25": {
    "week": 25,
    "period": 25,
    "theme": "Tình bạn tuổi thơ",
    "subTopics": [
      "Nhạc cụ"
    ],
    "lessonTitle": "Nhạc cụ: Thể hiện nhạc cụ gõ hoặc nhạc cụ giai điệu",
    "duration": "1/ 35 phút"
  },
  "26": {
    "week": 26,
    "period": 26,
    "theme": "Tình bạn tuổi thơ",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "27": {
    "week": 27,
    "period": 27,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Lí thuyết âm nhạc",
      "Đọc nhạc",
      "Hát",
      "TTAN",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Lí thuyết âm nhạc: Ôn tập - Đọc nhạc: Bài số 4",
    "duration": "1/ 35 phút"
  },
  "28": {
    "week": 28,
    "period": 28,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Hát"
    ],
    "lessonTitle": "Hát: Miền quê em",
    "songTitle": "Miền quê em",
    "composer": "Trịnh Tuấn Khanh",
    "duration": "1/ 35 phút",
    "lyrics": "Miền quê em lúa xanh mênh mông, dòng sông trôi uốn quanh xóm làng.\nKhúc hát quê hương ngọt ngào yêu thương, đẹp mãi trong lòng tuổi thơ chúng em."
  },
  "29": {
    "week": 29,
    "period": 29,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Hát",
      "TTAN",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Miền quê em - TTAN: Kèn trôm-pét (Trumpet) - Nghe nhạc: Khúc nhạc mở đầu",
    "songTitle": "Miền quê em",
    "composer": "Trịnh Tuấn Khanh",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a; 4.3.CB2a Tìm kiếm thông tin, hình ảnh và âm thanh của kèn Trumpet trên Internet; điều chỉnh âm lượng thiết bị số ở mức vừa phải khi nghe nhạc.\nNăng lực AI: NLa Phân biệt âm thanh kèn thật do nghệ sĩ biểu diễn với âm thanh giả lập bằng công nghệ AI."
  },
  "30": {
    "week": 30,
    "period": 30,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "31": {
    "week": 31,
    "period": 31,
    "theme": "Chào mùa hè",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "Nghe nhạc",
      "Vận dụng",
      "Ôn tập"
    ],
    "lessonTitle": "Hát: Em yêu mùa hè quê em",
    "songTitle": "Em yêu mùa hè quê em",
    "composer": "Trần Minh Đặng",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Tìm kiếm thông tin về nhạc sĩ Trần Minh Đặng và bài hát Em yêu mùa hè quê em trên Google bằng từ khóa đơn giản, kiểm chứng thông tin với giáo viên.",
    "lyrics": "Em yêu mùa hè quê em, hàng phượng vĩ nở hoa đỏ rực.\nTiếng ve ca rộn rã nắng mai, cánh diều bay cao lộng gió trời."
  },
  "32": {
    "week": 32,
    "period": 32,
    "theme": "Chào mùa hè",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Em yêu mùa hè quê em - Nhạc cụ: Thể hiện nhạc cụ giai điệu",
    "songTitle": "Em yêu mùa hè quê em",
    "composer": "Trần Minh Đặng",
    "duration": "1/ 35 phút"
  },
  "33": {
    "week": 33,
    "period": 33,
    "theme": "Chào mùa hè",
    "subTopics": [
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Nghe nhạc: Khúc ca vào hè - Tổ chức hoạt động Vận dụng - Sáng tạo",
    "songTitle": "Khúc ca vào hè",
    "composer": "Lê Minh Châu",
    "duration": "1/ 35 phút"
  },
  "34": {
    "week": 34,
    "period": 34,
    "theme": "Ôn tập cuối năm",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối năm",
    "duration": "1/ 35 phút"
  },
  "35": {
    "week": 35,
    "period": 35,
    "theme": "Ôn tập cuối năm",
    "subTopics": [
      "Đánh giá"
    ],
    "lessonTitle": "Ôn tập cuối năm - Kiểm tra - đánh giá",
    "duration": "1/ 35 phút"
  }
};

export const GRADE_5_MUSIC_CURRICULUM: Record<number, OfficialMusicWeek> = {
  "1": {
    "week": 1,
    "period": 1,
    "theme": "Khúc ca ngày mới",
    "subTopics": [
      "Lí thuyết âm nhạc",
      "Đọc nhạc",
      "Hát",
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "Lí thuyết âm nhạc: Trọng âm, phách, vạch nhịp, ô nhịp - Đọc nhạc: Bài số 1",
    "duration": "1/ 35 phút"
  },
  "2": {
    "week": 2,
    "period": 2,
    "theme": "Khúc ca ngày mới",
    "subTopics": [
      "Hát"
    ],
    "lessonTitle": "Hát: Chim sơn ca",
    "songTitle": "Chim sơn ca",
    "composer": "Hoàng Long - Hoàng Lân",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 3.1.CB2a Nghe file mp3/mp4 bài hát, ghi âm phần hát của nhóm để tự đánh giá cao độ, trường độ và sắc thái thể hiện.",
    "lyrics": "Khúc hát mừng ngày mới sang, chim sơn ca hót vang đón ánh ban mai.\nGió rung rinh từng chiếc lá, tiếng chim vui hòa cùng tiếng suối trong lành."
  },
  "3": {
    "week": 3,
    "period": 3,
    "theme": "Khúc ca ngày mới",
    "subTopics": [
      "Đọc nhạc",
      "Hát",
      "TTAN"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 1 - Ôn bài hát: Chim sơn ca - TTAN: Một số hình thức biểu diễn nhạc cụ",
    "songTitle": "Chim sơn ca",
    "composer": "Hoàng Long - Hoàng Lân",
    "duration": "1/ 35 phút"
  },
  "4": {
    "week": 4,
    "period": 4,
    "theme": "Khúc ca ngày mới",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "5": {
    "week": 5,
    "period": 5,
    "theme": "Giai điệu quê hương",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Lí đất giồng",
    "songTitle": "Lí đất giồng",
    "composer": "Dân ca Nam Bộ",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a; 1.2.CB2b; Tìm kiếm video biểu diễn bài Lí đất giồng trên Youtube, quan sát cách lấy hơi và biểu cảm của ca sĩ; xem bản đồ số vùng Nam Bộ.\nNăng lực AI: NLaA2 Lớp5 Nhận biết công cụ AI có thể gợi ý các bài dân ca Nam Bộ tương tự.",
    "lyrics": "Đất giồng mình trồng khoai lang, dây khoai tốt lá củ khoai to tròn.\nAi về miền Tây sông nước mênh mông, nghe câu hò êm ấm nặng tình quê hương."
  },
  "6": {
    "week": 6,
    "period": 6,
    "theme": "Giai điệu quê hương",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Lí đất giồng - Nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu",
    "songTitle": "Lí đất giồng",
    "composer": "Dân ca Nam Bộ",
    "duration": "1/ 35 phút"
  },
  "7": {
    "week": 7,
    "period": 7,
    "theme": "Giai điệu quê hương",
    "subTopics": [
      "Nhạc cụ",
      "TTAN"
    ],
    "lessonTitle": "Ôn nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu - TTAN: Đàn nhị",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a; 1.1.CB2b Tìm kiếm, lựa chọn video độc tấu đàn nhị và thông tin nghệ sĩ đàn nhị trên Internet."
  },
  "8": {
    "week": 8,
    "period": 8,
    "theme": "Giai điệu quê hương",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "9": {
    "week": 9,
    "period": 9,
    "theme": "Bay vào tương lai",
    "subTopics": [
      "Lí thuyết âm nhạc",
      "Đọc nhạc",
      "Hát",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Lí thuyết âm nhạc: Nhịp 2/4 - Đọc nhạc: Bài số 2",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Tìm kiếm, lọc thông tin, hình ảnh, video minh họa về nhịp 2/4; tìm video bài hát thiếu nhi viết ở nhịp 2/4 để cảm nhận nhịp điệu."
  },
  "10": {
    "week": 10,
    "period": 10,
    "theme": "Bay vào tương lai",
    "subTopics": [
      "Đọc nhạc",
      "Hát"
    ],
    "lessonTitle": "Ôn đọc nhạc: Bài số 2 - Hát: Bay vào tương lai",
    "songTitle": "Bay vào tương lai",
    "composer": "Nguyễn Văn Hiên",
    "duration": "1/ 35 phút",
    "lyrics": "Cánh buồm trắng bay ra biển lớn, đôi cánh nhỏ bay vào tương lai.\nChắp cánh ước mơ bay xa chân trời, xây dựng quê hương ngày mai tươi sáng."
  },
  "11": {
    "week": 11,
    "period": 11,
    "theme": "Bay vào tương lai",
    "subTopics": [
      "Hát",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Bay vào tương lai - Nghe nhạc: Đường đến trường vui lắm!",
    "songTitle": "Bay vào tương lai",
    "composer": "Nguyễn Văn Hiên",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.4.CB2a Sử dụng máy tính bảng quay video ngắn phần biểu diễn hát kết hợp phụ họa của nhóm, xem lại để tự nhận xét và điều chỉnh."
  },
  "12": {
    "week": 12,
    "period": 12,
    "theme": "Bay vào tương lai",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "13": {
    "week": 13,
    "period": 13,
    "theme": "Chào mùa xuân đến",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "TTAN",
      "Vận dụng",
      "Ôn tập"
    ],
    "lessonTitle": "Hát: Duyên dáng mùa xuân",
    "songTitle": "Duyên dáng mùa xuân",
    "composer": "Thế Hiển",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Truy cập đúng nguồn học liệu số, mở file mp3/mp4 bài Duyên dáng mùa xuân trên Internet hoặc trang học liệu của nhà xuất bản để học hát an toàn.",
    "lyrics": "Xuân duyên dáng về trên khắp phố phường, ngàn hoa khoe sắc đón chào ngày xuân.\nNụ cười tươi trên môi bao em nhỏ, khúc ca rộn rã thắm nồng yêu thương."
  },
  "14": {
    "week": 14,
    "period": 14,
    "theme": "Chào mùa xuân đến",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Duyên dáng mùa xuân - Nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu",
    "songTitle": "Duyên dáng mùa xuân",
    "composer": "Thế Hiển",
    "duration": "1/ 35 phút"
  },
  "15": {
    "week": 15,
    "period": 15,
    "theme": "Chào mùa xuân đến",
    "subTopics": [
      "TTAN",
      "Nhạc cụ"
    ],
    "lessonTitle": "TTAN: Câu chuyện về bản xô-nát Ánh trăng - Ôn nhạc cụ",
    "composer": "Ludwig van Beethoven",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a; 2.2.CB2a Tìm kiếm, nghe và quan sát học liệu số về bản xô-nát Ánh trăng và biểu diễn nhạc cụ; ghi âm/ghi hình phần luyện tập của nhóm."
  },
  "16": {
    "week": 16,
    "period": 16,
    "theme": "Chào mùa xuân đến",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "17": {
    "week": 17,
    "period": 17,
    "theme": "Ôn tập cuối học kì I",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối học kì I",
    "duration": "1/ 35 phút"
  },
  "18": {
    "week": 18,
    "period": 18,
    "theme": "Ôn tập và đánh giá cuối học kì I",
    "subTopics": [
      "Biểu diễn",
      "Đánh giá"
    ],
    "lessonTitle": "Biểu diễn một số bài hát đã học - Kiểm tra, đánh giá cuối học kì I",
    "duration": "1/ 35 phút"
  },
  "19": {
    "week": 19,
    "period": 19,
    "theme": "Thiên nhiên tươi đẹp",
    "subTopics": [
      "Lí thuyết âm nhạc",
      "Đọc nhạc",
      "Hát",
      "TTAN",
      "Vận dụng"
    ],
    "lessonTitle": "Lí thuyết âm nhạc: Nhịp 3/4 - Đọc nhạc: Bài số 3",
    "duration": "1/ 35 phút"
  },
  "20": {
    "week": 20,
    "period": 20,
    "theme": "Thiên nhiên tươi đẹp",
    "subTopics": [
      "TTAN",
      "Đọc nhạc"
    ],
    "lessonTitle": "TTAN: Nhạc sĩ Bùi Đình Thảo và bài hát Sách bút thân yêu ơi - Ôn đọc nhạc: Bài số 3",
    "songTitle": "Sách bút thân yêu ơi",
    "composer": "Bùi Đình Thảo",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Sử dụng công cụ tìm kiếm trên Internet để chủ động tìm kiếm và lựa chọn thông tin, hình ảnh chính xác về cuộc đời, sự nghiệp của nhạc sĩ Bùi Đình Thảo."
  },
  "21": {
    "week": 21,
    "period": 21,
    "theme": "Thiên nhiên tươi đẹp",
    "subTopics": [
      "Hát"
    ],
    "lessonTitle": "Hát: Em đi giữa biển vàng",
    "songTitle": "Em đi giữa biển vàng",
    "composer": "Bùi Đình Thảo (thơ: Nguyễn Khoa Điềm)",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Nghe file học liệu điện tử, quan sát hình ảnh minh họa về đồng lúa, người nông dân và luyện hát với nhạc đệm để thể hiện đúng sắc thái bài hát.",
    "lyrics": "Em đi giữa biển vàng, nghe mênh mang trên đồng lúa chín.\nHương lúa ngát thơm bay, đẹp sao hạt gạo quê mình hôm nay."
  },
  "22": {
    "week": 22,
    "period": 22,
    "theme": "Thiên nhiên tươi đẹp",
    "subTopics": [
      "Hát",
      "Vận dụng"
    ],
    "lessonTitle": "Ôn hát: Em đi giữa biển vàng - Tổ chức hoạt động Vận dụng - Sáng tạo",
    "songTitle": "Em đi giữa biển vàng",
    "composer": "Bùi Đình Thảo",
    "duration": "1/ 35 phút"
  },
  "23": {
    "week": 23,
    "period": 23,
    "theme": "Ước mơ tuổi thơ",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Hát: Tuổi hồng ơi",
    "songTitle": "Tuổi hồng ơi",
    "composer": "Vũ Hoàng",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a; Tìm kiếm, truy cập video biểu diễn, file nhạc đệm bài Tuổi hồng ơi để học tập phong cách biểu diễn.\nNăng lực AI: NLa-A2-Lớp 5 Nhận biết sự khác biệt về cảm xúc giữa tác phẩm do con người sáng tác và đoạn nhạc do AI mô phỏng.",
    "lyrics": "Tuổi hồng ơi xinh tươi như hoa nở đầu cành, tuổi hồng ơi bay cao như chim lượn trời xanh.\nCùng bạn bè hát khúc ca chan hòa yêu thương, đắp xây ngày mai tương lai rạng ngời tươi sáng."
  },
  "24": {
    "week": 24,
    "period": 24,
    "theme": "Ước mơ tuổi thơ",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Tuổi hồng ơi - Nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu",
    "songTitle": "Tuổi hồng ơi",
    "composer": "Vũ Hoàng",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 2.1.CB2a; 3.1.CB2a Sử dụng thiết bị số để quan sát trực quan hình nốt, âm hình tiết tấu và mẫu âm nhạc cụ; ghi âm phần trình diễn hát/gõ đệm của nhóm để tự đánh giá."
  },
  "25": {
    "week": 25,
    "period": 25,
    "theme": "Ước mơ tuổi thơ",
    "subTopics": [
      "Nhạc cụ",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn nhạc cụ - Nghe nhạc: Ngôi sao sáng",
    "songTitle": "Ngôi sao sáng",
    "composer": "Dân ca Khmer",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Tìm kiếm, xem video biểu diễn nhạc cụ dân tộc trên Internet để mở rộng hiểu biết; nghe hòa tấu dân ca Khmer và vận động theo nhạc."
  },
  "26": {
    "week": 26,
    "period": 26,
    "theme": "Ước mơ tuổi thơ",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "27": {
    "week": 27,
    "period": 27,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Lí thuyết âm nhạc",
      "Đọc nhạc",
      "Hát",
      "TTAN",
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Lí thuyết âm nhạc: Ôn tập - Đọc nhạc: Bài số 4",
    "duration": "1/ 35 phút"
  },
  "28": {
    "week": 28,
    "period": 28,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Hát",
      "Đọc nhạc"
    ],
    "lessonTitle": "Hát: Đất nước tươi đẹp sao - Ôn tập Bài số 4",
    "songTitle": "Đất nước tươi đẹp sao",
    "composer": "Nhạc Malaysia (Lời Việt: Vũ Trọng Tường)",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.3.CB2a Lưu trữ file âm thanh bài Đất nước tươi đẹp sao vào thư mục Am nhac Lop 5 trên máy tính cá nhân để luyện tập tại nhà.",
    "lyrics": "Đẹp sao đất nước chan hòa ánh mặt trời, biển xanh cát trắng reo vui khắp muôn nơi.\nTình thân ái kết đoàn cùng năm châu bè bạn, khúc ca rộn rã xây đắp hòa bình tươi sáng."
  },
  "29": {
    "week": 29,
    "period": 29,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Hát",
      "TTAN",
      "Nghe nhạc"
    ],
    "lessonTitle": "Ôn bài hát: Đất nước tươi đẹp sao - TTAN: Giới thiệu nhạc cụ nước ngoài - Nghe nhạc: Vũ điệu Tây Ban Nha",
    "songTitle": "Đất nước tươi đẹp sao",
    "composer": "Nhạc Malaysia",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a Sử dụng Google để tìm kiếm hình ảnh, âm thanh thực tế của bộ trống nước ngoài và lưu hình ảnh vào thư mục học tập.\nNăng lực AI: NLa.A2 So sánh nhạc đệm do AI tạo ra với phần biểu diễn trực tiếp để thấy AI không thay thế cảm xúc sáng tạo của con người."
  },
  "30": {
    "week": 30,
    "period": 30,
    "theme": "Âm nhạc nước ngoài",
    "subTopics": [
      "Vận dụng"
    ],
    "lessonTitle": "Tổ chức hoạt động Vận dụng - Sáng tạo",
    "duration": "1/ 35 phút"
  },
  "31": {
    "week": 31,
    "period": 31,
    "theme": "Khúc ca hè về",
    "subTopics": [
      "Hát",
      "Nhạc cụ",
      "Nghe nhạc",
      "Vận dụng",
      "Ôn tập"
    ],
    "lessonTitle": "Hát: Khúc ca hè về",
    "songTitle": "Khúc ca hè về",
    "composer": "Hoàng Lân",
    "duration": "1/ 35 phút",
    "adjustments": "Năng lực số: 1.1.CB2a; 3.1.CB2a Tìm kiếm và nghe file nhạc beat, video bài Khúc ca hè về trên Youtube để luyện tập hát ở nhà; ghi âm giọng hát để tự nghe và tự đánh giá.",
    "lyrics": "Ve ve vang lừng trên vòm lá xanh, mùa hè tươi thắm đón chào tuổi thơ.\nRíu rít chim ca nắng vàng lung linh, ta đón hè về trong khúc hát vui tươi!"
  },
  "32": {
    "week": 32,
    "period": 32,
    "theme": "Khúc ca hè về",
    "subTopics": [
      "Hát",
      "Nhạc cụ"
    ],
    "lessonTitle": "Ôn bài hát: Khúc ca hè về - Nhạc cụ: Nhạc cụ thể hiện tiết tấu và nhạc cụ thể hiện giai điệu",
    "songTitle": "Khúc ca hè về",
    "composer": "Hoàng Lân",
    "duration": "1/ 35 phút"
  },
  "33": {
    "week": 33,
    "period": 33,
    "theme": "Khúc ca hè về",
    "subTopics": [
      "Nghe nhạc",
      "Vận dụng"
    ],
    "lessonTitle": "Nghe nhạc: Khúc ca bốn mùa - Vận dụng - trải nghiệm",
    "songTitle": "Khúc ca bốn mùa",
    "composer": "Nguyễn Hải",
    "duration": "1/ 35 phút"
  },
  "34": {
    "week": 34,
    "period": 34,
    "theme": "Ôn tập cuối năm",
    "subTopics": [
      "Ôn tập"
    ],
    "lessonTitle": "Ôn tập cuối năm",
    "duration": "1/ 35 phút"
  },
  "35": {
    "week": 35,
    "period": 35,
    "theme": "Kiểm tra đánh giá cuối năm",
    "subTopics": [
      "Đánh giá"
    ],
    "lessonTitle": "Kiểm tra đánh giá cuối năm",
    "duration": "1/ 35 phút"
  }
};

export const ALL_GRADES_MUSIC_CURRICULUM: Record<Grade, Record<number, OfficialMusicWeek>> = {
  1: GRADE_1_MUSIC_CURRICULUM,
  2: GRADE_2_MUSIC_CURRICULUM,
  3: GRADE_3_MUSIC_CURRICULUM,
  4: GRADE_4_MUSIC_CURRICULUM,
  5: GRADE_5_MUSIC_CURRICULUM,
};

export function getOfficialMusicWeek(grade: Grade, week: number): OfficialMusicWeek {
  const gCur = ALL_GRADES_MUSIC_CURRICULUM[grade] || ALL_GRADES_MUSIC_CURRICULUM[1];
  const w = Math.max(1, Math.min(35, week));
  return gCur[w] || gCur[1];
}
