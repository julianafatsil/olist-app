import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardLarg = () => {
  return (
    <Col className="container-larg card-step-white" md={6}>
      <Row>
        <Col md={3}>Gráfico</Col>  
        <Col className="container-larg-title-left">Perguntas Concluídas</Col>  
      </Row>  
    </Col>
  );
}

export default CardLarg;
