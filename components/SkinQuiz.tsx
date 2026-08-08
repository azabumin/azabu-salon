"use client";

import { useState } from "react";
import Link from "next/link";
import PlaceholderSwatch from "./PlaceholderSwatch";
import { quizQuestions, skinTypeResults, type SkinType } from "@/data/quiz";

const SKIN_TYPES: SkinType[] = ["dry", "oily", "combination", "sensitive"];

function computeResultType(answers: SkinType[]): SkinType {
  const counts: Record<SkinType, number> = { dry: 0, oily: 0, combination: 0, sensitive: 0 };
  answers.forEach((a) => {
    counts[a] += 1;
  });
  return SKIN_TYPES.reduce((best, type) => (counts[type] > counts[best] ? type : best), SKIN_TYPES[0]);
}

export default function SkinQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<SkinType[]>([]);

  const totalQuestions = quizQuestions.length;
  const isIntro = step === -1;
  const isQuestion = step >= 0 && step < totalQuestions;
  const isResult = step === totalQuestions;
  const result = isResult ? skinTypeResults[computeResultType(answers)] : null;

  const handleAnswer = (type: SkinType) => {
    setAnswers((prev) => [...prev, type]);
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(-1);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      {isIntro && (
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-brand mb-4">Skin Diagnosis</p>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">肌タイプ診断</h1>
          <p className="text-sm text-text-muted mb-8">
            簡単な質問に答えて、あなたの肌タイプをチェックしましょう。
          </p>
          <div className="relative w-48 h-48 mx-auto mb-8 overflow-hidden">
            <PlaceholderSwatch gradient="from-[#E8D8C8] to-[#B79A7E]" className="absolute inset-0" />
          </div>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="bg-brand text-white text-sm px-8 py-3 hover:bg-brand-dark transition-colors"
          >
            テストを始める
          </button>
        </div>
      )}

      {isQuestion && (
        <div>
          <p className="text-xs text-text-muted mb-6">
            {step + 1} / {totalQuestions}
          </p>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-text mb-8">
            {quizQuestions[step].question}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quizQuestions[step].options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => handleAnswer(opt.type)}
                className="border border-border px-5 py-4 text-sm text-text hover:border-brand hover:text-brand transition-colors text-left"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {isResult && result && (
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-brand mb-4">Your Result</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-4">{result.title}</h2>
          <p className="text-sm text-text-muted leading-relaxed mb-8 max-w-md mx-auto">
            {result.description}
          </p>
          <p className="text-sm text-text mb-8">
            おすすめプログラム: <span className="font-semibold text-brand">{result.recommendedProgram}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/programs"
              className="bg-brand text-white text-sm px-8 py-3 hover:bg-brand-dark transition-colors"
            >
              プログラムを見る
            </Link>
            <button
              type="button"
              onClick={restart}
              className="border border-brand text-brand text-sm px-8 py-3 hover:bg-brand hover:text-white transition-colors"
            >
              もう一度診断する
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
