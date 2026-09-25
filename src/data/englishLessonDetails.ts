import { Grade, LessonActivity } from "../types";
import {
  getOfficialEnglishPeriod,
  getOfficialEnglishPeriodByYear,
  OfficialEnglishPeriod
} from "./englishCurriculumData";

export interface EnglishLessonDetail {
  lessonTitle: string;
  unitName: string;
  vocabulary: string[]; // Danh sách từ vựng chi tiết kèm phiên âm và nghĩa tiếng Việt
  rawWords: string[]; // Danh sách từ vựng tiếng Anh nguyên bản
  sentencePatterns: string[]; // Mẫu câu giao tiếp trọng tâm
  phonicsSound?: string; // Âm ngữ âm trọng tâm
  gameName: string; // Trò chơi củng cố từ vựng
  specificCompetencies: string[];
  generalCompetencies?: string[];
  qualities?: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  integrationNotes: string;
  activities: LessonActivity[];
}

interface EnglishUnitData {
  unit: number;
  unitName: string;
  theme: string;
  vocabulary: { word: string; ipa: string; meaning: string }[];
  sentencePatterns: string[];
  phonics: string;
  game: string;
}

// ==========================================
// DỮ LIỆU TỪ VỰNG TIẾNG ANH CHUẨN GDPT 2018
// (Chương trình Tiếng Anh Lớp 1, 2, 3, 4, 5)
// ==========================================

export const GRADE_1_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: School Things",
    theme: "Đồ dùng học tập",
    vocabulary: [
      { word: "book", ipa: "/bʊk/", meaning: "quyển sách" },
      { word: "pen", ipa: "/pen/", meaning: "cây bút mực" },
      { word: "pencil", ipa: "/ˈpensl/", meaning: "bút chì" },
      { word: "ruler", ipa: "/ˈruːlə/", meaning: "cây thước kẻ" },
      { word: "rubber", ipa: "/ˈrʌbə/", meaning: "cục tẩy / gôm" }
    ],
    sentencePatterns: [
      "What is this? -> It's a [book / pen / pencil / ruler].",
      "Point to the [book / pen / pencil / ruler]."
    ],
    phonics: "Luyện phát âm âm /b/ trong 'book' và âm /p/ trong 'pen', 'pencil'",
    game: "Slap the board (Đập bảng nhận diện từ)"
  },
  {
    unit: 2,
    unitName: "Unit 2: Colors",
    theme: "Màu sắc quanh em",
    vocabulary: [
      { word: "red", ipa: "/red/", meaning: "màu đỏ" },
      { word: "blue", ipa: "/bluː/", meaning: "màu xanh da trời" },
      { word: "yellow", ipa: "/ˈjeləʊ/", meaning: "màu vàng" },
      { word: "green", ipa: "/ɡriːn/", meaning: "màu xanh lá cây" },
      { word: "pink", ipa: "/pɪŋk/", meaning: "màu hồng" }
    ],
    sentencePatterns: [
      "What color is this? -> It's [red / blue / yellow / green].",
      "I like [red / blue / yellow]."
    ],
    phonics: "Luyện phát âm âm /r/ trong 'red' và âm /bl/ trong 'blue'",
    game: "Color Hunting (Tìm đồ vật theo màu sắc)"
  },
  {
    unit: 3,
    unitName: "Unit 3: Numbers 1-5",
    theme: "Số đếm từ 1 đến 5",
    vocabulary: [
      { word: "one", ipa: "/wʌn/", meaning: "số 1" },
      { word: "two", ipa: "/tuː/", meaning: "số 2" },
      { word: "three", ipa: "/θriː/", meaning: "số 3 (âm th thổi nhẹ)" },
      { word: "four", ipa: "/fɔː/", meaning: "số 4" },
      { word: "five", ipa: "/faɪv/", meaning: "số 5 (chú ý âm đuôi /v/)" }
    ],
    sentencePatterns: [
      "How many [books / pens]? -> [One / Two / Three / Four / Five].",
      "Show me [three] fingers."
    ],
    phonics: "Luyện phát âm âm /θ/ trong 'three' và âm /f/ trong 'four', 'five'",
    game: "Number Bingo & Simon Says Numbers"
  },
  {
    unit: 4,
    unitName: "Unit 4: Family",
    theme: "Gia đình yêu thương",
    vocabulary: [
      { word: "father", ipa: "/ˈfɑːðə/", meaning: "bố / cha" },
      { word: "mother", ipa: "/ˈmʌðə/", meaning: "mẹ" },
      { word: "brother", ipa: "/ˈbrʌðə/", meaning: "anh trai / em trai" },
      { word: "sister", ipa: "/ˈsɪstə/", meaning: "chị gái / em gái" },
      { word: "baby", ipa: "/ˈbeɪbi/", meaning: "em bé" }
    ],
    sentencePatterns: [
      "Who is this? -> This is my [father / mother / brother / sister].",
      "I love my [family / mother / father]."
    ],
    phonics: "Luyện phát âm âm /f/ trong 'father' và âm /m/ trong 'mother'",
    game: "Family Tree Matching (Ghép thẻ ảnh gia đình)"
  },
  {
    unit: 5,
    unitName: "Unit 5: My Body",
    theme: "Các bộ phận cơ thể",
    vocabulary: [
      { word: "eye", ipa: "/aɪ/", meaning: "mắt" },
      { word: "nose", ipa: "/nəʊz/", meaning: "mũi (âm đuôi /z/)" },
      { word: "mouth", ipa: "/maʊθ/", meaning: "miệng (âm đuôi /θ/)" },
      { word: "ear", ipa: "/ɪə/", meaning: "tai" },
      { word: "head", ipa: "/hed/", meaning: "đầu" },
      { word: "hand", ipa: "/hænd/", meaning: "bàn tay" }
    ],
    sentencePatterns: [
      "Touch your [nose / eye / ear / mouth / head]!",
      "This is my [nose / mouth / head]."
    ],
    phonics: "Luyện phát âm âm /n/ trong 'nose' và âm /h/ trong 'head', 'hand'",
    game: "Simon Says: Touch your body!"
  },
  {
    unit: 6,
    unitName: "Unit 6: Animals",
    theme: "Động vật quen thuộc",
    vocabulary: [
      { word: "cat", ipa: "/kæt/", meaning: "con mèo (âm đuôi /t/)" },
      { word: "dog", ipa: "/dɒɡ/", meaning: "con chó (âm đuôi /g/)" },
      { word: "bird", ipa: "/bɜːd/", meaning: "con chim" },
      { word: "duck", ipa: "/dʌk/", meaning: "con vịt (âm đuôi /k/)" },
      { word: "fish", ipa: "/fɪʃ/", meaning: "con cá (âm đuôi /ʃ/)" }
    ],
    sentencePatterns: [
      "What animal is it? -> It's a [cat / dog / bird / duck / fish].",
      "I see a [cat / bird / dog]."
    ],
    phonics: "Luyện phát âm âm /k/ trong 'cat' và âm /d/ trong 'dog', 'duck'",
    game: "Animal Miming & Sound Guessing (Đoán con vật qua tiếng kêu)"
  },
  {
    unit: 7,
    unitName: "Unit 7: Toys",
    theme: "Đồ chơi của em",
    vocabulary: [
      { word: "ball", ipa: "/bɔːl/", meaning: "quả bóng" },
      { word: "doll", ipa: "/dɒl/", meaning: "búp bê" },
      { word: "car", ipa: "/kɑː/", meaning: "xe ô tô đồ chơi" },
      { word: "robot", ipa: "/ˈrəʊbɒt/", meaning: "người máy / rô bốt" },
      { word: "teddy bear", ipa: "/ˈtedi beə/", meaning: "gấu bông" }
    ],
    sentencePatterns: [
      "I have a [ball / doll / car / robot].",
      "Do you have a [car]? -> Yes, I do. / No, I don't."
    ],
    phonics: "Luyện phát âm âm /b/ trong 'ball' và âm /d/ trong 'doll'",
    game: "What's in the Magic Bag? (Đoán đồ chơi trong túi bí mật)"
  },
  {
    unit: 8,
    unitName: "Unit 8: Food & Drinks",
    theme: "Thức ăn và đồ uống",
    vocabulary: [
      { word: "apple", ipa: "/ˈæpl/", meaning: "quả táo" },
      { word: "banana", ipa: "/bəˈnɑːnə/", meaning: "quả chuối" },
      { word: "milk", ipa: "/mɪlk/", meaning: "sữa (âm đuôi /lk/)" },
      { word: "water", ipa: "/ˈwɔːtə/", meaning: "nước lọc" },
      { word: "bread", ipa: "/bred/", meaning: "bánh mì" }
    ],
    sentencePatterns: [
      "I like [apples / bananas / milk / bread].",
      "Do you like [milk]? -> Yes, I do. / No, I don't."
    ],
    phonics: "Luyện phát âm âm /æ/ trong 'apple' và âm /m/ trong 'milk'",
    game: "Menu Master (Đi chợ chọn món ăn yêu thích)"
  }
];

