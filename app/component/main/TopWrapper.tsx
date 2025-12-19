"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useInViewAnimation from "@/app/hooks/useInViewAnimation";

export default function TopWrapper() {
    const leftRef = useInViewAnimation();
    const rightRef = useInViewAnimation();

    return (
        <section className='py-40 container'>
            <article className='space-y-3.5'>


                <div className="mx-auto md:flex justify-around items-center flex-row-reverse">

                    <div>
                        {/* 画像 */}
                        <Image
                            src="/images/hero.webp"
                            width={300}
                            height={300}
                            alt="サービス紹介画像"
                            className="drop-shadow-2xl"
                        />
                        {/* CTA */}
                        <Link
                            href="https://lin.ee/7PqmGNb"
                            className="
      block rounded-full
      my-10 mx-auto text-center
      bg-gradient-to-br from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37] px-8 py-4 font-bold text-black
      shadow-[0_10px_30px_rgba(212,175,55,0.4)]
      transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] animate-ctaPulse
    "
                        >
                            LUXLAB公式LINE
                        </Link>
                    </div>

                    <div    ref={leftRef} className="max-w-xl  space-y-8 text-left animate-slideLeft">

                        <h1 className="text-3xl font-bold text-white">
                            LUXLABとは？
                        </h1>

                        <p className="text-xl font-bold text-[#F4E5A1] leading-relaxed">
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

                        {/* 箇条書き（視認性UP） */}
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

                        {/* 共感ブロック */}
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

                <div className=' mx-auto md:flex justify-around items-center '>

                    <div>
                        {/* 画像 */}
                        <Image src="/images/square.webp" width={300} height={100} alt='サービス紹介画像'></Image>
                        {/* CTA */}
                        <Link
                            href="https://lin.ee/7PqmGNb"
                            className="
      block rounded-full
      my-10 mx-auto text-center
      bg-gradient-to-br from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37] px-8 py-4 font-bold text-black
      shadow-[0_10px_30px_rgba(212,175,55,0.4)]
      transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] animate-ctaPulse
    "
                        >
                            LUXLAB公式LINE
                        </Link>
                    </div>

                    <div ref={rightRef} className='w-1/2 my-30 space-y-5 animate-slideRight'>
                        <h1 className=' font-bold text-3xl'>LUX LABの特徴</h1>
                        <h4 className=' font-bold text-2xl'>① スキル型 × 仕組み型を両立</h4>
                        <p>・SNSマーケ・トーク力 → 自分の価値を上げる<br></br>
                            ・物販・EC共同運営 → 時間を切り売りしない収益<br></br>
                            ・「労働だけ」「投資だけ」に偏らないのが最大の強み。</p>
                        <hr></hr>
                        <h4 className=' font-bold text-2xl'>② 初心者でも始めやすい設計</h4>
                        <p>

                            ・初期費用0円で始められるプランあり<br></br>

                            ・やることが明確（チェック業務・基礎運用）<br></br>

                            ・専門作業は提携事業者が担当<br></br>

                            ・副業にありがちな“何をすればいいかわからない”状態を排除。</p>
                        <hr></hr>
                        <h4 className=' font-bold text-2xl'>③ 個人・法人どちらにも対応</h4>
                        <p>・個人：リスクゼロで副収入を体験<br></br>
                            ・法人：安定したストック収益を構築可能<br></br>
                            ・将来の法人化・事業拡張のステップとしても使える。</p>
                    </div>
                </div>

            </article>
















            {/* ===== サービス一覧セクション ===== */}
            <article className="relative mt-20 py-24 overflow-hidden">


                {/* 背景画像 */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: "url(/images/model.webp)" }}
                />

                {/* オーバーレイ（薄め） */}
                <div className="absolute inset-0 bg-black/20" />

                {/* コンテンツ */}
                <div className="relative z-10 space-y-10 container mx-auto px-4">

                    <h3 className="text-center text-3xl font-bold text-white drop-shadow-lg">
                        LUX LABで取り組める3つの収益モデル
                    </h3>

                    <p className="text-center text-gray-200">
                        スキル × 物販 × 仕組みで、現実的な副収入を構築
                    </p>

                    <div className="grid gap-8 md:grid-cols-3">

                        {/* SNSマーケ */}
                        <div className="
        rounded-2xl
        border border-white/20
        bg-white/10
        backdrop-blur-lg
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        transition
        hover:-translate-y-1
      ">
                            <h4 className="mb-3 text-xl font-bold text-white">
                                🔸 SNSマーケティング & トーク力アップ研修
                            </h4>
                            <p className="text-sm leading-relaxed text-gray-100">
                                SNSを使った集客力・提案力・トークスキルを体系的に習得。
                                <br /><br />
                                スキルアップにより、
                                <span className="font-bold text-white"> 月収7桁を目指すことも可能</span>です。
                            </p>
                            <div className="mt-5 inline-block rounded-full bg-white/80 px-4 py-1 text-xs font-bold text-black">
                                スキル型収益
                            </div>
                        </div>

                        {/* ポケカ物販 */}
                        <div className="
        rounded-2xl
        border border-white/20
        bg-white/10
        backdrop-blur-lg
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        transition
        hover:-translate-y-1
      ">
                            <h4 className="mb-3 text-xl font-bold text-white">
                                🔸 ポケモンカード物販
                            </h4>
                            <p className="text-sm leading-relaxed text-gray-100">
                                海外需要拡大により市場価値が上昇中。
                                <br /><br />
                                <span className="font-bold text-white">
                                    2ヶ月に1回、5,000円〜20,000円
                                </span>
                                の副収入を狙えます。
                            </p>
                            <div className="mt-5 inline-block rounded-full bg-white/80 px-4 py-1 text-xs font-bold text-black">
                                低リスク物販
                            </div>
                        </div>

                        {/* EC共同運営 */}
                        <div className="
        rounded-2xl
        border border-[#D4AF37]/40
        bg-white/10
        backdrop-blur-lg
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        transition
        hover:-translate-y-1
      ">
                            <h4 className="mb-3 text-xl font-bold text-white">
                                🔸 ECサイト共同運営事業
                            </h4>
                            <p className="text-sm leading-relaxed text-gray-100">
                                出品・梱包・発送は全て提携事業者が対応。
                                <br /><br />
                                あなたは
                                <span className="font-bold text-white">
                                    「チェック業務のみ」
                                </span>
                                という仕組み型モデル。
                            </p>
                            <div className="mt-5 inline-block rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold text-black">
                                仕組み型収益
                            </div>
                        </div>

                    </div>
                </div>

            </article>

        </section>
    )
}
