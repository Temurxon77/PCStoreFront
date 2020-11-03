import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';

import './App.css';
import CarouselExample from './Components/Navbar/Carousel';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Navbar/>
      {/* </header> */}
      <CarouselExample/>
    </div>
  );
}

export default App;
