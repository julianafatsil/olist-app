import React from "react";
import { Container, Row, Col, Table, Accordion, Card } from "react-bootstrap";
import { Header, Menu } from "../features/components/Index";
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
        nome: "",
        marca: "",
        referencia: "",
        custo: "",
        valor: "",
        qtd: "",
        total: "",
      },
    ],
  },
  {
    pedido: 26,
    cliente: "Joãozinho do Brasil",
    origem: "OLX",
    data: "05/09/2020",
    total: "1.000,00",
    passo: 0,
    produtos: [
      {
        imagem: "",
        nome: "",
        marca: "",
        referencia: "",
        custo: "",
        valor: "",
        qtd: "",
        total: "",
      },
    ],
  },
];

const Order = () => {
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
            {pedidos.map((pedido) => (
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

                      <div class="container">
                        <div class="row">
                          <div class="main-timeline">
                            <div class="timeline">
                              <div class="timeline-inner">
                                <div class="timeline-content">
                                  <div class="post">Pedido Realizado</div>
                                </div>
                                <div class="timeline-icon icon-sucess">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>

                            <div class="timeline">
                              <div class="timeline-inner">
                                <div class="timeline-content">
                                  <div class="post">Aguardando Pagamento</div>
                                </div>
                                <div class="timeline-icon">
                                  <i class="fa fa-rocket"></i>
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
    </React.Fragment>
  );
};

export default Order;
