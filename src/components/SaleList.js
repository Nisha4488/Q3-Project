import React from 'react'
import {Row, Col} from 'reactstrap';
import Sale from './Sale'
import { updateUserData } from './../redux/actions'
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux'
import {withRouter,  Route, Switch } from 'react-router-dom'
import axios from 'axios'

class SaleList extends React.Component {
  state={
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
    const props = this.props;
      let listOfSales = props.sales.map(sale =>(<Col xs="12" sm="12" md="6" ><Sale key={sale.id} sale={sale} addToCartFunc={props.addToCartFunc}/></Col>))
      return (
        <div className="addImage">
          <Row className="  container ml-auto mr-auto  w-100">
            {listOfSales}
          </Row>
        </div>
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

const SaleListComponent = withRouter(withCookies(SaleList));

const SaleListComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaleListComponent)
export default SaleListComp
