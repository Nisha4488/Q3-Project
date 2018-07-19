import React from 'react'
import { Container, Row, Col, Button, Input } from 'reactstrap';
import axios from 'axios'
import {index} from '../index.css'
import {getDiscountedPrice} from '../utils'
import { Redirect } from 'react-router-dom';

class SaleDetails extends React.Component{
state={
  quantity:1,
  redirection: false,
  purchaseId: ''
}
buySale=async (payload) =>{
  const purchaseResponse = await axios.post(`http://localhost:8000/purchases`, payload);
  // Make api call to sale to increment units_sold
  const salePayload = this.props.sale;

  salePayload.units_sold = parseInt((salePayload.units_sold || 0)) + parseInt(payload.quantity);
    console.log('salePayload ', salePayload)
  const saleResponse = await axios.patch(`http://localhost:8000/sales/${salePayload.id}`, salePayload);

  this.setState({redirection: true, purchaseId: purchaseResponse.data[0].id});
}
render(){
const unitPrice = getDiscountedPrice(this.props.sale.regular_price, this.props.sale.units_sold);
const shippingCharge = 10;
const tax = 0.08;
const baseCost = (unitPrice + shippingCharge)*this.state.quantity;
const taxAmount = (tax * baseCost).toFixed(2);
const totalAmount = parseFloat(baseCost) + parseFloat(taxAmount);
const payload = {
  user_id:1,
  sale_id:this.props.sale.id,
  unit_price: unitPrice,
  shipping_charge: shippingCharge,
  tax,
  quantity: this.state.quantity,
  tax_amount: taxAmount,
  total_amount:totalAmount,
};
if(this.state.redirection) {
  return <Redirect to={`/purchases/${this.state.purchaseId}`} />;
}
return(
 <div className="addImage">
  <div className="mr-auto ml-auto w-50">
    <Row>
      <Col xs ="12"><img src= {this.props.sale.img_url} className="imgStyle" /></Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Name:</Col>
      <Col  xs="6">{this.props.sale.name}</Col>
    </Row>
    <Row>
      <Col  xs ="6" className="font-weight-bold">Unit Price:</Col>
      <Col  xs ="6">${unitPrice}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Select Quantity :</Col>
      <Col  xs="6">
      <Input type="select"  onChange={e=>this.setState({quantity:e.target.value})} value={this.state.quantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </Input>
      </Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Shipping Charge:</Col>
      <Col  xs="6">${shippingCharge*this.state.quantity}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Tax :</Col>
      <Col  xs="6">{tax*100}%</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Total Tax :</Col>
      <Col  xs="6">${taxAmount}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Total Amount :</Col>
      <Col  xs="6">${totalAmount}</Col>
    </Row>
    <Row>
      <Col xs ="12" className="font-weight-bold text-center">
      <Button color="primary" className ="buttonWidth w-50 mt-2" onClick={()=> this.buySale(payload)}>Buy</Button>
      </Col>
    </Row>
   </div>
  </div>
 )
}
}
export default SaleDetails
