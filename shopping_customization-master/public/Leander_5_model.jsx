/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 leander_5_model.glb 
*/

import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useControls } from "leva";

import { degToRad } from "three/src/math/MathUtils.js";
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';


export default function Model(props) {



  const [rotation, setRotation] = useState([0, 0, 0]);
  const [image_size, setScale] = useState([0.50, 0.50, 0.10]);


  const { nodes, materials } = useGLTF('/leander_5_model.glb')

  const meshRef = useRef();


let side=props.image_side


console.log(side)

{/*   useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  }); */}


  useControls({
 
    image_size: {
        min: 0.1,
        max: 2,
        value: 0,
        step: 0.01,
        onChange: (value) => {
            setScale(() => [value, value, 1.5]);
        },
    },
});

useControls({
   
    angle2: {
        min: degToRad(0),
        max: degToRad(360),
        value: 0,
        step: 0.01,
        onChange: (value) => {
            const x = Math.sin(value);
            const z = Math.cos(value);
            const rot = Math.atan2(x, z);
            setRotation(() => [0, 0, rot]);
        },
    },
});



  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef}>
      <mesh geometry={nodes.T_Shirt_Front.geometry} material={materials.Front_Shader_1} >
        
      {
  props.front_image.map((imageUrl, index) => {



    console.log(`props.position ${props.position1[index]}`)

    const decal = props.position1 ? props.position1[index] : { x: 0, y: 0, z: 0.15 };

    const texture = useTexture(imageUrl);
   
    const { x, y, z } = decal;
    console.log(`x is ${x}`)
    console.log(`y is ${x}`)

    const newPosition = [x, y, z];

    console.log(index);
    console.log(`the decal is ${JSON.stringify(props.position1[index])}`);
 console.log(newPosition); 

    return (
      <Decal key={index} position={newPosition} rotation={rotation} scale={image_size} map={texture} />
    );
  })
}
        
        
        </mesh>
      <mesh geometry={nodes.T_Shirt_Back.geometry} material={materials.Back_Shader_2} >


      {
  props.back_image.map((imageUrl, index) => {



    console.log(`props.position ${props.position1[index]}`)

    const decal = props.position1 ? props.position1[index] : { x: 0, y: 0, z: 0.15 };

    const texture = useTexture(imageUrl);
   
    const { x, y, z } = decal;
    console.log(`x is ${x}`)
    console.log(`y is ${x}`)

    const newPosition = [x, y, z];

    console.log(index);
    console.log(`the decal is ${JSON.stringify(props.position1[index])}`);
 console.log(newPosition); 

    return (
      <Decal key={index} position={[0, 0, 0]} rotation={rotation} scale={image_size} map={texture} />
    );
  })
}
      

        </mesh>
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
      <mesh geometry={nodes.T_Shirt_Sleeve_Left.geometry} material={materials.Sleeve_L_Material_2} >

      </mesh>
 
 


      <mesh geometry={nodes.T_Shirt_Sleeve_Right.geometry} material={materials.Sleeve_R_Material2} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/leander_5_model.glb')
