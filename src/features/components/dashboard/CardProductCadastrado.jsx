import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardProductCadastrado = () => {
  return (
    <Col className="card-step card-step-white">
        <Row>
            <Col className="card-step-title">Produtos Cadastrados</Col>
        </Row>
        <Row className="card-step-content">
            <Col className="card-step-content-total-sem">340 <span className="card-step-content-total-sem-mini">de 10.000</span></Col>
        </Row>
    </Col>
  );
}

export default CardProductCadastrado;
