import React from 'react'
//import { useLoader } from 'react-three-fiber';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Suspense } from "react";
import {Canvas} from '@react-three/fiber'; 


const Model = () => {
  const gltf = useLoader(GLTFLoader, "./dresser.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
      
    </>
  );
};

export default function App() {
  return (
      <Canvas>
        <Suspense fallback={null}>
          {Model()}
          
          
         
        </Suspense>
        
      </Canvas>
    
  );
}