/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 demo_full_decal.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/demo_full_decal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.T_Shirt_Front.geometry} material={materials.Front_Shader_1} />
      <mesh geometry={nodes.T_Shirt_Back.geometry} material={materials.Back_Shader_2} />
      <mesh geometry={nodes.T_Shirt_Decal_Front1.geometry} material={materials.Decal_shader} position={[0, 0, 0.001]} />
      <mesh geometry={nodes.polySurface1.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface10.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface11.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface12.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface13.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface14.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface15.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface16.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface17.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface18.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface19.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface2.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface20.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface21.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface22.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface23.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface24.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface25.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface26.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface27.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface3.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface4.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface6.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface7.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.polySurface9.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.T_Shirt_Sleeve_Left.geometry} material={materials.Left_Sleeve_Shader_1} />
      <mesh geometry={nodes.T_Shirt_Sleeve_Right.geometry} material={materials.Right_Sleeve_Shader_1} />
    </group>
  )
}

useGLTF.preload('/demo_full_decal.glb')
