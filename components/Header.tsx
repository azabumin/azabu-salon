"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  const isActive = (href: string) =>
    pathname === href || (href === "/intro" && pathname === "/");

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[70px] grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <Link
          href="/"
          className="font-serif text-lg sm:text-2xl font-bold tracking-widest text-brand-dark whitespace-nowrap"
        >
          AZABU SALON
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 text-sm overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 border-b-2 transition-colors whitespace-nowrap ${
                isActive(item.href)
                  ? "border-brand text-brand"
                  : "border-transparent text-text hover:text-brand"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-text justify-end">
          <Link href="#" className="hidden lg:inline hover:text-brand">
            ログイン
          </Link>
          <Link href="#" className="hidden lg:inline hover:text-brand">
            新規登録
          </Link>
          <button aria-label="カート" type="button" className="relative hover:text-brand">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6 4.5 2H2" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="17" cy="20" r="1.5" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button aria-label="検索" type="button" className="hover:text-brand">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="md:hidden border-t border-border overflow-x-auto">
        <ul className="flex items-center justify-start gap-5 px-4 py-2 text-xs whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className={isActive(item.href) ? "text-brand font-semibold" : "text-text"}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
