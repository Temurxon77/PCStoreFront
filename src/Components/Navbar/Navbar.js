import React from 'react'
import logo from '../../assets/logoStore.png'
import './Navbar.css';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <img src={logo} class="navbar-brand pb-2" style={{width:'50px',height:'40px'}} />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Collect your pc</a>
              </li>
              
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Profile </a>
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
