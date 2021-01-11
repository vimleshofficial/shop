import React from "react";

import {
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
//import noImage from '../../../images/No_Image_Available.jpg';
import { Link } from "react-router-dom";
import useStyle from "./styles";
const Products = ({ product }) => {
  // const [productBasePath, setProductBasePath] = useState(null);
  // const data = useSelector((state) => state.shopData.data);
  // console.log(productBasePath);
  // useEffect(() => {
  //   if (data) {
  //     setProductBasePath(data.imagePath.product);
  //   }
  // }, [data]);
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      {/* <CardMedia className={classes.media} 
                image={product.product_image?product.product_image:noImage}  
                title={product.product_name} 
            /> */}
      <CardContent
        className={classes.cardContainer}
        title={product.store_product_name}
      >
        <Typography className={classes.cardHedding} variant="h6">
          <Link
            className={classes.black}
            to={`/product/${product.store_product_id}`}
          >
            {product.store_product_name}
          </Link>
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {product.product_desc}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.blueButtons}>
          <Button className={classes.cartButton}>Add</Button>
          <Button className={classes.priceButton}>
            {!product.d_price || parseInt(product.d_price) === 0 ? (
              <span>$ {product.product_price}</span>
            ) : (
              <>
                <span className={classes.cPrice}>
                  {product.d_price.split("-")[1]}
                </span>{" "}
                <strong className={classes.dPrice}>
                  {product.d_price.split("-")[0]}
                </strong>
              </>
            )}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Products;
