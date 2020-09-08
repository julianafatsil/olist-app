import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Header, Menu, CardHelp, Button, Image } from '../features/components/Index';
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
import Feliz from '../image/olistinho-feliz.png';

const New = ({setLocal}) => {
  return (
    <div className="new">
      <div className="new-content">
        <div className="new-content-gray">
          <Image src={Feliz} width={80} />
          <h1>Oi! Essa é o Olistinho, o bebê virtual que vai guiar seus primeiros passos na Olist! </h1>
        </div>
        <div className="new-content-progress">
          <Button
            className="btn-previous"
            onClick={() =>{
              setLocal(true);
            }}
          >
            Quero explorar a Olist
          </Button>
          <Button
            className="btn-next"
          >
            Conheça as vantagens da Olist
          </Button>

          <Button
            className="btn-next"
          >
           Quero cadastrar produtos
          </Button>

          <Button
            className="btn-next"
          >
            Preciso acessar diário de bordo 
          </Button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [local, setLocal ] = useState(false);
  return (
    <React.Fragment>
      {(!local ? <New setLocal={setLocal} /> : '')}
      {(local ? <CardHelp /> : '')}
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
