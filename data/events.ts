export interface EventPoster {
  id: string;
  caption: string;
  swatch: string;
}

export const eventPosters: EventPoster[] = [
  { id: "e1", caption: "春の毛穴集中キャンペーン", swatch: "from-[#EFE3D5] to-[#C9AD8E]" },
  { id: "e2", caption: "ペア割キャンペーン", swatch: "from-[#E8D8C8] to-[#B79A7E]" },
  { id: "e3", caption: "学割キャンペーン", swatch: "from-[#E4D2BF] to-[#B79A7E]" },
  { id: "e4", caption: "お誕生日特典", swatch: "from-[#DCCAB6] to-[#A9876A]" },
  { id: "e5", caption: "平日限定タイムセール", swatch: "from-[#D6C2AA] to-[#8C6F52]" },
  { id: "e6", caption: "会員限定プログラム", swatch: "from-[#E2CFBB] to-[#B79A7E]" },
  { id: "e7", caption: "新規のお客様限定価格", swatch: "from-[#EFE3D5] to-[#C9AD8E]" },
  { id: "e8", caption: "季節の変わり目ケアキャンペーン", swatch: "from-[#E8D8C8] to-[#B79A7E]" },
];
