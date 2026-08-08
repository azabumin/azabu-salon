import type { Metadata } from "next";
import PlaceholderSwatch from "@/components/PlaceholderSwatch";
import { eventPosters } from "@/data/events";

export const metadata: Metadata = {
  title: "イベント | AZABU SALON",
};

export default function EventPage() {
  return (
    <div>
      <div className="relative h-[280px] sm:h-[360px] overflow-hidden bg-gradient-to-b from-[#BFE3EE] to-[#E8F5F8]">
        <div className="absolute inset-0">
          <div className="absolute w-24 h-24 rounded-full bg-white/40 top-10 left-[10%]" />
          <div className="absolute w-16 h-16 rounded-full bg-white/30 top-20 right-[15%]" />
          <div className="absolute w-32 h-32 rounded-full bg-white/20 bottom-0 left-[40%]" />
          <div className="absolute w-10 h-10 rounded-full bg-white/50 bottom-10 right-[30%]" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1
            className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-widest text-center px-6"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
          >
            AZABU SALON AESTHETIC
          </h1>
        </div>
      </div>

      <div>
        {eventPosters.map((poster) => (
          <div key={poster.id} className="relative w-full aspect-[891/1260] max-h-[900px] overflow-hidden">
            <PlaceholderSwatch gradient={poster.swatch} className="absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <p
                className="text-white font-serif text-2xl sm:text-3xl font-bold text-center px-6"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
              >
                {poster.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
