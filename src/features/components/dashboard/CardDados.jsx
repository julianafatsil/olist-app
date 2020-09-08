import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardDados = () => {
  return (
    <Col className="card-step" sm={12} lg={6}>
        <Row>
            <Col className="card-step-title"></Col>
        </Row>
            <Col className="card-step"></Col>
        <Row className="card-step-content">
            <Col></Col>
            <Col className="card-step-content-total"></Col>
        </Row>
    </Col>
  );
}

export default CardDados;
