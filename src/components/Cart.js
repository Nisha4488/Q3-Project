import React from 'react'
import CartItem from './CartItem'
import { Container, Row, Col,Button } from 'reactstrap';

const Cart =(props)=>{
  let listOfCartItems =props.salesInCart.map(sale=><CartItem key={sale.id} sale={sale} removeFromCartFunc={props.removeFromCartFunc}/>)
  return(
    <div className ="addImage">
      <Container className="widthStyle ml-auto mr-auto ">
      <Row>
      <Col xs="6"><h3>Your Cart</h3></Col>
      </Row>
      <Row>
        <Col xs="6"> {listOfCartItems} </Col>
        <Col xs="6">
      <Row>
        <Col xs ="4">Subtotal:</Col>
        <Col xs ="4"></Col>
      </Row>
      <Row>
         <Col xs ="4">Tax:</Col>
         <Col xs ="4"></Col>
      </Row>
      <Row>
          <Col xs ="4">Total:</Col>
          <Col xs ="4"></Col>
      </Row>
    <Row>
          <Col xs="12" ><Button color="primary" className ="buttonWidth">CHECKOUT</Button></Col>
        </Row>
       </Col>
      </Row>
     </Container>
   </div>
  )
}
export default Cart