export const GRADE_2_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: In the Classroom",
    theme: "Trong lớp học",
    vocabulary: [
      { word: "board", ipa: "/bɔːd/", meaning: "bảng viết" },
      { word: "desk", ipa: "/desk/", meaning: "bàn học (âm đuôi /sk/)" },
      { word: "chair", ipa: "/tʃeə/", meaning: "cái ghế (âm đầu /tʃ/)" },
      { word: "door", ipa: "/dɔː/", meaning: "cửa ra vào" },
      { word: "window", ipa: "/ˈwɪndəʊ/", meaning: "cửa sổ" }
    ],
    sentencePatterns: [
      "Open the [door / window / book], please!",
      "Close the [door / book], please!"
    ],
    phonics: "Luyện phát âm âm /tʃ/ trong 'chair' và âm /d/ trong 'desk', 'door'",
    game: "Action Command: Open & Close"
  },
  {
    unit: 2,
    unitName: "Unit 2: My House",
    theme: "Ngôi nhà thân yêu",
    vocabulary: [
      { word: "living room", ipa: "/ˈlɪvɪŋ ruːm/", meaning: "phòng khách" },
      { word: "bedroom", ipa: "/ˈbedruːm/", meaning: "phòng ngủ" },
      { word: "kitchen", ipa: "/ˈkɪtʃɪn/", meaning: "phòng bếp" },
      { word: "bathroom", ipa: "/ˈbɑːθruːm/", meaning: "phòng tắm" },
      { word: "garden", ipa: "/ˈɡɑːdn/", meaning: "khu vườn" }
    ],
    sentencePatterns: [
      "Where is mother? -> She is in the [kitchen / living room].",
      "This is our [house / garden]."
    ],
    phonics: "Luyện phát âm âm /k/ trong 'kitchen' và âm /b/ trong 'bedroom'",
    game: "House Explorer (Khám phá các phòng trong nhà)"
  },
  {
    unit: 3,
    unitName: "Unit 3: At the Zoo",
    theme: "Tham quan vườn thú",
    vocabulary: [
      { word: "monkey", ipa: "/ˈmʌŋki/", meaning: "con khỉ" },
      { word: "elephant", ipa: "/ˈelɪfənt/", meaning: "con voi" },
      { word: "tiger", ipa: "/ˈtaɪɡə/", meaning: "con hổ" },
      { word: "giraffe", ipa: "/dʒəˈrɑːf/", meaning: "hươu cao cổ" },
      { word: "zebra", ipa: "/ˈzebrə/", meaning: "ngựa vằn" }
    ],
    sentencePatterns: [
      "Look at the [monkey / elephant / tiger]!",
      "It is [big / tall / funny]."
    ],
    phonics: "Luyện phát âm âm /m/ trong 'monkey' và âm /t/ trong 'tiger'",
    game: "Zoo Keeper Quiz (Đố vui con vật tại thảo cầm viên)"
  },
  {
    unit: 4,
    unitName: "Unit 4: Shapes & Numbers 6-10",
    theme: "Hình khối và số đếm 6-10",
    vocabulary: [
      { word: "circle", ipa: "/ˈsɜːkl/", meaning: "hình tròn" },
      { word: "square", ipa: "/skweə/", meaning: "hình vuông (âm /skw/)" },
      { word: "triangle", ipa: "/ˈtraɪæŋɡl/", meaning: "hình tam giác" },
      { word: "six", ipa: "/sɪks/", meaning: "số 6" },
      { word: "seven", ipa: "/ˈsevn/", meaning: "số 7" },
      { word: "eight", ipa: "/eɪt/", meaning: "số 8" }
    ],
    sentencePatterns: [
      "It's a [circle / square / triangle].",
      "How many [circles]? -> There are [six / seven / eight] circles."
    ],
    phonics: "Luyện phát âm âm /s/ trong 'circle', 'six', 'seven'",
    game: "Shape Detective (Thám tử tìm hình khối)"
  },
  {
    unit: 5,
    unitName: "Unit 5: Clothes",
    theme: "Trang phục thường ngày",
    vocabulary: [
      { word: "shirt", ipa: "/ʃɜːt/", meaning: "áo sơ mi" },
      { word: "T-shirt", ipa: "/ˈtiː ʃɜːt/", meaning: "áo phông / thun" },
      { word: "dress", ipa: "/dres/", meaning: "váy liền thân" },
      { word: "hat", ipa: "/hæt/", meaning: "chiếc mũ" },
      { word: "shoes", ipa: "/ʃuːz/", meaning: "đôi giày" }
    ],
    sentencePatterns: [
      "I'm wearing a [blue T-shirt / red hat / dress].",
      "He / She is wearing [shoes / a shirt]."
    ],
    phonics: "Luyện phát âm âm /ʃ/ trong 'shirt', 'shoes' và âm /dr/ trong 'dress'",
    game: "Fashion Show (Trình diễn thời trang nhí)"
  }
];

