import React, { Component, Suspense, lazy } from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainCarouselPage from './Components/Carousel/carousel'
import './App.css';
import CarouselPage from './Components/Carousel/Minicarusel';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/body';
import Spring from './Components/Spring/spring';
import Preloader from './Components/Preloader/preloader';
// import Preloader from './Components/Spring/spring';

import ProductPage from './Components/Products/products'



function App() {

  // function alertSize() {
  //   var clientSizes = {
  //     myWidth: 0,
  //     myHeight: 0
  //   }
  //   var myWidth = 0, myHeight = 0;
  //   if( typeof( window.innerWidth ) == 'number' ) {
  //     //Non-IE
  //     clientSizes.myWidth = window.innerWidth;
  //     clientSizes.myHeight = window.innerHeight;
  //   } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
  //     //IE 6+ in 'standards compliant mode'
  //     clientSizes.myWidth = document.documentElement.clientWidth;
  //     clientSizes.myHeight = document.documentElement.clientHeight;
  //   } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
  //     //IE 4 compatible
  //     clientSizes.myWidth = document.body.clientWidth;
  //     clientSizes.myHeight = document.body.clientHeight;
  //   }
  //   // window.alert( 'Width = ' + clientSizes.myWidth );
  //   // window.alert( 'Height = ' + clientSizes.myHeight );
  //   return clientSizes;
  // }
  // window.onload = alertSize();
  // function scrollEvent(){
  //   if(document.body.scrollTop >  2000|| document.documentElement.scrollTop > 2000){
  //     // alert('Hey it\'s working!');
  //   }else {
  //     //console.log(alertSize());
  //   }
  // }
  // window.onscroll = function() { scrollEvent() };
  return (
    <div className="App">
    {/* <Preloader/>  */}
      <Navbar/>    
      
      <MainCarouselPage/>
   
      {/* <CarouselPage/> */}
      <Body/>
      {/* <ProductPage/> */}
        
      {/* <Footer/>  */}

    </div>
  );
}

export default App;
