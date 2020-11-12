import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import MainCarouselPage from './Components/Carousel/carousel'
import './App.css';
import CarouselPage from './Components/Carousel/Minicarusel';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';

import Preloader from './Components/Preloader/preloader'

function App() {
  return (
    <div className="App">
      <Preloader/>
     
      <Navbar/>
    
       {/* <Body/> */}
      <MainCarouselPage/>
      <CarouselPage/>
      <Footer/> 
  {/* <MultiCarouselPage/> */}
    </div>
  );
}

export default App;
