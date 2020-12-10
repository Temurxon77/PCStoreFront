import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import "@sl-codeblaster/react-3d-animated-card/dist/index.css";
import './body.css';
import capture from '../Images/motherboards.jpg';
import capture1 from '../Images/graphic.jpg';
import capture2 from '../Images/processor.jpg';
import capture3 from '../Images/cases.jpg';
import capture4 from '../Images/ozu.jpg';
import {Animated} from "react-animated-css";

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
    
        <div class="wrapper">
            <h2><strong>PC Components</strong></h2>
            <div className="cards">
           

                                           
                    <figure class="card" >
                        <img src={capture} />
                        <figcaption>Motherboards</figcaption>
                    </figure>               
                   

                                      
                        <figure class="card" >
                            <img src={capture1} />
                            <figcaption>Graphic Cards</figcaption>
                        </figure>             
                     

                               
                        <figure class="card" >
                            <img src={capture2} />
                            <figcaption>Processors</figcaption>
                        </figure>                  
                    

                                      
                        <figure class="card" >
                            <img src={capture3} />
                            <figcaption>PC Cases</figcaption>
                        </figure>                   
                    

                                         
                        <figure class="card">
                            <img src={capture4} />
                            <figcaption>RAMS</figcaption>
                        </figure>               
                        
                
           
                
        
            {/* <h2><strong>What's new?</strong></h2>
             <div class="news">
                <figure class="article">
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news1.jpg" />
                    <figcaption>
                        <h3>New Item</h3>
                        <p>
                            In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.
                        </p>
                    </figcaption>
                </figure>
                <figure class="article">
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" />
                    <figcaption>
                        <h3>Update</h3>
                        <p>
                            Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.
                        </p>
                    </figcaption>
                </figure>
                </div> */}
            </div>
        </div>
      )
    };
    
  