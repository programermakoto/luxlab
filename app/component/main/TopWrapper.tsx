"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import useInViewAnimation from "@/app/hooks/useInViewAnimation";

export default function TopWrapper() {
  const leftRef = useInViewAnimation();
  const rightRef = useInViewAnimation();

  return (
    <section className="py-40 container px-4 sm:px-0">
      <article className="space-y-24">

        {/* ====== BLOCK 1 ====== */}
        <div className="mx-auto flex flex-col gap-16 md:flex-row-reverse md:justify-around md:items-center">

          <div className="flex flex-col items-center">
            <Image
              src="/images/hero.webp"
              width={300}
              height={300}
              alt="サービス紹介画像"
              className="drop-shadow-2xl w-48 sm:w-[300px]"
            />

            <Link
              href="https://lin.ee/7PqmGNb"
              className="
                block rounded-full
                my-10 text-center
                bg-gradient-to-br from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37]
                px-8 py-4 font-bold text-black
                shadow-[0_10px_30px_rgba(212,175,55,0.4)]
                transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)]
                animate-ctaPulse
              "
            >
              LUXLAB公式LINE
            </Link>
          </div>

          <div
            ref={leftRef}
            className="
              max-w-xl
              space-y-6
              text-center
              md:text-left
              animate-slideLeft
            "
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              LUXLABとは？
            </h1>

            <p className="text-lg md:text-xl font-bold text-[#F4E5A1] leading-relaxed">
              副業で月5万〜10万円の<br />
              「現実的＝確信を持てる収入の柱」を作るラボです
            </p>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              LUXLABは、単発ノウハウや再現性の低い副業ではなく、<br />
              <span className="font-semibold text-white">
                「実際にお金が生まれやすい領域」
              </span>
              だけを厳選。
            </p>

            <ul className="space-y-2 text-gray-200 text-sm md:text-base">
              <li>・スキルが積み上がる</li>
              <li>・仕組みで収益が残る</li>
              <li>・個人でも法人でも実行できる</li>
            </ul>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              この3つを同時に満たす形で設計しているため、<br />
              副業初心者でも
              <span className="font-bold text-white">
                「再現性のある収益」
              </span>
              を狙えます。
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-white font-semibold">
                副業で稼ぎたいけど、何を信じていいかわからない
              </p>
              <p className="mt-2 text-gray-300">
                そんな人のための場所が、LUXLABです。
              </p>
            </div>
          </div>
        </div>

        {/* ====== BLOCK 2 ====== */}
        <div className="mx-auto my-20  flex flex-col gap-16 md:flex-row md:justify-around md:items-center">



          {/* <div
            ref={rightRef}
            className="
              w-full
              md:w-1/2
              space-y-5
              animate-slideRight
            "
          >
            <h1 className="font-bold text-2xl md:text-3xl">
              LUX LABの特徴
            </h1>

            <h4 className="font-bold text-xl md:text-2xl">
              ① スキル型 × 仕組み型を両立
            </h4>

            <p className="text-sm md:text-base">
              ・SNSマーケ・トーク力 → 自分の価値を上げる<br />
              ・物販・EC共同運営 → 時間を切り売りしない収益<br />
              ・「労働だけ」「投資だけ」に偏らないのが最大の強み。
            </p>

            <hr />

            <h4 className="font-bold text-xl md:text-2xl">
              ② 初心者でも始めやすい設計
            </h4>

            <p className="text-sm md:text-base">
              ・初期費用0円で始められるプランあり<br />
              ・やることが明確（チェック業務・基礎運用）<br />
              ・専門作業は提携事業者が担当<br />
              ・“何をすればいいかわからない”を排除
            </p>

            <hr />

            <h4 className="font-bold text-xl md:text-2xl">
              ③ 個人・法人どちらにも対応
            </h4>

            <p className="text-sm md:text-base">
              ・個人：リスクゼロで副収入を体験<br />
              ・法人：安定したストック収益を構築可能<br />
              ・将来の法人化・事業拡張にも対応
            </p>
          </div> */}
          <div
            ref={rightRef}
            className="
    w-full
    flex
    flex-col
    md:flex-row
    gap-12
    items-center
    animate-slideRight
  "
          >
            {/* ===== 左：メッセージ ===== */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2
                className="
        text-3xl
        md:text-4xl
        font-bold
        leading-snug
        text-center
        
      "
              >
                努力しても、<br />
                報われない人が<br />
                多すぎる時代
              </h2>

              <p className=" text-center mx-auto text-sm md:text-base text-gray-400 leading-relaxed">
                真面目に働いて、学んで、行動しても
                収入も将来も不安が消えない。
                そんな声が、あまりにも増えています。
              </p>
            </div>

            {/* ===== 右：課題カード ===== */}
            <div
              className="
text-center
      w-full
      grid
      grid-cols-1
      md:grid-cols-2
      gap-5
    "
            >
              {/* 01 */}
              <div className="rounded-xl w-full border border-white/10 bg-white/5 mx-auto p-5 backdrop-blur">
                <p className="text-xs font-bold text-[#F4E5A1]">01</p>
                <h4 className="mt-2 font-bold text-lg">
                  将来への経済的不安
                </h4>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  本業の収入だけでは将来が不安。<br />
                  インフレ、増税、老後資金…。<br />
                  尽きないお金の悩み。
                </p>
              </div>

              {/* 02 */}
              <div className="rounded-xl w-full border border-white/10 bg-white/5 p-5 mx-auto backdrop-blur">
                <p className="text-xs font-bold text-[#F4E5A1]">02</p>
                <h4 className="mt-2 font-bold text-lg">
                  繰り返す副業の失敗
                </h4>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  独学で挑戦しては挫折。<br />
                  「簡単に稼げる」甘い言葉に乗<br />
                  り、時間と資産を失った過去。
                </p>
              </div>

              {/* 03 */}
              <div className="rounded-xl w-full border border-white/10 bg-white/5 p-5 mx-auto backdrop-blur">
                <p className="text-xs font-bold text-[#F4E5A1]">03</p>
                <h4 className="mt-2 font-bold text-lg">
                  正しい環境がない
                </h4>
                <p className=" mt-2 text-sm text-gray-300  leading-relaxed">
                  何が正しい情報なのか分からな<br />
                  い。成功へのロードマップも、<br />
                  導いてくれるメンターもいない。</p>
              </div>

              {/* 04 */}
              <div className="rounded-xl w-full border border-[#D4AF37]/30 bg-[#D4AF37]/1 mx-auto p-5 backdrop-blur">
                <p className="text-xs font-bold text-[#F4E5A1]">04</p>
                <h4 className="mt-2 font-bold text-lg">
                  誰にも相談できない
                </h4>
                <p className="mt-2 text-sm text-gray-200 leading-relaxed">
                  借金やお金の悩みは、家族や<br />
                  友人に言い出せない。孤独の中<br />
                  で抱え込んでしまう。
                </p>
              </div>
            </div>
          </div>


        </div>

      </article>
    </section>
  );
}
