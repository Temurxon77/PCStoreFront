import React from "react";


const MainCarouselPage = () => {
  return (
 
    <div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">
   
      <ol class="carousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" class="active"></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>
    
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <video class="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="carousel-item">
          <video class="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="carousel-item">
          <video class="video-fluid" autoplay loop muted>
            <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
     
      <a class="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
  
    </div>
  
  );
}

export default MainCarouselPage;