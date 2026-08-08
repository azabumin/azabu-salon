"use client";

import { useState } from "react";
import PlaceholderSwatch from "./PlaceholderSwatch";
import type { BeforeAfterItem } from "@/data/beforeAfter";

export default function BeforeAfterCard({ item }: { item: BeforeAfterItem }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden">
        <PlaceholderSwatch
          gradient={showAfter ? item.afterSwatch : item.beforeSwatch}
          className="absolute inset-0"
        />
        <span className="absolute top-2 left-2 bg-black/50 text-white text-[11px] px-2 py-1">
          {showAfter ? "AFTER" : "BEFORE"}
        </span>
        <button
          type="button"
          onClick={() => setShowAfter((v) => !v)}
          aria-label="Before/Afterを切り替え"
          className="absolute inset-y-0 right-0 w-10 flex items-center justify-center bg-black/20 hover:bg-black/35 text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-text mt-3">{item.name}</p>
      <p className="text-xs text-text-muted">{item.date}</p>
    </div>
  );
}
