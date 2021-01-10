import React from "react";
import {
  Divider,
  Drawer,
  IconButton,
  useTheme,
  Typography,
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyle from "./styles";

const DrawerRight = ({ openRight, righttHandleDrawerClose }) => {
  const theme = useTheme();
  const classes = useStyle();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={openRight}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <div className={classes.drawerHeaderRight}>
          <IconButton onClick={righttHandleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <Typography variant="h6" component="p" color="textSecondary">
            Cart Details
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Typography>
        </div>
        <Divider />
      </div>
    </Drawer>
  );
};

export default DrawerRight;
