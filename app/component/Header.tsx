import React from 'react'
import Fireflies from './animation/Fireflies'
import RenderModel from './RenderModel'
import Hero from './models/model'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative h-screen w-full overflow-hidden md:flex">

      {/* ===== モデル側 ===== */}
      <div className="relative w-full md:w-1/2 h-full">
        <RenderModel>
          <Hero />
        </RenderModel>

        {/* ===== SP用：モデル上にテキスト ===== */}
        <div
          className="
            absolute inset-0
            flex flex-col items-center justify-center
            text-center
            px-4
            md:hidden
            z-20
          "
        >
          <Image
            src="/images/luxlab.webp"
            width={300}
            height={100}
            alt="LUXLAB"
            className="w-44 mb-4 pointer-events-none"
          />

          <h1 className="text-white text-2xl font-bold leading-relaxed">
            お金と時間に縛られない人生を、現実にする
          </h1>

          <small className="mt-3 text-xs text-gray-300">
            Make a life free from the constraints of time and money a reality
          </small>
        </div>
      </div>

      {/* ===== PC用：右テキスト ===== */}
      <div
        className="
          hidden md:flex
          md:w-1/2
          flex-col
          items-center justify-center
          text-left
          px-8
        "
      >
        <Image
          src="/images/luxlab.webp"
          width={300}
          height={100}
          alt="LUXLAB"
          className="w-full max-w-sm mb-6 pointer-events-none"
        />

        <h1 className="text-white text-5xl font-bold leading-relaxed">
          お金と時間に縛られない人生を、現実にする
        </h1>

        <small className="mt-4 text-sm text-gray-300">
          Make a life free from the constraints of time and money a reality
        </small>
      </div>

      {/* 演出 */}
      <Fireflies />

      {/* オーバーレイ */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/40 via-white/10 to-black/50" />
    </header>
  )
}
