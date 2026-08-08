import type { Metadata } from "next";
import SkinQuiz from "@/components/SkinQuiz";

export const metadata: Metadata = {
  title: "肌診断 | AZABU SALON",
};

export default function SkinDiagnosisPage() {
  return <SkinQuiz />;
}
