import React, { Component } from 'react';
import Logo from './images/logo.png';
import Twitter from './images/twitter.png';
import Dribble from "./images/Driblle.png";
import Instagram from "./images/instagram.png";
import Logo_8 from "./images/logo-8.jpg";
import Mockup_1 from "./images/mockup-1.jpg";
import Logo_4 from "./images/logo-4.jpg";
import Mockup_4 from "./images/mockup-4.jpg";
import Logo_2 from "./images/logo-2.jpg";
import Mockup_2 from "./images/mockup-2.jpg";
import Logo_7 from "./images/logo-7.jpg";
import Mockup_7 from "./images/mockup-7.jpg";
import Logo_6 from "./images/logo-6.jpg";
import Mockup_3 from "./images/mockup-3.jpg";
import Logo_3 from "./images/logo-3.jpg";
import Mockup_8 from "./images/mockup-8.jpg";
import Logo_5 from "./images/logo-5.jpg";
import Mockup_6 from "./images/mockup-6.jpg";
import Logo_1 from "./images/logo-1.jpg";
import Twitter1 from "./images/Twitter-2.png";
import facebook from "./images/facebook.png";
import dribbble_1 from "./images/dribbble-1.png";
import instagram_1 from "./images/instagram-1.png";
import linkedin from "./images/linkedin.png";
import sms from "./images/SMS.png";
import Star from "./images/star.png";
class MainPage extends Component {
  render() {
    return (
      <div>
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

        <article>
          <section className='paraghraph'>
            
            <h3 className='h3'>
             Hi! I am Max and this is my portfolio. I can help you build a thriving business.
             Don’t be shy, get in touch!
            </h3>

          </section>


          <section id='image1'>
            <a href=""><img src={Logo_8} alt="logo-8" title='logo-8' id='logo-8' /> </a>
            <a href=""><img src={Mockup_1} alt="mockup-1" title='mockup-1' id='mockup-1' /> </a>
            <a href=""><img src={Logo_4} alt="logo-4" title='logo-4' id='logo-4' /> </a>
            <a href=""><img src={Mockup_4} alt="mockup-4" title='mockup-4' id='mockup-4' /> </a>
            <a href=""><img src={Logo_2} alt="logo-2" title='logo-2' id='logo-2' /> </a>
          </section>

          <section id='image2'>
            <a href=""><img src={Mockup_2} alt="mockup-2" title='mockup-2' id='mockup-2' /> </a>
            <a href=""><img src={Logo_7} alt="logo-7" title='logo-7' id='logo-7' /> </a>
            <a href=""><img src={Mockup_7} alt="mockup-7" title='mockup-7' id='mockup-7' /> </a>
            <a href=""><img src={Logo_6} alt="logo-6" title='logo-6' id='logo-6' /> </a>
            <a href=""><img src={Mockup_3} alt="mockup-3" title='mockup-3' id='mockup-3' /> </a>
          </section>

          <section id='image3'>
            <a href="" ><img src={Logo_3} alt="logo-3" title='logo-3' id='logo-3' /> </a>
            <a href=""><img src={Mockup_8} alt="mockup-8" title='mockup-8' id='mockup-8' /> </a>
            <a href=""><img src={Logo_5} alt="logo-5" title='logo-5' id='logo-5' /> </a>
            <a href=""><img src={Mockup_6} alt="mockup-6" title='mockup-6' id='mockup-6' /> </a>
            <a href=""><img src={Logo_1} alt="logo-1" title='logo-1' id='logo-1' /> </a>
          </section>

          <section id='image4'>
            <div id='div2'>
              <a href="#" ><img src={Twitter1} alt="Twitter" id='Twitter_Icon' /></a>  
            </div>

            <a href="#" ><img src={facebook} alt="facebook" id='facebook' /></a>
            <div id='div3'>
              <a href="#" ><img src={dribbble_1} alt="dribbble" id='dribbble-1' /></a>
            </div>

            <div id='div4'>
              <a href="#" ><img src={instagram_1} alt="Inastagram" id='instagram-1' /></a>
            </div>

            <a href="#" ><img src={linkedin} alt="linkedin" id='linkedin' /></a>

            <div id='div5'>
              <a href="#" ><img src={sms} alt="SMS" id='sms' /></a>
            </div>
          </section>
          
          <section className='section1'>
            <p id='p1'></p>
            <img src={Star} alt="Star" id='star' />
            <p id='p2'></p>

          </section>

        </article>
      </div>
    );
  }
}

export default MainPage;
