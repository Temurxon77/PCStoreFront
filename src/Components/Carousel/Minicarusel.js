import React from "react";
import photo from '../Images/naushniki.jpg';
import photo1 from '../Images/kreslo.jpg';
import photo2 from '../Images/nabor.jpg';
import styled from "styled-components";
import './minicarousel.css';

const theme = {
  blue: {
    default: "#3883FF",
    hover: "#FFF001",

  },
};

const Button = styled.button`
background-color: ${props => theme[props.theme].default};
color: white;
text-transform: uppercase;
cursor: pointer;
border: 0;
outline: 0;
height: 50px;
font-family: cursive;
&:hover {
  background-color: ${props => theme[props.theme].hover};
  color: black;
  outline: none;
  border: none;
}
&:focus {
  outline: 'none', 
  border: none
},
&:active {
  outline: none,
  border: none,
  color: 'red',
  opacity: 1,
},   
&:disabled {
  cursor: default,
  opacity: 0,
  outline: none,
  border: none
},
&:selected {
  border: none,
  outline: none
}
`;

Button.defaultProps = {
  theme: "blue"
};

const CarouselPage = () => {
  return (
          <div className="row" style={{marginRight: 0}}>
            <div className="block">
              <img className="imgg" src={photo}/>
              
                <div class="thumb-anim">
            
                  <h5 class="thumb-title">headphones</h5>
                  <div>
                      <Button className="thumb-description">shop now!</Button>
                    </div>
                </div>
            </div>  
            
            <div className="block">
              <img className="imgg" src={photo1}  />
              <div class="thumb-anim">
              <h5 class="thumb-title">gaming chairs</h5>
                  
                    <div>
                      <Button className="thumb-description">shop now!</Button>
                    </div>
                 
                </div>
            </div>   

            <div className="block">
              <img className="imgg" src={photo2}  />
              <div class="thumb-anim">
              <h5 class="thumb-title">gaming set</h5>
                  <div>
                      <Button className="thumb-description">shop now!</Button>
                  </div>
              </div>
            </div> 

          </div>
  

 
  );
}

export default CarouselPage;