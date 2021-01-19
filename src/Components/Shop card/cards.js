import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import "@sl-codeblaster/react-3d-animated-card/dist/index.css";

import capture from '../Images/orig.png';


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
      
          <div style={{padding: '50px',marginTop:'50px'}}>
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
        width:560 
    }}
>

<div className="card">
        <div className="figure">
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
    
  