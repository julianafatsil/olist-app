import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import Image from '../components/Image';
import ImgOlistinhoPreocupado from '../../../src/image/olistinho-preocupado';
import ImgOlistinhoFeliz from '../../../src/image/olistinho-feliz';
import ImgOlistinhoGatinhandoFeliz from '../../../src/image/olistinho-gatinhando-feliz';

function AlertDismissibleExample(typeMessage) {
  const [show, setShow] = useState(true);

  if (show) {
      switch (typeMessage) {
        case 'danger':
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>
            <Image
              src={ImgOlistinhoPreocupado}
              alt="Olistinho muito preocupado!"
              width="15"
            >
              Oh não! Há 44 pedidos com erros!
            </Image>
          </Alert.Heading>
          <p>
            Vamos lá!! Corrija o cadastro de seus produtos, para que possam ser
            visualizados pelos seus clientes!
          </p>
        </Alert>
          break;
      case 'sucess':
        <Alert variant="sucess" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          <Image
            src={ImgOlistinhoFeliz}
            alt="Olistinho muito feliz!"
            width="15"
          >
            Uhuuu! Você atingiu o objetivo!
          </Image>
        </Alert.Heading>
        <p>
          Parabéns!! Você conseguiu atingir a meta! você ganhou um cupom de 5% de desconto!
        </p>
      </Alert>
      break;
       default:
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          <Image
            src={ImgOlistinhoGatinhandoFeliz}
            alt="Olistinho dando atenção!"
            width="15"
          >
            Fique atento! Há 5 Pedidos aguardando faturamento!
          </Image>
        </Alert.Heading>
        <p>
          Vamos lá fazer o faturamento agora mesmo!Você vai ganhar pontos e lucrar muito!
        </p>
      </Alert>
      break;
      }
     
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

render(<AlertDismissibleExample />);

export default AlertsNotification;
