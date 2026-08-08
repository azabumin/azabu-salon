function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function NavIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="3 11 21 3 13 21 11 13 3 11" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1z" />
    </svg>
  );
}

const items = [
  { icon: LocationIcon, text: "東京都港区麻布十番1-2-3 ○○ビル2F" },
  { icon: ClockIcon, text: "10:00〜20:00(最終受付19:00)" },
  { icon: NavIcon, text: "都営大江戸線 麻布十番駅 5番出口より徒歩3分" },
  { icon: PhoneIcon, text: "03-0000-0000" },
];

export default function StoreInfoBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-3 border border-border px-4 py-3">
          <span className="text-brand shrink-0">
            <item.icon />
          </span>
          <span className="text-sm text-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
