import React, { Component } from 'react';
import Logo from './images/logo.png';
import Twitter from './images/twitter.png';
import Dribble from "./images/Driblle.png";
import Instagram from "./images/instagram.png";
class MainPage extends Component {
  render() {
    return (
      <header>
        <a href='https://kriesi.at/themes/enfold-elegant-portfolio/'>
          <img src={Logo} alt='logo' title='logo' className='Logo' />
        </a>


        <div className='div1'>
          <ul className='Pages'>
            <li className='Home'>
              <a href='' className='Home_Button'>
                Home
              </a>
            </li>
            <li className='About'>
              <a href=''>About</a>
            </li>

            <li className='Blog'>
              <a href=''>Blog</a>
            </li>

            <li className='Contact'>
              <a href=''>Contact</a>
            </li>
          </ul>

          <ul className='images'>
            <li className='twitter'>
              <a href=''>
                <img src={Twitter} alt='twitter' title='twitter' className='twitter_image' />
              </a>
            </li>

            <li className='Dribble'>
              <a href="">
                <img src={Dribble} alt='Dribble' title='Dribble' className='Dribble_image' />
              </a>
            </li>  

            <li className='Instagram'>
              <a href="">
                <img src={Instagram} alt="Instagram" title='Instagram' className='Instagram_image'/>
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default MainPage;
