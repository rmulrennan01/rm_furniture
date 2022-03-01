import React from 'react'
import * as Mui from '@material-ui/core';
import Product_tile from './Product_tile';
import {Canvas} from '@react-three/fiber'; 
import {Grid} from '@material-ui/core';





function Product_page() {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs= {1}> </Grid>
            <Grid item xs={7}>
                <Canvas>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
                    <mesh>
                        <boxGeometry />
                        <meshStandardMaterial />
                    </mesh>
                </Canvas>
                
            </Grid>
            <Grid item xs={3}>
                <Product_tile 
                    prod_data = {  [["Width:",'50"'],["Depth:",'22"'],["Height:",'30"'],
                    ["Drawer Box Material Options:","Baltic Birch or Maple"], ["Finish Options:","Clear Satin Polyurethane or Natural Danish Oil"],
                    ["Hardware Type","Undermount Soft Close Drawer Slides"], ["Lead-Time", "Approximately 3-4 weeks"]]    }
                    prod_name = {"Chelsea Dresser"}
                /> 
            </Grid>
            <Grid item xs= {1}> </Grid>
   
        </Grid>




    </div>
    
  )
}

export default Product_page