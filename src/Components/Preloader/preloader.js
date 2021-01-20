
import './preloader.css'
import video from './IntroVideo.mp4'

import React, { useRef, useState, Fragment, Component } from 'react'


// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)

//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => {
//     if (hovered && !active) {
//       mesh.current.rotation.z += 0.01
//       mesh.current.rotation.x += 0.01
//     }
//     if (hovered && active) {
//       mesh.current.rotation.y += 0.02
//       mesh.current.rotation.x += 0.06
//     }
//   })

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//       onClick={e => setActive(!active)}
//       onPointerOver={e => setHover(true)}
//       onPointerOut={e => setHover(false)}>
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// ReactDOM.render(
//   <Fragment>
//     <h1>Hello Medium this is react-three-fiber!</h1>
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//     </Canvas>
//   </Fragment>,
//   document.getElementById('root')
// )

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
        <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
         
        </div>
       
      </div>
          
    );
  }
}

export default Preloader;