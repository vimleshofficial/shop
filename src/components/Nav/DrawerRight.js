import React from "react";
import clsx from "clsx";
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

const DrawerRight = ({ openRight, righttHandleDrawerClose, onMobileRight }) => {
  const theme = useTheme();
  const classes = useStyle();
  return (
    <Drawer
      className={clsx(classes.drawer, onMobileRight && classes.moHide)}
      variant="persistent"
      anchor="right"
      open={openRight}
      classes={{
        paper: clsx(classes.drawerPaper, classes.drawerPaperRight),
      }}
    >
      <div className={classes.drawerContainer}>
        <div className={classes.drawerHeaderRight}>
          <IconButton
            className={classes.rightIconButton}
            onClick={righttHandleDrawerClose}
          >
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
