import React, { useEffect } from "react";
import './carousel.css';
import { bubble as Menu } from 'react-burger-menu';
import { Button } from '@material-ui/core';
import photo from '../Images/1slide.jpg';
import photo1 from '../Images/2slide.jpg';
import photo2 from '../Images/3slide.jpg';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black'
   
  },
  buttonColor:{   
    fontSize:'17px',
    color:'white',
    display: 'inline-block',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ],
    '&:hover': {
      outline: 'none',
      background: 'black',
      color: 'red'
    },
    '&:focus': {
      outline: 'none', 
    
    },
    '&:active': {
      borderBottom: ['2px solid white'],
      color: 'red',
      opacity: 1,
    },
    '&:selected': {
      borderBottom: ['2px solid white'],
      color: 'red',
      opacity: 1,
    },    
    padding: ['10px 15px'],
    cursor: 'pointer',
    background: 'black',
    border: 0,
    outline: 0,
    borderBottom: ['3px solid transparent'], 
    transition: 'ease border-bottom 250ms',
    
  },
}));

const MainCarouselPage = () => {
  const classes = useStyles();
  useEffect(()=>{
    window.onload = myMove();
  },[]);
  function myMove() {
    
  }
  return (
 
    <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel" style={{ height: '968.4px'}}>
   
      <ol className="carousel-indicators" id="myCarousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" className="active" ></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>
    
      <div className="carousel-inner" id="carouselInner" role="listbox" style={{height: '100%'}}>
        <div className="carousel-item active">   
            <div>
              <div id="promoHeader"><h1 className="header1">GIGABYTE GEFORCE GTX 1650</h1></div>
                <img  className="card-img-top"  src={photo}/> 
              <div id="promoTitle"><h5 className="title1">The GeForce® GTX 1650 graphics card is built on the award-winning NVIDIA TuringTM architecture for revolutionary graphics. It is a powerful platform for the most popular games, which brings even faster speed to the latest games. Expand your gaming experience with GeForce GTX.</h5></div>   
              <Button className={classes.buttonColor} id="promoHeader">Принять</Button> 
            </div>
        </div>

        <div className="carousel-item">
        <div>
            <div id="promoHeader"><h1 className="header2">GIGABYTE Z390 AORUS MASTER</h1></div>
              <img  className="card-img-top"  src={photo1}/> 
            <div id="promoTitle"><h5 className="title2">AORUS Intel Z390 motherboard with 12-phase IR digital processor power supply, Fins-Array cooling system, RGB Fusion 2.0 technology, 802.11ac wireless LAN, three M.2 connectors with Thermal Guard heatsinks, ESS SABER HIFI preamplifier 9118, Intel® GbE LAN with cFosSpeed ​​support, and front and rear USB 3.1 Gen 1 Type-C ™ ports</h5></div>   
        </div>
        </div>
      
        <div className="carousel-item">
        <div>
            <div id="promoHeader"><h1 className="header3">PREDATOR HELIOS 300</h1></div>
              <img className="card-img-top" src={photo2}/>
            <div id="promoTitle"><h5 className="title3">Helios 300 gives you everything you need for battle with an incredibly fast display with a 240Hz refresh rate1 and a 3ms response time2. The device now features NVIDIA® GeForce RTX ™ 2070 graphics with Max-Q1 design, 10th Gen Intel® Core ™ i7 mobile processor1 and our dedicated 4th Gen AeroBlade ™ 3D cooling system.</h5></div>
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