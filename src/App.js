import React, { Component, Suspense, lazy } from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainCarouselPage from './Components/Carousel/carousel'
import './App.css';
import CarouselPage from './Components/Carousel/Minicarusel';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';
import Spring from './Components/Spring/spring';
// import Preloader from './Components/Preloader/preloader';
import Preloader from './Components/Spring/spring'

function App() {
  return (
    <div className="App">

      {/* <Navbar/> */}    
      {/* <Body/> */}

      <Preloader/>
      <MainCarouselPage/>
      <CarouselPage/>
      
      {/* <Footer/>  */}

    </div>
  );
}

export default App;
