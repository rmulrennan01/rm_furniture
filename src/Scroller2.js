import React, { Suspense } from 'react';
import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useIntersect, Image, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { PerspectiveCamera } from 'three';
import { Camera } from 'three';



//const imageSources = ['/product_photos/untitled45png.png','/product_photos/untitled46png.png','/product_photos/untitled47png.png','/product_photos/untitled48.png','/product_photos/untitled38.png']
const imageSources = ['/product_photos/home_1.png', '/product_photos/home_2.png', '/product_photos/home_3.png', '/product_photos/home_4.png', '/product_photos/home_5.png', '/product_photos/home_6.png', '/product_photos/home_7.png']; 


//INDIVIDUAL IMAGE TILE
function Image_Tile(props){
    const inView = useRef(false); 
    const group = useRef(); 
    const data = useScroll(); 
    const ref = useIntersect((visible) => (inView.current=visible)); //useIntersect can check if object is in vew. 
    //const ref = useIntersect((visible) => console.log('object is visible', visible)); 
    //const ref = useRef(); 
//    const { height } = useThree((state) => state.viewport); 
    const { width: w, height: h } = useThree((state) => state.viewport);
    

    useFrame((state, delta) => {
        //ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, inView.current ? 0 : -h / 2 + 1, 4, delta)
       // ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, inView.current ? 0 : w/2, 4, delta)
        //ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 5, 4, delta);
        //ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, Math.max(0, data.delta * 50), 4, delta);
        //ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, inView.current ? 0 : 10, 2, delta) 
        //ref.current.rotation.z = THREE.MathUtils.damp(ref.current.rotation.y, inView.current ? 0 : 90, 4, delta) 
        //ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 1000), 4, delta); 
        group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 500), 10, delta);
        ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 5, 4, delta);
        //console.log(ref);
        //console.log(data); 
        //console.log(group);  
    })
    return(
        <group ref={group}> 
            <Image  ref={ref} {...props} /> 
            {console.log("viewport width at image level", w)}
        </group> 
    )
}



function Image_Trio({urls, spacing, ...props}){
    const { width } = useThree((state) => state.viewport)
    const adjFactor = width < 10 ? 1.5 / 3 : 1 / 3
    return (
      <group {...props}>
          {/*
        <Image_Tile position={[0,-width * adjFactor, -1]} scale={[width * adjFactor - m * 2, 5, 1]} url={urls[0]} />
        <Image_Tile position={[0, 0, 0]} scale={[width * adjFactor - m * 2, 5, 1]} url={urls[1]} />
        <Image_Tile position={[0,width * adjFactor, 1]} scale={[width * adjFactor - m * 2, 5, 1]} url={urls[2]} />
          */ }
            <Image_Tile position={[0,-width*spacing, -1]} scale={[width/5, width/5, 1]} url={urls[0]} />
            <Image_Tile position={[0, 0, 1]} scale={[width/5, width/5, 1]} url={urls[1]} />
            <Image_Tile position={[0,width*spacing, 0]} scale={[width/5, width/5, 1]} url={urls[2]} />
            {console.log("viewport width at group level", width)}

      </group> 
    )
}



function Image_Group({xOffset, yOffset, spacing, sources}){
    const { width: w, height: h } = useThree((state) => state.viewport)
  
    
    return(
        <> 
            <Image_Trio position={[w*xOffset, h*yOffset, 0]} urls={[sources[0], sources[1], sources[3]]} spacing={spacing}/> 
      


        </> 
    )
}



//INDIVIDUAL PHRASE TILE

//<Canvas orthographic camera={{ zoom: 50 }} gl={{ alpha: false, antialias: true, stencil: false, depth: false }} dpr={[1, 1.5]}> 

//dampening: higher is faster
//distance: scroll bar travel

function Scroller2() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{fov: 20, position: [0,0,5]}}> 
        <Suspense fallback={null}>
      
        <color attach="background" args={['#f0f0f0']} />

        <ScrollControls damping={2} pages={4} distance={4} >   
            <Scroll> 
                <Image_Group xOffset={0} yOffset={0} spacing={0.2} sources={imageSources}/> 
                <Image_Group xOffset={.35} yOffset={-0.15} spacing={0.2} sources={imageSources}/> 
                <Image_Group xOffset={-.35} yOffset={-0.15} spacing={0.2} sources={imageSources}/> 

              
            </Scroll> 
            <Scroll html sytle={{width:'100%'}}> 
                <h1> Modern</h1> 
                <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}> Sustainable </h1>
                <h1 style={{ position: 'absolute', top: '20vh', left: '10vw' }}> Clean</h1>
                <h1 style={{ position: 'absolute', top: '10vh', left: '10vw' }}> Minimalist </h1>
                <h1 style={{ position: 'absolute', top: '5vh', left: '5vw' }}> Natural Tones </h1>
            </Scroll> 
 

        </ScrollControls>
        </Suspense>
    </Canvas>
  )
}

export default Scroller2