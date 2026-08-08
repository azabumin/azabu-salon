export const businessInfo: { label: string; value: string }[] = [
  { label: "商号", value: "AZABU SALON" },
  { label: "代表者", value: "山田 花子" },
  { label: "所在地", value: "東京都港区麻布十番1-2-3 ○○ビル2F" },
  { label: "電話番号", value: "03-0000-0000" },
  { label: "メールアドレス", value: "info@azabu-salon.example" },
  { label: "事業者登録番号", value: "0000000000000" },
  { label: "ホスティング", value: "imweb" },
];

export interface SnsLink {
  name: "Instagram" | "LINE" | "X";
  href: string;
}

export const snsLinks: SnsLink[] = [
  { name: "Instagram", href: "#" },
  { name: "LINE", href: "#" },
  { name: "X", href: "#" },
];
