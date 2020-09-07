import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardCorrigirProduto = () => {
  return (
    <Col className="card-step">
        <Row>
            <Col className="card-step-title">OI</Col>
        </Row>
            <Col className="card-step">OI</Col>
        <Row className="card-step-content">
            <Col>Uma</Col>
            <Col className="card-step-content-total">Duas</Col>
        </Row>
    </Col>
  );
}

export default CardCorrigirProduto;
