"use client";

import Link from "next/link";
import React from "react";
import useInViewAnimation from "@/app/hooks/useInViewAnimation";

export default function CenterWrapper() {
  const plansRef = useInViewAnimation();
  const bonusRef = useInViewAnimation();

  return (
    <section className="py-24">
      <div className="space-y-10">

        {/* ===== タイトル ===== */}
        <h3 className="text-center text-3xl font-bold">
          LUX LAB 各種プラン
        </h3>
        <p className="text-center text-gray-500">
          目的・ステージに合わせて選べる3つのプラン
        </p>

        {/* ===== プラン ===== */}
        <div
          ref={plansRef}
          className="grid gap-8 md:grid-cols-3 animate-fadeUp"
        >
          {/* BASIC */}
          <div className="rounded-2xl border p-8 shadow-sm">
            <h4 className="text-xl font-bold mb-1">⭐️ LAB BASIC</h4>
            <p className="mb-4 font-bold text-lg">月額 10,000円（税込）</p>

            <ul className="space-y-2 text-sm">
              <li>🔸 SNSマーケティング指導</li>
              <li>🔸 ポケカ物販</li>
              <li>🔸 ECサイト共同運営事業</li>
              <li>🔸 その他優良案件・情報共有</li>
            </ul>

            <div className="mt-6 inline-block rounded-full bg-gray-800 px-4 py-1 text-xs font-bold text-white">
              初心者向け
            </div>
          </div>

          {/* PRO */}
          <div className="rounded-2xl border border-[#D4AF37] p-8 shadow-lg scale-105">
            <h4 className="text-xl font-bold mb-1">⭐️ LAB PRO</h4>
            <p className="mb-4 font-bold text-lg">月額 20,000円（税込）</p>

            <ul className="space-y-2 text-sm">
              <li>🔸 SNSマーケティング習得</li>
              <li>🔥 トーク力アップ習得</li>
              <li className="ml-4 text-xs">・月1回マンツーマンロープレ</li>
              <li className="ml-4 text-xs">・専属クローザー</li>
              <li className="ml-4 text-xs">・トークスクリプト共有</li>
              <li>🔸 ポケカ物販</li>
              <li>🔸 ECサイト共同運営事業</li>
              <li>🔸 その他優良案件・情報共有</li>
              <li>🔥 代表との個別面談（月1回）</li>
            </ul>

            <div className="mt-6 inline-block rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold text-black">
              一番人気
            </div>
          </div>

          {/* MASTER */}
          <div className="rounded-2xl border p-8 shadow-sm">
            <h4 className="text-xl font-bold mb-1">⭐️ LAB MASTER</h4>
            <p className="mb-4 font-bold text-lg">月額 50,000円（税込）</p>

            <ul className="space-y-2 text-sm">
              <li>🔸 SNSマーケティング習得</li>
              <li>🔸 トーク力アップ習得</li>
              <li className="ml-4 text-xs">・月1回マンツーマンロープレ</li>
              <li className="ml-4 text-xs">・専属クローザー</li>
              <li className="ml-4 text-xs">・トークスクリプト共有</li>
              <li>🔸 ポケカ物販</li>
              <li>🔸 ECサイト共同運営事業</li>
              <li>🔸 その他優良案件・情報共有</li>
              <li>🔸 代表との個別面談（月1回）</li>
              <li className="font-bold">🔥 独立・起業支援</li>
              <li className="ml-4 text-xs">・法人設立〜事業が回るまで徹底支援</li>
            </ul>

            <div className="mt-6 inline-block rounded-full bg-black px-4 py-1 text-xs font-bold text-white">
              本気向け
            </div>
          </div>
        </div>

        {/* ===== 追加特典 ===== */}
        <div
          ref={bonusRef}
          className="
            relative
            w-2/3 mx-auto
            rounded-2xl
            overflow-hidden
            border
            animate-fadeUp
          "
          style={{
            backgroundImage: "url('/images/party.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative p-8 space-y-4 text-white">
            <h4 className="text-xl font-bold text-center">
              LAB PRO / MASTER 限定特典
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                🔥 LAB PRO・LAB MASTER会員限定で半年に1回リアルイベント開催
              </li>
              <li>
                豪華なお食事を楽しみながら、同志と交流🍀
              </li>
            </ul>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <Link
          href="https://lin.ee/7PqmGNb"
          className="
            block mx-auto w-[260px] text-center
            rounded-full
            bg-gradient-to-br from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37]
            px-6 py-4 font-bold text-black
            shadow-[0_10px_30px_rgba(212,175,55,0.4)]
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)]
          "
        >
          LUX LABに問い合わせ
        </Link>

      </div>
    </section>
  );
}
