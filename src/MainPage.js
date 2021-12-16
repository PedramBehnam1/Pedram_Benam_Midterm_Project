import React, { Component } from 'react';
import Logo from './images/logo.png';

class MainPage extends Component {
  render() {
    return (
      <header>
        <a href='https://kriesi.at/themes/enfold-elegant-portfolio/'>
          <img src={Logo} alt='logo' title='logo' className='Logo' />
        </a>

        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default MainPage;
