export type SkinType = "dry" | "oily" | "combination" | "sensitive";

export interface QuizOption {
  label: string;
  type: SkinType;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "洗顔後、肌はどう感じますか？",
    options: [
      { label: "つっぱる感じがする", type: "dry" },
      { label: "すぐにテカリが出る", type: "oily" },
      { label: "頬は乾燥、Tゾーンはテカる", type: "combination" },
      { label: "赤みやかゆみが出やすい", type: "sensitive" },
    ],
  },
  {
    id: "q2",
    question: "毛穴の状態は？",
    options: [
      { label: "ほとんど目立たない", type: "dry" },
      { label: "全体的に開きやすい", type: "oily" },
      { label: "Tゾーンだけ目立つ", type: "combination" },
      { label: "刺激を受けると赤くなる", type: "sensitive" },
    ],
  },
  {
    id: "q3",
    question: "新しい化粧品を使うと？",
    options: [
      { label: "特に問題は起きない", type: "dry" },
      { label: "ニキビができやすい", type: "oily" },
      { label: "部位によって反応が違う", type: "combination" },
      { label: "すぐにヒリヒリ・赤みが出る", type: "sensitive" },
    ],
  },
  {
    id: "q4",
    question: "季節の変わり目、肌の悩みは？",
    options: [
      { label: "乾燥がひどくなる", type: "dry" },
      { label: "べたつきが増す", type: "oily" },
      { label: "部分的に乾燥・皮脂が偏る", type: "combination" },
      { label: "肌荒れしやすい", type: "sensitive" },
    ],
  },
];

export const skinTypeResults: Record<
  SkinType,
  { title: string; description: string; recommendedProgram: string }
> = {
  dry: {
    title: "乾燥肌タイプ",
    description: "水分・油分が不足しがちな肌です。保湿を重視したケアがおすすめです。",
    recommendedProgram: "トラブル集中ケア",
  },
  oily: {
    title: "脂性肌タイプ",
    description: "皮脂分泌が多く、テカリや毛穴が気になりやすい肌です。",
    recommendedProgram: "毛穴集中ケア",
  },
  combination: {
    title: "混合肌タイプ",
    description: "部位によって乾燥と皮脂のバランスが異なる肌です。",
    recommendedProgram: "フェイスライン集中ケア",
  },
  sensitive: {
    title: "敏感肌タイプ",
    description: "刺激に反応しやすく、赤みや炎症が出やすい肌です。",
    recommendedProgram: "トラブル集中ケア",
  },
};
