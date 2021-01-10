import React, { useState } from "react";
import clsx from "clsx";
import {
  Toolbar,
  IconButton,
  AppBar,
  MenuItem,
  CssBaseline,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import useStyle from "./styles";
import DrawerLeft from "./DrawerLeft";
import DrawerRight from "./DrawerRight";

const Nav = (props) => {
  const classes = useStyle();
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const leftHandleDrawerOpen = () => {
    setOpenLeft(true);
    props.setOpenLeft(true);
  };
  const leftHandleDrawerClose = () => {
    setOpenLeft(false);
    props.setOpenLeft(false);
  };

  const rightHandleDrawerOpen = () => {
    setOpenRight(true);
    props.setOpenRight(true);
  };
  const righttHandleDrawerClose = () => {
    setOpenRight(false);
    props.setOpenRight(false);
  };
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShiftLeft]: openLeft,
          [classes.appBarShiftRight]: openRight,
          [classes.appBarShiftBoth]: openRight && openLeft,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={leftHandleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, openLeft && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link style={{ textDecoration: "none" }} color="inherit" to="/">
            <MenuItem>Home</MenuItem>
          </Link>

          <IconButton
            aria-label="open drawer"
            onClick={rightHandleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButtonRight, openRight && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerLeft
        leftHandleDrawerClose={leftHandleDrawerClose}
        openLeft={openLeft}
      />
      <DrawerRight
        righttHandleDrawerClose={righttHandleDrawerClose}
        openRight={openRight}
      />
    </>
  );
};

export default Nav;
