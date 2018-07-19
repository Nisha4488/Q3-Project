import React from 'react';
import {
Navbar,
NavbarBrand,
} from 'reactstrap';

export default class Example extends React.Component {
render() {
    return (
     <div>
       <Navbar color="info" light expand="md" className="fixed-bottom">
         <NavbarBrand href="/">&copy; 2018</NavbarBrand>
       </Navbar>
     </div>
    );
  }
}
