import React, { Suspense } from 'react';
import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei';
import { isVisible } from '@testing-library/user-event/dist/utils';



const imageSources = ['/product_photos/untitled45png.png','/product_photos/untitled46png.png','/product_photos/untitled47png.png','/product_photos/untitled48.png','/product_photos/untitled38.png']

//INDIVIDUAL IMAGE TILE
function Image_Tile({url, scale, ...props}){
    const inView = useRef(false); 

    const ref = useIntersect((visible) => (inView.current=visible)); //useIntersect can check if object is in vew. 
    //const ref = useIntersect((visible) => console.log('object is visible', visible)); 

    const { height } = useThree((state) => state.viewport); 

    useFrame((state,delta) => {
        ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, inView.current ? 0 : -height / 2 + 1, 4, delta)
        ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 1.5, 4, delta)
        

    })

    return(
        <group {...props}> 
        <Image  ref={ref} scale={scale} url={url} /> 
        </group> 
    )
}


//COLLECTION OF IMAGE TILES
function Image_Group(){
    const { width: w, height: h } = useThree((state) => state.viewport)

    return(
        <Scroll> 
            <Image_Tile url={imageSources[0]} scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} /> 
           
            <Image_Tile url={imageSources[1]} scale={[w / 3, w / 3, 1]} position={[w / 30, -h, 0]} /> 
            <Image_Tile url={imageSources[2]} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 1, 0]} /> 
            <Image_Tile url={imageSources[3]} scale={[w / 3, w / 3, 1]} position={[w / 4, -h * 1.2, 0]} /> 
        </Scroll> 
    )

}







function Scroller2() {
  return (
    <Canvas orthographic camera={{ zoom: 50 }} gl={{ alpha: false, antialias: true, stencil: false, depth: false }} dpr={[1, 1.5]}> 
        <Suspense fallback={null}>
        <color attach="background" args={['#f0f0f0']} />

        <ScrollControls damping={4} pages={5}> 
            <Image_Group/> 
            <Scroll html sytle={{width:'100%'}}> 
                <h1> Modern</h1> 
                <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}> Sustainable </h1>
                <h1 style={{ position: 'absolute', top: '20vh', left: '10vw' }}> Clean</h1>
            </Scroll> 
 

        </ScrollControls>
        </Suspense>
    </Canvas>
  )
}

export default Scroller2