import React, {useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import capture from '../Images/n1.png';
import capture1 from '../Images/n2.jpg';
import '../NewGoods/news.css'
import Button from '../controls/Button';
   
export default function News() {

    return (
        <div className="wrapperr" style={{backgroundColor: '#0E0F0F'}}>
        
                <div 
                    data-aos="fade-up-right"
                    data-aos-offset="1"
                    data-aos-delay="50000"
                    data-aos-duration="5000"
                    data-aos-easing="ease-in-out-cubic"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="center-bottom" 
                    style={{paddingTop: '70px'}}
                >   
            
                    
                    <div className="inputdiv" style={{paddingTop: '100px'}}> <input style={{}} /></div>
   
                </div>    
        

        <div className="captures" style={{display: 'flex', width: 'auto'}}>

            <div>
                <div className="name" style={{paddingRight: '10px', marginTop: '80px', fontSize: '40px'}}>News</div>
               
                <Button>hello</Button>
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
                style={{paddingRight: '20px', marginTop: '50px', margin: 'auto'}}
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
                style={{paddingRight: '20px', marginTop: '50px', margin: 'auto'}}           
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
                <div className="name" style={{padding: '10px', textAlign: 'left', margin: 'auto'}}>07/01/2020</div>
                <img src={capture1} style={{height: '150px'}}/>
                <div className="name">Playstation 5</div> 
            </div>               

            </div>
        </div>
  
    )
    }
    AOS.init()