import React from "react";
import logo from "../../assets/img/logo.png";
import "./style.css";
const path =
  window.location.hostname !== "localhost" ? "/fiap_react_17mob/" : "/";
const Header = () => (
  <header className="header">
    <a id="voltar" name="voltar" href={path}>
      <img
        src={logo}
        className="header__logo"
        alt="Bem Vindo, ao mercado livre"
      />
    </a>
  </header>
);

export default Header;
