import React, { Component } from 'react';
import './About.css';
import Logo from './images/logo.png';
import {  Link } from 'react-router-dom';

import Twitter from './images/twitter.png';
import Dribble from "./images/Driblle.png";
import Instagram from "./images/instagram.png";
import Logo20 from "./images/logo20.PNG";
import Logo21 from "./images/logo-21.PNG";
import Logo22 from "./images/logo-22.PNG";
import Twitter1 from "./images/Twitter-2.png";
import facebook from "./images/facebook.png";
import dribbble_1 from "./images/dribbble-1.png";
import instagram_1 from "./images/instagram-1.png";
import linkedin from "./images/linkedin.png";
import sms from "./images/SMS.png";
import Star from "./images/star.png";

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
              <li className='About1'>
              
                <Link className='About_Button' to="/about">About</Link>
              
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

      <article id='article1'>
        <section className='paraghraph'>
          <h3 className='h3'>A little bit about me and how I became the designer I am today</h3>
        </section>

        <section className='Date'>
          <p>1981</p>
          <p>1991</p>
          <p>2001</p>
        </section>

        <section className='icon'>
          <img src={Logo20} alt="Logo-20" title='Logo-20' className='Logo-20' />
          <p>-----------------------------------</p>
          <img src={Logo21} alt="Logo-21" title='Logo-21' className='Logo-21'/>
          <p>-----------------------------------</p>
          <img src={Logo22} alt="Logo-22" title='Logo-22' className='Logo-22'/>
        </section>

        <section className='section4'>
          <div>
            <h4>Birth</h4>
            <p>
              <br />
            I was born in a small town in Texas called Lorem. Ipsum dolor sit amet, consectetuer adipiscing elitdolor sit. Aenean commodo ligula eget dolor.
            </p>
          </div>

          <div>
           <h4>First Steps</h4>
            <p>
              <br />
              I took my first steps in enim justo, rhoncus ut, imperdiet a, dolor sit venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
          </div>

          <div>
           <h4>College</h4>
            <p>
              <br />
              I started college in 2001. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>
          </div>  
        </section>


        <section className='section5'>
          <div>
            <h4>What I can do for you</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetuer <strong id='str1'>adipiscing</strong> elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br />
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>

          </div>

          <div>
            <h4>How i usually work</h4>
            <p>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.<br />
              Lorem ipsum dolor sit amet, consectetuer <strong id='str1'>adipiscing</strong> elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>

          </div>
        </section>

        <section className='section6'>
          <div id='div6'>
            <h4>Skills</h4>
            <p>Aenean vulputate eleifend tellus.<strong id='str1'>Aenean</strong> leo ligula, porttitor eu, <strong id='str1'>consequat</strong> vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>

            <ul>
              <li>Nullam felis eu pede mollis pretium.</li>
              <li>Integer tincidunt. Cras dapibusc onsectetuer adipiscing eli.</li>
              <li>Vivamus elementum semper nisi.</li>
              <li>Vivamus elementum semper nisi.</li>
            </ul>

            <p>
            Aenean massa. Cum sociis natoque penatibus et magnis dis <strong id='str2'><a href="https://kriesi.at/themes/enfold-elegant-portfolio/about/">parturient</a></strong> montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>

          </div>

          <div  className='div7'>
              <h4 id='h4-1'>LOGO DESIGN</h4>
              <div className='div6-1'>
                <div id='div6_2'></div>
              </div>
              
              <h4 id='h4-2'>BRAND DESIGN</h4>
              <div className='div6-1'>
                <div id='div6_2'></div>
              </div>

              <h4 id='h4-1'>WEB DESIGN</h4>
              <div className='div6-3'>
                <div id='div6_4'></div>
              </div>

              <h4 id='h4-1'>CONTENT CREATION</h4>
              <div className='div6-5'>
                <div id='div6_6'></div>
              </div>
          </div>
        </section>

         
      </article>

      <footer>
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

export default AboutPage;