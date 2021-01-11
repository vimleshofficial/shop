import React, { useEffect, useState } from "react";
import Category from "./Category/Catecory";
import { useSelector } from "react-redux";
import useStyle from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Categories = ({ setOpenLeft }) => {
  const [categories, setCategories] = useState(null);
  const data = useSelector((state) => state.shopData.data);
  useEffect(() => {
    setOpenLeft(false);
  });
  useEffect(() => {
    if (data) {
      setCategories(data.categories);
    }
  }, [data]);
  const classes = useStyle();
  return !categories ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {categories.map((category) => (
        <Grid
          className={classes.catGrid}
          key={category.cat_id}
          item
          xs={6}
          md={4}
          sm={6}
        >
          <Category category={category} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Categories;
