import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import "@sl-codeblaster/react-3d-animated-card/dist/index.css";
import './body.css';
import capture from '../Images/mat.png';
import capture1 from '../Images/graphic.png';
import capture2 from '../Images/processor.jpg';
import capture3 from '../Images/cases.jpg';
import capture4 from '../Images/ozu.jpg';
import capture5 from '../Images/kreslo.png';
import capture6 from '../Images/monitor.png';
import capture7 from '../Images/naushniki.png';
import capture8 from '../Images/nabor.png';
import capture9 from '../Images/kreslo1.png'
import svg from '../Images/bestseller.svg';
import {Animated} from "react-animated-css";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
  
     
    }}));
    
    export default function Body() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);  
   
      return (
    
        <div class="wrapper" style={{marginRight: '0', marginLeft: '0'}}>

	<h2><strong><img src={svg} className="svg"/> Bestsellers <span> ( 5 ) </span></strong></h2>

	<div className="cards" style={{marginRight: '0', marginLeft: '0', marginTop: '-50px'}}>

		<figure class="card" style={{width: '550px', height: '780px'}}>
			<img src={capture} style={{background: '#0E0F0F'}}/>
			<figcaption>Motherboards</figcaption>
		</figure>

		<figure class="card" style={{ }}>
			<img src={capture1} style={{background: '#0E0F0F'}}/>
			<figcaption>Graphic cards</figcaption>
		</figure>

		<figure class="card" style={{}}>
			<img src={capture2} style={{background: '#0E0F0F'}}/>
			<figcaption>Processors</figcaption>
		</figure>

		<figure class="card" style={{top: '398px', left: '-360px'}}>
			<img src={capture3} />
			<figcaption>Cases</figcaption>
		</figure>

		<figure class="card" style={{top: '-402px', left: '1229px'}}>
            <img src={capture4} />
            <figcaption>RAM</figcaption>
        </figure>

	</div>
	<div className="back" style={{backgroundColor: '#0E0F0F', marginTop: '-300px'}}>
	<h2><strong><div style={{position: 'center', marginTop: '-50px'}}>Beatiful in every way</div></strong></h2>
		
	<div class="news" style={{ marginTop: '-55px', marginLeft: 'auto', marginRight: 'auto'}}>

		<figure class="article" style={{width: '400px', height: '490px'}}>
			<img src={capture9} />
			<figcaption>
				<h3>New Item</h3>
				<p>
					In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.
				</p>
			</figcaption>
		</figure>

		<figure class="article">
			<img src={capture5} />
			<figcaption>
				<h3>Update</h3>
				<p>
					Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.
				</p>
			</figcaption>
		</figure>

		<figure class="article">
			<img src={capture6} />
			<figcaption>
				<h3>New Item</h3>
				<p>
					In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.
				</p>
			</figcaption>
		</figure>

		<figure class="article">
			<img src={capture7} />
			<figcaption>
				<h3>New Item</h3>
				<p>
					In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.
				</p>
			</figcaption>
		</figure>

		<figure class="article">
			<img src={capture8} />
			<figcaption>
				<h3>New Item</h3>
				<p>
					In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.
				</p>
			</figcaption>
		</figure>
		
		<div className="second-row">
		<figure class="article">
			<img src={capture8} />
			<figcaption>
				<h3>Update</h3>
				<p>
					Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.
				</p>
			</figcaption>
		</figure>

		<figure class="article">
			<img src={capture7} />
			<figcaption>
				<h3>Update</h3>
				<p>
					Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.
				</p>
			</figcaption>
		</figure>

		<figure class="article">
			<img src={capture6} />
			<figcaption>
				<h3>Update</h3>
				<p>
					Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.
				</p>
			</figcaption>
		</figure>

		<figure class="article">
			<img src={capture5} />
			<figcaption>
				<h3>Update</h3>
				<p>
					Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.
				</p>
			</figcaption>
		</figure>
		</div>

	</div>
		</div>
</div>

      )
    };
    
  