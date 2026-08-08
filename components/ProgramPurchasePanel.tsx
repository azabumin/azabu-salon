"use client";

import { useState } from "react";
import type { Program } from "@/data/programs";
import { useCart } from "@/contexts/CartContext";

export default function ProgramPurchasePanel({ program }: { program: Program }) {
  const { addItem } = useCart();
  const [optionIdx, setOptionIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const option = program.options[optionIdx];
  const total = option.price * qty;

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-brand mb-2">AZABU SALON</p>
      <h1 className="font-serif text-2xl md:text-3xl font-bold text-text mb-3">{program.name}</h1>
      <p className="text-sm text-text-muted leading-relaxed mb-5">{program.shortDescription}</p>
      <p className="text-[24px] font-semibold text-text mb-6">
        ¥{program.price.toLocaleString("ja-JP")}
        <span className="text-xs text-text-muted font-normal ml-2">(税込)</span>
      </p>

      <div className="mb-5">
        <label className="text-sm text-text mb-2 block">回数を選択</label>
        <select
          value={optionIdx}
          onChange={(e) => setOptionIdx(Number(e.target.value))}
          className="w-full border border-border px-4 py-3 text-sm bg-white"
        >
          {program.options.map((opt, idx) => (
            <option key={opt.label} value={idx}>
              {opt.label} — ¥{opt.price.toLocaleString("ja-JP")}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="flex items-center border border-border">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="数量を減らす"
            className="w-9 h-9"
          >
            -
          </button>
          <span className="w-9 text-center text-sm">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="数量を増やす"
            className="w-9 h-9"
          >
            +
          </button>
        </div>
        <p className="text-sm text-text-muted">
          合計 <span className="text-text font-semibold">¥{total.toLocaleString("ja-JP")}</span>
        </p>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          type="button"
          className="flex-1 h-12 border border-brand text-brand text-sm hover:bg-brand hover:text-white transition-colors"
        >
          購入する
        </button>
        <button
          type="button"
          onClick={() =>
            addItem({ id: `${program.id}-${option.label}`, name: `${program.name}(${option.label})`, price: option.price }, qty)
          }
          className="flex-1 h-12 bg-brand text-white text-sm hover:bg-brand-dark transition-colors"
        >
          カートに入れる
        </button>
        <button
          type="button"
          aria-label="お気に入りに追加"
          className="w-12 h-12 border border-border flex items-center justify-center text-text hover:border-brand hover:text-brand transition-colors"
        >
          ♡
        </button>
      </div>

      <p className="text-xs text-text-muted border border-border px-3 py-2 inline-block">
        各種オンライン決済対応
      </p>
    </div>
  );
}
