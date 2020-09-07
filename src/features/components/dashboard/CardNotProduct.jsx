import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardNotProduct = () => {
  return (
    <Col className="container-larg">
      <Row>
        <Col sm={8} className="container-larg-title-sem-prod">Produtos Sem Estoque</Col>  
        <Col className="container-total">344</Col>  
      </Row>
    </Col>
  );
}

export default CardNotProduct;
