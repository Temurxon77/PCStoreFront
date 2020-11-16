import React from "react";
import './carousel.css';
import { bubble as Menu } from 'react-burger-menu';
import { Button } from '@material-ui/core';
import Chernovik from '../chernovik/chernovik';
import photo from '../Images/1slide.jpg';
import photo1 from '../Images/2slide.jpg';
import photo2 from '../Images/3slide.jpg';
const MainCarouselPage = () => {
  return (
 
    <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel" style={{marginTop: -10, height: '1000px'}}>
   
      <ol className="carousel-indicators" id="myCarousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" className="active" ></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>
    
    <div className="carousel-inner" role="listbox">
        <h1>GIGABYTE</h1>  
      <div className="carousel-item active">      
        <img className="card-img-top"  src={photo}/>       
      </div>

      <div className="carousel-item">
        <img className="card-img-top" src={photo1}/> 
      </div>
        
        
      <div className="carousel-item">
        <img className="card-img-top" src={photo2}/>
      </div>
    </div>
     
      <a className="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
  
    </div>
  
  );
}

export default MainCarouselPage;