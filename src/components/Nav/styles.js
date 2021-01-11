import { makeStyles } from "@material-ui/core/styles";
import noImg from "../../images/emptycart.gif";
const drawerWidth = 240;
export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShiftLeft: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      width: "100%",
    },
  },
  appBarShiftRight: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      width: "100%",
    },
  },
  appBarShiftBoth: {
    width: `calc(100% - ${drawerWidth * 2}px)`,
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      width: "100%",
    },
  },
  menuButtonRight: {
    marginLeft: "auto",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {},
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: noImg,
  },
  drawerPaperRight: {
    backgroundImage: `url(${noImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerHeaderRight: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "#757575",
  },
  leftIconButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
    },
  },
  rightIconButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
    },
  },
  moHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
