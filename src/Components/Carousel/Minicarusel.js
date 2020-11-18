import React from "react";
import photo from '../Images/naushniki.jpg';
import photo1 from '../Images/kreslo.jpg';
import photo2 from '../Images/nabor.jpg';

import './minicarousel.css';

const CarouselPage = () => {
  return (
  
      
     
          <div className="row" style={{marginRight: 0}}>
            <div className="block">
              <img className="imgg" src={photo}/>
              
                <div class="thumb-anim">
            
                  <h5 class="thumb-title">headphones</h5>
                  <p class="thumb-description">
                    jkjdsfk
                  </p>
                </div>
            </div>  
            
            <div className="block">
              <img className="imgg" src={photo1}  />
              <div class="thumb-anim">
              <h5 class="thumb-title">CHAIRS</h5>
                  <p class="thumb-description">
                    sdfsd
                  </p>
                </div>
            </div>   

            <div className="block">
              <img className="imgg" src={photo2}  />
              <div class="thumb-anim">
              <h5 class="thumb-title">gaming set</h5>
                  <p class="thumb-description">fsdfs
                  </p>
                </div>
            </div> 

          </div>
  

 
  );
}

export default CarouselPage;