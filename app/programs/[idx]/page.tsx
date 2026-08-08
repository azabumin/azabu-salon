import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlaceholderSwatch from "@/components/PlaceholderSwatch";
import ProgramPurchasePanel from "@/components/ProgramPurchasePanel";
import ProgramDetailTabs from "@/components/ProgramDetailTabs";
import ProgramCard from "@/components/ProgramCard";
import { programs, getProgramByIdx, getRelatedPrograms } from "@/data/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ idx: String(p.idx) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ idx: string }>;
}): Promise<Metadata> {
  const { idx } = await params;
  const program = getProgramByIdx(Number(idx));
  return { title: program ? `${program.name} | AZABU SALON` : "AZABU SALON" };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ idx: string }>;
}) {
  const { idx } = await params;
  const program = getProgramByIdx(Number(idx));
  if (!program) notFound();

  const related = getRelatedPrograms(program.idx);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full aspect-square overflow-hidden">
          <PlaceholderSwatch gradient={program.swatch} label={program.name} className="absolute inset-0" />
        </div>
        <ProgramPurchasePanel program={program} />
      </div>

      <ProgramDetailTabs program={program} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-border">
        <h2 className="font-serif text-xl font-bold text-text mb-8">その他のプログラム</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
          {related.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
