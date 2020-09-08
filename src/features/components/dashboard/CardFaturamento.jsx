import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';
import ImgFaturamento from '../../../image/faturamento.png';
import Image from '../Image';

const qtdFaturamento = 5;
const CardFaturamento = () => {
  return (
    <Col className="card-step card-step-yellow" lg={3} md={6} sm={12}>
      <Row>
        <Col className="card-step-title">Aguardando faturamento</Col>
      </Row>
      <Row className="card-step-content">
        <Col>
          <Image
            className="card-step-content-image"
            width={100}
            src={ImgFaturamento}
            alt="Imagem com computador, com um pedido aberto, um pote de vidro com moedas, saco verde com o simbolo de dólar"
          />
        </Col>
        <Col className="card-step-content-total">{qtdFaturamento}</Col>
      </Row>
    </Col>
  );
};

export default CardFaturamento;
