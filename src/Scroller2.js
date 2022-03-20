import React, { Suspense } from 'react';
import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useIntersect, Image, ScrollControls, Scroll, useScroll, Line } from '@react-three/drei';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { PerspectiveCamera } from 'three';
import { Camera } from 'three';
import { ContactsOutlined, GroupOutlined } from '@material-ui/icons';



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
   
        //ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 2000), 4, delta); 
        //group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 500), 10, delta);
        //ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 5, 4, delta);

        const rInfo = data.range(0,.5); 
       // console.log("This is the scroll info: ", rInfo);
       if(rInfo < 1){
          // ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, inView.current ? 1 : 1, 1, delta);
           ref.current.material.zoom = 1 + rInfo; 
       }
       
        

    })
    
    return(
        <group ref={group}> 
            <Image  ref={ref} {...props} onPointerEnter={(e)=> console.log(ref.current.position.x, ref.current.position.y, ref.current.position.z)}/> 
            
        </group> 
    )
}



function Image_Trio({urls, spacing, ...props}){
    const { height:h, width: w } = useThree((state) => state.viewport)
    const adjFactor = w < 10 ? 1.5 / 3 : 1 / 3
    const group = useRef(); 
    const data = useScroll(); 
    
    useFrame((state, delta) => {
        const rInfo = data.range(0,.5); 
                
        if (rInfo < 1){
            //group.current.position.y = THREE.MathUtils.damp(group.current.position.y, (-w / 7) * rInfo, 4, delta); 
            group.current.position.y = -data.offset * h; 
            //console.log(data); 
            //group.current.position.y = -1; 
            //console.log(group.current.position.y); 
            

        }; 
        
        
    })

    
    return (
      <group ref={group} {...props}>
          {/*
        <Image_Tile position={[0,-width * adjFactor, -1]} scale={[width * adjFactor - m * 2, 5, 1]} url={urls[0]} />
        <Image_Tile position={[0, 0, 0]} scale={[width * adjFactor - m * 2, 5, 1]} url={urls[1]} />
        <Image_Tile position={[0,width * adjFactor, 1]} scale={[width * adjFactor - m * 2, 5, 1]} url={urls[2]} />
          */ }
            <Image_Tile position={[0,-adjFactor*spacing, -1]} scale={[w/5, w/5, 1]} url={urls[0]} />
            <Image_Tile position={[0, 0, 0]} scale={[w/5, w/5, 1]} url={urls[1]} />
            <Image_Tile position={[0,adjFactor*spacing, 1]} scale={[w/5, w/5, 1]} url={urls[2]} />
           

      </group> 
    )
}


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



function Image_Group({xOffset, yOffset, spacing, sources}){
    const { width: w, height: h } = useThree((state) => state.viewport)
  
    
    return(
        <> 
            <Image_Trio position={[w*xOffset, h*yOffset, 0]} urls={[sources[0], sources[1], sources[3]]} spacing={spacing}/> 
            
      


        </> 
    )
}


function Fixed_Image_Tile({url, xPercentage, yPercentage, zInd, scaleRatio, ...props}){
    const {width:w, height: h } = useThree((state) => state.viewport);
    return (
      <group {...props}>
            
            <Image_Tile 
                position={[w*xPercentage,-h*yPercentage-(w*scaleRatio/2), zInd]} 
                scale={[w*scaleRatio, w*scaleRatio, 1]} url={url} 
            />
            
      </group> 
    )
}




//<Canvas orthographic camera={{ zoom: 50 }} gl={{ alpha: false, antialias: true, stencil: false, depth: false }} dpr={[1, 1.5]}> 

//dampening: higher is faster
//distance: scroll bar travel

function Scroller2() {
    const ref = useRef(); 
    //const { height, width } = useThree((state) => state.viewport); 

    const buildPoints = () => {
        let list = []; 
        for (let i = -2; i<=2; i=i+.01){
            list.push([i,0,1])
        }

        console.log(list); 
        return list; 


    } ;


    const buildPoints2 = () => {
        let list = []; 
        for (let i = -2; i<=2; i=i+.01){
            list.push([0,i,1])
        }

        console.log(list); 
        return list; 


    } ;

    const nums = buildPoints(); 
    const nums2 = buildPoints2();



//ImageSection({url, x_position_ratio, y_position_ratio, z_index, page, x_scale, y_scale, zoomFactor, x_movement, y_movement, fixed_range})

    
  return (
    <Canvas dpr={[1, 1.5]} camera={{fov: 85, position: [0,0,2], zoom:1 }}> 
        <Suspense fallback={null}>
        
      
        <color attach="background" args={['#f0f0f0']} />

        <ScrollControls damping={2} pages={2} distance={4} >   
            <Scroll> 
                <Image_Group xOffset={0} yOffset={0} spacing={0.2} sources={imageSources}/> 
                <Image_Group xOffset={.35} yOffset={-0.45} spacing={0.2} sources={imageSources}/> 
                <Image_Group xOffset={-.35} yOffset={-0.45} spacing={0.2} sources={imageSources}/> 
                 
               {/* <Fixed_Image_Tile  url={imageSources[4]} xPercentage={0} yPercentage={.875} zInd={0} scaleRatio={.25} />  */}
                <Image ref={ref} url={imageSources[6]} position={[0,-1.5,1]}/> 
                <Line points = {nums} lineWidth={1} color={"black"}   />
                <Line points = {nums2} lineWidth={.5} color={"black"}   />
                <FixedImageSection 
                    url = {imageSources[1]}
                    x_position_ratio ={1}
                    y_position_ratio = {.5}
                    z_index = {1}
                    page = {1}
                    x_scale ={.25}
                    y_scale = {.125}
                    zoomFactor = {2}
                    x_movement = {4}
                    fixed_range_start = {0}
                    fixed_range_end = {0.5}
                /> 
                
            </Scroll> 

            
            {/*<Display_Words content={"Help me obi-wan kenobi!"} xPercentage={.5} yPercentage={1} zInd={2} scaleRatio={.1} /> */}


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