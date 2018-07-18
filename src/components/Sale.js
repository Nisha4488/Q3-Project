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
  import SaleCountDown from './SaleCountDown'
  import {getDiscountedPrice} from '../utils'

const Sale = (props) => {
return (
  <div >
    <Card className="my-5 ">
      <CardImg top width="100%" img src={props.sale.img_url} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.sale.name}</CardTitle>
        <Container>
        <p><Row>
        <Col><CardSubtitle>Regular Price:</CardSubtitle></Col>
        <Col><CardSubtitle>${props.sale.regular_price}</CardSubtitle></Col>
        </Row></p>
        <p><Row>
        <Col><CardSubtitle>Discount Price:</CardSubtitle></Col>
        <Col><CardSubtitle>${getDiscountedPrice(props.sale.regular_price, props.sale.units_sold)}</CardSubtitle></Col>
        </Row></p>
        <p><Row>
        <Col><CardSubtitle>Units Sold:</CardSubtitle></Col>
        <Col><CardSubtitle>{props.sale.units_sold}</CardSubtitle></Col>
        </Row></p>
        <p><Row>
        <Col><CardSubtitle>Sale Ends:</CardSubtitle></Col>
        <Col><CardSubtitle><SaleCountDown timestamp={props.sale.end_at}/></CardSubtitle></Col>
        </Row></p>
        <Row>
          <Col > <Button className="btn btn-info buttonStyle mb-1"><Link to={`/sales/${props.sale.id}`}>View</Link></Button></Col>
          <Col ><Button className="btn btn-info buttonStyle " onClick ={()=>props.addToCartFunc(props.sale.id)}>Buy</Button></Col>
          </Row>
        </Container>
        </CardBody>
    </Card>
    </div>
  );
};

export default Sale;
