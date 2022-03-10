import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import Furniture_tile from './Furniture_tile';
import "./Furniture_page.css"; 

function Furniture_page() {
    const item = [{name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/untitled46png.png"},
        {name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/untitled35.png"},{name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/20.png"},
        {name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/untitled9.png"},{name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/untitled9.png"},
        {name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/untitled9.png"},{name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/untitled9.png"},
        {name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/untitled9.png"},{name: "Trudy Dresser", description: "Bunch of bullshit stuff about the item", photo:"/product_photos/untitled9.png"}]; 

    const addProducts = (item) => {
        return(
            
            <Grid item xs={4} >
                <div className='furniture_page__tile'> 
                    <Furniture_tile  product={item}     /> 
                </div>
            </Grid> 
            
        )

    };

    return (
        <div>
            <br></br> 
            <br></br> 
            <br></br> 
            <Grid container spacing={2}> 
                {item.map(addProducts)}
                
            </Grid> 
            


        </div>
    )
}

export default Furniture_page