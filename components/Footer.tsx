import Link from "next/link";
import { navItems } from "@/data/nav";
import { businessInfo, snsLinks } from "@/data/footer";

function SnsIcon({ name }: { name: "Instagram" | "LINE" | "X" }) {
  if (name === "Instagram") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "LINE") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5c0 4.7-4.5 8.5-9 8.5-1 0-2-.2-2.9-.5L4 21l1.2-3.6C3.9 16 3 13.9 3 11.5 3 6.8 7.5 3 12 3s9 3.8 9 8.5z" />
      </svg>
    );
  }
  return (
    <span className="font-serif text-sm font-bold" aria-hidden>
      X
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-footer text-white/80 pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-xs leading-relaxed space-y-1.5">
          <p className="font-serif text-base text-white mb-3 tracking-widest">AZABU SALON</p>
          {businessInfo.map((item) => (
            <p key={item.label}>
              <span className="text-white/50 mr-2">{item.label}</span>
              {item.value}
            </p>
          ))}
        </div>

        <div className="text-sm">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 text-xs text-white/50">
            <Link href="#" className="hover:text-white">
              利用約款
            </Link>
            <Link href="#" className="hover:text-white">
              個人情報処理方針
            </Link>
          </div>
        </div>

        <div className="flex md:justify-end items-start gap-3">
          {snsLinks.map((sns) => (
            <a
              key={sns.name}
              href={sns.href}
              aria-label={sns.name}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <SnsIcon name={sns.name} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-white/10 text-[11px] text-white/40 text-center">
        © {new Date().getFullYear()} AZABU SALON. All Rights Reserved.
      </div>
    </footer>
  );
}
