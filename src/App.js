import React,{useEffect} from "react";
import {Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {getShopData} from './actions/shop';
import Nav from './components/Nav';
import Categories from './components/Shop/Categories/Categories';
import Products from './components/Products/Products';
function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getShopData());
  });
  return (
    <Router>
      <div className="App">
          <Container maxWidth="lg" >
            <Nav/> 
            <Switch> 
              <Route path="/" exact>
                  <div><h1>Home Page</h1></div>
              </Route>  
             <Route path="/categories" render={({ match }) => <Categories/>}/>
             <Route path="/products" render={({ match }) => <Products/>}/>
             <Route path="/category/:categoryId" render={({ match }) => <Products match={match}/>}/>
            </Switch>            
          </Container>
      </div>
    </Router>
  );
}

export default App;
