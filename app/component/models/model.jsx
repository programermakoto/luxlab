"use client"
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Hero(props) {
  const { nodes, materials } = useGLTF('/threeImage/tree_gn-transformed.glb')
  const groupRef = useRef()

  // 20秒で1周（360°）する回転アニメーション
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (Math.PI * 2 / 60) * delta
    }
  })

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      position={[0, -2, 0]}
      scale={[0.2, 0.2, 0.2]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TreeGen_ClusterB_0.geometry}
        material={materials.ClusterB}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TreeGen_VinesB_0.geometry}
        material={materials.VinesB}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TreeGen_ClusterB2_0.geometry}
        material={materials.ClusterB2}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TreeGen_BarkB_0.geometry}
        material={materials.BarkB}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TreeGen_PruneB_0.geometry}
        material={materials.PruneB}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TreeGen_CortexB_0.geometry}
        material={materials.CortexB}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/threeImage/tree_gn-transformed.glb')