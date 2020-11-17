import React from "react";
import photo from '../Images/naushniki.jpg';
import photo1 from '../Images/kreslo.jpg';
import photo2 from '../Images/nabor.jpg';

import './minicarousel.css';

const CarouselPage = () => {
  return (
  <div style={{backgroundColor: 'black'}}>  
    <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel" >   
      <div className="minicarousel" style={{width: '100%', marginTop: '1px'}}>
          <div className="row" style={{marginRight: 0}}>
            <div className="block">
              <img className="imgg" src={photo}/>
            </div>  
            
            <div className="block">
              <img className="imgg" src={photo1}  />
            </div>   

            <div className="block">
              <img className="imgg" src={photo2}  />
            </div> 

          </div>
      </div>
    </div>
  </div>
  );
}

export default CarouselPage;