import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Dashboard/Dashboard'
import './App.css';
import CarouselExample from './Components/Navbar/Carousel';
import MultipleCarousel from './Components/Navbar/CarouselMultiple';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Navbar/>
      {/* </header> */}
      <CarouselExample/>
      {/* <MultipleCarousel/> */}
    </div>
  );
}

export default App;
