import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Dashboard/Dashboard'
import './App.css';

import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';

function App() {
  return (
    <div className="App">

       <Navbar/>
    
      <Body/>

   
      <Footer/>
  
    </div>
  );
}

export default App;
