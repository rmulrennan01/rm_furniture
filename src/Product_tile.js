import React, {useState} from 'react'
//import * as Mui from '@material-ui/core';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import { Button } from '@material-ui/core';



function Product_tile(props) {
    const [productData, setProductData]=useState(props.prod_data);
    const [productName, setProductName]=useState(props.prod_name); 


    const buildRow = (item) => {
        return(
        <TableRow> 
            {console.log(item[1])}
            <TableCell align="left">{item[0]}</TableCell>
            <TableCell align="left">{item[1]}</TableCell>
        </TableRow>
        ); 

    }

    return (
        <div>
            <h2> {productName} </h2> 
            <div> A modern take on classic mid-centruy design. The Chelsea Dresser puts an emphasis on horizontal lines to balance its taller profile, making it perfect for any sized room. The 1" thick hardwood drawer fronts include a unique slotted groove to eleminate the need for drawer pulls. 
            </div> 
            <br/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                    {productData.map(buildRow)}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/> 


            <Button color="primary" variant="contained"> Order Now </Button>

            







        </div>
    )
    }

export default Product_tile