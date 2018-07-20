import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {index} from '../index.css'
import SaleCountDown from './SaleCountDown'
import {getDiscountedPrice} from '../utils'

const SaleDetails=(props)=>{
return(
 <div className="addImage">
  <div className="mr-auto ml-auto w-50">
    <Row>
      <Col xs ="12"><img src= {props.sale.img_url} className="imgStyle" /></Col>
    </Row>
    <div className ="borderStyle m-2 p-3">
    <Row>
      <Col xs ="6" className="font-weight-bold">Name:</Col>
      <Col  xs="6">{props.sale.name}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Regular Price:</Col>
      <Col  xs="6">${props.sale.regular_price}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Description:</Col>
      <Col  xs="6">{props.sale.description}</Col>
    </Row>
    <Row>
      <Col xs ="6" className="font-weight-bold">Units Sold:</Col>
      <Col  xs="6">{props.sale.units_sold}</Col>
    </Row>
    <Row>
      <Col  xs ="6" className="font-weight-bold">Discounted Price:</Col>
      <Col  xs ="6">${getDiscountedPrice(props.sale.regular_price, props.sale.units_sold)}</Col>
    </Row>
    <Row>
      <Col  xs ="6" className="font-weight-bold">Sale Ends:</Col>
      <Col  xs ="6"><SaleCountDown timestamp={props.sale.end_at}/></Col>
    </Row>
    </div>
   </div>
  </div>
 )
}
export default SaleDetails
