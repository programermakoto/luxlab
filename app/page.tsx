import React from 'react'
import TopWrapper from './component/main/TopWrapper'
import CenterWrapper from './component/main/CenterWrapper'

export default function Top() {
  return (
    <main className='min-h-screen container mx-auto'>
      <TopWrapper/>
      <CenterWrapper/>
    </main>
  )
}
