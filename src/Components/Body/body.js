import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import "@sl-codeblaster/react-3d-animated-card/dist/index.css";
import './body.css';
import capture from '../Images/orig.png';
import photo1 from '../Images/1.png';
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
    
  