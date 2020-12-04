import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import "@sl-codeblaster/react-3d-animated-card/dist/index.css";
import './body.css';
import capture from '../Images/orig.png';
import photo1 from '../Images/1.jpg';
import photo2 from '../Images/nabor.jpg';
import photo3 from '../Images/naushniki.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'black',
      textAlign: 'center',
      color: 'white',
     
    }}));
    
    export default function Body() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);  
  
    
      return (
      
//           <div style={{padding: '50px',marginTop:'50px'}}>
//      <AnimatedCard
  
//     config={{
//         rotation: 30, 
//         transition:{
//             duration: 0.5,
            
//         },
//         transform:{
//             figureIcon: {
//                 rotation: 5,
//                 translateZ: 0
//             },
//             titleTranslateZ: 10,
//             bodyTextTranslateZ: 10,
//             buttonTranslateZ: 10
//         }
//     }}
//     style={{
//         width:560 
//     }}
// >

// <div className="card">
//         <div className="figure">
//             <img src={capture}/>
//         </div>
    


//         <div className="content">
//             <h2 className="title">Ноутбуки</h2>
//             <p className={"body"}>Lorem Ipsum is simply dummy text of the
//                 printing and typesetting industry</p>
//         </div>
//         <div className="footer">
//             <button className={"footer_btn"}>ПЕРЕЙТИ</button>
//         </div>
//     </div>

//     </AnimatedCard>
// </div>
    
<div class="container">
<div class="card">
    <div class="face face1">
        <div class="content">
            
            <h3>Gaming Chairs</h3>
        </div>
    </div>
    <div class="face face2">
        <div class="content">
            {/* <img src={photo1} id="photo"/> */}
            <a href="#">Shop now!</a>
        </div>
    </div>
</div>
<div class="card">
    <div class="face face1">
        <div class="content">
           
            <h3>Code</h3>
        </div>
    </div>
    <div class="face face2">
        <div class="content">
            {/* <img src={photo1} id="photo"/> */}
            <a href="#">Read More</a>
        </div>
    </div>
</div>
<div class="card">
    <div class="face face1">
        <div class="content">
           
            <h3>Launch</h3>
        </div>
    </div>
    <div class="face face2">
        <div class="content">
            {/* <img src={photo1} id="photo"/>     */}
            <a href="#">Read More</a>
        </div>
    </div>
</div>
</div>

      )
    };
    
  