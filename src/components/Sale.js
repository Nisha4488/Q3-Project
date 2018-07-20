import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
  } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import {If} from 'react-if';
  import { connect } from 'react-redux'
  import SaleCountDown from './SaleCountDown'
  import {getDiscountedPrice} from '../utils'

const Sale = (props) => {
  const user = props.user || {};
return (
  <div >
    <Card className="my-5 ml-auto mr-auto ">
      <CardImg top width="100%" className="imgStyle" img src={props.sale.img_url} alt="Card image cap" />
      <CardBody>
        <CardTitle className="text-center mb-4">{props.sale.name}</CardTitle>
        <Container >
        <p>
        <Row>
        <Col xs="6" ><CardSubtitle className="font-weight-bold">Regular Price:</CardSubtitle></Col>
        <Col xs="6"><CardSubtitle>${props.sale.regular_price}</CardSubtitle></Col>
        </Row></p>
        <p><Row >
        <Col xs="6" ><CardSubtitle className="font-weight-bold">Discounted Price:</CardSubtitle></Col>
        <Col xs="6"><CardSubtitle>${getDiscountedPrice(props.sale.regular_price, props.sale.units_sold)}</CardSubtitle></Col>
        </Row></p>
        <p><Row>
        <Col><CardSubtitle className="font-weight-bold">Units Sold:</CardSubtitle></Col>
        <Col><CardSubtitle>{props.sale.units_sold}</CardSubtitle></Col>
        </Row></p>
        <p><Row>
        <Col><CardSubtitle className="font-weight-bold">Sale Ends:</CardSubtitle></Col>
        <Col><CardSubtitle><SaleCountDown timestamp={props.sale.end_at}/></CardSubtitle></Col>
        </Row></p>
        <Row>
          <Col ><Button className="btn btn-info buttonStyle mb-1"><Link className="text-white" to={`/sales/${props.sale.id}`}>View</Link></Button></Col>
          <Col ><Button className="btn btn-info buttonStyle"><Link className="text-white" to={`/buy/${props.sale.id}`}>Buy</Link></Button></Col>
          </Row>
          <If condition={user.admin}>
            <Row>
              <Col className="text-center mt-3"><Button className="btn btn-seconday buttonStyle mb-1"><Link className="text-white" to={`/sales/${props.sale.id}/edit`}>Edit</Link></Button></Col>
            </Row>
            </If>
        </Container>
        </CardBody>
    </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.sso
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

const SaleComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sale)

export default SaleComp;
