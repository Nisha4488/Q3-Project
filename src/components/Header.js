import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { connect } from 'react-redux'
import {If} from 'react-if';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const user = this.props.user || {};
    console.log('this.props.user ', this.props.user)
    return (
      <div>
        <Navbar color="info" light expand="md" className="fixed-top">
          <NavbarBrand href="/"><h1>Co Buy</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink><h4><Link className="text-white" to={`/newsale`}>Create Sale</Link></h4></NavLink>
                </NavItem>
              <NavItem>
                <NavLink><h4><Link className="text-white" to={`/home`}>Home</Link></h4></NavLink>
              </NavItem>
                <NavItem>
                  <NavLink><h4><Link className="text-white" to={`/login`}>Login</Link></h4></NavLink>
                </NavItem>
              <NavItem>
                <NavLink><h4><Link className="text-white" to={`/register`}>Register</Link></h4></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><h4><Link className="text-white" to={`/about`}>How it works</Link></h4></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.sso
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

const HeaderComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderComp;
