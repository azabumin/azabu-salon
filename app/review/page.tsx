import type { Metadata } from "next";
import PlaceholderSwatch from "@/components/PlaceholderSwatch";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import { beforeAfterItems } from "@/data/beforeAfter";

export const metadata: Metadata = {
  title: "ビフォーアフター | AZABU SALON",
};

export default function ReviewPage() {
  return (
    <div>
      <div className="relative w-full aspect-[1660/600] max-h-[420px] overflow-hidden">
        <PlaceholderSwatch gradient="from-[#DCCAB6] to-[#A9876A]" className="absolute inset-0" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-10 text-center">
          ビフォーアフター
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {beforeAfterItems.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
