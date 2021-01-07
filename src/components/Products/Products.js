import React,{useEffect,useState} from "react";
import {useSelector} from 'react-redux';
import useStyle from './styles';
import {Grid,CircularProgress} from '@material-ui/core'
import Product from './Product/Product';

const Products=({match})=>{
    const [products,setProducts]=useState(null);    
    const data=useSelector((state)=>state.shopData.data);
    //console.log(isNaN(match.params.categoryId));
    
    useEffect(() => {
        if(data){
            if(match)
            setProducts(data.product.filter(p=>p.cid===parseInt(match.params.categoryId)));
        else
            setProducts(data.product);
        }        
      },[data,match]);
    //console.log(products);
    const classes=useStyle();
    return( 
        !products?<CircularProgress/>:(
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    products.map(product=>(
                        <Grid key={product.id} item xs={12} md={4} sm={6}>
                           <Product product={product} />
                        </Grid>
                    ))
                } 
            </Grid>
        )
    );
    
}
export default Products;

