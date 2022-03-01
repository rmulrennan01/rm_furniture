import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
//import { Environment, OrbitControls } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

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
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          
        </Suspense>
      </Canvas>
    </div>
  );
}
