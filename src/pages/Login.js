import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Input from '../features/components/Input';
import Button from '../features/components/Button';
import Image from '../features/components/Image';
import logoOlist from '../image/logo-olist.svg';
import mobile from '../image/mobile.png';
import googlePlay from '../image/google-play.png';
import appStore from '../image/app-store.png';
import '../styles/login.css';

const Login = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  if (isRedirect) return <Redirect to="/welcome" />;

  return (
    <div className="login">
      <div className="login-app">
        <Image alt="Celular de cor verde água" src={mobile} width="100px" />

        <h3>conheça o novo aplicativo olist </h3>
        <span>
          Acesse sua conta do olist pelo celular e tenha mais tempo para focar
          na competitividade da sua loja.
        </span>
        <div className="login-app-dowload">
          <Image className="login-user-image-link" alt="Simbolo do Google Play" src={googlePlay} width="150px" />
          <Image className="login-user-image-link" alt="Simbolo App Store" src={appStore} width="150px" />
        </div>
      </div>

      <div className="login-user">
        <div className="login-user-card">
        <Image alt="Logo da Olist" src={logoOlist} width="100px" className="login-app-olist" />

        <label className="login-user-card-text" htmlFor="email">email</label>
        <Input
          type="email"
          value="Oliviadutra@gmail.com"
          id="email"
          name="email"
        />

        <div className="login-user-pass">
          <label className="login-user-card-text" htmlFor="senha">senha</label>
          <span className="login-user-redefinir-senha" >redefinir sua senha</span>
        </div>
        <Input
          type="password"
          value="123"
          id="senha"
          name="senha"
        />
        <div>
        <Button
          onClick={() => {
            setIsRedirect(true);
          }}
          className="btn-primary"
        >
          entrar
        </Button>
        </div>
        <div className="login-user-new-client">
        <span>
          Não é um cliente olist? <Link className="login-user-redefinir-senha" to="/"> Crie sua conta. </Link>
        </span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
