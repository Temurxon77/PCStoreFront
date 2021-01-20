import React, { Component, Suspense, lazy } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/carousel'
import './App.css';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';
import Spring from './Components/Spring/spring';
import Preloader from './Components/Preloader/preloader';
import News from './Components/NewGoods/news'
import MainCarouselPage from './Components/Carousel/carousel'
import ProductPage from './Components/Products/products'



function App() {

  return (
    <div className="App">
      <Navbar/>        
      <MainCarouselPage/>   
      <Body/>
      <News/>
    </div>
  );
}

export default App;
