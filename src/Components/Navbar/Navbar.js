import React from 'react';
import logo from '../Images/logo.png';
import './Navbar.css';


const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-md"  style={{backgroundColor: '#010101'}}>
      <img src={logo} class="navbar-brand" style={{width:'50px',height:'50px', marginLeft: '30px'}} />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style={{backgroundColor: 'white'}}></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav" id="items">
          <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href=""   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Graphic cards  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="">NVIDIA</a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">GeForce RTX 3070+</a></li>
                              <li><a class="dropdown-item" href="#">GeForce RTX 3060 Ti</a></li>
                              <li><a class="dropdown-item" href="#">GeForce RTX 3070 Ti TUF Gaming</a></li>
                              <li><a class="dropdown-item" href="#">GeForce RTX 3090</a></li>
                            </ul>
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="">AMD Radeon</a>
                          <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Yeston Radeon RX 6080</a></li>
                              <li><a class="dropdown-item" href="#">Sapphire Radeon RX 6080</a></li>
                              <li><a class="dropdown-item" href="#">Radeon RX 6090</a></li>
                              <li><a class="dropdown-item" href="#">Radeon RX 6070 XT</a></li>
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
              <li class="nav-item" >
                  <a class="nav-link" href="#">Monitors</a>
                  <ul>

                  </ul>
              </li>
              
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Laptops </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="http://google.com">Google</a>
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
              <li class="nav-item">
                  <a class="nav-link" href="#">My account</a>
              </li>
             
          </ul>
      </div>
  </nav>
    )
}

export default Navbar