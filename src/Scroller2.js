import React, { Suspense } from 'react';
import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame, useThree, Vector3, Box3} from '@react-three/fiber';
import { useIntersect, Image, ScrollControls, Scroll, useScroll, Line, Html } from '@react-three/drei';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { PerspectiveCamera } from 'three';
import { Camera } from 'three';
import { ContactsOutlined, GroupOutlined } from '@material-ui/icons';
import "./Scroller.css";
import { extend, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const imageSources = ['/product_photos/home_1.png', '/product_photos/home_2.png', '/product_photos/home_3.png', '/product_photos/home_4.png', '/product_photos/home_5.png', '/product_photos/home_6.png', '/product_photos/home_7.png']; 



/*
    url = image to be placed in the group
    x_position_ratio = 0 - 1 ratio value representing x position on scroll page
    y_position_ratio = 0 - 1 ratio value representing x position on scroll page
    page = identifies which page the image will go
    scale = default is 1, otherwise impacts size of image 
    zoomFactor = zoom when scrolling; negative will zoom out; positive will zooom in
    x_movement = positive float that impacts how the image moves when scrolling; negative results in left movement; positive results in right movement
    
    fixed_range = float between 0 & 1 that indicates cutoff point for where the image will no scroll out of view.


*/

function FixedImageSection({url, x_position_ratio, y_position_ratio, z_index, page, x_scale, y_scale, zoomFactor, x_movement,  fixed_range_start, fixed_range_end}){
    const ref = useRef(); 
    //const group_ref = useRef();
    const scroll_data = useScroll(); 
    const { width: w, height: h } = useThree((state) => state.viewport);
    const img_height = x_scale * w; 
    const img_width = y_scale * w; 
    const pos = [-1+x_position_ratio, -1+y_position_ratio + (page-1), z_index ]

    useFrame((state, delta) =>{
  
        const pictureBound = new THREE.Box3();
        pictureBound.setFromObject(ref.current);
        //console.log(pictureBound); 
        //console.log(pictureBound.min.x); 



        const rInfo = scroll_data.range(fixed_range_start,fixed_range_end); 
        // console.log("This is the scroll info: ", rInfo);
        if(rInfo < 1){
          
            ref.current.material.zoom = (1 + rInfo) * zoomFactor; 
            ref.current.position.y = -scroll_data.offset * h;
        }

        ref.current.position.x = pos[0] + (scroll_data.offset)*(1/scroll_data.pages)*x_movement; 

    }); 
    return (
        <Image 
            ref={ref} 
            url={url} 
            position={pos}
            scale = {[x_scale*w, y_scale*w, 1]}

            
        /> 
    )
}


function FixedBannerSection({x_position_ratio, y_position_ratio, z_index, page, x_scale, y_scale, zoomFactor, x_movement,  fixed_range_start, fixed_range_end}){
    const ref = useRef(); 
    const html_ref= useRef(); 
    const scroll_data = useScroll(); 
    const { width: w, height: h } = useThree((state) => state.viewport);
    const img_height = x_scale * w; 
    const img_width = y_scale * w; 
    const pos = [0,0,z_index]; 

    useFrame((state, delta) =>{

        const rInfo = scroll_data.range(fixed_range_start,fixed_range_end); 
        if(rInfo < 1){
            ref.current.position.y = -scroll_data.offset * h;
            ref.current.position.z = (z_index + rInfo*100); 
            //console.log("Z-position: ", ref.current.position.z); 
            //console.log("Range: ", rInfo); 
        }
  
    }); 
    return (
        <group ref={ref} position={pos}>
            <Html  transform={true} sprite={true} occlude={true}>  
                <h1 className="scroller__banner"> Wassup</h1>
                {console.log(ref.current)}
                {console.log("Html item: ", html_ref.current)}
                
            
            </Html> 
        </group>
    )
}








function Grid_Helper(){
    const buildPointsX = () => {
        let listOverall = []; 
       
        for (let i = -5; i<=5; i+=1){
            let subList = []; 
            for (let k = -5; k<=5; k+=.01){
                subList.push([k,i,1])
            }
            listOverall.push(subList); 
        }
        return listOverall; 
    } ;
    const buildPointsY = () => {
        let listOverall = []; 
       
        for (let i = -5; i<=5; i+=1){
            let subList = []; 
            for (let k = -5; k<=5; k+=.01){
                subList.push([i,k,1])
            }
            listOverall.push(subList); 
        }
        return listOverall; 
    } ;
    const xLines = buildPointsX(); 
    const yLines = buildPointsY(); 
    const drawLines = (item) => {
        return(
            <Line points = {item} lineWidht = {1} color={"black"} /> 
        )
    }
    return(
        <>
            {xLines.map(drawLines)}
            {yLines.map(drawLines)}
        </> 
    )
}





  function Model({src, scale, position}){
        const gltf = useLoader(GLTFLoader, src); 
        const ref = useRef(); 

        useFrame((state, delta) =>{
           // console.log("This is the 3d object: ", ref.current)
           //ref.current.rotate.y += 12; 

      
        }); 



        return(
            <>
                <primitive ref={ref} object={gltf.scene} scale={scale} position={position} /> 
                {console.log("This is the 3d object: ", ref.current)}
            
            
            </>
        )

  }

//<Canvas orthographic camera={{ zoom: 50 }} gl={{ alpha: false, antialias: true, stencil: false, depth: false }} dpr={[1, 1.5]}> 

//dampening: higher is faster
//distance: scroll bar travel

function Scroller2() {
    const ref = useRef(); 
    const canvas_ref = useRef(); 
    //const { height, width } = useThree((state) => state.viewport); 


  return (
    <Canvas ref={canvas_ref} dpr={[1, 1.5]} camera={{fov: 75, position: [0,0,10], zoom: 1 } } shadows> 
        <Suspense fallback={null}>
            {console.log("Canvas: ", canvas_ref)}
        
        
      
        <color attach="background" args={['#f0f0f0']} />

        <ScrollControls damping={2} pages={2} distance={4} >   
            <Scroll> 
                {/*
                <Image_Group xOffset={0} yOffset={0} spacing={0.2} sources={imageSources}/> 
                <Image_Group xOffset={.35} yOffset={-0.45} spacing={0.2} sources={imageSources}/> 
                <Image_Group xOffset={-.35} yOffset={-0.45} spacing={0.2} sources={imageSources}/> 

             */ }
                 
               {/* <Fixed_Image_Tile  url={imageSources[4]} xPercentage={0} yPercentage={.875} zInd={0} scaleRatio={.25} />  */}
                {/*<Image ref={ref} url={imageSources[6]} position={[0,-1.5,1]}/> */}
           
                <Grid_Helper /> 
                <FixedImageSection 
                    url = {imageSources[1]}
                    x_position_ratio ={.15}
                    y_position_ratio = {.5}
                    z_index = {0}
                    page = {1}
                    x_scale ={.125}
                    y_scale = {.5}
                    zoomFactor = {1}
                    x_movement = {4}
                    fixed_range_start = {0}
                    fixed_range_end = {0.5}
                /> 
                <FixedImageSection 
                    url = {imageSources[3]}
                    x_position_ratio ={.85}
                    y_position_ratio = {.5}
                    z_index = {0}
                    page = {1}
                    x_scale ={.125}
                    y_scale = {.5}
                    zoomFactor = {1}
                    x_movement = {-4}
                    fixed_range_start = {0}
                    fixed_range_end = {0.5}
                /> 
                <FixedBannerSection 
                    url = {imageSources[3]}
                    x_position_ratio ={1.5}
                    y_position_ratio = {.5}
                    z_index = {2}
                    page = {1}
                    x_scale ={0}
                    y_scale = {.5}
                    zoomFactor = {1}
                    x_movement = {0}
                    fixed_range_start = {0}
                    fixed_range_end = {0.5}
                /> 
                <Model src={"/models/dresser_6_baked.gltf"} scale={1.0} position={[7,-10,2]}/> 
                <ambientLight /> 
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />

                
            </Scroll> 

            
            {/*<Display_Words content={"Help me obi-wan kenobi!"} xPercentage={.5} yPercentage={1} zInd={2} scaleRatio={.1} /> */}



 

        </ScrollControls>
        </Suspense>
    </Canvas>
  )
}

export default Scroller2