import React, { Component } from 'react'
import Lottie from 'lottie-react'
import AnimacionArrow from '../assets/arrow-down-animation.json'
import "./ArrowAnimacion.css"

export default class ArrowAnimacion extends Component {
  render() {
    return (
      <footer>
        <div className='flecha' style={{ width: 100, margin: "0 auto" }}>
        <Lottie animationData={AnimacionArrow} loop={true}></Lottie>
      </div>
      </footer>
      
    )
  }
}
