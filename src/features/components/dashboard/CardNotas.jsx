import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';

const CardNotas = () => {
  const dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
  const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
  const now = new Date
  return (
    <Col className="card-step card-step-white">
      <h4 className="card-step-title-agenda">{dayName[now.getDay()]}, {now.getDate ()} de {monName[now.getMonth()]} de {now.getFullYear()}</h4>
    </Col>
  );
}

export default CardNotas;
