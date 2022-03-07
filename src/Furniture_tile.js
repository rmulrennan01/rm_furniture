import React, {useState} from 'react';
import {Grid, Button} from '@material-ui/core';
import "./Furniture_tile.css"


function Furniture_tile(props) {
    const [item, setItem] = useState(props.product); 
    

    //item = {name: , desrciption:, photo:}

    return (
        <div> 
            <Grid container> 
                <Grid item xs={12} >
                    <img src={item.photo} alt={item.name} className="furniture_tile__image"/>  
                </Grid> 
                <Grid item xs={12} >
                    <h2> {item.name} </h2> 
                </Grid> 
                <Grid item xs={12} >
                    <h4> {item.description} </h4>
                </Grid> 
            
            </Grid> 
        
           
    

        </div>
    );
}

export default Furniture_tile