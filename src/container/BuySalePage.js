
import React, { Component } from 'react';
import axios from 'axios'
import BuySale from './../components/BuySale'
import { Container } from 'reactstrap';

class SalePage extends Component {
  state={
    sale:{},
  }

async componentDidMount(){
    const saleResponse =await axios.get(`http://localhost:8000/sales/${this.props.match.params.id}`)
    this.setState({sale:saleResponse.data[0]})
}
render() {
    return (
      <div className="App pageContainer">
        <BuySale sale={this.state.sale} />
     </div>
    );
  }
}

export default SalePage;
