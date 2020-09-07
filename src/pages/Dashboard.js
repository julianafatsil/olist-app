import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { CardPerguntas, CardNotProduct } from '../features/components/Index';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={6}>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Col>OI</Col>
          </Row>
          <Row>
            <Col>Uma</Col>
            <Col>Duas</Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col>OI</Col>
          </Row>
          <Row>
            <Col>Uma</Col>
            <Col>Duas</Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col>OI</Col>
          </Row>
          <Row>
            <Col>Uma</Col>
            <Col>Duas</Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col>OI</Col>
          </Row>
          <Row>
            <Col>Uma</Col>
            <Col>Duas</Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <CardPerguntas />
        <Col>1 of 1</Col>
      </Row>

      <Row>
        <Col sm={6}>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
