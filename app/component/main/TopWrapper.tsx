import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopWrapper() {
    return (
        <section className='py-40 container'>
            <article className='space-y-3.5'>
                {/* ===== サービス一覧セクション ===== */}
                <div className="mt-20 space-y-10">

                    <h3 className="text-center text-3xl font-bold">
                        LUX LABで取り組める3つの収益モデル
                    </h3>
                    <p className="text-center text-gray-500">
                        スキル × 物販 × 仕組みで、現実的な副収入を構築
                    </p>

                    <div className="grid gap-8 md:grid-cols-3">

                        {/* SNSマーケ & トーク */}
                        <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <h4 className="text-xl font-bold mb-3">
                                🔸 SNSマーケティング & トーク力アップ研修
                            </h4>
                            <p className="text-sm  leading-relaxed">
                                SNSを使った集客力・提案力・トークスキルを体系的に習得。
                                <br /><br />
                                スキルアップにより、さまざまな仕事や案件を扱えるようになり、
                                <span className="font-bold text-black">月収7桁を目指すことも可能</span>です。
                            </p>
                            <div className="mt-5 inline-block rounded-full bg-black px-4 py-1 text-xs font-bold text-white">
                                スキル型収益
                            </div>
                        </div>

                        {/* ポケモンカード物販 */}
                        <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <h4 className="text-xl font-bold mb-3">
                                🔸 ポケモンカード物販
                            </h4>
                            <p className="text-sm  leading-relaxed">
                                来年30周年を迎えるポケモンカードは、
                                海外需要の拡大により市場価値が上昇中。
                                <br /><br />
                                <span className="font-bold text-black">
                                    2ヶ月に1回、5,000円〜20,000円程度
                                </span>
                                の副収入を狙えるモデルです。
                            </p>
                            <div className="mt-5 inline-block rounded-full bg-gray-800 px-4 py-1 text-xs font-bold text-white">
                                低リスク物販
                            </div>
                        </div>

                        {/* EC共同運営 */}
                        <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <h4 className="text-xl font-bold mb-3">
                                🔸 ECサイト共同運営事業
                            </h4>
                            <p className="text-sm  leading-relaxed">
                                物販業者様と<strong>業務委託契約</strong>を結び、
                                EC物販を共同で運営。
                                <br /><br />
                                出品・梱包・発送は全て提携事業者が担当。
                                あなたの作業は
                                <span className="font-bold text-black">
                                    「偽物・規約違反商品のチェックのみ」
                                </span>
                                というシンプル設計です。
                            </p>
                            <div className="mt-5 inline-block rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold text-black">
                                仕組み型収益
                            </div>
                        </div>

                    </div>
                </div>
                {/* ===== /サービス一覧セクション ===== */}


                <div className="mt-20 space-y-10">
                    <h2 className='text-center font-bold text-3xl'>副業で月収5万円〜10万円の収入の柱を💰</h2>
                    <p className='text-center'>仕事を貰えるってどういうこと?</p>
                </div>




                <div className=' mx-auto md:flex justify-around items-center flex-row-reverse'>
                    <Image src="/images/hero.webp" width={300} height={100} alt='サービス紹介画像'></Image>
                    <div className='w-1/2 my-30 space-y-5'>
                        <h1 className=' font-bold text-3xl'>LUXLABとは？</h1>
                        <p>「副業で月5万〜10万円の現実的な収入の柱を作り、
                            スキル・実績・仕組みの3点を同時に積み上げる実践型ラボ」です。
                            単発ノウハウや再現性の低い副業ではなく、
                            “収益化しやすい領域だけ”を厳選し、
                            個人・法人どちらでも参加できる形で設計しています。</p>
                        <Link href="https://lin.ee/7PqmGNb" className="
        inline-block
        rounded-full
        bg-gradient-to-br from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37] px-6 py-4 font-bold text-black
        shadow-[0_10px_30px_rgba(212,175,55,0.4)]
        transition-all duration-300 ease-out
        hover:scale-105
        hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)]
        animate-ctaPulse
      ">LUXLABに問い合わせ</Link>
                    </div>
                </div>
                <div className=' mx-auto md:flex justify-around items-center '>
                    <Image src="/images/square.webp" width={300} height={100} alt='サービス紹介画像'></Image>
                    <div className='w-1/2 my-30 space-y-5'>
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


                        <Link href="https://lin.ee/7PqmGNb" className="
        inline-block
        rounded-full
        bg-gradient-to-br from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37] px-6 py-4 font-bold text-black
        shadow-[0_10px_30px_rgba(212,175,55,0.4)]
        transition-all duration-300 ease-out
        hover:scale-105
        hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)]
        animate-ctaPulse
      ">LUXLABに問い合わせ</Link>




                    </div>
                </div>
            </article>
        </section>
    )
}
