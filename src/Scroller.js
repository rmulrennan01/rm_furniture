import React from 'react'
import {useRef, useState, Suspense} from 'react'; 
import * as THREE from 'three'
import {Canvas, useLoader,useFrame} from '@react-three/fiber'; 

import {ScrollControls, Scroll } from '@react-three/drei'

const imageSources = ['/product_photos/untitled45png.png','/product_photos/untitled46png.png','/product_photos/untitled47png.png','/product_photos/untitled48.png','/product_photos/untitled38.png']



function buildPic(item){


    return(
        <Image key={item} image={item} /> 
    )


}


function Image(props) {
    const texture = useLoader(THREE.TextureLoader, props.img_src)
    return (
      <mesh>
        <planeBufferGeometry attach="geometry" args={[4, 5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    )
  }


function Scroller() {


    return (
        <Canvas colorManagement>
            <Suspense fallback={null}>
                <Image img_src={imageSources[0]}/>
            </Suspense>
        </Canvas>

    )      
    
   
 
}

export default Scroller