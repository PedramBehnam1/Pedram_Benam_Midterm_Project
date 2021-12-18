//import logo from './logo.svg'
import React from 'react';
import MainPage from './MainPage';
import './App.css';
import {
  Routes ,
  Route,
  
} from "react-router-dom";
// import Home component
import Home from "./MainPage";
// import About component
import About from "./AboutPage";
// import Blog component
import Blog from "./BlogPage";
// import Contact component
import Contact from "./ContactPage";

function App() {
  return (
    <div className='App'>
      <div id='wrapper'>
        
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
