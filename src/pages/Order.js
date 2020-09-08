import React, { useState } from "react";
import { Container, Row, Col, Table, Accordion, Card } from "react-bootstrap";
import { Header, Menu } from "../features/components/Index";
import AlertsNotification from '../features/functions/AlertsNotification';
import "../styles/Order.css";

const pedidos = [
  {
    pedido: 25,
    cliente: "Joãozinho do Brasil",
    origem: "OLX",
    data: "05/09/2020",
    total: "1.000,00",
    passo: 0,
    produtos: [
      {
        imagem: "",
        nome: "Celular XE9",
        marca: "XE9",
        referencia: "Bloco 5",
        custo: "500,00",
        valor: "1.000,00",
        qtd: "1",
        total: "1.000,00",
      },
    ],
  },
  {
    pedido: 26,
    cliente: "Joãozinho do Brasil",
    origem: "OLX",
    data: "05/09/2020",
    total: "1.500,00",
    passo: 0,
    produtos: [
      {
        imagem: "",
        nome: "TV 32",
        marca: "AOC",
        referencia: "Bloco 9",
        custo: "850,00",
        valor: "1.500,00",
        qtd: "1",
        total: "1.500,00",
      },
    ],
  },
];

const Order = () => {
  const [ isAlert, setIsAlert ] = useState(false);

  const atualizarPedido = (step) => {
    const newStep =`Passo${step}`;
    const limit = `timeline${step}`;

    if (!document.getElementById(newStep).classList.contains('fa-check-circle')) {
      document.getElementById(newStep).classList.toggle('fa-minus-circle');
      document.getElementById(newStep).classList.toggle('fa-check-circle');
    }
    if (!document.getElementById(limit).classList.contains('icon-sucess')) {
      document.getElementById(limit).classList.toggle('icon-default');
      document.getElementById(limit).classList.toggle('icon-sucess');
    }
    setIsAlert(false);
    setIsAlert(true);
  }

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
            {pedidos.map((pedido, index) => (
              <Accordion defaultActiveKey="0" key={pedido.pedido}>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle variant="link" eventKey="0">
                      <span>Pedido: {pedido.pedido}</span>
                      <span>Cliente: {pedido.cliente}</span>
                      <span>Origem: {pedido.origem}</span>
                      <span>Data: {pedido.data}</span>
                      <span>Total: {pedido.total}</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {/* PASSOS */}

                      <div className="container">
                        <div class="row">
                          <div class="main-timeline">
                            <div class="timeline">
                              <div class="timeline-inner">
                                <div class="timeline-content">
                                  <div class="post">Pedido Realizado</div>
                                </div>
                                <div class="timeline-icon icon-sucess" id={`timeline0${index}`}>
                                  <i
                                    id={`Passo0${index}`}
                                    class="fa fa-check-circle"
                                    aria-hidden="true"
                                    onClick={()=> {
                                      atualizarPedido(`0${index}`);
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>

                            <div class="timeline">
                              <div class="timeline-inner">
                                <div class="timeline-content">
                                  <div class="post">Aguardando Pagamento</div>
                                </div>
                                <div class="timeline-icon icon-default" id={`timeline1${index}`}>
                                  <i
                                    class="fa fa-minus-circle"
                                    aria-hidden="true"
                                    id={`Passo1${index}`}
                                    onClick={()=> {
                                      atualizarPedido(`1${index}`);
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>

                            <div class="timeline">
                              <div class="timeline-inner">
                                <div class="timeline-content">
                                  <div class="post">Pedido em Produlção</div>
                                </div>
                                <div class="timeline-icon icon-default" id={`timeline2${index}`}>
                                  <i
                                    id={`Passo2${index}`}
                                    class="fa fa-minus-circle"
                                    aria-hidden="true"
                                    onClick={()=> {
                                      atualizarPedido(`2${index}`);
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>

                            <div class="timeline">
                              <div class="timeline-inner">
                                <div class="timeline-content">
                                  <div class="post">Aguardando Enviado</div>
                                </div>
                                <div class="timeline-icon icon-default" id={`timeline3${index}`}>
                                  <i
                                    id={`Passo3${index}`}
                                    class="fa fa-minus-circle"
                                    aria-hidden="true"
                                    onClick={()=> {
                                      atualizarPedido(`3${index}`);
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>

                            <div class="timeline">
                              <div class="timeline-inner">
                                <div class="timeline-content">
                                  <div class="post">Pedido Entregue</div>
                                </div>
                                <div class="timeline-icon icon-default" id={`timeline4${index}`}>
                                  <i
                                    id={`Passo4${index}`}
                                    class="fa fa-minus-circle"
                                    aria-hidden="true"
                                    onClick={()=> {
                                      atualizarPedido(`4${index}`);
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Accordion defaultActiveKey="1">
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle variant="link" eventKey="0">
                              Produtos
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Produto</th>
                                    <th>Marca</th>
                                    <th>Referência</th>
                                    <th>Custo</th>
                                    <th>Valor</th>
                                    <th>Valor</th>
                                    <th>Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {pedido.produtos.map((produto) => (
                                    <tr key={produto.nome}>
                                      <td>{produto.imagem}</td>
                                      <td>{produto.nome}</td>
                                      <td>{produto.marca}</td>
                                      <td>{produto.referencia}</td>
                                      <td>{produto.custo}</td>
                                      <td>{produto.valor}</td>
                                      <td>{produto.qtd}</td>
                                      <td>{produto.total}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
          </Col>
        </Row>
      </Container>
      {(isAlert ? <AlertsNotification typeMessage="success" /> : '')}
    </React.Fragment>
  );
};

export default Order;
