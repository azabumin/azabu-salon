import PlaceholderSwatch from "./PlaceholderSwatch";
import StoreInfoBar from "./StoreInfoBar";

const recommendedList = [
  "肌の揺らぎやトラブルにお悩みの方",
  "自分に合ったケアが分からない方",
  "特別な日の前にコンディションを整えたい方",
  "忙しい日常から少し離れて、ゆっくりしたい方",
  "信頼できるサロンを探している方",
];

export default function IntroContent() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 flex flex-col md:flex-row gap-10 items-center">
        <div className="relative w-full md:w-[442px] aspect-square shrink-0 overflow-hidden">
          <PlaceholderSwatch
            gradient="from-[#E8D8C8] to-[#B79A7E]"
            label="AZABU SALON"
            className="absolute inset-0"
          />
        </div>
        <div className="w-full md:flex-1">
          <p className="text-xs tracking-[0.3em] uppercase text-brand mb-4">Azabu Salon</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-text leading-snug mb-6">
            あなたの肌に、
            <br />
            寄り添うケアを。
          </h1>
          <p className="text-sm text-text-muted leading-relaxed max-w-md">
            AZABU
            SALONは、一人ひとりの肌質と向き合う会員制プライベートエステサロンです。派手さよりも、確かな効果と心地よい時間をお届けします。
          </p>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-text mb-8">
            サロンをのぞいてみる
          </h2>
          <div className="relative aspect-[607/455] max-w-xl mx-auto overflow-hidden">
            <PlaceholderSwatch
              gradient="from-[#DCCAB6] to-[#A9876A]"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                type="button"
                aria-label="動画を再生"
                className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#6F5544">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <StoreInfoBar />
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-14">
          <div>
            <h3 className="text-lg font-bold text-text mb-4">🏠 サロンについて</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              AZABU
              SALONは、麻布の落ち着いた街並みの中にある、完全予約制のプライベートエステサロンです。カウンセリングを丁寧に行い、その日の肌状態に合わせたケアをご提案しています。効果と心地よさ、両方を大切にしています。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text mb-4">✨ こんな方におすすめ</h3>
            <ul className="space-y-2">
              {recommendedList.map((item) => (
                <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                  <span className="text-brand mt-0.5">・</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text mb-4">🌏 外国からのお客様へ</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              AZABU
              SALONでは、海外からお越しのお客様も安心してご利用いただけるよう、英語でのご案内も行っております。ご予約時にお気軽にお申し付けください。
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              We welcome international guests. English-speaking staff are available upon
              request — please let us know when making your reservation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text mb-4">💌 最後に</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              肌は、毎日を映す鏡だと思っています。AZABU
              SALONでの時間が、あなたにとって少しでも心地よいひとときになりますように。ご来店を心よりお待ちしております。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
