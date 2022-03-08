import React from 'react';
import {Grid} from '@material-ui/core';
import {Container} from '@material-ui/core'; 
import Carousel from 'react-material-ui-carousel'; 
import './Home.css';




function Home() {



  return (
    <div className="home">
      Observe! My stuff!
     
      <Carousel className="home__carousel"  animation="slide" indicators="true" navButtonsAlwaysVisible="false" swipe="true" duration="600">
          <img className="home__carousel__image" src="/product_photos/19.png" />
          <img className="home__carousel__image" src="/product_photos/untitled29.png" />
          <img className="home__carousel__image" src="/product_photos/untitled37.png" />
          <img className="home__carousel__image" src="/product_photos/20.png" />
          <img className="home__carousel__image" src="/product_photos/untitled29.png" />
          <img className="home__carousel__image" src="/product_photos/untitled24.png" />
        </Carousel>
        
           
        
     

     

      
     
    </div>
  )
}

export default Home