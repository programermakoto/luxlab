import React from 'react'
import Fireflies from './animation/Fireflies'
import RenderModel from './RenderModel'
import Hero from './models/model'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">

            {/* モデル側 */}
            <div className="w-full md:w-1/2 h-1/2 md:h-screen relative">
                <RenderModel>
                    <Hero />
                </RenderModel>
            </div>

            {/* テキスト側 */}
            <div className="
                w-full md:w-1/2
                h-1/2 md:h-auto
                flex flex-col
                items-center justify-center
                text-center md:text-left
                px-4
            ">
                <Image
                    src="/images/luxlab.webp"
                    width={300}
                    height={100}
                    alt="LUXLAB"
                    className="w-40 sm:w-52 md:w-full pointer-events-none object-contain mb-4"
                />

                <h1 className="
                    text-white
                    text-xl sm:text-3xl md:text-5xl
                    font-bold
                    leading-relaxed
                    pointer-events-none
                ">
                    生徒に学ばせ、仕事を与える
                </h1>

                <small className="
                    block
                    mt-3
                    text-xs sm:text-sm
                    text-gray-300
                    pointer-events-none
                ">
                    Get students to learn and get jobs
                </small>
            </div>

            {/* 演出 */}
            <Fireflies />

            {/* オーバーレイ */}
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/40 via-white/10 to-black/50" />
        </header>
    )
}