export const GRADE_3_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: Hello",
    theme: "Chào hỏi và làm quen",
    vocabulary: [
      { word: "hello", ipa: "/həˈləʊ/", meaning: "xin chào (thân mật, lịch sự)" },
      { word: "hi", ipa: "/haɪ/", meaning: "chào bạn (thân mật)" },
      { word: "name", ipa: "/neɪm/", meaning: "tên gọi (âm đuôi /m/)" },
      { word: "goodbye", ipa: "/ˌɡʊdˈbaɪ/", meaning: "tạm biệt" },
      { word: "bye", ipa: "/baɪ/", meaning: "chào tạm biệt" }
    ],
    sentencePatterns: [
      "Hello, I'm [Nam / Mai / Mary].",
      "Hi, [Nam]. I'm [Hoa]. Nice to meet you!"
    ],
    phonics: "Luyện phát âm âm /h/ trong 'hello', 'hi' và âm /b/ trong 'bye', 'goodbye'",
    game: "Passing the Ball: Gặp gỡ và tự giới thiệu"
  },
  {
    unit: 2,
    unitName: "Unit 2: Our Names",
    theme: "Hỏi tên và đánh vần tên",
    vocabulary: [
      { word: "how", ipa: "/haʊ/", meaning: "như thế nào / làm sao" },
      { word: "fine", ipa: "/faɪn/", meaning: "khỏe / tốt" },
      { word: "thank", ipa: "/θæŋk/", meaning: "cảm ơn (âm /θ/ và đuôi /ŋk/)" },
      { word: "spell", ipa: "/spel/", meaning: "đánh vần chữ cái" },
      { word: "friend", ipa: "/frend/", meaning: "người bạn" }
    ],
    sentencePatterns: [
      "What's your name? -> My name is [Peter / Linh].",
      "How do you spell your name? -> [L - I - N - H].",
      "How are you? -> I'm fine, thank you."
    ],
    phonics: "Luyện phát âm âm /f/ trong 'fine', 'friend' và âm /θ/ trong 'thank'",
    game: "Spelling Bee (Thử thách đánh vần tên)"
  },
  {
    unit: 3,
    unitName: "Unit 3: Our Friends",
    theme: "Giới thiệu bạn bè",
    vocabulary: [
      { word: "this", ipa: "/ðɪs/", meaning: "đây là / người này là" },
      { word: "that", ipa: "/ðæt/", meaning: "kia là / người kia là" },
      { word: "yes", ipa: "/jes/", meaning: "đúng vậy / vâng" },
      { word: "no", ipa: "/nəʊ/", meaning: "không phải" },
      { word: "best friend", ipa: "/best frend/", meaning: "bạn thân nhất" }
    ],
    sentencePatterns: [
      "This is [Tony]. He is my friend.",
      "Is that [Linda]? -> Yes, it is. / No, it isn't. It's [Mary]."
    ],
    phonics: "Luyện phát âm âm /ð/ trong 'this', 'that'",
    game: "Friend Introduction Relay (Tiếp sức giới thiệu bạn bè)"
  },
  {
    unit: 4,
    unitName: "Unit 4: Our Bodies",
    theme: "Chăm sóc cơ thể",
    vocabulary: [
      { word: "touch", ipa: "/tʌtʃ/", meaning: "chạm vào (âm đuôi /tʃ/)" },
      { word: "open", ipa: "/ˈəʊpən/", meaning: "mở ra" },
      { word: "close", ipa: "/kləʊz/", meaning: "nhắm lại / đóng lại" },
      { word: "face", ipa: "/feɪs/", meaning: "khuôn mặt (âm đuôi /s/)" },
      { word: "hair", ipa: "/heə/", meaning: "mái tóc" },
      { word: "mouth", ipa: "/maʊθ/", meaning: "miệng" }
    ],
    sentencePatterns: [
      "Touch your [face / hair / nose]!",
      "Open your [mouth / eyes]! / Close your [eyes]!"
    ],
    phonics: "Luyện phát âm âm /tʃ/ trong 'touch' và âm /s/ trong 'face', 'close'",
    game: "Body Action Master"
  },
  {
    unit: 5,
    unitName: "Unit 5: My Hobbies",
    theme: "Sở thích cá nhân",
    vocabulary: [
      { word: "singing", ipa: "/ˈsɪŋɪŋ/", meaning: "sở thích ca hát" },
      { word: "dancing", ipa: "/ˈdɑːnsɪŋ/", meaning: "nhảy múa / khiêu vũ" },
      { word: "drawing", ipa: "/ˈdrɔːɪŋ/", meaning: "vẽ tranh" },
      { word: "swimming", ipa: "/ˈswɪmɪŋ/", meaning: "bơi lội" },
      { word: "cooking", ipa: "/ˈkʊkɪŋ/", meaning: "nấu ăn" },
      { word: "reading", ipa: "/ˈriːdɪŋ/", meaning: "đọc sách báo" }
    ],
    sentencePatterns: [
      "What's your hobby? -> It's [singing / drawing / swimming].",
      "I like [dancing / cooking / reading]."
    ],
    phonics: "Luyện phát âm đuôi /-ɪŋ/ trong 'singing', 'drawing', 'swimming'",
    game: "Hobby Charades (Diễn xuất đoán sở thích)"
  },
  {
    unit: 6,
    unitName: "Unit 6: Our School",
    theme: "Trường tiểu học thân yêu",
    vocabulary: [
      { word: "classroom", ipa: "/ˈklɑːsruːm/", meaning: "phòng học" },
      { word: "library", ipa: "/ˈlaɪbrəri/", meaning: "thư viện" },
      { word: "computer room", ipa: "/kəmˈpjuːtə ruːm/", meaning: "phòng tin học" },
      { word: "art room", ipa: "/ɑːt ruːm/", meaning: "phòng mĩ thuật" },
      { word: "music room", ipa: "/ˈmjuːzɪk ruːm/", meaning: "phòng âm nhạc" },
      { word: "playground", ipa: "/ˈpleɪɡraʊnd/", meaning: "sân chơi trường" }
    ],
    sentencePatterns: [
      "Is this our [library / classroom]? -> Yes, it is. / No, it isn't.",
      "Let's go to the [computer room / playground]!"
    ],
    phonics: "Luyện phát âm âm /kl/ trong 'classroom' và âm /l/ trong 'library'",
    game: "School Tour Map (Hướng dẫn viên du lịch trường học)"
  },
  {
    unit: 8,
    unitName: "Unit 8: My School Things",
    theme: "Dụng cụ học tập của em",
    vocabulary: [
      { word: "school bag", ipa: "/skuːl bæɡ/", meaning: "cặp sách học sinh" },
      { word: "pencil case", ipa: "/ˈpensl keɪs/", meaning: "hộp đựng bút" },
      { word: "notebook", ipa: "/ˈnəʊtbʊk/", meaning: "quyển vở ghi" },
      { word: "pencil sharpener", ipa: "/ˈpensl ʃɑːpnə/", meaning: "gọt bút chì" },
      { word: "ruler", ipa: "/ˈruːlə/", meaning: "thước kẻ" },
      { word: "rubber", ipa: "/ˈrʌbə/", meaning: "cục tẩy" }
    ],
    sentencePatterns: [
      "I have a [school bag / pencil case / notebook].",
      "Do you have a [ruler / rubber]? -> Yes, I do. / No, I don't."
    ],
    phonics: "Luyện phát âm âm /p/ trong 'pencil', 'pencil case' và âm /r/ trong 'ruler', 'rubber'",
    game: "What's in my School Bag?"
  }
];

