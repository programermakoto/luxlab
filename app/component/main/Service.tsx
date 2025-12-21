"use client";

import { useState } from "react";
import Fireflies from "../animation/Fireflies";

const TABS = [
  { id: "features", label: "特徴" },
  { id: "monetization", label: "収益化" },
  { id: "skill", label: "スキル・仕組み" },
];

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <section className="pb-40 container mx-auto px-4 relative ">
      <Fireflies />
      <h3 className="text-center text-3xl font-bold text-white mb-4">
        子どもでも理解できるLUXLABの仕組み
      </h3>
      <p className="text-center text-gray-300 mb-12">
        「なにをして・どう稼ぐのか」をシンプルに解説
      </p>

      {/* タブ */}
      <div className="flex justify-center gap-4 mb-14 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-6 py-3 text-sm font-bold transition
              ${activeTab === tab.id
                ? "bg-[#D4AF37] text-black shadow-lg"
                : "bg-white/10 text-gray-200 hover:bg-white/20"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 中身 */}
      <div className="max-w-4xl mx-auto">
        {activeTab === "features" && <FeaturesTab />}
        {activeTab === "monetization" && <MonetizationTab />}
        {activeTab === "skill" && <SkillTab />}
      </div>

    </section>
  );
}

/* ===== 各タブ ===== */

function FeaturesTab() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 space-y-6">
      <h4 className="text-2xl font-bold text-[#F4E5A1]">
        LUXLABの特徴
      </h4>

      <p className="text-gray-200">
        LUXLABは、
        <span className="font-bold text-white">
          「労働だけ」「投資だけ」
        </span>
        に偏らない設計です。
      </p>

      <ul className="space-y-2 text-gray-300 text-sm">
        <li>・スキルを積み上げて自分の価値を上げる</li>
        <li>・仕組みで収益が残る形を作る</li>
        <li>・個人でも法人でも実行できる</li>
      </ul>

      <p className="text-gray-200">
        副業初心者でも
        <span className="font-bold text-white">
          再現性のある収益
        </span>
        を狙える理由です。
      </p>
    </div>
  );
}

function MonetizationTab() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 space-y-6">
      <h4 className="text-2xl font-bold text-[#F4E5A1]">
        収益化の仕組み
      </h4>

      <p className="text-gray-200">
        LUXLABでは、次のような
        <span className="font-bold text-white">
          現実的な収益モデル
        </span>
        を扱います。
      </p>

      <ul className="space-y-3 text-gray-300 text-sm">
        <li>
          ・ポケモンカード物販
          <br />
          <span className="text-xs text-gray-400">
            → 2ヶ月に1回 5,000円〜20,000円を狙う低リスクモデル
          </span>
        </li>
        <li>
          ・ECサイト共同運営
          <br />
          <span className="text-xs text-gray-400">
            → 出品・発送なし。チェック業務のみ
          </span>
        </li>
      </ul>

      <p className="text-gray-200">
        時間を切り売りしない
        <span className="font-bold text-white">
          「仕組み型収益」
        </span>
        が特徴です。
      </p>
    </div>
  );
}

function SkillTab() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 space-y-6">
      <h4 className="text-2xl font-bold text-[#F4E5A1]">
        スキル・仕組みの習得
      </h4>

      <p className="text-gray-200">
        SNSマーケティングとトーク力を身につけ、
        <span className="font-bold text-white">
          「仕事を取れる力」
        </span>
        を育てます。
      </p>

      <ul className="space-y-2 text-gray-300 text-sm">
        <li>・SNS集客の考え方</li>
        <li>・提案・クロージングの基礎</li>
        <li>・案件獲得につながる実践的スキル</li>
      </ul>

      <p className="text-gray-200">
        スキルがあるからこそ、
        <span className="font-bold text-white">
          収益の幅が広がる
        </span>
        のがLUXLABです。
      </p>
    </div>
  );
}

