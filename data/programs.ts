export interface ProgramOption {
  label: string;
  price: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Program {
  id: string;
  idx: number;
  name: string;
  price: number;
  swatch: string;
  shortDescription: string;
  recommendedFor: string[];
  options: ProgramOption[];
  faq: FaqItem[];
}

export const programs: Program[] = [
  {
    id: "trouble-care",
    idx: 1,
    name: "トラブル集中ケア",
    price: 13000,
    swatch: "from-[#E8D8C8] to-[#B79A7E]",
    shortDescription: "揺らぎがちな肌を鎮静し、トラブルの原因にアプローチする集中ケアです。",
    recommendedFor: ["繰り返す肌トラブルにお悩みの方", "赤みや炎症が気になる方", "肌のバリア機能を整えたい方"],
    options: [
      { label: "1回", price: 13000 },
      { label: "3回パック", price: 35000 },
      { label: "5回パック", price: 55000 },
    ],
    faq: [
      { q: "施術時間はどのくらいですか？", a: "カウンセリングを含め、約60分を目安にしております。" },
      { q: "痛みはありますか？", a: "強い刺激は使用せず、肌への負担が少ない施術です。敏感な方は事前にお申し付けください。" },
    ],
  },
  {
    id: "face-line-care",
    idx: 2,
    name: "フェイスライン集中ケア",
    price: 13000,
    swatch: "from-[#EFE3D5] to-[#C9AD8E]",
    shortDescription: "たるみが気になるフェイスラインに働きかけ、輪郭をすっきりと導きます。",
    recommendedFor: ["フェイスラインのたるみが気になる方", "小顔を目指したい方", "むくみやすい方"],
    options: [
      { label: "1回", price: 13000 },
      { label: "3回パック", price: 35000 },
      { label: "5回パック", price: 55000 },
    ],
    faq: [
      { q: "効果はどのくらい持続しますか？", a: "個人差がございますが、継続的なケアをおすすめしております。" },
      { q: "メイクをしたまま来店できますか？", a: "はい、店内でクレンジングをご用意しております。" },
    ],
  },
  {
    id: "pore-care",
    idx: 3,
    name: "毛穴集中ケア",
    price: 13000,
    swatch: "from-[#E4D2BF] to-[#B79A7E]",
    shortDescription: "気になる毛穴の黒ずみ・開きにアプローチし、なめらかな肌へ整えます。",
    recommendedFor: ["毛穴の開き・黒ずみが気になる方", "テカリやすい方", "肌のキメを整えたい方"],
    options: [
      { label: "1回", price: 13000 },
      { label: "3回パック", price: 35000 },
      { label: "5回パック", price: 55000 },
    ],
    faq: [
      { q: "施術後の赤みはありますか？", a: "個人差がありますが、通常は数時間で落ち着きます。" },
      { q: "どのくらいの頻度で通えばよいですか？", a: "2〜3週間に1回のペースを推奨しております。" },
    ],
  },
  {
    id: "upper-body-care",
    idx: 4,
    name: "上半身集中ケア",
    price: 18000,
    swatch: "from-[#DCCAB6] to-[#A9876A]",
    shortDescription: "肩・背中・デコルテをまとめてケアし、上半身のラインを整えます。",
    recommendedFor: ["肩こりが気になる方", "背中や二の腕のラインが気になる方", "デコルテのハリを保ちたい方"],
    options: [
      { label: "1回", price: 18000 },
      { label: "3回パック", price: 49000 },
    ],
    faq: [
      { q: "着替えは必要ですか？", a: "施術用のガウンをご用意しておりますので、お着替えいただきます。" },
      { q: "生理中でも施術できますか？", a: "上半身のケアは施術可能です。詳しくはご予約時にご相談ください。" },
    ],
  },
  {
    id: "full-body-care",
    idx: 5,
    name: "全身ケア",
    price: 32000,
    swatch: "from-[#D6C2AA] to-[#8C6F52]",
    shortDescription: "全身をトータルでケアする、じっくりと寛げるロングタイムプログラムです。",
    recommendedFor: ["日頃の疲れをまとめてケアしたい方", "特別な日の前にリフレッシュしたい方", "全身のめぐりを整えたい方"],
    options: [
      { label: "1回(90分)", price: 32000 },
      { label: "1回(120分)", price: 42000 },
    ],
    faq: [
      { q: "所要時間はどのくらいですか？", a: "90分コースと120分コースをご用意しております。" },
      { q: "アロマの香りは選べますか？", a: "はい、数種類のアロマからお選びいただけます。" },
    ],
  },
  {
    id: "body-part-care",
    idx: 6,
    name: "ボディパーツケア",
    price: 13000,
    swatch: "from-[#E2CFBB] to-[#B79A7E]",
    shortDescription: "気になる部位を集中してケアする、ピンポイントプログラムです。",
    recommendedFor: ["二の腕・脚など気になる部位がある方", "短時間でリフレッシュしたい方", "初めてサロンを利用する方"],
    options: [
      { label: "1回", price: 13000 },
      { label: "3回パック", price: 35000 },
    ],
    faq: [
      { q: "部位は当日選べますか？", a: "はい、カウンセリング時にご希望の部位をお選びいただけます。" },
      { q: "男性でも利用できますか？", a: "はい、男性のお客様もご利用いただけます。" },
    ],
  },
];

export function getProgramByIdx(idx: number): Program | undefined {
  return programs.find((p) => p.idx === idx);
}

export function getRelatedPrograms(idx: number, count = 3): Program[] {
  return programs.filter((p) => p.idx !== idx).slice(0, count);
}
