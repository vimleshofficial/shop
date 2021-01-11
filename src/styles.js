import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
export default makeStyles((theme) => ({
  root: {
    display: "block",
  },
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: "90px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  contentShiftLeft: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
  },
  contentShiftRight: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },
  },
}));
