import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import SalePage from './container/SalePage'
import SaleListPage from './container/SaleListPage'
import RegisterPage from './container/RegisterPage'
import LoginPage from './container/LoginPage'
import HowItWorksPage from './container/HowItWorksPage'
import {  Route } from 'react-router-dom'
import BuySalePage from './container/BuySalePage'
import NewSalePage from './container/NewSalePage'
import EditSalePage from './container/EditSalePage'
import ViewPurchaseDetailsPage from './container/ViewPurchaseDetailsPage'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Route exact path="/" component={SaleListPage}/>
      <Route exact path="/home" component={SaleListPage}/>
      <Route exact path="/sales/:id" component={SalePage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/register" component={RegisterPage}/>
      <Route exact path="/about" component={HowItWorksPage}/>
      <Route exact path="/buy/:id" component={BuySalePage}/>
      <Route exact path="/purchases/:id" component={ViewPurchaseDetailsPage}/>
      <Route exact path="/newsale" component={NewSalePage}/>
      <Route exact path="/search" component={SaleListPage}/>
      <Route exact path="/sales/:id/edit" component={EditSalePage}/>
      <Footer/>
      </div>
    );
  }
}

export default App;
