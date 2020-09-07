import React from "react";
import { Container, Row, Col, Table, Accordion, Card } from "react-bootstrap";
import { Header, Menu } from "../features/components/Index";

const pedidos = [
  {
    pedido: 25,
    cliente: 'Joãozinho do Brasil',
    origem: 'OLX',
    data: '05/09/2020',
    total: '1.000,00',
    produtos: [
      {
        imagem: '',
        nome: '',
        marca: '',
        referencia: '',
        custo: '',
        valor:'',
        qtd: '',
        total: '',
      }
    ]
  },
]

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
          {pedidos.map(pedido => (
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle variant="link" eventKey="0">
                    <span>Pedido: {pedido.pedido}</span>
                    <span>Cliente: {pedido.pedido}</span>
                    <span>Origem: {pedido.pedido}</span>
                    <span>Data: {pedido.pedido}</span>
                    <span>Total: 1.000,00</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    PASSOS
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
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Username</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td colSpan="2">Larry the Bird</td>
                                  <td>@twitter</td>
                                </tr>
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
