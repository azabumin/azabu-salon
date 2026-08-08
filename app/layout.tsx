import type { Metadata } from "next";
import { notoSansJp, notoSerifJp } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { CartProvider } from "@/contexts/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "AZABU SALON | アザブサロン",
  description: "麻布のプライベートエステサロン、AZABU SALON",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${notoSerifJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-text">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingChat />
        </CartProvider>
      </body>
    </html>
  );
}
