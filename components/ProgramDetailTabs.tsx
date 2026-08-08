"use client";

import { useState } from "react";
import PlaceholderSwatch from "./PlaceholderSwatch";
import type { Program } from "@/data/programs";

const TABS = ["詳細情報", "レビュー(0)", "Q&A(0)"] as const;
type Tab = (typeof TABS)[number];

const LEVELS = [
  { level: "Lv.1", desc: "肌表面のコンディションを整える基本ケア" },
  { level: "Lv.2", desc: "Lv.1に加え、集中トリートメントを追加" },
  { level: "Lv.3", desc: "肌の深部にアプローチする本格ケア" },
  { level: "Lv.4", desc: "Lv.3に加え、専用マシンケアを追加" },
  { level: "Lv.5", desc: "オーダーメイドのフルコースケア" },
];

function LevelComparisonTable() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h4 className="font-serif text-lg font-bold text-text mb-6 text-center">レベル比較</h4>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {LEVELS.map((l) => (
          <div key={l.level} className="border border-border p-4 text-center">
            <p className="font-serif text-brand font-bold mb-2">{l.level}</p>
            <p className="text-xs text-text-muted leading-relaxed">{l.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductNotice() {
  const rows: [string, string][] = [
    ["施術時間", "約60〜90分(オプションにより変動)"],
    ["ご予約方法", "お電話またはWeb予約フォームより承ります"],
    ["キャンセルポリシー", "前日20時までにご連絡ください。当日キャンセルはキャンセル料が発生する場合がございます"],
    ["使用製品", "サロン専用オリジナル製品を使用しております"],
    ["施術者", "国家資格を持つ経験豊富なセラピストが担当いたします"],
    ["ご注意事項", "妊娠中の方、肌に炎症がある方は事前にご相談ください"],
  ];
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h4 className="font-serif text-lg font-bold text-text mb-6">商品情報</h4>
      <dl className="divide-y divide-border text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-3">
            <dt className="text-text-muted sm:col-span-1">{label}</dt>
            <dd className="text-text sm:col-span-2">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function EmptyBoard({ label }: { label: string }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-2 border-border rounded-full flex items-center justify-center text-text-muted">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="7" width="18" height="13" rx="1" />
          <path d="M3 7l3-4h12l3 4" />
          <path d="M3 7h18" />
        </svg>
      </div>
      <p className="text-sm text-text-muted">{label}はまだありません。</p>
    </div>
  );
}

export default function ProgramDetailTabs({ program }: { program: Program }) {
  const [tab, setTab] = useState<Tab>("詳細情報");

  return (
    <div className="border-t border-border mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex gap-8 border-b border-border">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`py-4 text-sm border-b-2 -mb-px transition-colors ${
                tab === t ? "border-brand text-brand font-semibold" : "border-transparent text-text-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {tab === "詳細情報" && (
        <div>
          <div className="relative w-full aspect-[1244/449] max-h-[420px] overflow-hidden">
            <PlaceholderSwatch
              gradient="from-[#DCCAB6] to-[#A9876A]"
              label="Neck & Shoulder Care"
              className="absolute inset-0"
            />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
            <div className="relative w-[140px] h-[140px] mx-auto rounded-full overflow-hidden mb-4">
              <PlaceholderSwatch gradient="from-[#E4D2BF] to-[#B79A7E]" label="DNA" className="absolute inset-0" />
            </div>
            <p className="text-sm text-text-muted">肌本来の力を引き出す、独自メソッド</p>
          </div>

          <LevelComparisonTable />

          <div className="relative w-full h-[46px] max-w-[793px] mx-auto overflow-hidden my-8">
            <PlaceholderSwatch gradient="from-[#E2CFBB] to-[#B79A7E]" className="absolute inset-0" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
            <h4 className="font-serif text-lg font-bold text-text mb-4">こんな方におすすめ</h4>
            <ul className="space-y-2">
              {program.recommendedFor.map((item) => (
                <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                  <span className="text-brand mt-0.5">・</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
            <h4 className="font-serif text-lg font-bold text-text mb-6">よくあるご質問</h4>
            <div className="divide-y divide-border border-t border-b border-border">
              {program.faq.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer text-sm text-text list-none">
                    {item.q}
                    <span className="text-text-muted group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-sm text-text-muted mt-3 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <ProductNotice />
        </div>
      )}

      {tab === "レビュー(0)" && <EmptyBoard label="購入評価" />}
      {tab === "Q&A(0)" && <EmptyBoard label="Q&A" />}
    </div>
  );
}
