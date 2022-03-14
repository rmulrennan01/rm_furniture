import React from 'react';
import {Grid} from '@material-ui/core';
import {Container} from '@material-ui/core'; 
import {Paper} from '@material-ui/core'; 
import Carousel from 'react-material-ui-carousel'; 
import './Home.css';
import Scroller2 from './Scroller2';




function Home() {
    const pic = ["/product_photos/19.png", "/product_photos/untitled29.png", "/product_photos/untitled37.png", "/product_photos/20.png",
    "/product_photos/untitled29.png", "/product_photos/untitled24.png"]; 
    const addImages = (item) => {
      return(
        <Paper elevation={3}> 
          <img className="home__carousel__image" src={item} /> 
        </Paper>
      );
    }



    return (
      <div className="home">
          Observe! My stuff!
          <div className='home__scroller'>
           <Scroller2 /> 
          </div> 
      
          
          
        
           
        
     

     

      
     
    </div>
  )
}

export default Home