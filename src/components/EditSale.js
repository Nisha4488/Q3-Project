import React from 'react'
import axios from 'axios'
import {index} from '../index.css'
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Row, Col } from 'reactstrap';

class NewSale extends React.Component{
  state={ //whatever the field we want to instert needs to be specified in state
    sale: {
      ...this.props.sale,
      end_at: moment(this.props.sale.end_at)
     },
    redirection: false,
}

  updateSale=sale=>{
    axios.patch(`http://localhost:8000/sales/${sale.id}`, sale)
    .then(response=>this.setState({redirection: true}))
  }
  handleSubmit=e=>{
    e.preventDefault()
    this.updateSale(this.state.sale)
  }
  render(){
    if(this.state.redirection) {
      return <Redirect to="/home" />;
    }

return(
  <div className="addImage">
    <div className="widthStyle container ml-auto mr-auto ">
      <p><h3 className="text-center">Update Sale</h3></p>
        <form onSubmit={this.handleSubmit}>
        <Row>
            <Col xs ="2"><label className="font-weight-bold"> Name:</label></Col>
            <Col xs ="8"><input type="text" onChange={e=>this.setState({sale: {...this.state.sale,name:e.target.value}})} value={this.state.sale.name} placeholder="Name" className="w-75 p-2 m-2 "/></Col>
          </Row>
          <Row>
            <Col xs ="2"><label className="font-weight-bold"> Img Url:</label></Col>
            <Col xs ="8"><input type="text" onChange={e=>this.setState({sale: {...this.state.sale,img_url:e.target.value}})} value={this.state.sale.img_url} placeholder="Img Url" className="w-75 p-2  m-2"/></Col>
          </Row>
          <Row>
            <Col xs ="2"><label className="font-weight-bold"> Regular Price:</label></Col>
            <Col  xs ="8"><input type="text" onChange={e=>this.setState({sale: {...this.state.sale,regular_price:e.target.value}})} value={this.state.sale.regular_price} placeholder="Regular Price"className="w-75 p-2 m-2 "/></Col>
          </Row>
          <Row>
            <Col xs ="2"><label className="font-weight-bold"> Description:</label></Col>
            <Col xs ="8"><textarea name="description" placeholder="Description" onChange={e=>this.setState({sale: {...this.state.sale,description:e.target.value}})} value={this.state.sale.description} className="w-75 p-2 m-2"></textarea></Col>
          </Row>
          <Row>
            <Col xs ="2"><label className="font-weight-bold"> End At:</label> </Col>
            <Col xs ="8">  <DatePicker
                className="w-75 p-2 m-2"
                selected={this.state.sale.end_at}
                onChange={date=>this.setState({sale: {...this.state.sale,end_at:date}})}
                timeCaption="time"/>
            </Col>
          </Row>
         <button type="submit" className="btn btn-primary">Submit</button>
       </form>
     </div>
   </div>
  )
 }
}
export default NewSale
