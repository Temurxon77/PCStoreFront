import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Dashboard/Dashboard'
import './App.css';

import CarouselExampleMultiple from './Components/Navbar/CarouselMultiple';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Navbar/>
      {/* </header> */}
   
      {/* <CarouselExampleMultiple/> */}
      {/* <RecipeReviewCard /> */}
      <Footer/>
    </div>
  );
}

export default App;
