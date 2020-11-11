import React from "react";

import photo from './1.jpeg';
import photo1 from '../Images/6010356488.jpg';
import photo2 from '../Images/123.jpg';
const MainCarouselPage = () => {
  return (
 
    <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel" style={{marginTop: '60px', height: '930px'}}>
   
      <ol className="carousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0"></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>
    
      <div className="carousel-inner" role="listbox" style={{height: '99%'}}>
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