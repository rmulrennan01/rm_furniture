import React from 'react';
import {Grid} from '@material-ui/core';
import {Container} from '@material-ui/core'; 
import Carousel from 'react-material-ui-carousel'; 






function Home() {



  return (
    <div>
      <div > 
      <Carousel animation="slide" indicators="true" navButtonsAlwaysVisible="false" swipe="true" duration="600">
          <img src="/product_photos/19.png" />
          <img src="/product_photos/untitled29.png" />
          <img src="/product_photos/untitled37.png" />
          <img src="/product_photos/20.png" />
          <img src="/product_photos/untitled29.png" />
          <img src="/product_photos/untitled24.png" />
        </Carousel>
        
           
        
      </div> 

      <div >

      </div> 

      
      <br></br>
      I'm fucking here!
    </div>
  )
}

export default Home