"use client";

import { useMemo, useState } from "react";
import { translateText, type TranslationMode } from "@/lib/translator";

export default function TranslatePage() {
  const [mode, setMode] = useState<TranslationMode>("en2zh");
  const [inputText, setInputText] = useState("Please send CIF price for Solar Light Tower");

  const outputText = useMemo(() => translateText(inputText, mode), [inputText, mode]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">LFADJ Sales OS V5</p>
        <h1 className="mt-3 text-3xl font-semibold">Business Translation Tool</h1>
        <p className="mt-3 text-sm text-slate-400">Rule-based bilingual translation for sales communication.</p>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={() => setMode("en2zh")}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === "en2zh" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-200"}`}
          >
            EN → CN
          </button>
          <button
            type="button"
            onClick={() => setMode("zh2en")}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === "zh2en" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-200"}`}
          >
            CN → EN
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <label className="block rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="mb-3 text-sm font-semibold text-slate-300">Input</div>
            <textarea
              className="min-h-56 w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm outline-none"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
          </label>

          <label className="block rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="mb-3 text-sm font-semibold text-slate-300">Output</div>
            <textarea
              className="min-h-56 w-full rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm outline-none"
              value={outputText}
              readOnly
            />
          </label>
        </div>
      </div>
    </main>
  );
}
