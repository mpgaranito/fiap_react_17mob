import React from 'react'
import logo from '../../assets/img/logo.png'
import './style.css';

const Header = () => (

    <header className="header"  >
     
        <a id="voltar" name="voltar" href="/"><img src={logo} className="header__logo" alt="Bem Vindo, ao mercado livre" /></a>
    
    </header> 
);

export default Header; 