import React from 'react'
import {Row, Col} from 'reactstrap';
import Sale from './Sale'

const SaleList = (props) =>{
  let listOfSales = props.sales.map(sale =>(<Col xs="12" sm="12" md="6" ><Sale key={sale.id} sale={sale} addToCartFunc={props.addToCartFunc}/></Col>))
  return (
    <div className="addImage">
      <Row className="  container ml-auto mr-auto  w-100">
        {listOfSales}
      </Row>
    </div>
  )
}
export default SaleList
