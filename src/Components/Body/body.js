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
    
        <div class="wrapper">
             
            <h2><strong>Laptops</strong></h2>
            <div class="cards">
                <figure class="card">
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />
                    <figcaption>Dota 2</figcaption>
                </figure>
                <figure class="card">
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/2.jpg" />
                    <figcaption>Stick Fight</figcaption>
                </figure>
                <figure class="card">
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/3.jpg" />
                    <figcaption>Minion Masters</figcaption>
                </figure>
                <figure class="card">
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg" />
                    <figcaption>KoseBoz!</figcaption>
                </figure>
                <figure class="card">
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />
                    <figcaption>Dota 2</figcaption>
                </figure>
                <figure class="card">
                    <img src="https://mrreiha.keybase.pub/codepen/hover-fx/2.jpg" />
                    <figcaption>Stick Fight</figcaption>
                </figure>
              
   
            </div>
            <h2><strong>What's new?</strong></h2>
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
            </div>
        </div>

      )
    };
    
  