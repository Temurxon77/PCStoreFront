import React from 'react';

import Navbar from './Components/Navbar/Navbar';

import './App.css';

import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';
import MainCarouselPage from './Components/Carousel/carousel';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar/>
      <MainCarouselPage/>
      <Body/>

   
      <Footer/>
  
    </div>
  );
}

export default App;
