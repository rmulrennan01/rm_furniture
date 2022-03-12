import React from 'react';
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

    let {id} = useParams()
   
    return (
        <div>
            This is the {id} page. 
            <Grid container spacing={2}>
                <Grid item xs= {1}> </Grid>
                <Grid item xs={6} >
                    <Card elevation={3}> 
                    <img className="Product_page__photo" src='/product_photos/untitled46png.png' /> 
                    </Card>
                    {/*<Model_loader />*/ } 
                </Grid>
                
                <Grid item xs={4}>
                   
                    <Product_tile 
                        prod_data = {  [["Width:",'50"'],["Depth:",'22"'],["Height:",'30"'],
                        ["Drawer Box Material Options:","Baltic Birch or Maple"], ["Finish Options:","Clear Satin Polyurethane or Natural Danish Oil"],
                        ["Hardware Type","Undermount Soft Close Drawer Slides"], ["Lead-Time", "Approximately 3-4 weeks"]]    }
                        prod_name = {"Chelsea Dresser"}
                    /> 
                </Grid>
                <Grid item xs= {1}> </Grid>
                
 
    
            </Grid>
            <div className="Product_page__slider">
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
               
            >
                <SwiperSlide><img className="Product_page__carousel" src='/product_photos/untitled45png.png' /></SwiperSlide>
                <SwiperSlide><img className="Product_page__carousel" src='/product_photos/untitled46png.png' /></SwiperSlide>
                <SwiperSlide><img className="Product_page__carousel" src='/product_photos/untitled47png.png' /></SwiperSlide>
                <SwiperSlide><img className="Product_page__carousel" src='/product_photos/untitled48.png' /></SwiperSlide>
                <SwiperSlide><img className="Product_page__carousel" src='/product_photos/untitled38.png' /></SwiperSlide>
   
            </Swiper>
            </div>

 
            

        </div>
        
    )
    }
    
export default Product_page