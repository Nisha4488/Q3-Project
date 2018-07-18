import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class Register extends React.Component{
  state={
    user: {
      first_name:'',
      last_name:'',
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
  render(){
    if(this.state.redirection) {
      return <Redirect to="/home" />;
    }
  return (
    <div className="addImage">
     <div className="widthStyle ml-auto mr-auto">
      <p><h3>Register</h3></p>
        <form onSubmit={this.handleSubmit}>
          <p><input type="text" placeholder="First Name" onChange={e=>this.setState({user: {...this.state.user,first_name:e.target.value}})} value={this.state.user.first_name} className="w-75 p-2 mb-2 "/></p>
          <p><input type="text"  placeholder="Last Name" onChange={e=>this.setState({user: {...this.state.user,last_name:e.target.value}})} value={this.state.user.last_name} className="w-75 p-2 " /></p>
          <p><input type="email"  placeholder="Email" onChange={e=>this.setState({user: {...this.state.user,email:e.target.value}})} value={this.state.user.email} className="w-75 p-2 "/></p>
          <p><input type="password" placeholder="Password" onChange={e=>this.setState({user: {...this.state.user,password:e.target.value}})} value={this.state.user.password} className="w-75 p-2 "/></p>
          <p><button type="submit" className="btn btn-primary">Submit</button></p>
        </form>
      </div>
    </div>
  )
 }
}

export default Register
