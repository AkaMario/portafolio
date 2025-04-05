import React from 'react'
import Lottie from 'lottie-react'
import AnimacionAtom from '../assets/AnimationAtom.json'
import "./Animacion.css"

function Animacion() {
  return (
    <div className='atomo' style={{ width: 250, height:250 , margin: "0 auto"}}>
        <Lottie animationData={AnimacionAtom} loop={true}></Lottie>
      </div>
  )
}

export default Animacion
