import React from "react";
import { Alert } from "react-bootstrap";
import Image from "../components/Image";
import ImgOlistinhoGatinhandoFeliz from "../../image/olistinho-gatinhando-feliz.png";

function MensagensNotificacao({ typeMessage, message, isLink = false }) {
  return (
    <Alert variant={typeMessage}>
      <Image
        src={ImgOlistinhoGatinhandoFeliz}
        alt="Olistinho engatinhando para frente animado!"
        width="70"
      />
      {message}
      {(isLink ? <Alert.Link href="/order">{' Vamos lá!!'}</Alert.Link>  : '')}
      
    </Alert>
  );
}

export default MensagensNotificacao;
