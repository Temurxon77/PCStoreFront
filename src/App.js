import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Dashboard/Dashboard'
import './App.css';

import CarouselExampleMultiple from './Components/Navbar/CarouselMultiple';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';
import Viewpager from './Components/Body/spring'
function App() {
  return (
    <div className="App">

       <Navbar/>
 
      <Body/>
      <Viewpager/>
   
      <Footer/>
  
    </div>
  );
}

export default App;
