import React from 'react';
import logo from '../Images/logo.png';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-md navbar-right "  id="image">
      <img src={logo} class="navbar-brand" style={{width:'50px',height:'50px', marginLeft: '30px'}} />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul class="navbar-nav" id="items">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  id="center" style={{textAlign: 'center'}}>Graphic cards  </a>
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
                <a class="nav-link dropdown-toggle" href=""   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{textAlign: 'center'}}> Mother boards  </a>
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

       
                              {/* <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
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
                              </li> */}
                        
              
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="" style={{textAlign: 'center'}}>Laptops </a>
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
                  <a class="nav-link dropdown-toggle" href="#" style={{textAlign: 'center'}}>My account</a>
              </li>      
          </ul>
            <form class="form-inline ml-auto" id="search" style={{textAlign: 'center'}}>
                <input class="form-control" id="inputButton" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" id="searchButton" type="submit"><SearchIcon/></button>
            </form>
      </div>
  </nav>
    )
}

export default Navbar