import React from "react";
import { Row, Col } from "react-bootstrap";
import "./css/Header.css";
import CardRank from "../CardRank";
import Image from "../Image";
import Logo from "../../../image/logo-olist.svg";
import Olistinho from "../../../image/olistinho-feliz.png";
import CardNotification from "./CardNotification";

const onClickBars = () => {
  document.getElementById("js-menu").classList.toggle("ds-none");
};

const onClickBell = () => {
  document.getElementById("notification").classList.toggle("ds-block");
};

const Header = () => {
  return (
    <Col className="header">
      <Row>
        <Col sm={1} className="header-logo">
          <i class="fa fa-bars" onClick={onClickBars} aria-hidden="true"></i>
          <Image src={Logo} width={80} />
        </Col>

        <Col sm={4}></Col>

        <Col sm={2}>
          <CardRank />
        </Col>

        <Col sm={4}></Col>

        <Col sm={1} className="header-config">
          <i class="fa fa-bell" aria-hidden="true" onClick={onClickBell}></i>
          <Image src={Olistinho} width={35} className="header-config-image" />
        </Col>
      </Row>
      <CardNotification />
    </Col>
  );
};

export default Header;
