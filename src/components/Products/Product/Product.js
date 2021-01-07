import React from "react";
import {Card,Typography,CardContent,Button} from "@material-ui/core";
//import noImage from '../../../images/No_Image_Available.jpg';
import {Link} from 'react-router-dom';
import useStyle from './styles';
const Products=({product})=>{    
    const classes=useStyle();
    return(
        <Card className={classes.card}>
            {/* <CardMedia className={classes.media} 
                image={product.product_image?product.product_image:noImage}  
                title={product.product_name} 
            /> */}
             <CardContent className={classes.cardContainer} title={product.product_name}>
                <Typography variant="h5" ><Link className={classes.black} to={`product/${product.id}`}>{product.product_name}</Link></Typography>   
             </CardContent>
             <CardContent className={classes.cardContainer}>
                <Typography  variant="body2" component="p" color="textSecondary" gutterBottom>{product.product_desc}</Typography>
            </CardContent>
            <div className={classes.blueButtons}>               
                <Button className={classes.cartButton} variant="contained" color="primary">Add</Button>  
                <Button className={classes.priceButton} variant="contained" color="primary">$ {product.product_price}</Button> 
             </div> 
                       
             
        </Card>
    );
}

export default Products;