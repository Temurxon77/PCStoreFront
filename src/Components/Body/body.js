import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import "@sl-codeblaster/react-3d-animated-card/dist/index.css";
import './body.css';
import './index.css';
import capture from './orig.png';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'black',
      textAlign: 'center',
      color: 'white',
     
    }}));
    
    export default function Body() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);  
    var items = [
        {
            imagesrc: capture,
        },
    ]
    
      return (
        <div ClassName={classes.root}>
          
     <AnimatedCard
  
    config={{
        rotation: 30, 
        transition:{
            duration: 0.5,
            
        },
        transform:{
            figureIcon: {
                rotation: 5,
                translateZ: 0
            },
            titleTranslateZ: 10,
            bodyTextTranslateZ: 10,
            buttonTranslateZ: 10
        }
    }}
    style={{
        width:560 //container style (you can use className as well)
    }}
>

    <div className="card">
        
        <div className="figure">
            <div className="figure_bg"/> 
            <img src={capture}/>
        </div>
        <div className="content">
            <h2 className="title">Ноутбуки</h2>
            <p className={"body"}>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry</p>
        </div>
        <div className="footer">
            <button className={"footer_btn"}>ПЕРЕЙТИ</button>
        </div>
    </div>

</AnimatedCard>

        </div>
      )
    };
    
  