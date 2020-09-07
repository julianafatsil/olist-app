import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header, Menu } from '../features/components/Index';
import {
  CardPerguntas,
  CardNotProduct,
  CardFaturamento,
  CardEstoque,
  CardEnvio,
  CardTransito,
  CardCorrigirProduto,
  CardProductCadastrado,
  CardDados,
  CardMap,
  CardFinanceiro,
  CardNotas,
} from '../features/components/dashboard/Index';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col sm={2} id="js-menu">
            <Menu />
          </Col>
          <Col>
          <Row>
            <CardMap />
            <CardNotas />
            <CardFinanceiro />
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
            <CardDados />
            <CardProductCadastrado />
            <CardCorrigirProduto />
          </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
