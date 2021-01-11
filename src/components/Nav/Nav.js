import React, { useState, useEffect } from "react";
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
  const [openRight, setOpenRight] = useState(true);
  const [onMobileLeft, setOnMobileLeft] = useState(true);
  const [onMobileRight, setOnMobileRight] = useState(true);
  useEffect(() => {
    setOpenLeft(props.openLeft);
  }, [setOpenLeft, props]);
  const leftHandleDrawerOpen = () => {
    setOnMobileLeft(false);
    props.setOpenLeft(true);
    setOpenLeft(true);
  };
  const leftHandleDrawerClose = () => {
    setOnMobileLeft(true);
    props.setOpenLeft(false);
    setOpenLeft(false);
  };

  const rightHandleDrawerOpen = () => {
    setOnMobileRight(false);
    setOpenRight(true);
    props.setOpenRight(true);
  };
  const righttHandleDrawerClose = () => {
    setOnMobileRight(true);
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
            className={clsx(classes.menuButton)}
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
            className={clsx(classes.menuButtonRight)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerLeft
        onMobileLeft={onMobileLeft}
        leftHandleDrawerClose={leftHandleDrawerClose}
        openLeft={openLeft}
      />
      <DrawerRight
        onMobileRight={onMobileRight}
        righttHandleDrawerClose={righttHandleDrawerClose}
        openRight={openRight}
      />
    </>
  );
};

export default Nav;
