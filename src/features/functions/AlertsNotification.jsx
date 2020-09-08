import React from 'react';
import { Alert } from 'react-bootstrap';
import Image from '../components/Image';
import ImgOlistinhoPreocupado from '../../image/olistinho-preocupado.png';
import ImgOlistinhoFeliz from '../../image/olistinho-feliz.png';
import ImgOlistinhoGatinhandoFeliz from '../../image/olistinho-gatinhando-feliz.png';

function AlertsNotification({ typeMessage }) {
  const fechar = (event) => {
    document.getElementById(event).remove();
  }
      switch (typeMessage) {
      case 'danger':
        return (
          <Alert variant="danger" id="danger" onClose={() => fechar('danger')} dismissible>
            <Alert.Heading>
              <Image
                src={ImgOlistinhoPreocupado}
                alt="Olistinho muito preocupado!"
                width="70"
              >
                Oh não! Há 44 pedidos com erros!
              </Image>
            </Alert.Heading>
            <p>
              Vamos lá!! Corrija o cadastro de seus produtos, para que possam
              ser visualizados pelos seus clientes!
            </p>
          </Alert>
        );
        break;
      case 'success':
        return (
          <Alert variant="success" id="success" onClose={(event) => fechar('success')} dismissible>
            <Alert.Heading>
              <Image
                src={ImgOlistinhoFeliz}
                alt="Olistinho muito feliz!"
                width="70"
              >
                Uhuuu! Você atingiu o objetivo!
              </Image>
            </Alert.Heading>
            <p>
              Parabéns!! Você conseguiu atingir a meta! Você ganhou um cupom de
              5% de desconto!
            </p>
          </Alert>
        );
        break;
      case 'warning':
        return (
          <Alert variant="warning" id="warning" onClose={() => fechar('warning')} dismissible>
            <Alert.Heading>
              <Image
                src={ImgOlistinhoGatinhandoFeliz}
                alt="Olistinho dando atenção!"
                width="70"
              >
                Fique atento! Há 5 Pedidos aguardando faturamento!
              </Image>
            </Alert.Heading>
            <p>
              Vamos lá!!  Fazer o faturamento agora mesmo! Você vai ganhar pontos e
              lucrar muito mais!
            </p>
          </Alert>
        );
        break;
        default:
          return '';
          break;
    }
}

export default AlertsNotification;
