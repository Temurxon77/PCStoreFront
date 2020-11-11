import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import {Button} from '@material-ui/core'; 
import logo from "./1.jpeg";
import logo1 from "./3.jpg";
export default function CarouselExampleMultiple(props)
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
            <div style={{display:'flex',justifyContent:"center",backgroundColor:'black'}}>
             <div style={{padding:'10px',marginRight:'100px'}}>
            <img src={logo1} style={{width: '200px', height: '200px'}}/>
            </div>
            <div style={{padding:'10px',marginRight:'100px'}}>
            <img src={logo} style={{width: '200px', height: '200px'}}/>
            </div>
            <div style={{padding:'10px',marginRight:'100px'}}>
            <img src={logo1} style={{width: '200px', height: '200px'}}/>
            </div>
            <div style={{padding:'10px',marginRight:'100px'}}>
            <img src={logo} style={{width: '200px', height: '200px'}}/>
            </div>
            <div style={{padding:'10px',marginRight:'100px'}}>
            <img src={logo1} style={{width: '200px', height: '200px'}}/>
            </div>
        
            </div>
        </Paper>
    )
}