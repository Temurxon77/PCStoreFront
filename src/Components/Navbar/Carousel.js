import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import {Button} from '@material-ui/core'; 
import logo from "./images/1.jpeg";

export default function CarouselExample(props)
{
    var items = [
        {
       
            imagesrc: logo,
        },
        {
       
            imagesrc: logo,
        },
      
    ]
 
    return (
        <Carousel
        next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
        prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
        >
            
            {

                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.imagesrc} style={{width: '2000px', height: '800px'}}/>
        </Paper>
    )
}