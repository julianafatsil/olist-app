import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

const Menu = () => {
  return (
    <div class="bg-light border-right" id="menu">
    <div class="list-group list-group-flush">
    <Link className="list-group-item list-group-item-action bg-light menu-link" to="/dashboard"><i class="fa fa-home" aria-hidden="true"></i> Diário de bordo</Link>
    <Link className="list-group-item list-group-item-action bg-light menu-link" to="/order"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Pedidos</Link>
    <Link className="list-group-item list-group-item-action bg-light menu-link" to="/product"><i class="fa fa-archive" aria-hidden="true"></i> Produtos</Link>
    <Link className="list-group-item list-group-item-action bg-light menu-link" to="/questions"><i class="fa fa-question" aria-hidden="true"></i> Perguntas</Link>
    <Link className="list-group-item list-group-item-action bg-light menu-link" to="/"><i class="fa fa-usd" aria-hidden="true"></i> Financeiro</Link>
    <Link className="list-group-item list-group-item-action bg-light menu-link" to="/forum"><i class="fa fa-comments" aria-hidden="true"></i> Fórum</Link>
    </div>
  </div>
  );
}

export default Menu;