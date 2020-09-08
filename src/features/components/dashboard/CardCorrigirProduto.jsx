import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './css/CardDashboard.css';
import ImgCorrProduct from '../../../image/corrigindo-produtos.png';
import Image from '../Image';

const qtdProductCorrigir = 44;

const CardCorrigirProduto = () => {
  return (
    <Col className="card-step card-step-ibisco" xs={12} sm={3}>
      <Row>
        <Col className="card-step-title">Corrigir Produtos</Col>
      </Row>
      <Row className="card-step-content">
        <Col>
          <Image
            src={ImgCorrProduct}
            className="card-step-content-image"
            width={50}
            alt="Mulher com planilha para corrigir produtos"
          />
        </Col>
        <Col className="card-step-content-total">{qtdProductCorrigir}</Col>
      </Row>
    </Col>
  );
};

export default CardCorrigirProduto;
