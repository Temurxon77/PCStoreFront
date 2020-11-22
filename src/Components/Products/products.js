import React from "react";
import photo from '../Images/naushniki.jpg';
import photo1 from '../Images/kreslo.jpg';
import photo2 from '../Images/nabor.jpg';
import './products.css'

const ProductPage = () => {
    return (
            <div className="row" >
              <h2>New Products</h2>
              <div className="block1">
                <img className="imgg1" src={photo}/>   
              </div>  
              
              <div className="block1">
                <img className="imgg1" src={photo1}  />        
              </div>   
  
              <div className="block1">
                <img className="imgg1" src={photo2}  />
              </div> 

            </div>
 );
}

export default ProductPage;