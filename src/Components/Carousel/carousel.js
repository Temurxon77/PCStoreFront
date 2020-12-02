import React, { useEffect } from "react";
import './carousel.css';

import { Button } from '@material-ui/core';
import photo from '../Images/car1.jpg';
import photo1 from '../Images/car2.jpg';
import photo2 from '../Images/car3.jpg';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    
    backgroundColor: 'black'

  },
 
}));

const MainCarouselPage = () => {
  const classes = useStyles();
  useEffect(() => {
    window.onload = myMove();
  }, []);
  function myMove() {

  }
  return (

    <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel" style={{marginTop: '-10px'}}>

      <ol className="carousel-indicators" id="myCarousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" className="active" ></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" id="carouselInner" role="listbox"> 

        <div className="carousel-item active" >
          <div >

            <img className="card-img-top" id="images" src={photo} />
            
            <div className="top-left"><h1>predator helios 300</h1></div>
            <div className="promoTitle"><h5 >Helios 300 gives you everything you need for battle with an incredibly fast display with a 240Hz refresh rate1 and a 3ms response time2. The device now features NVIDIA® GeForce RTX ™ 2070 graphics with Max-Q1 design, 10th Gen Intel® Core ™ i7 mobile processor1 and our dedicated 4th Gen AeroBlade ™ 3D cooling system</h5>
            </div>
            <div className="mainbutton"><Button className="button">shop now!</Button></div>
          </div>

        </div>

        <div className="carousel-item">
          <div>
            <img className="card-img-top" src={photo1} />
            <div className="top-left"><h1>tuf gaming</h1></div>
            <div className="promoTitle"><h5 >TUF Gaming VG279Q1A Gaming Monitor –27 inch Full HD (1920x1080), IPS, 165Hz (above 144Hz), Extreme Low Motion Blur™, Adaptive-sync, FreeSync™ Premium, 1ms (MPRT)</h5>
            </div>
           
            <div className="mainbutton1"><Button className="button">shop now!</Button></div>
          </div>
        </div>

        <div className="carousel-item">
          <div>
           
            <img className="card-img-top" src={photo2} />
            <div className="top-left"><h1 >MSI MEG Z490 Godlike</h1></div>
           <div className="promoTitle"><h5>High-end motherboards may cost a fortune, but if you’ve got something like the MSI MEG Z490 Godlike under the hood, you’re pretty much guaranteed top-notch performance, especially if you’ve got Intel components. As long as you’re willing to pay the price. In fact, we’d go as far as to say that this is the best z490 board out there right now, with an excellent thermal solution, staggering overclocking performance, easy installation and diagnostic solutions for do-it-yourself-ers, and a solid build</h5>
           </div>
           <div className="mainbutton2"><Button className="button">shop now!</Button></div>
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
    </div>
  );
}

export default MainCarouselPage;