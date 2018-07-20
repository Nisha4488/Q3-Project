import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import SalePage from './container/SalePage'
import SaleListPage from './container/SaleListPage'
import RegisterPage from './container/RegisterPage'
import LoginPage from './container/LoginPage'
import HowItWorksPage from './container/HowItWorksPage'
import {withRouter,  Route, Switch } from 'react-router-dom'
import BuySalePage from './container/BuySalePage'
import NewSalePage from './container/NewSalePage'
import EditSalePage from './container/EditSalePage'
import ViewPurchaseDetailsPage from './container/ViewPurchaseDetailsPage'
import ProtectedRoute from './container/ProtectedRoute'

class App extends Component {
  state={
    loading: true,
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={SaleListPage}/>
        <Route exact path="/home" component={SaleListPage}/>
        <Route exact path="/sales/:id" component={SalePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/about" component={HowItWorksPage}/>
        <ProtectedRoute exact path="/buy/:id" component={BuySalePage}/>
        <ProtectedRoute exact path="/purchases/:id" component={ViewPurchaseDetailsPage}/>
        <ProtectedRoute exact path="/newsale" component={NewSalePage}/>
        <Route exact path="/search" component={SaleListPage}/>
        <ProtectedRoute path="/sales/:id/edit" component={EditSalePage}/>
      </Switch>
      <Footer/>
      </div>
    );
  }
}

export default App;
