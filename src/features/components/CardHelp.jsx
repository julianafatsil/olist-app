import React, { useState } from 'react';
import Engatinhando from '../../image/olistinho-engatinhando.png';
import Image from './Image';
import Button from './Button';
import { Redirect } from 'react-router-dom';
import '../../styles/CardHelp.css';

const PassoHelp = [
  {
    Titulo: 'Cadastro rápido de produtos',
    Paragrafo:
      'São mais de 500 mil anúncios que já estão prontos! Você apenas informa o código de barras, preço, estoque e começa a vender em menos de um minuto.',
  },
  {
    Titulo: 'Análise de competitividade',
    Paragrafo:
      'Encontre os menores preços praticados nos marketplaces para seus produtos. Conte com nossa pesquisa de mercado para ganhar da concorrência.',
  },
  {
    Titulo: 'Categorização automática de produtos',
    Paragrafo:
      'Não sabe qual a categoria do seu produto? Nosso sistema de inteligência artificial faz a categorização automática para você.',
  },
  {
    Titulo: 'Perguntas do Mercado Livre',
    Paragrafo:
      'Tire todas as dúvidas de seus compradores sem sair da plataforma. Facilidade para converter pedidos de forma mais rápida.',
  },
  {
    Titulo: 'Geração de etiquetas de postagem',
    Paragrafo:
      'Emita e imprima a etiqueta de envio dos pedidos direto na plataforma, com todos os dados do consumidor.',
  },
  {
    Titulo: 'Geração de etiquetas de postagem',
    Paragrafo:
      'Emita e imprima a etiqueta de envio dos pedidos direto na plataforma, com todos os dados do consumidor.',
  },
  {
    Titulo: 'Exceções Logísticas',
    Paragrafo:
      'De maneira simples, trate rapidamente e da melhor forma a operação de todos os pedidos que possam ter exceções logísticas em sua entrega.',
  },
  {
    Titulo: 'Dashboard operacional',
    Paragrafo:
      'Em uma apenas uma tela tenha a disposição todos os dados e estatísticas sobre produtos, pedidos, estoque e performance.',
  },
  {
    Titulo: 'Integração para Nota Fiscal*',
    Paragrafo:
      'Gere a Nota Fiscal em seu sistema usual e fature de maneira automática seu pedido preparando o envio de maneira rápida. *Confira os sistemas parceiros.',
  },
];

const getImage = (codigoInage) => {
  switch(codigoInage) {
    default:
      return <Image src={Engatinhando} width={100} alt={PassoHelp[codigoInage].Titulo} className="card-help-image-step" />
      break;
  }
}

const CardHelp = () => {
  const [step, setStep] = useState(0);
  const [isRedirect, setIsRedirect] = useState(false);
  const [redirectPage, setRedirectPage] = useState('/');

  if (isRedirect) return <Redirect to={redirectPage} />;
  return (
    <div className="help">
      <div className="card-help">
        <h1>{PassoHelp[step].Titulo}</h1>

        <div className="card-help-description">
          <p>{PassoHelp[step].Paragrafo}</p>
          {getImage(step)}
        </div>

        <Image
          src={Engatinhando}
          alt="Olistinho está engatinhando até o final para concluir a apresentação do sistema Olist"
          className="card-help-img-olistinho"
          width={100}
        />

        <div className="card-help-progress">
          <Button
            className="btn-previous"
            onClick={() => {
              const newStep = step - 1;
              if (newStep === -1) {
                setIsRedirect(true);
              } else {
                setStep(newStep);
              }
            }}
          >
            Anterior
          </Button>

          <div className="card-help-barra">
            <div
              className="card-help-barra"
              style={{
                background: '#18C329',
                width: `${(100 / PassoHelp.length) * (step + 1)}%`,
              }}
            ></div>
          </div>

          <Button
            className="btn-next"
            onClick={() => {
              const newStep = step + 1;
              if (newStep > PassoHelp.length - 1) {
                setRedirectPage('/dashboard');
                setIsRedirect(true);
              } else {
                setStep(newStep);
              }
            }}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardHelp;
