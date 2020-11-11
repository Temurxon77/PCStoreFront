import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import MainCarouselPage from './Components/Carousel/carousel'
import './App.css';
import CarouselPage from './Components/Carousel/Minicarusel';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
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
