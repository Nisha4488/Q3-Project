import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {index} from '../index.css'
import SaleCountDown from './SaleCountDown'
import {getDiscountedPrice} from '../utils'

const PurchaseDetails=(props)=>{
return(
 <div className="addImage">
  <div className="mr-auto ml-auto w-50">
    <Row>
      <Col xs ="12"><img src= {props.sale.img_url} className="imgStyle" /></Col>
    </Row>
    <div className="borderStyle m-2 p-3">
    <Row>
      <Col xs ="6" className="font-weight-bold">Name:</Col>
      <Col  xs="6">{props.sale.name}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Regular Price:</Col>
      <Col  xs="6">${props.sale.regular_price}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Units Sold:</Col>
      <Col  xs="6">{props.sale.units_sold}</Col>
    </Row>
    <Row>
      <Col  xs ="6" className="font-weight-bold">Current Price:</Col>
      <Col  xs ="6">${getDiscountedPrice(props.sale.regular_price, props.sale.units_sold)}</Col>
    </Row>
    <Row>
      <Col  xs ="6" className="font-weight-bold">Sale Ends:</Col>
      <Col  xs ="6"><SaleCountDown timestamp={props.sale.end_at}/></Col>
    </Row>
    <hr/>
    <Row>
      <Col xs ="6" className="font-weight-bold">Quantity Purchased:</Col>
      <Col  xs="6">{props.purchase.quantity}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Shipping Charge:</Col>
      <Col  xs="6">{props.purchase.shipping_charge}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Tax :</Col>
      <Col  xs="6">{props.purchase.tax}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Total Tax :</Col>
      <Col  xs="6">{props.purchase.tax_amount}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Total Amount :</Col>
      <Col  xs="6">{props.purchase.total_amount}</Col>
    </Row>
    <hr/>
    <Row>
      <Col xs ="6" className="font-weight-bold">Your extra discount after you made purchase :</Col>
      <Col  xs="6">$0</Col>
    </Row>
    </div>
   </div>
  </div>
 )
}
export default PurchaseDetails
