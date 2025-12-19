import React from 'react'
import TopWrapper from './component/main/TopWrapper'
import CenterWrapper from './component/main/CenterWrapper'
import ServiceTabs from './component/main/Service'
import Message from './component/main/Message'
import Hello from './component/main/Hello'
import Fireflies from './component/animation/Fireflies'

export default function Top() {
  return (
    <main className='min-h-screen container mx-auto'>

      <Hello/>

      <Message/>


      <TopWrapper/>
     
      <ServiceTabs/>
 
      <CenterWrapper/>
    </main>
  )
}
