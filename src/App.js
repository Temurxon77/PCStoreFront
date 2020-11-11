import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';

import './App.css';
import CarouselExample from './Components/Navbar/Carousel';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Navbar/>
      {/* </header> */}
      <CarouselExample/>
      <Body/>
      {/* <RecipeReviewCard /> */}
      <Footer/>
    </div>
  );
}

export default App;
