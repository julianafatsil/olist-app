import React from 'react';
import '../../styles/Header.css';
import CardRank from './CardRank';
import Image from './Image';
import Logo from '../../image/logo-olist.svg';
import Olistinho from '../../image/olistinho-feliz.png';

const onClick = () => {
  if (document.getElementById('menu').classList == 'menu') {
    document.getElementById('menu').classList = 'menu-fechado';
  } else {
    document.getElementById('menu').classList = 'menu';
  }
}

const Header = () => {
  return (
  <div className="container-header">
    <div className="container-header-logo">
    <i class="fa fa-bars" onClick={onClick} aria-hidden="true"></i>
      <Image src={Logo} width={80} />
    </div>

    <CardRank />
    <div className="container-header-right">
      <i class="fa fa-bell" aria-hidden="true"></i>
      <div className="container-header-right-config">
        <Image src={Olistinho} width={35} />
      </div>
    </div>
  </div>
  );
}

export default Header;
