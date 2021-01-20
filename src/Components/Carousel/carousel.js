import React, { useEffect } from "react";
import './carousel.css';
import logo from '../Images/logo.png';
import { Button } from '@material-ui/core';
import photo from '../Images/3.jpg';
import photo1 from '../Images/2.png';
import photo3 from '../Images/12.jpg'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
    <div className="wrapper" style={{backgroundColor: '#090909', marginLeft: 'auto', marginRight: 'auto'}}>
        <nav class="navbar navbar-expand-md navbar-right "  id="image">
        <img src={logo} class="navbar-brand" style={{width: '7%', marginLeft: '230px'}} />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul class="navbar-nav" id="items">
         
            <li class="nav-item dropdown">
            <a class="nav-link" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  id="center" style={{textAlign: 'center'}}>Graphic cards</a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="" >NVIDIA</a>
                            <ul class="dropdown-menu">
                              <li class="dropdown-submenu"><a class="dropdown-item" href="#" >GeForce RTX 3070+</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" href="#" >GeForce RTX 3060 Ti</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" href="#" >GeForce RTX 3070 Ti TUF Gaming</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" href="#" >GeForce RTX 3090</a></li>
                            </ul>
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="">AMD Radeon</a>
                          <ul class="dropdown-menu">
                              <li class="dropdown-submenu"><a class="dropdown-item" id="dropdown" href="#">Yeston Radeon RX 6080</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" id="dropdown" href="#">Sapphire Radeon RX 6080</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" id="dropdown" href="#">Radeon RX 6090</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" id="dropdown" href="#">Radeon RX 6070 XT</a></li>
                          </ul>
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="">INTEL</a>
                          <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">INTEL Xe-HPG</a></li>
                              <li><a class="dropdown-item" href="#">INTEL Xe-HP 'NEO'</a></li>
                              <li><a class="dropdown-item" href="#">INTEL Iris Xe'</a></li>
                              <li><a class="dropdown-item" href="#">INTEL Iris Xe MAX</a></li>
                          </ul>
                      </li>
                  </ul>
              </li>
            
              <li class="nav-item dropdown">
                <a class="nav-link" href=""   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{textAlign: 'center'}}>Mother boards  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li class="dropdown-submenu"><a class="dropdown-item" href="">GIGABYTE</a>
                        
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="">MSI</a>
                          <ul class="dropdown-menu">
                              <li class="dropdown-submenu"><a class="dropdown-item"  href="#">MSI MEG Z490 Godlike</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item"  href="#">MSI MPG Z390M Gaming Edge AC</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item"  href="#">MSI Creator TRX40</a></li>
                          </ul>
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="">Asus ROG</a>
                          <ul class="dropdown-menu">
                              <li class="dropdown-submenu"><a class="dropdown-item" href="#">Asus ROG Maximus XII HERO</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" href="#">Asus ROG Strix Z390-I Gaming</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" href="#">Asus ROG Strix B550-E Gaming</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item" href="#">Asus TUF Gaming B550M-PLUS</a></li>
                          </ul>
                      </li>
                  </ul>
              </li>
                
              <li class="nav-item dropdown">
                  <a class="nav-link" href="" style={{textAlign: 'center'}}>Laptops </a>
                  <ul class="dropdown-menu">
                      <li class="dropdown-submenu"><a class="dropdown-item" href="#">Action</a></li>
                      <li class="dropdown-submenu"><a class="dropdown-item" href="#">Another action</a></li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="">Google</a>
                          <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Submenu</a></li>
                              <li><a class="dropdown-item" href="#">Submenu0</a></li>
                              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
                                  <ul class="dropdown-menu">
                                      <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                      <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                  </ul>
                              </li>
                              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                                  <ul class="dropdown-menu">
                                      <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                                      <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
           
            
               
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" style={{textAlign: 'center'}}>My account</a>
                </li>  
               
          </ul>
            <form class="form-inline ml-auto" id="search" style={{textAlign: 'center'}}>          
                <button class="btn btn-outline-white" id="icons" type="submit"><SearchIcon/></button>
                <button class="btn btn-outline-white " id="icons" type="submit"><ShoppingCartIcon/></button>
            </form>
      </div>
  </nav>
    <div id="video-carousel-example" className="carousel slide" data-ride="carousel" style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black'}}>

      <ol className="carousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0" className="active" ></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" id="carouselInner" role="listbox"> 

        <div className="carousel-item active" >
          <div>

            <img className="card-img-top" src={photo3} style={{height: '500px'}}/>
            
            {/* <div className="top-left"><h1>predator helios 300</h1></div>
            <div className="promoTitle"><h5 >Helios 300 gives you everything you need for battle with an incredibly fast display with a 240Hz refresh rate1 and a 3ms response time2. The device now features NVIDIA® GeForce RTX ™ 2070 graphics with Max-Q1 design, 10th Gen Intel® Core ™ i7 mobile processor1 and our dedicated 4th Gen AeroBlade ™ 3D cooling system</h5>
            </div>
            <div className="mainbutton"><Button className="button">shop now!</Button></div> */}
          </div>

        </div>

        <div className="carousel-item">
          <div>
            <img className="card-img-top" src={photo1} style={{height: '500px'}}/>
            {/* <div className="top-left"><h1>tuf gaming</h1></div>
            <div className="promoTitle"><h5 >TUF Gaming VG279Q1A Gaming Monitor –27 inch Full HD (1920x1080), IPS, 165Hz (above 144Hz), Extreme Low Motion Blur™, Adaptive-sync, FreeSync™ Premium, 1ms (MPRT)</h5>
            </div>
           
            <div className="mainbutton1"><Button className="button">shop now!</Button></div> */}
          </div>
        </div>

        <div className="carousel-item">
          <div>
           
            <img className="card-img-top" src={photo} style={{height: '500px'}}/>
            {/* <div className="top-left"><h1 >MSI MEG Z490 Godlike</h1></div>
           <div className="promoTitle"><h5>High-end motherboards may cost a fortune, but if you’ve got something like the MSI MEG Z490 Godlike under the hood, you’re pretty much guaranteed top-notch performance, especially if you’ve got Intel components. As long as you’re willing to pay the price. In fact, we’d go as far as to say that this is the best z490 board out there right now, with an excellent thermal solution, staggering overclocking performance, easy installation and diagnostic solutions for do-it-yourself-ers, and a solid build</h5>
           </div>
           <div className="mainbutton2"><Button className="button">shop now!</Button></div> */}
          </div>
        </div>

      </div>
    </div> 
    </div>
  );
}

export default MainCarouselPage;