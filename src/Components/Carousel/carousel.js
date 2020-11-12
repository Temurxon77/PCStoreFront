import React from "react";
import './carousel.css';
import photo from './1.jpeg';
import photo1 from '../Images/6010356488.jpg';
import photo2 from '../Images/123.jpg';
const MainCarouselPage = () => {
  return (
 
    <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel" style={{marginTop: 0, height: '710px'}}>
   
      <ol className="carousel-indicators" id="myCarousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" className="active" ></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>
    
      <div className="carousel-inner" role="listbox" style={{height: '100%'}}>
        <div className="carousel-item active">         
        <img className="card-img-top" src={photo}/>       
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