import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import EditProdcut from './components/EditProdcut';
import ProductListing from './components/ProductListing';
import ViewProduct from './components/ViewProduct';
import Header from './components/Header';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact  path="/viewuser/:id">
          <ViewProduct />
        </Route>
        <Route exact  path="/edituser/:id">
          <EditProdcut />
        </Route>
        <Route exact  path="/">
          <ProductListing />
        </Route>
      </Switch>
    </Router>

  )
}

export default Routes