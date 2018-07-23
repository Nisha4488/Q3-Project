import React, { Component } from 'react';
import SaleList from '../components/SaleList'
import SearchBar from '../components/SearchBar'
import axios from 'axios'


class SaleListPage extends Component {
  state = {
     sales: [],
    filterPhrase:'',
    sortBy:''

  }
  updateFilterPhrase=(str)=>{
    this.setState({filterPhrase: str})
  }

  sortSalesBy=(sortBy)=>{
    this.setState({sortBy})
  }
  addToCart =(id)=>{
    let updatedSaleList= this.state.sales.map(sale=>{
      if(sale.id === id){
        sale.inCart =true
      }
      return sale
    })
    this.setState({sales:updatedSaleList})
  }

  componentDidMount() {
    axios.get('http://localhost:8000/sales')
    .then(response=> this.setState({sales:response.data}))
  }
  render() {
    const filteredSales=this.state.sales.filter(sale=>sale.name.toLowerCase().includes(this.state.filterPhrase.toLowerCase()));
    const sortedSales = filteredSales.sort((a,b)=>{
      if(this.state.sortBy === 'regular_price') {
        return a.regular_price - b.regular_price;
      }
      if(this.state.sortBy === 'discounted_price') {
        return a.discounted_price - b.discounted_price;
      }
      return a.name > b.name;;
  })
    return (
      <div className="pageContainer">
        <SearchBar updateFilterPhraseFunc={this.updateFilterPhrase} sortSalesBy={this.sortSalesBy} />
        <SaleList sales={sortedSales} addToCartFunc={this.addToCart}/>
      </div>
    );
  }
}

export default SaleListPage;
