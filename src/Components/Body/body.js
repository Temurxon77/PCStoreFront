import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Divider, ListItem, Typography } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BusinessIcon from '@material-ui/icons/Business';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ViewListIcon from '@material-ui/icons/ViewList';
import ContactsIcon from '@material-ui/icons/Contacts';
import { ClassRounded } from '@material-ui/icons';
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
        rotation: 40, 
        transition:{
            duration: 0.5,
            
        },
        transform:{
            figureIcon: {
                rotation: 25,
                translateZ: 10
            },
            titleTranslateZ: 140,
            bodyTextTranslateZ: 100,
            buttonTranslateZ: 80
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
            <h2 className="title">Animated Card</h2>
            <p className={"body"}>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry</p>
        </div>
        <div className="footer">
            <button className={"footer_btn"}>BUTTON</button>
        </div>
    </div>

</AnimatedCard>
        </div>
      )
    };
    
  