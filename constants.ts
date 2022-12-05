export const GOALS: {
  title: string;
  category: string;
  validationMethod: "timelapse" | "photo" | "writing";
}[] = [
  {
    title: "30분 이상 땀흘리며 운동하기",
    category: "신체활동",
    validationMethod: "timelapse",
  },
  {
    title: "아침 8시에 일어나기",
    category: "생활",
    validationMethod: "photo",
  },
  {
    title: "전공 공부 한 시간 하기",
    category: "지식",
    validationMethod: "timelapse",
  },
  {
    title: "책 30페이지 읽기",
    category: "지식",
    validationMethod: "photo",
  },
  {
    title: "일기 500자 이상 쓰기",
    category: "생활",
    validationMethod: "writing",
  },
  {
    title: "만보 걷기",
    category: "신체활동",
    validationMethod: "photo",
  },
  { title: "샐러드 한 끼 먹기", category: "생활", validationMethod: "photo" },
  { title: "물 2리터 마시기", category: "생활", validationMethod: "photo" },
  {
    title: "악기 30분 연습",
    category: "기술 연습",
    validationMethod: "timelapse",
  },
  {
    title: "부모님과 10분 통화하기",
    category: "인간관계",
    validationMethod: "photo",
  },
  {
    title: "영어 단어 50개 외우기",
    category: "지식",
    validationMethod: "photo",
  },
  { title: "20분 명상하기", category: "생활", validationMethod: "timelapse" },
  {
    title: "모르는 사람 3명과 사적인 대화하기",
    category: "인간관계",
    validationMethod: "photo",
  },
  {
    title: "LeetCode에서 알고리즘 문제 하드 한 문제 풀기",
    category: "기술 연습",
    validationMethod: "photo",
  },
  { title: "닭가슴살 300g 먹기", category: "생활", validationMethod: "photo" },
  { title: "밤 12시에 자기", category: "생활", validationMethod: "photo" },
  { title: "마스크 팩 하기", category: "미용", validationMethod: "photo" },
  {
    title: "플랭크 6분 버티기",
    category: "신체활동",
    validationMethod: "timelapse",
  },
  { title: "만원 이하로 쓰기", category: "생활", validationMethod: "photo" },
  { title: "방 청소하기", category: "생활", validationMethod: "timelapse" },
  {
    title: "길에서 쓰레기 10개 줍기",
    category: "선행",
    validationMethod: "photo",
  },
  { title: "1만원 기부하기", category: "선행", validationMethod: "photo" },
  {
    title: "동기부여 영상 5개 보고 느낀 점 30자 이상 쓰기",
    category: "감상",
    validationMethod: "writing",
  },
  {
    title: "영화 한 편 보고 리뷰 50자 이상  쓰기",
    category: "감상",
    validationMethod: "writing",
  },
  { title: "한 끼 요리해서 먹기", category: "생활", validationMethod: "photo" },
  { title: "시 10편 필사하기", category: "감상", validationMethod: "photo" },
  {
    title: "사자성어 20개 외우기",
    category: "지식",
    validationMethod: "photo",
  },
  {
    title: "연인과 산책하기",
    category: "인간관계",
    validationMethod: "photo",
  },
  {
    title: "신문 기사를 바탕으로 논평 400자 쓰기",
    category: "감상",
    validationMethod: "writing",
  },
  {
    title: "Ted 보고 후기 300자 쓰기",
    category: "감상",
    validationMethod: "writing",
  },
  {
    title: "외국인 한 명과 대화하기",
    category: "인간관계",
    validationMethod: "photo",
  },
];

export const VALIDATION_METHOD_LABELS = {
  photo: "사진을 찍어 인증합니다.",
  timelapse: "타임랩스 영상을 찍어 인증합니다.",
  writing: "글을 써서 인증합니다.",
};

export const GOAL_COUNT_CONDITION = 5;
export const CHALLENGE_DAY_COUNT = 3;
export const ENROLL_FEE = "1만원";
