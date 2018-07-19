
import React, { Component } from 'react';
import axios from 'axios'
import PurchaseDetails from './../components/PurchaseDetails'
import { Container } from 'reactstrap';

class ViewPurchaseDetailsPage extends Component {
  state={
    sale:{},
    purchase:{},
  }

async componentDidMount(){
    const purchaseResponse =await axios.get(`http://localhost:8000/purchases/${this.props.match.params.id}`);
    const saleResponse =await axios.get(`http://localhost:8000/sales/${purchaseResponse.data[0].sale_id}`);
    this.setState({purchase:purchaseResponse.data[0], sale: saleResponse.data[0]})
}
render() {
    return (
      <div className="App pageContainer">
        <PurchaseDetails sale={this.state.sale} purchase={this.state.purchase} />
     </div>
    );
  }
}

export default ViewPurchaseDetailsPage;
