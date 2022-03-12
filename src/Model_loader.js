import React from 'react'; 
import { useEffect } from 'react';
//import { useLoader } from 'react-three-fiber';
import { extend, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";



//import { Environment, OrbitControls } from "@react-three/drei";

//import {OrbitControls} from "@react-three/fiber"
import { Suspense } from "react";
import {Canvas, useThree} from '@react-three/fiber'; 

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/dresser3.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1.0}  />
      
    </>
  );
};

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 1;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
}; 

export default function Model_loader() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <CameraController /> 
        <ambientLight /> 
       
      </Suspense>
        
    </Canvas>
    
  );
}


