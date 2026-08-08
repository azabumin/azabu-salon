import type { Metadata } from "next";
import PlaceholderSwatch from "@/components/PlaceholderSwatch";
import StoreInfoBar from "@/components/StoreInfoBar";

export const metadata: Metadata = {
  title: "ご予約・お問い合わせ | AZABU SALON",
};

export default function ReservationPage() {
  return (
    <div>
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        <div className="relative aspect-square max-w-md mx-auto overflow-hidden mb-10">
          <PlaceholderSwatch
            gradient="from-[#E8D8C8] to-[#B79A7E]"
            label="Reservation"
            className="absolute inset-0"
          />
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
          ご予約・お問い合わせ
        </h1>
        <p className="text-sm text-text-muted">
          ご希望の日時・プログラムをお知らせください。担当スタッフよりご連絡いたします。
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <StoreInfoBar />
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto mb-5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.3-3.3-2.8-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" />
            </svg>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-text mb-2">
            ご予約の準備はできていますか？
          </h2>
          <p className="text-xs text-text-muted mb-10">
            Ready for Your Appointment? — QRコードを読み取ってWhatsAppでご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="relative w-[220px] aspect-[599/382] overflow-hidden border border-border">
              <PlaceholderSwatch
                gradient="from-[#EFEFEF] to-[#DADADA]"
                label="WhatsApp QR"
                className="absolute inset-0"
              />
            </div>
            <div className="relative w-[220px] aspect-[589/327] overflow-hidden border border-border">
              <PlaceholderSwatch
                gradient="from-[#EFEFEF] to-[#DADADA]"
                label="WhatsApp QR"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
