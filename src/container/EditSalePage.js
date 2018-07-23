import React from 'react'
import axios from 'axios'
import EditSale from '../components/EditSale'

class EditSalePage extends React.Component{
  state={sale:null}
  async componentDidMount(){
      const saleResponse =await axios.get(`http://localhost:8000/sales/${this.props.match.params.id}`)
      this.setState({sale:saleResponse.data[0]})
  }
  render(){
  if(!this.state.sale) {
    return <div>Loading sale.....</div>
  }
  return(
    <div className="pageContainer">
      <EditSale sale={this.state.sale}/>
    </div>
  )
}
}
export default EditSalePage
