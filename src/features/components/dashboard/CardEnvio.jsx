import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardEnvio = () => {
  return (
    <Col className="card-step" lg={3} md={6} sm={12}>
        <Row>
            <Col className="card-step-title">OI</Col>
        </Row>
        <Row className="card-step-content">
            <Col>Uma</Col>
            <Col className="card-step-content-total">Duas</Col>
        </Row>
    </Col>
  );
}

export default CardEnvio;
