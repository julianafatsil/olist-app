import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { CardPerguntas, CardNotProduct, CardFaturamento, CardEstoque, CardEnvio, CardTransito, CardCorrigirProduto } from '../features/components/dashboard/Index';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={6}>1 of 1</Col>
        <Col sm={12} md={3}>1 of 1</Col>
        <Col sm={12} md={3}>1 of 1</Col>
      </Row>

      <Row>
        <CardFaturamento />
        <CardEstoque />
        <CardEnvio />
        <CardTransito />
      </Row>

      <Row>
        <CardPerguntas />
        <CardNotProduct />
      </Row>

      <Row>
        <Col sm={6} >1 of 1</Col>
        <Col>1 of 1</Col>
        <CardCorrigirProduto />
      </Row>
    </Container>
  );
}

export default Dashboard;
