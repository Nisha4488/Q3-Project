import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';

class SearchBar extends React.Component{
  render(){
    return(
      <div className="mt-3 mr-auto ml-auto" style={{maxWidth: 400}}>
       <FormGroup >
        <Input type="text" onChange={e=>this.props.updateFilterPhraseFunc(e.target.value)}  placeholder="Filter for what you're looking for here" />
       </FormGroup>
       <FormGroup row className="mt-3 ">
        <Label xs={4}><h4>Sort By:</h4></Label>
         <Col xs={8}>
          <Input type="select" onChange={e=>this.props.sortSalesBy(e.target.value)}>
            <option value="">--Select--</option>
            <option value="name"> Name</option>
            <option value="regular_price"> Regular Price</option>
            <option value="discounted_price"> Discounted Price</option>
          </Input>
         </Col>
        </FormGroup>
       </div>
     )
  }
}

export default SearchBar
