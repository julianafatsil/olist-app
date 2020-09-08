import React from 'react';
import './css/Header.css';
import MensagensNotificacao from '../../functions/MensagensNotificacao';

const CardNotification = () => {
  return (
  <div id="notification" className="container-notification">
    <h1 className="ontainer-notification-h1">Notificações</h1>
    <MensagensNotificacao typeMessage="warning" message="O Olistinho está faminto por venda, existem 5 pedidos esperando para faturamento! Vamos lá!" isLink={true} />
    <MensagensNotificacao typeMessage="warning" message="Existem 44 produtos para corrigir o cadastro, vamos corrigir esses produtos para aumentar suas vendas!!" />
    <MensagensNotificacao typeMessage="warning" message="Existem 344 produtos para ajustar o estoque, bora lá!." />
  </div>
  );
}

export default CardNotification;
