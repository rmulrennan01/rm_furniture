import React from 'react';
import { useState } from 'react';
import {useParams} from "react-router-dom";
import * as Mui from '@material-ui/core';
import Product_tile from './Product_tile';
import {Canvas} from '@react-three/fiber'; 
import {Grid, Card} from '@material-ui/core';
import Model_loader from './Model_loader';
import Loader2 from './Loader2'; 
import "./Product_page.css"; 
import Carousel from 'react-material-ui-carousel'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import { Button } from '@material-ui/core';


/*
                    /<Canvas>
                        <ambientLight intensity={0.1} />
                        <directionalLight color="red" position={[0, 0, 5]} />
                        <mesh>
                            <boxGeometry />
                            <meshStandardMaterial />
                        </mesh>
                    </Canvas>
*/



function Product_page() {
    const [activeImage, set_activeImage] = useState('/product_photos/untitled46png.png'); 

    const imageSources = ['/product_photos/untitled45png.png','/product_photos/untitled46png.png','/product_photos/untitled47png.png','/product_photos/untitled48.png','/product_photos/untitled38.png']

    let {id} = useParams()

    const addSwiperImages = (item) => {
        return(
            <SwiperSlide key={item}>
                <Card elevation={3} square={true}> 
                    <img className="Product_page__carousel" src={item} onClick={()=>set_activeImage(item)} />
                </Card> 
            </SwiperSlide>

        )


    }
 

   
    return (
        <div>
            This is the {id} page. 
            <Grid container spacing={4}>
                
                <Grid item sm={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}> 
                            <Card elevation={3} square={true}> 
                                <img className="Product_page__photo" src={activeImage} /> 
                            </Card>
                        </Grid> 

                        <Grid item xs={12}> 
                            
                            <Swiper
                                grabCursor={true}
                                loop={true}
                                slidesPerView={3}
                                centeredSlides={true}
                                spaceBetween={30}
                                navigation={true}
                                autoplay={true}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Pagination, Navigation]}
                            >
                                {imageSources.map(addSwiperImages)}
        
                            </Swiper>                           
                        </Grid> 
                        <Grid item xs={12}>
                            <Button color="primary" variant="contained"> View in 3D </Button>

                        </Grid>
                    </Grid> 
                   
                    {/*<Model_loader />*/ } 
                </Grid>
                
                <Grid item sm={12} md={6}>
                   
                    <Product_tile 
                        prod_data = {  [["Width:",'50"'],["Depth:",'22"'],["Height:",'30"'],
                        ["Drawer Box Material Options:","Baltic Birch or Maple"], ["Finish Options:","Clear Satin Polyurethane or Natural Danish Oil"],
                        ["Hardware Type","Undermount Soft Close Drawer Slides"], ["Lead-Time", "Approximately 3-4 weeks"]]    }
                        prod_name = {"Chelsea Dresser"}
                    /> 
                </Grid>
                <Grid item xs= {1}> </Grid>
                
 
    
            </Grid>
            
            <Grid container> 
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid> 
            

 
            

        </div>
        
    )
    }
    
export default Product_page