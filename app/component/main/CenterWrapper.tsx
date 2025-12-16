import Link from 'next/link'
import React from 'react'

export default function CenterWrapper() {
    return (
        <section >
            {/* ===== 報酬プランセクション ===== */}
            <div className=" space-y-10">

                <h3 className="text-center text-3xl font-bold">
                    報酬プランについて
                </h3>
                <p className="text-center">
                    ライフスタイル・目標に合わせて選べる2つのプラン
                </p>

                <div className="grid gap-8 md:grid-cols-2">

                    {/* 個人プラン */}
                    <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <h4 className="mb-4 text-xl font-bold">
                            🔸 個人として実施する場合
                        </h4>

                        <ul className="space-y-3 text-sm ">
                            <li>・初期費用：<span className="font-bold ">無料</span></li>
                            <li>・月額報酬：<span className="font-bold ">5,000円</span></li>
                            <li>・期間：<span className="font-bold ">約半年で終了する可能性あり</span></li>
                        </ul>

                        <div className="mt-6 inline-block rounded-full bg-gray-800 px-4 py-1 text-xs font-bold text-white">
                            まずはお試し
                        </div>
                    </div>

                    {/* 法人プラン */}
                    <div className="rounded-2xl border border-[#D4AF37] bg-gradient-to-br  p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <h4 className="mb-4 text-xl font-bold">
                            🔸 法人を立てて実施する場合
                        </h4>

                        <ul className="space-y-3 text-sm ">
                            <li>
                                ・初期費用：
                                <span className="font-bold "> 登記代 71,000円</span>
                            </li>
                            <li>
                                ・月額報酬：
                                <span className="font-bold "> 30,000円〜50,000円</span>
                                <span className="text-xs">（売上により変動）</span>
                            </li>
                            <li>
                                ・継続期間：
                                <span className="font-bold "> 4年以上継続している方も在籍</span>
                            </li>
                        </ul>

                        <div className="mt-6 inline-block rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold ">
                            おすすめ
                        </div>

                    </div>


                </div>

            </div>
            <div>
                <Link href="https://lin.ee/7PqmGNb" className="
        block
        rounded-full
        bg-gradient-to-br from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37] px-6 py-4 font-bold text-black
        shadow-[0_10px_30px_rgba(212,175,55,0.4)]
        transition-all duration-300 ease-out
        w-[20%]
        my-5
        text-center
        mx-auto
        hover:scale-105
        hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)]
        animate-ctaPulse
      ">LUXLABに問い合わせ</Link>
            </div>

            {/* ===== /報酬プランセクション ===== */}

        </section>
    )
}
