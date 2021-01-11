import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  white: {
    color: "#fff",
    textDecoration: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    color: "white",
    right: "0",
    textAlign: "center",
    padding: "5px",
    background: "#222222b8",
    height: "42px",
    [theme.breakpoints.down("sm")]: {
      height: "32px",
    },
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  catTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
}));
