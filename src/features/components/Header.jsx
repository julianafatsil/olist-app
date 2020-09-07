import React from 'react';
import '../../styles/Header.css';
import CardRank from './CardRank';
import Image from './Image';
import Logo from '../../image/logo-olist.svg';
import Olistinho from '../../image/olistinho-feliz.png';
import CardNotification from './CardNotification';

const onClickBars = () => {
  document.getElementById('menu').classList.toggle('menu');
  document.getElementById('menu').classList.toggle('menu-fechado');
}

const onClickBell = () => {
  document.getElementById('notification').classList.toggle('ds-block');  
}

const Header = () => {
  return (
  <div className="container-header">
    <div className="container-header-logo">
    <i class="fa fa-bars" onClick={onClickBars} aria-hidden="true"></i>
      <Image src={Logo} width={80} />
    </div>

    <CardRank />
    <div className="container-header-right">
      <i class="fa fa-bell" aria-hidden="true" onClick={onClickBell}></i>
      <div className="container-header-right-config">
        <Image src={Olistinho} width={35} />
      </div>

      {<CardNotification />}
    </div>
  </div>
  );
}

export default Header;
