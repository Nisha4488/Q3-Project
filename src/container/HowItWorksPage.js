import React, { Component } from 'react';
import axios from 'axios'
import HowItWorks from './../components/HowItWorks'
class HowItWorksPage extends Component {
  render(){
    return(
      <div className="pageContainer">
      <HowItWorks/>
      </div>
    )
  }

}

export default HowItWorksPage;
