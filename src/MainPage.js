import React , {Component } from  'react';
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

import {  Link } from 'react-router-dom';

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
                <Link className='Home_Button' to="/">Home</Link>
              </li>
              <li className='About'>
              
                <Link to="/about">About</Link>
              
              </li>

              <li className='Blog'>
               
                <Link to="/blog">Blog</Link>
              
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

        <article id='article'>
          <section className='paraghraph'>
            
            <h3 className='h3'>
             Hi! I am Max and this is my portfolio. I can help you build a thriving business.
             Don’t be shy, get in touch!
            </h3>

          </section>


          <section id='image1'>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-1/"><img src={Logo_8} alt="logo-8" title='logo-8' id='logo-8' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-2/"><img src={Mockup_1} alt="mockup-1" title='mockup-1' id='mockup-1' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-3/"><img src={Logo_4} alt="logo-4" title='logo-4' id='logo-4' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-4/"><img src={Mockup_4} alt="mockup-4" title='mockup-4' id='mockup-4' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-5/"><img src={Logo_2} alt="logo-2" title='logo-2' id='logo-2' /> </a>
          </section>

          <section id='image2'>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-6/"><img src={Mockup_2} alt="mockup-2" title='mockup-2' id='mockup-2' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-7/"><img src={Logo_7} alt="logo-7" title='logo-7' id='logo-7' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-8/"><img src={Mockup_7} alt="mockup-7" title='mockup-7' id='mockup-7' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-9/"><img src={Logo_6} alt="logo-6" title='logo-6' id='logo-6' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-10/"><img src={Mockup_3} alt="mockup-3" title='mockup-3' id='mockup-3' /> </a>
          </section>

          <section id='image3'>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-11/" ><img src={Logo_3} alt="logo-3" title='logo-3' id='logo-3' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-12/"><img src={Mockup_8} alt="mockup-8" title='mockup-8' id='mockup-8' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-13/"><img src={Logo_5} alt="logo-5" title='logo-5' id='logo-5' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry-14/"><img src={Mockup_6} alt="mockup-6" title='mockup-6' id='mockup-6' /> </a>
            <a href="https://kriesi.at/themes/enfold-elegant-portfolio/portfolio-item/a-dummy-portfolio-entry/"><img src={Logo_1} alt="logo-1" title='logo-1' id='logo-1' /> </a>
          </section>

        </article>


        <footer >
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

        <section className='section2'>
            <h4 id='h4'>Subscribe</h4>
            <p id='p3'>Get our latest news, tips and tricks</p>

            <div id='div6'>
              <form >
                <input name='Email' type="text" defaultValue="E-Mail*"  id='email_Text'/>
                <button type='submit' id='btn1'> Submit</button>
              </form>
            </div>
        </section>

        <section className="section3">
          <a href="#" id='About'>About</a>
          <p>|</p>
          <a href="#" id='Imprint'>Imprint</a>
          <p>|</p>
          <a href="#" id='Contact'>Contact</a>
          <p>|</p>
          <a href="https://kriesi.at/privacy-policy" id='Privacy_Policy'>Privacy Policy</a>
        </section>

        <section className="lastSection">
          <a href="https://kriesi.at/" id='a1'>© 2018 Enfold by Kriesi</a>
        </section>

      </footer> 
      </div>
    );
  }
}

export default MainPage;