export const GRADE_4_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: My Friends",
    theme: "Bạn bè khắp năm châu",
    vocabulary: [
      { word: "America", ipa: "/əˈmerɪkə/", meaning: "nước Mỹ" },
      { word: "American", ipa: "/əˈmerɪkən/", meaning: "người Mỹ / quốc tịch Mỹ" },
      { word: "Britain", ipa: "/ˈbrɪtn/", meaning: "nước Anh" },
      { word: "British", ipa: "/ˈbrɪtɪʃ/", meaning: "người Anh / quốc tịch Anh" },
      { word: "Japan", ipa: "/dʒəˈpæn/", meaning: "nước Nhật Bản" },
      { word: "Japanese", ipa: "/ˌdʒæpəˈniːz/", meaning: "người Nhật / quốc tịch Nhật" },
      { word: "Vietnam", ipa: "/ˌvjetˈnæm/", meaning: "nước Việt Nam" },
      { word: "Vietnamese", ipa: "/ˌvjetnəˈmiːz/", meaning: "người Việt Nam" }
    ],
    sentencePatterns: [
      "Where are you from? -> I'm from [Vietnam / America / Japan / Britain].",
      "What nationality are you? -> I'm [Vietnamese / American / Japanese / British]."
    ],
    phonics: "Luyện phát âm âm trọng âm từ: Ja'pan -> Japa'nese; 'Vietnam -> Vietna'mese",
    game: "World Flag & Country Match (Nối quốc kỳ và quốc tịch)"
  },
  {
    unit: 2,
    unitName: "Unit 2: Time and Daily Routines",
    theme: "Thời gian và thời gian biểu",
    vocabulary: [
      { word: "o'clock", ipa: "/əˈklɒk/", meaning: "giờ đúng" },
      { word: "get up", ipa: "/ɡet ʌp/", meaning: "thức dậy" },
      { word: "have breakfast", ipa: "/hæv ˈbrekfəst/", meaning: "ăn bữa sáng" },
      { word: "go to school", ipa: "/ɡəʊ tə skuːl/", meaning: "đi đến trường học" },
      { word: "have lunch", ipa: "/hæv lʌntʃ/", meaning: "ăn bữa trưa" },
      { word: "go to bed", ipa: "/ɡəʊ tə bed/", meaning: "đi ngủ" }
    ],
    sentencePatterns: [
      "What time is it? -> It's [seven o'clock / seven thirty].",
      "What time do you [get up / have breakfast / go to school]? -> I [get up] at [six o'clock]."
    ],
    phonics: "Luyện phát âm âm nối âm: get_up (/ɡet ʌp/), have_breakfast",
    game: "Clock Master (Quay kim đồng hồ và hỏi đáp thời gian)"
  },
  {
    unit: 3,
    unitName: "Unit 3: My Week",
    theme: "Các ngày trong tuần",
    vocabulary: [
      { word: "Monday", ipa: "/ˈmʌndeɪ/", meaning: "thứ Hai" },
      { word: "Tuesday", ipa: "/ˈtjuːzdeɪ/", meaning: "thứ Ba" },
      { word: "Wednesday", ipa: "/ˈwenzdeɪ/", meaning: "thứ Tư" },
      { word: "Thursday", ipa: "/ˈθɜːzdeɪ/", meaning: "thứ Năm (âm /θ/)" },
      { word: "Friday", ipa: "/ˈfraɪdeɪ/", meaning: "thứ Sáu" },
      { word: "Saturday", ipa: "/ˈsætədeɪ/", meaning: "thứ Bảy" },
      { word: "Sunday", ipa: "/ˈsʌndeɪ/", meaning: "Chủ nhật" }
    ],
    sentencePatterns: [
      "What day is it today? -> It's [Monday / Tuesday / Friday].",
      "What do you do on [Saturdays / Sundays]? -> I [help my parents / play football / go swimming]."
    ],
    phonics: "Luyện phát âm âm đuôi /-deɪ/ và âm đầu /θ/ trong 'Thursday'",
    game: "Weekly Planner Bingo (Trò chơi lịch trình tuần)"
  },
  {
    unit: 4,
    unitName: "Unit 4: My Birthday Party",
    theme: "Sinh nhật và các tháng trong năm",
    vocabulary: [
      { word: "January", ipa: "/ˈdʒænjuəri/", meaning: "tháng Một" },
      { word: "February", ipa: "/ˈfebruəri/", meaning: "tháng Hai" },
      { word: "March", ipa: "/mɑːtʃ/", meaning: "tháng Ba" },
      { word: "April", ipa: "/ˈeɪprəl/", meaning: "tháng Tư" },
      { word: "May", ipa: "/meɪ/", meaning: "tháng Năm" },
      { word: "June", ipa: "/dʒuːn/", meaning: "tháng Sáu" },
      { word: "party", ipa: "/ˈpɑːti/", meaning: "bữa tiệc sinh nhật" }
    ],
    sentencePatterns: [
      "When is your birthday? -> It's in [May / June / October].",
      "Would you like to come to my birthday party? -> Yes, I'd love to."
    ],
    phonics: "Luyện phát âm âm /dʒ/ trong 'January', 'June', 'July'",
    game: "Birthday Line-up (Xếp hàng theo tháng sinh)"
  },
  {
    unit: 5,
    unitName: "Unit 5: Things We Can Do",
    theme: "Khả năng và tài năng của em",
    vocabulary: [
      { word: "swim", ipa: "/swɪm/", meaning: "bơi lội (âm /sw/)" },
      { word: "skate", ipa: "/skeɪt/", meaning: "trượt pa-tanh (âm /sk/)" },
      { word: "cook", ipa: "/kʊk/", meaning: "nấu ăn" },
      { word: "ride a bike", ipa: "/raɪd ə baɪk/", meaning: "đi xe đạp" },
      { word: "play the guitar", ipa: "/pleɪ ðə ɡɪˈtɑː/", meaning: "chơi đàn ghi-ta" },
      { word: "play the piano", ipa: "/pleɪ ðə piˈænəʊ/", meaning: "chơi đàn dương cầm" }
    ],
    sentencePatterns: [
      "What can you do? -> I can [swim / cook / play the guitar].",
      "Can you [ride a bike / skate]? -> Yes, I can. / No, I can't."
    ],
    phonics: "Luyện phát âm âm /kæn/ (khẳng định) và /kɑːnt/ (phủ định)",
    game: "Talent Show Interview (Phỏng vấn tìm kiếm tài năng nhí)"
  }
];

