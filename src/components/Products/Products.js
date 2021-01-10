import React,{useEffect,useState} from "react";
import {useSelector} from 'react-redux';
import useStyle from './styles';
import {Grid,CircularProgress} from '@material-ui/core'
import Product from './Product/Product';

const Products=({match})=>{
    const [products,setProducts]=useState(null);    
    const data=useSelector((state)=>state.shopData.data);
    console.log(data);
    useEffect(() => {
        if(data){
            if(match)
            {
                setProducts(data.categories.filter(category=>category.cat_id===match.params.categoryId)[0].product);
            }                
            else{
                const productArr=data.categories.map(category=>category.product);
                setProducts([].concat.apply([], productArr));
            }
        }        
      },[data,match]);
      
    const classes=useStyle();
    return( 
        !products?<CircularProgress/>:(
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    products.map(product=>(
                        <Grid key={product.store_product_id} item xs={12} md={6} sm={6}>
                           <Product product={product} />
                        </Grid>
                    ))
                } 
            </Grid>
        )
    );
    
}
export default Products;

