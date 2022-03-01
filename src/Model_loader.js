import React from 'react'
//import { useLoader } from 'react-three-fiber';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "@react-three";
import { Suspense } from "react";
import {Canvas} from '@react-three/fiber'; 

function Model_loader() {

    /*
    const model = () => {
        const gltf = useLoader(GLTFLoader, '/models/dresser.gltf')
        return (
          <Suspense fallback={null}>
            <primitive object={gltf.scene} />
          </Suspense>
        )
    }
    */
    const model = () => {
        const gltf = useLoader(GLTFLoader, '/models/dresser.gltf')
        return (
          <Suspense fallback={null}>
            <primitive object={gltf.scene} scale={1.0} />
          </Suspense>
        );
      };
      


      /* 
                const MultiplePlateScene = ({ HDRTexture }) => {
            const gltf = useLoader(GLTFLoader, '/PlateTest.glb', loader => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('/draco/gltf/');
            loader.setDRACOLoader(dracoLoader);
            });

            
            mapEnv(gltf, HDRTexture);

            gltf.__$[2].material.envMap = null;
            gltf.__$[2].material.needsUpdate = false;
            gltf.__$[2].material.alphaTest = 0.001;

            const dispatch = useDispatch();
            dispatch({ type: 'LOADED', objects: ['PRODUCT_1', 'PRODUCT_2'] });

            return (
            <>
            <Object objKey="PRODUCT_1" meshes={[gltf.__$[1], gltf.__$[2]]} />
            <Object objKey="PRODUCT_2" meshes={[gltf.__$[1], gltf.__$[2]]} />
            </>
            );
            }
            */ 



    return (
        <Canvas>
            
                {model()}
                <OrbitControls />
   
            
        </Canvas>
    );
}

export default Model_loader