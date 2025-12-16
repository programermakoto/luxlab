
import React from 'react'
import Fireflies from './animation/Fireflies'
import RenderModel from './RenderModel'
import Hero from './models/model'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="relative h-screen w-full overflow-hidden flex">

            <div className="w-1/2 h-screen relative">
                <RenderModel>
                    <Hero />
                </RenderModel>
            </div>
            <div className="w-1/2  md:flex-col flex items-center justify-center">
                <Image src="/images/luxlab.webp" width={300} height={100} alt='LUXLAB' className='w-full pointer-events-none object-cover block' />
                <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold px-6 py-3 pointer-events-none">
                    生徒に学ばせ、仕事を与える
                </h1>
                <small className='block text-center my-3 pointer-events-none'>Get students to learn and get jobs</small>
                
            </div>
            <Fireflies />

            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/40 via-white/10 to-black/50" />

        </header>
    )
}
