import type { Metadata } from "next";
import PlaceholderSwatch from "@/components/PlaceholderSwatch";

export const metadata: Metadata = {
  title: "お客様の声 | AZABU SALON",
};

export default function CustomerReviewsPage() {
  return (
    <div>
      <div className="relative w-full aspect-[1244/450] max-h-[380px] overflow-hidden">
        <PlaceholderSwatch gradient="from-[#E4D2BF] to-[#B79A7E]" className="absolute inset-0" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-text">お客様の声</h1>
          <input
            type="search"
            placeholder="キーワードで検索"
            className="border border-border px-4 py-2 text-sm w-full sm:w-64"
          />
        </div>

        <div className="py-20 text-center border-t border-b border-border">
          <div className="w-16 h-16 mx-auto mb-4 border-2 border-border rounded-full flex items-center justify-center text-text-muted">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="7" width="18" height="13" rx="1" />
              <path d="M3 7l3-4h12l3 4" />
              <path d="M3 7h18" />
            </svg>
          </div>
          <p className="text-sm text-text-muted mb-6">投稿がありません。</p>
          <button
            type="button"
            className="bg-brand text-white text-sm px-6 py-2.5 hover:bg-brand-dark transition-colors"
          >
            投稿する
          </button>
        </div>
      </div>
    </div>
  );
}
