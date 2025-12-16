"use client";
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const RenderModel = ({children}) => {
  return (
  <Canvas 
    className='w-full h-screen absolute top-0 left-0 -z-10'
    camera={{ position: [0, 1.5, 6], fov: 50 }}
  >
    <ambientLight intensity={0.9} />
    <directionalLight position={[5, 8, 5]} intensity={1.6} />
    <directionalLight position={[-5, 6, -5]} intensity={0.8} />
    <Suspense fallback={null}>
        {children}
    </Suspense>
    <Environment preset='dawn' />
  </Canvas>
  )
}

export default RenderModel