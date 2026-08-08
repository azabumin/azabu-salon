import type { Metadata } from "next";
import IntroContent from "@/components/IntroContent";

export const metadata: Metadata = {
  title: "サロン紹介 | AZABU SALON",
};

export default function IntroPage() {
  return <IntroContent />;
}
