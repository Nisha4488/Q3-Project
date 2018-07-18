import React from 'react'
import Cart from '../components/Cart'
import axios from 'axios'
class CartPage extends React.Component{
  state={
    sales:[]
  }

  componentWillMount() {
    axios.get('http://localhost:8000/sales')
    .then(response=> this.setState({sales:response.data}))
  }
  removeFromCart =(id)=>{
    let updatedSaleList= this.state.sales.map(sale=>{
      if(sale.id === id){
        sale.inCart =false
      }
      return sale
    })
    this.setState({sales:updatedSaleList})
  }
  render(){
    let listOfSalesInCart = this.state.sales.filter(sale=>sale.inCart)
  return(
    <div>
    <Cart salesInCart ={listOfSalesInCart} removeFromCartFunc={this.removeFromCart}/>
    </div>
  )
}
}
export default CartPage
