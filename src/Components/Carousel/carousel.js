import React, { useEffect } from "react";
import './carousel.css';

import { Button } from '@material-ui/core';
import photo from '../Images/car1.jpg';
import photo1 from '../Images/car1.jpg';
import photo2 from '../Images/car1.jpg';
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

    <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel" style={{ height: '890px'}}>

      <ol className="carousel-indicators" id="myCarousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" className="active" ></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" id="carouselInner" role="listbox" style={{ height: '100%', width: '100%' }}>

        <div className="carousel-item active" >
          <div >

            <img className="card-img-top" src={photo} />
            
            <div className="top-left"><h1>predator helios 300</h1></div>
            <div className="promoTitle"><h5 >Helios 300 gives you everything you need for battle with an incredibly fast display with a 240Hz refresh rate1 and a 3ms response time2. The device now features NVIDIA® GeForce RTX ™ 2070 graphics with Max-Q1 design, 10th Gen Intel® Core ™ i7 mobile processor1 and our dedicated 4th Gen AeroBlade ™ 3D cooling system</h5>
            </div>
            <Button className="mainbutton">Принять</Button>
          </div>

        </div>

        <div className="carousel-item">
          <div>
            <img className="card-img-top" src={photo1} />
            <div className="top-left"><h1>Z390 AORUS MASTER</h1></div>
            <div className="promoTitle"><h5 >AORUS Intel Z390 motherboard with 12-phase IR digital processor power supply, Fins-Array cooling system, RGB Fusion 2.0 technology, 802.11ac wireless LAN, three M.2 connectors with Thermal Guard heatsinks, ESS SABER HIFI preamplifier 9118, Intel® GbE LAN with cFosSpeed ​​support, and front and rear USB 3.1 Gen 1 Type-C ™ ports</h5>
            </div>
           
            <Button className="mainbutton">Принять</Button>
          </div>
        </div>

        <div className="carousel-item">
          <div>
           
            <img className="card-img-top" src={photo2} />
            <div className="top-left"><h1 >PREDATOR HELIOS 300</h1></div>
           <div className="promoTitle"><h5>Helios 300 gives you everything you need for battle with an incredibly fast display with a 240Hz refresh rate1 and a 3ms response time2. The device now features NVIDIA® GeForce RTX ™ 2070 graphics with Max-Q1 design, 10th Gen Intel® Core ™ i7 mobile processor1 and our dedicated 4th Gen AeroBlade ™ 3D cooling system.</h5>
           </div>
           <Button className="mainbutton">Принять</Button>
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