export const GRADE_5_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: All About Me",
    theme: "Địa chỉ và nơi chốn sinh sống",
    vocabulary: [
      { word: "address", ipa: "/əˈdres/", meaning: "địa chỉ nhà ở" },
      { word: "lane", ipa: "/leɪn/", meaning: "ngõ / hẻm nhỏ" },
      { word: "street", ipa: "/striːt/", meaning: "con phố / đường phố" },
      { word: "tower", ipa: "/ˈtaʊə/", meaning: "tòa tháp / chung cư cao tầng" },
      { word: "floor", ipa: "/flɔː/", meaning: "tầng nhà" },
      { word: "hometown", ipa: "/ˈhəʊmtaʊn/", meaning: "quê quán" },
      { word: "peaceful", ipa: "/ˈpiːsfl/", meaning: "thanh bình, yên tĩnh" },
      { word: "crowded", ipa: "/ˈkraʊdɪd/", meaning: "đông đúc, nhộn nhịp" }
    ],
    sentencePatterns: [
      "What's your address? -> It's [81 Tran Hung Dao Street / Flat 8, Second Floor].",
      "What's the [city / village] like? -> It's [big and crowded / small and quiet]."
    ],
    phonics: "Luyện phát âm âm cụm phụ âm /str/ trong 'street' và /fl/ trong 'floor'",
    game: "Postman Delivery (Người đưa thư tìm đúng địa chỉ nhà)"
  },
  {
    unit: 2,
    unitName: "Unit 2: Our Homes",
    theme: "Ngôi nhà và nơi cư trú",
    vocabulary: [
      { word: "flat", ipa: "/flæt/", meaning: "căn hộ chung cư" },
      { word: "cottage", ipa: "/ˈkɒtɪdʒ/", meaning: "nhà tranh nông thôn" },
      { word: "mountain", ipa: "/ˈmaʊntən/", meaning: "vùng đồi núi" },
      { word: "village", ipa: "/ˈvɪlɪdʒ/", meaning: "ngôi làng quê" },
      { word: "city", ipa: "/ˈsɪti/", meaning: "thành phố lớn" },
      { word: "modern", ipa: "/ˈmɒdn/", meaning: "hiện đại, tiện nghi" }
    ],
    sentencePatterns: [
      "Where do you live? -> I live in a [flat in the city / cottage in the village].",
      "Who do you live with? -> I live with my [parents / grandparents]."
    ],
    phonics: "Luyện phát âm âm đuôi /-ɪdʒ/ trong 'village', 'cottage'",
    game: "Dream House Architecture (Mô tả ngôi nhà mơ ước)"
  },
  {
    unit: 3,
    unitName: "Unit 3: My Foreign Friends",
    theme: "Bạn bè quốc tế và tính cách",
    vocabulary: [
      { word: "friendly", ipa: "/ˈfrendli/", meaning: "thân thiện, cởi mở" },
      { word: "helpful", ipa: "/ˈhelpfl/", meaning: "hay giúp đỡ người khác" },
      { word: "active", ipa: "/ˈæktɪv/", meaning: "năng động, hoạt bát" },
      { word: "kind", ipa: "/kaɪnd/", meaning: "tốt bụng, nhân hậu" },
      { word: "clever", ipa: "/ˈklevə/", meaning: "thông minh, nhanh trí" },
      { word: "generous", ipa: "/ˈdʒenərəs/", meaning: "hào phóng, rộng lượng" }
    ],
    sentencePatterns: [
      "What is he/she like? -> He/She is very [friendly and helpful / kind and clever].",
      "They are always [active and polite]."
    ],
    phonics: "Luyện phát âm hậu tố tính từ /-li/ ('friendly'), /-fl/ ('helpful')",
    game: "Personality Matching (Ghép tính cách với hành động tốt)"
  },
  {
    unit: 4,
    unitName: "Unit 4: Our Free-Time Activities",
    theme: "Hoạt động trong thời gian rảnh rỗi",
    vocabulary: [
      { word: "surf the Internet", ipa: "/sɜːf ði ˈɪntənet/", meaning: "lướt mạng Internet" },
      { word: "do karate", ipa: "/duː kəˈrɑːti/", meaning: "tập võ karate" },
      { word: "clean the house", ipa: "/kliːn ðə haʊs/", meaning: "dọn dẹp nhà cửa" },
      { word: "go fishing", ipa: "/ɡəʊ ˈfɪʃɪŋ/", meaning: "đi câu cá thư giãn" },
      { word: "ride a bicycle", ipa: "/raɪd ə ˈbaɪsɪkl/", meaning: "đạp xe đạp" }
    ],
    sentencePatterns: [
      "What do you do in your free time? -> I often [surf the Internet / ride a bicycle / clean the house].",
      "How often do you [go fishing]? -> Once a week / Twice a month."
    ],
    phonics: "Luyện phát âm ngữ điệu câu hỏi Wh-question và trạng từ tần suất",
    game: "Free-Time Survey (Khảo sát thói quen giải trí lành mạnh)"
  },
  {
    unit: 5,
    unitName: "Unit 5: My Future Job",
    theme: "Nghề nghiệp mơ ước tương lai",
    vocabulary: [
      { word: "pilot", ipa: "/ˈpaɪlət/", meaning: "phi công lái máy bay" },
      { word: "architect", ipa: "/ˈɑːkɪtekt/", meaning: "kiến trúc sư (âm /k/)" },
      { word: "writer", ipa: "/ˈraɪtə/", meaning: "nhà văn sáng tác" },
      { word: "doctor", ipa: "/ˈdɒktə/", meaning: "bác sĩ khám chữa bệnh" },
      { word: "nurse", ipa: "/nɜːs/", meaning: "y tá chăm sóc bệnh nhân" },
      { word: "engineer", ipa: "/ˌendʒɪˈnɪə/", meaning: "kỹ sư công trình" },
      { word: "astronaut", ipa: "/ˈæstrənɔːt/", meaning: "phi hành gia vũ trụ" }
    ],
    sentencePatterns: [
      "What would you like to be in the future? -> I'd like to be a/an [pilot / architect / doctor / astronaut].",
      "Why would you like to be a [pilot]? -> Because I'd like to [fly planes and travel around the world]."
    ],
    phonics: "Luyện phát âm từ 'architect' (/ˈɑːkɪtekt/) và nối âm 'like to be a'",
    game: "Future Career Fair (Hội chợ ước mơ nghề nghiệp tương lai)"
  }
];

// Master Database by Grade
const GRADE_ENGLISH_MAP: Record<number, EnglishUnitData[]> = {
  1: GRADE_1_ENGLISH_UNITS,
  2: GRADE_2_ENGLISH_UNITS,
  3: GRADE_3_ENGLISH_UNITS,
  4: GRADE_4_ENGLISH_UNITS,
  5: GRADE_5_ENGLISH_UNITS
};

/**
 * Trả về chi tiết bài học Tiếng Anh đầy đủ với danh sách Các từ vựng (Vocabulary),
 * mẫu câu (Sentence Patterns), ngữ âm (Phonics) và nội dung chi tiết trong 2 cột hoạt động dạy - học
 * chuẩn theo Phân phối chương trình mới và mẫu KHBD Công văn 2345/BGDĐT-GDTH.
 */
