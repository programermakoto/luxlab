import React from "react"
import Fireflies from "../animation/Fireflies"

export default function Message() {
  return (

    <section className="container py-40 text-center ">
      <Fireflies />
      {/* 上部メッセージ */}
      <p className="mb-6 text-xs tracking-widest text-gray-400">
        WHAT YOU WILL LEARN
      </p>

      <h2 className="mb-12 text-3xl font-bold leading-relaxed text-white md:text-4xl">
        これからあなたには、
      </h2>

      {/* ステップ表示 */}
      <div className="mb-14 flex flex-col items-center gap-4 text-sm font-semibold md:flex-row md:justify-center md:text-base">
        <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white backdrop-blur">
          LUXLABの全体像
        </span>

        <span className="hidden text-gray-500 md:inline">→</span>

        <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white backdrop-blur">
          強み
        </span>

        <span className="hidden text-gray-500 md:inline">→</span>

        <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white backdrop-blur">
          収益化の仕組み
        </span>

        <span className="hidden text-gray-500 md:inline">→</span>

        <span className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-6 py-2 font-bold text-[#F4E5A1]">
          プラン内容
        </span>
      </div>

      {/* クロージング文 */}
      <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-300">
        最後まで読めば、<br />
        <span className="font-bold text-[#F4E5A1]">
          「自分が参加すべきかどうか」
        </span>
        <br />
        がはっきり判断できるはずです。
      </p>
    </section>
  )
}
