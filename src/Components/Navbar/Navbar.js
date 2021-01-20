import React from 'react';
import logo from '../Images/logo.png';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';



const Navbar = () => {
    return (
    <div className="navbar" style={{backgroundColor: 'black',}}>
      <div className="text" style={{ marginLeft: 'auto',  color: '#4D4C4D', padding: '10px'}}>
        abc@mail.ru
      </div>
      <div style={{color: '#4D4C4D', padding: '10px', marginRight: '250px'}}>
        +123123123
      </div>
 
  </div>
    )
}

export default Navbar