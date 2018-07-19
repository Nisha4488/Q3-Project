import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';

class HowItWorks extends Component {
  render(){
    return(
      <div className="addImage ">
      <div className="widthStyle container ml-auto mr-auto ">
      <Row >
        <Col xs="12" sm="3" className="text-center ">
          <div>Step 1</div>
          <img src="/buy-sale.png" className="m-1 how-it-works-icon" />
          <div>Pay 100% and place your order as per current price.</div>
        </Col>
        <Col xs="12" sm="3" className="text-center">
          <div>Step 2</div>
          <img src="/share.png" className="m-1 how-it-works-icon" />
          <div>Share the word about the sale.</div>
        </Col>
        <Col xs="12" sm="3" className="text-center">
          <div>Step 3</div>
          <img src="/price-drop.png" className="m-1 how-it-works-icon" />
          <div>Price drops as people start placing order.</div>
        </Col>
        <Col xs="12" sm="3" className="text-center">
          <div>Step 4</div>
          <img src="/save-money.png" className="m-1 how-it-works-icon" />
          <div>You will get the credit back after sale end.</div>
        </Col>
       </Row>
      </div>
    </div>
   )
 }
}

export default HowItWorks;
