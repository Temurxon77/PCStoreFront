import React from "react";


const MainCarouselPage = () => {
  return (
 
    <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel">
   
      <ol className="carousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" className="active"></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>
    
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <video className="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="carousel-item">
          <video className="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="carousel-item">
          <video className="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
          </video>
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