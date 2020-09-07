import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardDados = () => {
  return (
    <Col className="card-step" sm={12} lg={6}>
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

export default CardDados;
