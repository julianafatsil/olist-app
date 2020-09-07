import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardTransito = () => {
  return (
    <Col className="card-step">
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

export default CardTransito;
