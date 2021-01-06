import React, {useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import capture from '../Images/n1.png';
import capture1 from '../Images/n2.jpg';
import '../NewGoods/news.css'
// import 'node_modules/aos/src/sass/aos.scss'

    export default function News() {
    return (
        <div className="wrapper" >
            {/* <div className="News" style={{marginRight: 'auto', marginLeft: 'auto'}}>               */}
                 
        
            <div
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-delay="10"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="center-bottom" 
                style={{ margin: '50px'}}
            >
                <img src={capture} style={{height: '150px'}}/> 
                <div className="name">Airpods max</div>          
            </div>

            <div
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-delay="10"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="center-bottom"  
                style={{margin: '50px'}}              
            >
               <img src={capture1} style={{height: '150px'}}/>
               <div className="name">Airpods max</div> 
            </div>              
                 
            </div>
        // </div>
    )
    }
    AOS.init()