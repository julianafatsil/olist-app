import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';
import ImgEnvio from '../../../image/em-transito.png';
import Image from '../Image';

const qtdEmTransito = 8;

const CardTransito = () => {
  return (
    <Col className="card-step card-step-green">
      <Row>
        <Col className="card-step-title">Em trânsito</Col>
      </Row>
      <Row className="card-step-content">
        <Col>
          <Image
            src={ImgEnvio}
            className="card-step-content-image"
            width={100}
            alt="Caminhão roxo ilustrativo, com caixas para envio"
          />
        </Col>
        <Col className="card-step-content-total">{qtdEmTransito}</Col>
      </Row>
    </Col>
  );
};

export default CardTransito;
