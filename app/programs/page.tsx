import type { Metadata } from "next";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "プログラム | AZABU SALON",
};

export default function ProgramsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs tracking-widest text-white bg-brand px-3 py-1.5">全て</span>
        <h1 className="font-serif text-2xl font-bold text-text">プログラム</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
        {programs.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>
    </div>
  );
}
