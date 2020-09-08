import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getImage, PassoHelp } from '../functions/CardHelp';
import Image from './Image';
import Button from './Button';
import '../../styles/CardHelp.css';

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
          {<Image src={getImage(step)} width={100} alt={PassoHelp[step].Titulo} className="card-help-image-step" />}
        </div>

        <div>
        <Image
          src={getImage(-1)}
          alt="Olistinho está engatinhando até o final para concluir a apresentação do sistema Olist"
          className="card-help-img-olistinho"
          width={100}
          style={{position: 'relative', left: `${-200 + (step * 40)}px`}}
        />
        </div>

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
