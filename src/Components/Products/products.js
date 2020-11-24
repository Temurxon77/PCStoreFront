import React, { useEffect } from "react";
import './products.css';
import { bubble as Menu } from 'react-burger-menu';
import { Button } from '@material-ui/core';
import photo from '../Images/1slide.jpg';
import photo1 from '../Images/2slide.jpg';
import photo2 from '../Images/3slide.jpg';
import { fade, makeStyles } from '@material-ui/core/styles';




const ProductsPage = () => {
  
  useEffect(()=>{
    window.onload = myMove();
  },[]);
  function myMove() {
    
  }
  return (
 
    <div>
      <hr></hr>
  </div>
  );
}

export default ProductsPage;