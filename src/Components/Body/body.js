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
import svg from '../Images/bestseller.svg';
import {Animated} from "react-animated-css";

const useStyles = makeStyles((theme) => ({
    root: {
  
     
    }}));
    
    export default function Body() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);  
   
      return (
    
        <div class="wrapper">

	<h2><strong><img src={svg} className="svg"/> Bestsellers<span>( 5 )</span></strong></h2>

	<div class="cards">

		<figure class="card" style={{width: '600px', height: '840px'}}>

			<img src={capture} />

			<figcaption>Dota 2</figcaption>

		</figure>

		<figure class="card">

			<img src={capture1} />

			<figcaption>Stick Fight</figcaption>

		</figure>

		<figure class="card">

			<img src={capture2} />

			<figcaption>Minion Masters</figcaption>

		</figure>

		<figure class="card" style={{marginTop: '440px', left: '-530px'}}>

			<img src={capture3} />

			<figcaption>KoseBoz!</figcaption>

		</figure>
        <figure class="card" style={{marginTop: '-420px', left: '1260px'}}>

            <img src={capture4} />

            <figcaption>KoseBoz!</figcaption>

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
    
  