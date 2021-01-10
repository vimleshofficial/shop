import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getShopData } from "./actions/shop";
import Nav from "./components/Nav/Nav";
import Categories from "./components/Shop/Categories/Categories";
import Products from "./components/Products/Products";
import useStyle from "./styles";

function App() {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const classes = useStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopData());
  });
  return (
    <Router>
      <div className={classes.root}>
        <Nav setOpenLeft={setOpenLeft} setOpenRight={setOpenRight} />
        <main
          className={clsx(classes.content, {
            [classes.contentShiftLeft]: openLeft,
            [classes.contentShiftRight]: openRight,
          })}
        >
          <div className={classes.toolbar}>
            <Container maxWidth="lg">
              <Switch>
                <Route path="/" exact>
                  <div>
                    <h1>Home Page</h1>
                  </div>
                </Route>
                <Route
                  path="/categories"
                  render={({ match }) => <Categories />}
                />
                <Route path="/products" render={({ match }) => <Products />} />
                <Route
                  path="/category/:categoryId"
                  render={({ match }) => <Products match={match} />}
                />
              </Switch>
            </Container>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
