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



//const imageSources = ['/product_photos/untitled45png.png','/product_photos/untitled46png.png','/product_photos/untitled47png.png','/product_photos/untitled48.png','/product_photos/untitled38.png']
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
        //ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 2000), 4, delta); 
        //group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 500), 10, delta);
        //ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 5, 4, delta);
        const pictureBound = new THREE.Box3();
        pictureBound.setFromObject(ref.current);
        //console.log(pictureBound); 
        //console.log(pictureBound.min.x); 



        const rInfo = scroll_data.range(fixed_range_start,fixed_range_end); 
        // console.log("This is the scroll info: ", rInfo);
        if(rInfo < 1){
            // ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 1, 1, delta);
            ref.current.material.zoom = (1 + rInfo) * zoomFactor; 
            ref.current.position.y = -scroll_data.offset * h;
        }
       // ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, Math.max(0, scroll_data.delta * 500), 10, delta);
        //ref.current.position.x = pos[0] + x_movement* scroll_data.offset * (1/scroll_data.pages);
        ref.current.position.x = pos[0] + (scroll_data.offset)*(1/scroll_data.pages)*x_movement; 
        //console.log("Offset: ", scroll_data.offset);  
        //ref.current.position.y = pos[1] + y_movement*scroll_data.offset; 
        //  {console.log("Number of pages in scroll :", scroll_data.pages)}
        
        //console.log(w);
        //console.log(ref.current.geometry); 
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
    //const group_ref = useRef();
    const scroll_data = useScroll(); 
    const { width: w, height: h } = useThree((state) => state.viewport);
    const img_height = x_scale * w; 
    const img_width = y_scale * w; 
    //const pos = [-1+x_position_ratio, -1+y_position_ratio + (page-1), z_index ]
    const pos = [0,0,z_index]; 

    useFrame((state, delta) =>{
        //ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 2000), 4, delta); 
        //group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 500), 10, delta);
        //ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 5, 4, delta);

        const rInfo = scroll_data.range(fixed_range_start,fixed_range_end); 
        // console.log("This is the scroll info: ", rInfo);
        if(rInfo < 1){
            // ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 1, 1, delta);
           // html_ref.current.material.zoom = (1 + rInfo) * zoomFactor; 
            ref.current.position.y = -scroll_data.offset * h;
            ref.current.position.z = scroll_data.offset * 100 + z_index; 
        }
       // ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, Math.max(0, scroll_data.delta * 500), 10, delta);
        //ref.current.position.x = pos[0] + x_movement* scroll_data.offset * (1/scroll_data.pages);
       //ref.current.position.x = pos[0] + (scroll_data.offset)*(1/scroll_data.pages)*x_movement; 
        //console.log("Offset: ", scroll_data.offset);  
        //ref.current.position.y = pos[1] + y_movement*scroll_data.offset; 
        //  {console.log("Number of pages in scroll :", scroll_data.pages)}
        
        //console.log("This is scroll offset: ", scroll_data.offset);
       // console.log("Html item: ", html_ref.current);
      // const pictureBound = new THREE.Box3();
      // pictureBound.setFromObject(html_ref);
       //console.log(pictureBound); 
       //console.log(pictureBound.min.x); 
         
    }); 
    return (
        <group ref={ref} >
            <Html  ref={html_ref}  scale={[12,w,1]} position={pos}>  
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



//<Canvas orthographic camera={{ zoom: 50 }} gl={{ alpha: false, antialias: true, stencil: false, depth: false }} dpr={[1, 1.5]}> 

//dampening: higher is faster
//distance: scroll bar travel

function Scroller2() {
    const ref = useRef(); 
    const canvas_ref = useRef(); 
    //const { height, width } = useThree((state) => state.viewport); 


  return (
    <Canvas ref={canvas_ref} dpr={[1, 1.5]} camera={{fov: 75, position: [0,0,10], zoom:1 }}> 
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
                    z_index = {-5}
                    page = {1}
                    x_scale ={0}
                    y_scale = {.5}
                    zoomFactor = {1}
                    x_movement = {0}
                    fixed_range_start = {0}
                    fixed_range_end = {0.5}
                /> 
     
                
            </Scroll> 

            
            {/*<Display_Words content={"Help me obi-wan kenobi!"} xPercentage={.5} yPercentage={1} zInd={2} scaleRatio={.1} /> */}



 

        </ScrollControls>
        </Suspense>
    </Canvas>
  )
}

export default Scroller2