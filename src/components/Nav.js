import React from "react";
import {Toolbar,IconButton,AppBar,makeStyles,MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    drawerContainer: {
        padding: "20px 30px",
      },
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
        paddingLeft: 0,
        },
    },
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    root: {
      flexGrow: 1,
    },
    appBar:{
       marginBottom:"30px" 
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Nav= ()=>{
 
    
    const classes=useStyles();
        return(
            <>
                <AppBar position="static" className={classes.appBar} color="inherit">              
                    <Toolbar>
                        <IconButton 
                            edge="start" 
                            className={classes.menuButton}  
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>                        
                        
                        <Link style={{ textDecoration: "none" }}  color="inherit" to='/'>
                             <MenuItem>Home</MenuItem>
                        </Link>
                        <Link style={{ textDecoration: "none" }} color="inherit" to='/products'>
                                <MenuItem>Products</MenuItem>
                        </Link>                        
                        <Link style={{ textDecoration: "none" }} color="inherit" to='/categories'>
                            <MenuItem>Categories</MenuItem>
                        </Link>         
                    </Toolbar>                      
                </AppBar>               
                
            </>
        )
}

export default Nav;