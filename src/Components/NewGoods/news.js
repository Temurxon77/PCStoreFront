import React, {useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import capture from '../Images/n1.png';
import capture1 from '../Images/n2.jpg';
import '../NewGoods/news.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CenterFocusStrong } from '@material-ui/icons';


    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(10),
         
          
            outlineColor: 'pink'
        },
      
    }));

    export default function News() {
    const classes = useStyles();
    return (
        <div className="wrapperr" style={{backgroundColor: '#0E0F0F'}}>
        
                <div
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-delay="5000"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="center-bottom" 
                    
                >   
                    
                    <img src={capture} style={{height: '150px'}}/> 
                          
                </div>    
        

        <div className="captures" style={{display: 'flex', marginRight: 'auto', marginLeft: 'auto'}}>

            <div>
                <div className="name" style={{paddingRight: '10px', marginTop: '80px', fontSize: '40px'}}>News</div>
                <Button variant="contained" color="secondary" size="large" disableElevation className={classes.margin}>Look everything</Button>
            </div>

            <div
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay="5000"
                data-aos-duration="5000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="center-bottom" 
                style={{paddingRight: '20px', marginTop: '50px'}}
            >   
                <div className="name" style={{padding: '10px', textAlign: 'left'}}>07/01/2020</div>
                <img src={capture} style={{height: '150px'}}/> 
                <div className="name">Airpods max</div>          
            </div>

            <div
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay="5000"
                data-aos-duration="5000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="center-bottom"  
                style={{paddingRight: '20px', marginTop: '50px'}}           
            >  
                <div className="name" style={{padding: '10px', textAlign: 'left'}}>07/01/2020</div>
                <img src={capture1} style={{height: '150px'}}/>
                <div className="name">Playstation 5</div> 
            </div>              

            <div
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay="5000"
                data-aos-duration="5000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="center-bottom"  
                style={{paddingRight: '20px', marginTop: '50px'}}           
            >
                <div className="name" style={{padding: '10px', textAlign: 'left'}}>07/01/2020</div>
                <img src={capture1} style={{height: '150px'}}/>
                <div className="name">Playstation 5</div> 
            </div>               

            </div>
        </div>
  
    )
    }
    AOS.init()