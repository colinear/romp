import React from 'react';
import Icon from './Icon.js';
import '../styles/Header.css';

const Header = props => {
  return (
    <header className="Header">
        <h1 className="Header-title">Welcome to React</h1>
        <Icon />
    </header>
  );
};

export default Header;