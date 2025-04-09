import React from 'react'
import "./card.css";
import ImgH from "/src/assets/Rectangle-img-azul.svg"
import ImgD from "/src/assets/Rectangle-img-gris.svg"
import ReactIcon from "/src/assets/logo-react.svg"
import JsIcon from "/src/assets/logo-javascript.svg";
import Html from "/src/assets/logo-html5.svg";
import Figma from "/src/assets/logo-figma.svg";
import Python from "/src/assets/logo-python.svg";

export default function Card() {
  return (
    <div className='contenedor'>
      <div className='card'>
        <div className='image-project-card'>
          <img src={ImgD} alt="" className='img-default'/>
          <img src={ImgH} alt="" className='img-hover'/>
        </div>
        <h3 className='title-project'>
          lorem impus proyecto
        </h3>
        <p className='description-project'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, at
          doloremque. Repudiandae, quas? Quod, delectus! Quisquam, voluptatibus
          velit! Quisquam,
        </p>
        <ul className='card-tech'>
          <li><img src={ReactIcon} alt="" /><img src={JsIcon} alt="" /><img src={Html} alt="" /><img src={Figma} alt="" /><img src={Python} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}
