import React, { Component } from 'react';
import './Blog.css';
import {  Link } from 'react-router-dom';

import Logo from './images/logo.png';
import Twitter from './images/twitter.png';
import Dribble from "./images/Driblle.png";
import Instagram from "./images/instagram.png";

class AboutPage extends Component {
 render() {
  return(
   <div>
    <header>
     <a href='https://kriesi.at/themes/enfold-elegant-portfolio/'>
       <img src={Logo} alt='logo' title='logo' className='Logo' />
     </a>

     <div className='div1'>
       <ul className='Pages'>
        
         <li className='Home1'>
            <Link className='Home_Button1' to="/">Home</Link>     
         </li>
         <li className='About'>
         
           <Link className='About_Button' to="/about">About</Link>
         
         </li>

         <li className='Blog1'>
          
           <Link className='Blog_Button' to="/blog">Blog</Link>
         
         </li>

         <li className='Contact'>
          
           <Link to="/contact">Contact</Link>
         
         </li>
       </ul>


       <ul className='images'>
        <li className='twitter'>
          <a href="https://twitter.com/#/">
            <img src={Twitter} alt='twitter' title='twitter' className='twitter_image' />
          </a>
        </li>

        <li className='Dribble'>
          <a href="https://dribbble.com/">
            <img src={Dribble} alt='Dribble' title='Dribble' className='Dribble_image' />
          </a>
        </li>  

        <li className='Instagram'>
          <a href="#">
            <img src={Instagram} alt="Instagram" title='Instagram' className='Instagram_image'/>
          </a>
        </li>
      </ul>

     </div>
      

    </header>
   </div>

  );
 }
}

export default AboutPage;