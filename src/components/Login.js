import React from 'react';
import {index} from '../index.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Row } from 'reactstrap';

class Login extends React.Component {
  state={
    user: {
      email:'',
      password:'',
    },
      redirection: false,
  }
  addUser=user=>{
    axios.post(`http://localhost:8000/users`, user)
    .then(response=>this.setState({redirection: true}))
  }
  handleSubmit=e=>{
    e.preventDefault()
    this.addUser(this.state.user)
  }
  render() {
    if(this.state.redirection) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="addImage vh-100 vw-100">
       <div  className="widthStyle ml-auto mr-auto">
           <Row className="ml-auto ">
           <h3 >Login</h3></Row>
           <form onSubmit={this.handleSubmit} >
             <p><input type="email"  placeholder="Email"  onChange={e=>this.setState({user: {...this.state.user,email:e.target.value}})} value={this.state.user.email} className="w-75 p-2 "/></p>
             <p><input type="password"  placeholder="Password" onChange={e=>this.setState({user: {...this.state.user,password:e.target.value}})} value={this.state.user.password} className="w-75 p-2 "/></p>
             <button type="submit" className="btn btn-info ml-auto mr-auto" >Submit</button>
           </form>
      </div>
    </div>
    );
  }
}

export default Login
