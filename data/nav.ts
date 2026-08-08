export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "サロン紹介", href: "/intro" },
  { label: "肌診断", href: "/26" },
  { label: "プログラム", href: "/programs" },
  { label: "イベント", href: "/event" },
  { label: "ご予約・お問い合わせ", href: "/reservation" },
  { label: "ビフォーアフター", href: "/review" },
  { label: "お客様の声", href: "/20" },
];
