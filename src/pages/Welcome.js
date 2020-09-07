import React, { Component, useState } from 'react';
import Image from '../features/components/Image';
import Olistinho from '../image/olistinho-feliz.png';
import { Redirect } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome = () => {
  const [isRedirect, setIsRedirect] = useState(false);

  if (isRedirect) return <Redirect to="/dashboard" />;

  setTimeout(() => {
    setIsRedirect(true);
  }, 2000);

  return (
    <div className="container-welcome">
      <Image
        src={Olistinho}
        alt="Seja Bem vindo(a) a platforma da Olist, sou o Olistinho e estou aqui para lhe acompanhar nessa nova jornada"
      />
      <h2>Ola! Tudo pronto, Vamos começar!</h2>
    </div>
  );
};

export default Welcome;
