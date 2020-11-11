import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';

import './App.css';

import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';
import CarouselPage from './Components/Carousel/carousel';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <Navbar/> */}
      <CarouselPage/>
      {/* <Body/>

   
      <Footer/> */}
  
    </div>
  );
}

export default App;
