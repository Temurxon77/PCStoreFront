import React, { Component } from 'react';
import './preloader.css'
import video from './IntroVideo.mp4'

class Preloader extends Component {


  authenticate(){
    return new Promise(resolve => setTimeout(resolve))
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 0)
      }
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <video className='videoTag' autoPlay loop>
            <source src={video} type='video/mp4' />
        </video>
         
        </div>
       
      </div>
    );
  }
}

export default Preloader;