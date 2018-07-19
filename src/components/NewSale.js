import React from 'react'
import axios from 'axios'
import {index} from '../index.css'
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class NewSale extends React.Component{
  state={ //whatever the field we want to instert needs to be specified in state
    sale: {
    name:'',
    img_url:'',
    regular_price:'',
    description:'',
    units_sold: 0,
    end_at: moment()
  },
    redirection: false,
}

  addSale=sale=>{
    axios.post(`http://localhost:8000/sales`, sale)
    .then(response=>this.setState({redirection: true}))
  }
  handleSubmit=e=>{
    e.preventDefault()
    this.addSale(this.state.sale)
  }
  render(){
    if(this.state.redirection) {
      return <Redirect to="/home" />;
    }

return(
  <div className="addImage">
    <div className="widthStyle ml-auto mr-auto ">
      <p><h3>Create Sale</h3></p>
        <form onSubmit={this.handleSubmit}>
          <p><input type="text" onChange={e=>this.setState({sale: {...this.state.sale,name:e.target.value}})} value={this.state.sale.name} placeholder="Name" className="w-75 p-2 "/></p>
          <p><input type="text" onChange={e=>this.setState({sale: {...this.state.sale,img_url:e.target.value}})} value={this.state.sale.img_url} placeholder="Img Url" className="w-75 p-2 "/></p>
          <p><input type="text" onChange={e=>this.setState({sale: {...this.state.sale,regular_price:e.target.value}})} value={this.state.sale.regular_price} placeholder="Regular Price"className="w-75 p-2 "/></p>
          <textarea name="description" placeholder="Description" onChange={e=>this.setState({sale: {...this.state.sale,description:e.target.value}})} value={this.state.sale.description} className="w-75 p-2 "></textarea>
          <p>
            <DatePicker
                className="w-100"
                selected={this.state.sale.end_at}
                onChange={date=>this.setState({sale: {...this.state.sale,end_at:date}})}
                timeCaption="time"
            />
          </p>
          <button type="submit" className="btn btn-primary">Submit</button>
       </form>
     </div>
   </div>
  )
 }
}
export default NewSale
