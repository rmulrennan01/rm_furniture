import React, { Suspense } from 'react';
import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei';
import { isVisible } from '@testing-library/user-event/dist/utils';



const imageSources = ['/product_photos/untitled45png.png','/product_photos/untitled46png.png','/product_photos/untitled47png.png','/product_photos/untitled48.png','/product_photos/untitled38.png']

//INDIVIDUAL IMAGE TILE
function Image_Tile(props){
    const inView = useRef(false); 

    //const ref = useIntersect((isVisible) => (inView.current=isVisible)); 
    const ref = useIntersect((visible) => console.log('object is visible', visible)); 

    useFrame((state,delta) => {
        

    })

    return(
        <Image  ref={ref} scale={props.scale} url={props.url} /> 
    )
}


//COLLECTION OF IMAGE TILES
function Image_Group(props){
    return(
        <Scroll> 
            <Image_Tile url={'/product_photos/untitled45png.png'} scale={[4,4,1]} /> 

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
            <Scroll html> 
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