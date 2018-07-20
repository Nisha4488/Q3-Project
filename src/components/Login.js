import React from 'react';
import {index} from '../index.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Row } from 'reactstrap';
import { withCookies, Cookies } from 'react-cookie';

class Login extends React.Component {
  state={
    message: '',
    user: {
      email:'',
      password:'',
    },
    redirection: false,
  }
  authUser=async user=>{
    const response = await axios.post(`http://localhost:8000/users/login`, user);
    const error = response.data.error;
    if(error) {
      this.setState({message: error})
    } else {
      const token = response.data.token;
      // Write token into cookie
      const { cookies } = this.props;
      cookies.set('token', token, { path: '/' });
      this.setState({redirection: true})
    }
  }
  handleSubmit=e=>{
    e.preventDefault()
    this.authUser(this.state.user)
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
           <div class="text-danger mt-1 mb-1">{this.state.message} </div>
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
export default withCookies(Login);
