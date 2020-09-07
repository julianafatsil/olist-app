import React from 'react';
import '../../styles/Header.css';
import CardRank from './CardRank';

const Header = () => {
  return (
  <div className="container-header">
    <p>MENU LOGO</p>
    <CardRank />
    <div className="container-header-right">
      <i class="fa fa-bell" aria-hidden="true"></i>
      <p>CONFIG</p>
    </div>
  </div>
  );
}

export default Header;
