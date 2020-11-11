import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';

import './App.css';
import CarouselExample from './Components/Navbar/Carousel';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';
import Viewpager from './Components/Body/spring'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Navbar/>
    
      <CarouselExample/>
      <Body/>
      <Viewpager/>
   
      <Footer/>
  
    </div>
  );
}

export default App;
