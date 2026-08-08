import Link from "next/link";
import PlaceholderSwatch from "./PlaceholderSwatch";
import type { Program } from "@/data/programs";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <Link href={`/programs/${program.idx}`} className="block group">
      <div className="relative aspect-square overflow-hidden">
        <PlaceholderSwatch gradient={program.swatch} label={program.name} className="absolute inset-0" />
      </div>
      <p className="text-sm text-text mt-3 group-hover:text-brand transition-colors">{program.name}</p>
      <p className="text-base font-semibold text-text mt-1">
        ¥{program.price.toLocaleString("ja-JP")}
      </p>
    </Link>
  );
}
