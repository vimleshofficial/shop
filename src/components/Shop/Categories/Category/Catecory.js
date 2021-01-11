import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardMedia, Typography } from "@material-ui/core";
import noImage from "../../../../images/No_Image_Available.jpg";
import { Link } from "react-router-dom";
import useStyle from "./styles";
const Category = ({ category }) => {
  const [categoryBasePath, setCategoryBasePath] = useState(null);
  const data = useSelector((state) => state.shopData.data);
  useEffect(() => {
    if (data) {
      setCategoryBasePath(data.imagePath.category);
    }
  }, [data]);
  //console.log(category);
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          category.category_image && categoryBasePath
            ? `${categoryBasePath}/${category.category_image}`
            : noImage
        }
        title={category.category_name}
      />
      <div className={classes.overlay}>
        <Typography
          className={classes.catTitle}
          variant="h6"
          title={category.category_name}
        >
          <Link className={classes.white} to={`/category/${category.cat_id}`}>
            {category.category_name}
          </Link>
        </Typography>
      </div>
    </Card>
  );
};

export default Category;
