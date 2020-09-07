import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardNotProduct = () => {
  return (
    <Col className="container-larg card-step-white">
      <Row>
        <Col sm={10} className="container-larg-title-center">Produtos Sem Estoque</Col>  
        <Col className="card-step-content-total container-larg-total">344</Col>  
      </Row>
    </Col>
  );
}

export default CardNotProduct;
