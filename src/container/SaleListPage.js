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

    let mainSaleList=this.state.sales.filter(sale=>sale.name.toLowerCase().includes(this.state.filterPhrase.toLowerCase()))
    .sort((a,b)=>{
      if(this.state.sortBy === 'Regular Price') {
        return a.regular_price - b.regular_price;
      }
      if(this.state.sortBy === 'Discounted Price') {
        return a.discounted_price - b.discounted_price;
      }
      return 0;
  })
    return (
      <div>
      <SearchBar updateFilterPhraseFunc={this.updateFilterPhrase}/>
      <SaleList sales={mainSaleList} addToCartFunc={this.addToCart}/>
      </div>

    );
  }
}

export default SaleListPage;