export function getDetailedEnglishLesson(
  grade: Grade | number,
  week: number,
  customLessonTitle?: string,
  periodInWeek: number = 1,
  periodInYear?: number
): EnglishLessonDetail {
  const gNum = Number(grade);

  // 1. Kiểm tra dữ liệu Phân phối chương trình chính thức cho Lớp 3, 4, 5 (Global Success)
  if (gNum >= 3 && gNum <= 5) {
    const official = (periodInYear !== undefined && periodInYear > 0)
      ? getOfficialEnglishPeriodByYear(gNum, periodInYear)
      : getOfficialEnglishPeriod(gNum, week, periodInWeek);

    if (official) {
      const rawWords = official.vocabulary.map((v) => v.split(" ")[0].trim());
      const pYear = official.periodInYear;
      const displayTitle = customLessonTitle || official.fullLessonTitle;

      return {
        lessonTitle: displayTitle,
        unitName: official.unitTitle,
        vocabulary: official.vocabulary,
        rawWords,
        sentencePatterns: official.sentencePatterns,
        phonicsSound: `Global Success Tiếng Anh ${gNum} (Tiết ${pYear})`,
        gameName: `Trò chơi củng cố Tiếng Anh - Tiết ${pYear}`,
        specificCompetencies: official.objectives.specificCompetencies || official.objectives.competences,
        generalCompetencies: official.objectives.generalCompetencies || [
          "Self-control and independent learning: Actively practice pronunciation, revise vocabulary, and complete learning tasks independently on hoclieu.vn.",
          "Communication and collaboration: Confidently interact with peers and teacher in pairs and group activities to accomplish communicative tasks.",
          "Problem-solving and creativity: Apply learned vocabulary and sentence structures flexibly in authentic communicative contexts and interactive games."
        ],
        qualities: official.objectives.attributes || [
          "Hard-working (Chăm chỉ): Diligently engage in classroom activities, chants, songs, and interactive language games.",
          "Responsibility (Trách nhiệm): Follow classroom rules, handle learning materials and books carefully, and cooperate responsibly with peers.",
          "Kindness & Respect (Nhân ái): Exhibit polite communication, friendliness, and mutual respect towards classmates and teachers.",
          "Patriotism & Cultural awareness (Yêu nước): Demonstrate pride in Vietnamese culture while expanding horizons through learning the English language."
        ],
        teacherMaterials: official.materials.teacher,
        studentMaterials: official.materials.student,
        integrationNotes: official.adjustments || `Tiết ${pYear} - Phân phối chương trình GDPT 2018 (Tiếng Anh ${gNum} Global Success)`,
        activities: official.activities
      };
    }
  }

  const units = GRADE_ENGLISH_MAP[gNum] || GRADE_3_ENGLISH_UNITS;
  
  // Try matching unit by title if provided
  let matchedUnit: EnglishUnitData | undefined;
  if (customLessonTitle) {
    const titleLower = customLessonTitle.toLowerCase();
    matchedUnit = units.find(
      (u) =>
        titleLower.includes(u.theme.toLowerCase()) ||
        titleLower.includes(u.unitName.toLowerCase().split(":")[1]?.trim()?.toLowerCase() || "___") ||
        u.vocabulary.some((v) => titleLower.includes(v.word.toLowerCase()))
    );
  }

  if (!matchedUnit) {
    // Select unit based on week cycling
    const unitIndex = Math.max(0, (week - 1) % units.length);
    matchedUnit = units[unitIndex];
  }

  const lessonPart = ((periodInWeek - 1) % 2) + 1;
  const lessonTitle = customLessonTitle || `${matchedUnit.unitName} - Lesson ${lessonPart}`;

  // Formatted vocabulary strings with word, IPA transcription, and Vietnamese meaning
  const formattedVocab = matchedUnit.vocabulary.map(
    (v) => `${v.word} (${v.ipa} - ${v.meaning})`
  );
  const rawWords = matchedUnit.vocabulary.map((v) => v.word);
  const vocabSummaryList = formattedVocab.join(", ");
  const rawWordsList = rawWords.join(", ");
  const patternsList = matchedUnit.sentencePatterns.join(" | ");

  // Competencies following GDPT 2018
  const specificCompetencies = [
    `Nhận diện, ghi nhớ và phát âm chuẩn xác các từ vựng chủ đề "${matchedUnit.theme}": ${rawWordsList}.`,
    `Vận dụng thành thạo các từ vựng vào mẫu câu giao tiếp: ${matchedUnit.sentencePatterns[0]}`,
    `Rèn luyện đồng bộ 4 kỹ năng Nghe - Nói - Đọc - Viết Tiếng Anh Lớp ${grade}; tự tin giao tiếp tiếng Anh trước thầy cô và bạn bè.`,
    `Nắm vững ngữ âm (${matchedUnit.phonics}) và quy tắc phát âm ending sounds chuẩn bản ngữ.`
  ];

  const teacherMaterials = [
    `Giáo án Tiếng Anh Lớp ${grade} chuẩn CV 2345/BGDĐT.`,
    `Bộ thẻ từ vựng trực quan (Flashcards) các từ vựng: ${rawWordsList}.`,
    `Tệp âm thanh chuẩn (Audio tracks) phát âm giọng bản ngữ và bài giảng số tương tác (PowerPoint/Canva).`,
    `Thiết bị trình chiếu TV/máy chiếu, loa trợ giảng, tranh ảnh chủ đề "${matchedUnit.theme}".`
  ];

  const studentMaterials = [
    `Sách học sinh Tiếng Anh Lớp ${grade}, vở ghi chép, bút chì, bút màu.`,
    `Bộ thẻ từ vựng mini cá nhân để thực hành trò chơi ghép từ và luyện nói theo cặp.`
  ];

  const integrationNotes = `Tích hợp Năng lực số (CV 3456): Sử dụng Flashcard số và nghe phát âm audio chuẩn; Tích hợp Học thông qua chơi (Play-based learning) qua trò chơi "${matchedUnit.game}".`;

  // ==========================================
  // CHI TIẾT 4 HOẠT ĐỘNG DẠY VÀ HỌC (CV 2345)
  // Bổ sung rõ nét "Các từ vựng" trong cả 2 hoạt động dạy và học
  // ==========================================

  const activities: LessonActivity[] = [
    // 1. KHỞI ĐỘNG (WARM-UP)
    {
      name: "1. Khởi động (Warm-up)",
      objective: `Tạo không khí học tập hào hứng, kích hoạt năng lượng và dẫn dắt học sinh làm quen với chủ đề từ vựng mới: "${matchedUnit.theme}".`,
      teacherActivity: `- Tổ chức cho cả lớp đứng dậy khởi động bằng bài hát Tiếng Anh vui nhộn theo chủ đề "${matchedUnit.theme}" (hoặc trò chơi 'Simon Says / Hello Chant').
- Đặt câu hỏi gợi mở kết nối vào bài học mới:
  + Dẫn dắt: "Today, we are going to learn interesting new words about '${matchedUnit.theme}'. Are you ready?"
- Giới thiệu tên bài học: "${lessonTitle}" lên bảng lớp và màn hình chiếu.`,
      studentActivity: `- Toàn lớp đứng dậy, hào hứng hát và vận động theo giai điệu bài hát Tiếng Anh cùng giáo viên.
- Lắng nghe câu hỏi gợi mở, quan sát hình ảnh gợi ý trên màn hình và sẵn sàng khám phá bài học mới.
- Nhắc lại tên bài học đồng thanh và mở sách Tiếng Anh trang bài học.`
    },

    // 2. KHÁM PHÁ / HÌNH THÀNH KIẾN THỨC MỚI (PRESENTATION)
    // BỔ SUNG ĐẦY ĐỦ "CÁC TỪ VỰNG" TRONG CẢ 2 CỘT HOẠT ĐỘNG DẠY VÀ HỌC
    {
      name: "2. Khám phá / Hình thành kiến thức mới (Presentation)",
      objective: `Học sinh nhận diện mặt chữ, nắm vững nghĩa và phát âm chuẩn xác các từ vựng: ${rawWordsList}; nắm được mẫu câu giao tiếp trọng tâm: ${matchedUnit.sentencePatterns[0] || ""}.`,
      teacherActivity: `- DẠY VÀ PHÁT TRIỂN CÁC TỪ VỰNG MỚI (VOCABULARY PRESENTATION):
  * CÁC TỪ VỰNG TRỌNG TÂM CỦA BÀI HỌC (TARGET VOCABULARY):
${matchedUnit.vocabulary.map((v, i) => `    ${i + 1}. ${v.word} (${v.ipa}): ${v.meaning} [Ngữ âm: ${matchedUnit.phonics}]`).join("\n")}
  * CÁC BƯỚC SƯ PHẠM DẠY TỪ VỰNG CỦA GIÁO VIÊN:
    + Bước 1 - Giới thiệu từ vựng trực quan: Giáo viên giơ từng thẻ hình ảnh (Flashcards) hoặc chiếu hình ảnh động minh họa từng từ vựng lên màn hình lớn; đặt câu hỏi gợi mở để học sinh đoán nghĩa.
    + Bước 2 - Phát âm mẫu chuẩn bản ngữ: Giáo viên phát âm mẫu từng từ vựng to, rõ ràng 3 lần với ngữ điệu chuẩn (chú ý trọng âm từ, âm đầu và âm đuôi: ${matchedUnit.phonics}). Bật tệp âm thanh (Audio tracks) chuẩn bản ngữ cho học sinh lắng nghe.
    + Bước 3 - Hướng dẫn kỹ thuật phát âm: Hướng dẫn học sinh lấy hơi, mở khẩu hình, vị trí đặt môi và lưỡi đối với các âm khó; hướng dẫn kỹ thuật móc xích âm.
    + Bước 4 - Kiểm tra độ hiểu nghĩa (Concept Checking Questions - CCQs): Đặt các câu hỏi ngắn để đảm bảo 100% học sinh hiểu rõ nghĩa tiếng Việt và tình huống sử dụng của từng từ vựng.
    + Bước 5 - Tổ chức cho học sinh luyện đọc: Điều khiển học sinh đọc đồng thanh, đọc theo nhóm và đọc cá nhân từng từ vựng; sửa lỗi phát âm và ending sounds kịp thời cho từng em.

- DẠY CẤU TRÚC / MẪU CÂU GIAO TIẾP TRỌNG TÂM (SENTENCE PATTERNS):
  * CÁC MẪU CÂU GIAO TIẾP KẾT HỢP VỚI CÁC TỪ VỰNG:
${matchedUnit.sentencePatterns.map((p) => `    + ${p}`).join("\n")}
  * Giáo viên làm mẫu hội thoại với một học sinh, thay thế lần lượt các từ vựng vừa học vào vị trí trong câu để làm rõ ngữ cảnh giao tiếp tự nhiên.`,
      studentActivity: `- TIẾP NHẬN VÀ LĨNH HỘI CÁC TỪ VỰNG MỚI (VOCABULARY LEARNING):
  * CÁC TỪ VỰNG HỌC SINH CẦN NẮM VỮNG VÀ PHÁT ÂM CHUẨN:
${matchedUnit.vocabulary.map((v, i) => `    ${i + 1}. ${v.word} (${v.ipa}): ${v.meaning}`).join("\n")}
  * CÁC THAO TÁC HỌC TẬP VÀ LUYỆN ĐỌC TỪ VỰNG CỦA HỌC SINH:
    + Bước 1 - Quan sát trực quan: Quan sát kỹ hình ảnh minh họa trên thẻ Flashcard và màn hình chiếu của giáo viên; đoán nghĩa của từng từ vựng qua hình ảnh.
    + Bước 2 - Lắng nghe mẫu: Chăm chú lắng nghe giáo viên phát âm mẫu và băng đĩa chuẩn bản ngữ, quan sát khẩu hình miệng của giáo viên.
    + Bước 3 - Luyện đọc các từ vựng theo 3 cấp độ:
      . Đọc đồng thanh toàn lớp (Choral reading): Cả lớp cùng phát âm to, rõ ràng từng từ vựng 2 - 3 lượt.
      . Đọc theo tổ / nhóm (Group reading): Các tổ, nhóm 4 học sinh nối tiếp nhau đọc to các từ vựng thi đua.
      . Đọc cá nhân từng học sinh (Individual reading): Từng em đứng dậy đọc to từ vựng; chú ý lắng nghe cô chỉnh sửa âm đuôi và trọng âm.
    + Bước 4 - Hoạt động "Chỉ tranh và đọc to" (Point and Say): Học sinh dùng ngón tay chỉ vào từng từ vựng và hình vẽ tương ứng trong SGK, phát âm to, rõ ràng.
    + Bước 5 - Ghi chép: Ghi chép cẩn thận các từ vựng mới (gồm từ, phiên âm và nghĩa tiếng Việt) vào vở học tập.

- HỌC CẤU TRÚC CÂU GIAO TIẾP:
  * Lắng nghe giáo viên làm mẫu câu; đọc đồng thanh mẫu câu kết hợp với các từ vựng vừa học; ghi nhớ cấu trúc để chuẩn bị thực hành.`
    },

    // 3. LUYỆN TẬP / THỰC HÀNH (PRACTICE)
    // BỔ SUNG ĐẦY ĐỦ "CÁC TỪ VỰNG" TRONG CẢ 2 CỘT HOẠT ĐỘNG DẠY VÀ HỌC
    {
      name: "3. Luyện tập / Thực hành (Practice)",
      objective: `Củng cố khả năng ghi nhớ mặt chữ, phản xạ phát âm và vận dụng thành thạo các từ vựng (${rawWordsList}) vào trò chơi và hội thoại giao tiếp theo cặp/nhóm.`,
      teacherActivity: `- TỔ CHỨC TRÒ CHƠI CỦNG CỐ CÁC TỪ VỰNG ĐÃ HỌC:
  * TÊN TRÒ CHƠI: "${matchedUnit.game}"
  * CÁC TỪ VỰNG THỰC HÀNH TRONG TRÒ CHƠI:
${matchedUnit.vocabulary.map((v, i) => `    ${i + 1}. ${v.word} (${v.ipa} - ${v.meaning})`).join("\n")}
  * CÁCH THỨC TIẾN HÀNH TRÒ CHƠI:
    + Giáo viên dán các thẻ hình ảnh và thẻ từ vựng lên bảng lớp (hoặc trình chiếu trò chơi số trên màn hình tương tác).
    + Chia lớp thành 2 đội thi đua (Team A & Team B).
    + Phổ biến luật chơi: Giáo viên phát âm một từ vựng hoặc đọc nghĩa tiếng Việt / giơ tranh, đại diện 2 đội chạy nhanh lên chạm vào thẻ từ vựng tương ứng và đọc to từ đó (hoặc đập bảng 'Slap the board' / ghép thẻ từ với tranh).
    + Giáo viên làm trọng tài, bấm giờ, nhận xét phát âm và cộng điểm thi đua cho đội phát âm chuẩn và phản xạ nhanh nhất.

- TỔ CHỨC LUYỆN TẬP MẪU CÂU KẾT HỢP CÁC TỪ VỰNG (PAIR WORK & GROUP WORK):
  * HƯỚNG DẪN HỌC SINH THỰC HÀNH THEO CẶP:
    + Yêu cầu học sinh làm việc theo cặp (Pair work), lần lượt thay thế các từ vựng (${rawWordsList}) vào mẫu câu:
${matchedUnit.sentencePatterns.map((p) => `      > ${p}`).join("\n")}
    + Làm mẫu ngắn gọn với 1 học sinh giỏi để cả lớp quan sát thao tác hỏi - đáp.
    + Quan sát cả lớp thực hành, đi đến từng bàn lắng nghe học sinh phát âm các từ vựng, hỗ trợ kịp thời các em còn lúng túng hoặc phát âm chưa chuẩn.
    + Mời một số cặp học sinh lên trước lớp thực hành hội thoại; nhận xét và khen ngợi sự tự tin của các em.`,
      studentActivity: `- THAM GIA TRÒ CHƠI CỦNG CỐ CÁC TỪ VỰNG:
  * DANH SÁCH CÁC TỪ VỰNG CẦN PHẢN XẠ NHANH:
${matchedUnit.vocabulary.map((v, i) => `    • ${v.word} (${v.ipa}): ${v.meaning}`).join("\n")}
  * CÁC THAO TÁC CỦA HỌC SINH KHI CHƠI TRÒ CHƠI "${matchedUnit.game}":
    + Tập trung cao độ lắng nghe giáo viên phát âm hoặc quan sát hình ảnh gợi ý.
    + Đại diện các đội thi đấu nhanh nhẹn lên bảng nhận diện chính xác thẻ từ vựng; phát âm to, chuẩn xác từ vựng trước cả lớp.
    + Các thành viên bên dưới nhiệt tình cổ vũ đồng đội và nhắc lại từ vựng để khắc sâu kiến thức.

- THỰC HÀNH ĐỐI THOẠI THEO CẶP KẾT HỢP CÁC TỪ VỰNG (PAIR WORK):
  * CÁC THAO TÁC THỰC HÀNH GIAO TIẾP THEO CẶP:
    + Bạn A: Chỉ vào tranh từ vựng trong sách hoặc thẻ từ và đặt câu hỏi theo mẫu câu đã học.
    + Bạn B: Nhìn tranh, phản xạ nhanh và sử dụng đúng từ vựng (${rawWordsList}) để trả lời tự nhiên, trôi chảy.
    + Đổi vai cho nhau để cả 2 bạn đều được luyện tập hỏi và trả lời với TẤT CẢ các từ vựng của bài học.
    + Đánh giá chéo bạn cùng bàn (Peer assessment): Lắng nghe bạn phát âm, giúp bạn phát hiện và sửa lỗi âm đuôi (ending sounds) hoặc ngữ điệu.
    + Tự tin xung phong lên bảng thực hiện bài hội thoại trước lớp khi giáo viên mời.`
    },

    // 4. VẬN DỤNG / SẢN XUẤT (PRODUCTION / APPLICATION)
    {
      name: "4. Vận dụng / Mở rộng (Production / Application)",
      objective: `Vận dụng các từ vựng và mẫu câu đã học vào tình huống thực tế đời sống; phát triển tư duy sáng tạo và sự tự tin thuyết trình tiếng Anh.`,
      teacherActivity: `- TỔ CHỨC HOẠT ĐỘNG VẬN DỤNG SÁNG TẠO VÀ MỞ RỘNG:
  * Nhiệm vụ: Đưa ra thử thách vận dụng các từ vựng (${rawWordsList}) vào thực tế:
    + Yêu cầu học sinh vẽ nhanh một đồ vật/bức tranh liên quan đến các từ vựng vừa học hoặc chuẩn bị đồ dùng cá nhân.
    + Nói 2 - 3 câu đơn giản bằng Tiếng Anh trước lớp giới thiệu sản phẩm của mình có sử dụng các từ vựng đã học.
  * Giáo viên mời 3 - 4 học sinh đại diện lên sân khấu lớp tự tin thuyết trình; nhận xét, tuyên dương và đánh giá theo Thông tư 27/2020/TT-BGDĐT.
  * Củng cố bài học: Nhắc lại các từ vựng trọng tâm (${rawWordsList}).
  * Dặn dò: Học sinh về nhà luyện phát âm lại các từ vựng, viết lại mỗi từ 2 dòng vào vở tự học và chuẩn bị cho tiết học tiếp theo.`,
      studentActivity: `- THỰC HIỆN HOẠT ĐỘNG VẬN DỤNG VÀ THUYẾT TRÌNH:
  * Vận dụng các từ vựng (${rawWordsList}) để vẽ nhanh hình ảnh minh họa hoặc chọn đồ vật có trong lớp học.
  * Tự tin đứng trước lớp nói 2 - 3 câu Tiếng Anh giới thiệu sản phẩm có chứa các từ vựng vừa học.
  * Lắng nghe giáo viên và các bạn nhận xét, rút kinh nghiệm để tự tin hơn trong giao tiếp.
  * Lắng nghe lời dặn dò của giáo viên, ghi nhớ việc luyện đọc và viết lại các từ vựng tại nhà.`
    }
  ];

  return {
    lessonTitle,
    unitName: matchedUnit.unitName,
    vocabulary: formattedVocab,
    rawWords,
    sentencePatterns: matchedUnit.sentencePatterns,
    phonicsSound: matchedUnit.phonics,
    gameName: matchedUnit.game,
    specificCompetencies,
    teacherMaterials,
    studentMaterials,
    integrationNotes,
    activities
  };
}
