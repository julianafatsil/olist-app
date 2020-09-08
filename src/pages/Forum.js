import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header, Menu } from "../features/components/Index";

const Forum = () => {
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
            <Row>FORUM</Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Forum;
