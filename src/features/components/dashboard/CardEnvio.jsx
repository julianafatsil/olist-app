import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';
import ImgEnvio from '../../../image/aguardando-envio.png';
import Image from '../Image';

const qtdEnvio = 2;

const CardEnvio = () => {
  return (
    <Col className="card-step card-step-orange" lg={3} md={6} sm={12}>
        <Row>
            <Col className="card-step-title">Aguardando Envio</Col>
        </Row>
        <Row className="card-step-content">
            <Col><Image
            src={ImgEnvio}
            className="card-step-content-image"
            width={100}
            alt="Demostração de produtos sendo embalados para envio para os clientes"
          /></Col>
            <Col className="card-step-content-total">{qtdEnvio}</Col>
        </Row>
    </Col>
  );
}

export default CardEnvio;
