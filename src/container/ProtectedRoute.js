import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux'
import { updateUserData } from '../redux/actions'

class ProtectedRoute extends React.Component {
  state={
    user: {},
    loading: true,
  }
  async componentDidMount(){
    const { cookies } = this.props;
    const token = cookies.get('token');
    const params = {
      headers: {
        token
      }
    };
    const response = await axios.get('http://localhost:8000/users/check-session', params);
    const user = response.data;
    if(!user.error) {
      this.props.updateSsoData(user);  
    }
    this.setState({loading: false, user})
  }
  render() {
    const {
            location: { pathname },
            component: Component,
            token,
            ...rest
          } = this.props;
    if (this.state.loading) {
      return <div>I am protected page </div>
    }
    const error = this.state.user.error;
    return !error ? (
            <Route
              {...rest}
              render={(matchProps) => <Component {...matchProps} />}
            />
          ) : (
            <Redirect to={`/login?from=${pathname}`} />
          )
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateSsoData: user => {
      dispatch(updateUserData(user))
    }
  }
}
const RouteComponent = withRouter(withCookies(ProtectedRoute));

const ProtectedRouteComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteComponent)

export default ProtectedRouteComp;
