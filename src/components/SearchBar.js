import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';

class SearchBar extends React.Component{
  render(){
    return(
      <div>
      <FormGroup>
      <Input type="text" onChange={e=>this.props.updateFilterPhraseFunc(e.target.value)}  placeholder="Filter for what you're looking for here"/>
        <FormGroup row>
          <Label xs={2}><h4>Sort By:</h4></Label>
          <Col xs={10}>
          <Input type="select" onChange={e=>this.setState({sortBy:e.target.value})}>
              <option>--Select--</option>
              <option> Name</option>
              <option> Regular Price</option>
              <option> Discounted Price</option>
          </Input>
          </Col>
       </FormGroup>
      </FormGroup>
      </div>
    )
  }
}

export default SearchBar
