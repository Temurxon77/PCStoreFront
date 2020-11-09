import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import {Button} from '@material-ui/core'; 
import logo from "./1.jpeg";
import logo1 from "./3.jpg";
export default function CarouselExample(props)
{
    var items = [
        {
            imagesrc: logo,
        },
        {
           imagesrc: logo1,
        }
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
           
            <img src={props.item.imagesrc} style={{width: '2000px', height: '1000px'}}/>
        
        </Paper>
    )
}