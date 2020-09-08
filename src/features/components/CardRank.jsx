import React from "react";
import "./header/css/Header.css";
import { OverlayTrigger, Tooltip, Button, Image } from "react-bootstrap";
import OlistinhoFeliz from "../../image/olistinho-feliz.png";
import Moedinhas from '../../image/moedinha.png';

const CardRank = () => {
  return (
    <div className="container-rank">
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <Button
            variant="light"
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
           <Image src={Moedinhas} alt="Moedinhas" width={40} />
          </Button>
        )}
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <Button
            variant="light"
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
            <i ref={ref} class="fa fa-heart" aria-hidden="true"></i>
          </Button>
        )}
      </OverlayTrigger>

      <OverlayTrigger className="toltip"
        placement="bottom"
        overlay={
          <Tooltip id="button-tooltip-2">
            <Image
              src={OlistinhoFeliz}
              alt="Olistinho muito feliz!!"
              width="30"
            />
            Uhuuu! Você tem 20 estrelinhas! Faltam só 5 estrelas para receber seu cupom de 5%! 
          </Tooltip>
        }
      >
        {({ ref, ...triggerHandler }) => (
          <Button
            variant="light"
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
            <i ref={ref} class="fa fa-star" aria-hidden="true"></i>
          </Button>
        )}
      </OverlayTrigger>
    </div>
  );
};

export default CardRank;
