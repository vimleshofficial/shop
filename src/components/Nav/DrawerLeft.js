import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  useTheme,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useStyle from "./styles";

const DrawerLeft = ({ openLeft, leftHandleDrawerClose, onMobileLeft }) => {
  const [categories, setCategories] = useState(null);
  const data = useSelector((state) => state.shopData.data);
  useEffect(() => {
    if (data) {
      setCategories(data.categories);
    }
  }, [data]);

  const theme = useTheme();
  const classes = useStyle();
  return (
    <Drawer
      className={clsx(classes.drawer, onMobileLeft && classes.moHide)}
      variant="persistent"
      anchor="left"
      open={openLeft}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <div className={classes.drawerHeader}>
          <IconButton
            className={classes.leftIconButton}
            onClick={leftHandleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {categories &&
            categories.map((category) => (
              <ListItem button key={category.cat_id}>
                <ListItemIcon>
                  <ChevronRightIcon />{" "}
                </ListItemIcon>
                <Link
                  className={classes.link}
                  to={`/category/${category.cat_id}`}
                >
                  <ListItemText primary={category.category_name} />
                </Link>
              </ListItem>
            ))}
        </List>
        <Divider />
      </div>
    </Drawer>
  );
};

export default DrawerLeft;
