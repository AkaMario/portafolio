import React from 'react'
import './formacion.css'
import Certificado from "/src/assets/certificado-icon.svg";

export default function formacion() {
  return (
  <div className="contenedor">
        <h1>Formacion</h1>
        <p>Mi educación académica, títulos, cursos, etc.</p>
        <div className="formacion">
          <div className="formacion-title-container">
            <p>Fundación Universitaria Tecnológico Comfenalco</p>
          </div>
          <div className="formacion-text-container">
            <h3>Ingeniería, Ingeniería de sistemas</h3>
            <h3>ene 2025 - actualidad</h3>
            <h3>Cartagena de Indias, Bolívar, Colombia </h3>
            <h3>Presencial</h3>
          </div>
        </div>
        <div className="formacion">
          <div className="formacion-title-container">
            <p>Fundación Universitaria Tecnológico Comfenalco</p>
          </div>
          <div className="formacion-text-container">
            <h3>Tecnicatura, Desarrollo de software</h3>
            <h3>ene 2022 - dic 2024 · 6 semestres</h3>
            <h3>Cartagena de Indias, Bolívar, Colombia </h3>
            <h3>Presencial</h3>
          </div>
        </div>
        <div className='certificados'>
          <div className='certificado'>
            <div className="certificado-title-container">
              <img src={Certificado} alt="" />
              <p>Udemy</p>
            </div>
            <div className="certificado-text-container">
              <h3>Certificado, UX/UI + Figma</h3>
              <h3>mar 2025 - indeterminado</h3>
              <h3>Cartagena de Indias, Bolívar, Colombia </h3>
              <h3>Virtual</h3>
            </div>
          </div>
          <div className='certificado'>
            <div className="certificado-title-container">
              <img src={Certificado} alt="" />
              <p>LinkedIn</p>
            </div>
            <div className="certificado-text-container">
              <h3>Certificado, Figma avanzado</h3>
              <h3>mar 2025 - indeterminado</h3>
              <h3>Cartagena de Indias, Bolívar, Colombia</h3>
              <h3>Virtual</h3>
            </div>
          </div>
          <div className='certificado'>
            <div className="certificado-title-container">
              <img src={Certificado} alt="" />
              <p>Microsoft</p>
            </div>
            <div className="certificado-text-container">
              <h3>Certificado, Fundamentos PDS</h3>
              <h3>mar 2025 - indeterminado</h3>
              <h3>Cartagena de Indias, Bolívar, Colombia</h3>
              <h3>Virtual</h3>
            </div>
           </div>
           <div className='certificado'>
            <div className="certificado-title-container">
              <img src={Certificado} alt="" />
              <p>FreeCodeCamp</p>
            </div>
            <div className="certificado-text-container">
              <h3>Certificado, Js Algorithms & DS</h3>
              <h3>mar 2025 - indeterminado</h3>
              <h3>Cartagena de Indias, Bolívar, Colombia </h3>
              <h3>Virtual</h3>
            </div>
          </div>
          <div className='certificado'>
            <div className="certificado-title-container">
              <img src={Certificado} alt="" />
              <p>LinkedIn</p>
            </div>
            <div className="certificado-text-container">
              <h3>Certificado, JavaScript básico</h3>
              <h3>mar 2025 - indeterminado</h3>
              <h3>Cartagena de Indias, Bolívar, Colombia</h3>
              <h3>Virtual</h3>
            </div>
          </div>
          <div className='certificado'>
            <div className="certificado-title-container">
              <img src={Certificado} alt="" />
              <p>LinkedIn</p>
            </div>
            <div className="certificado-text-container">
              <h3>Certificado, Prompt Engineering</h3>
              <h3>mar 2025 - indeterminado</h3>
              <h3>Cartagena de Indias, Bolívar, Colombia</h3>
              <h3>Virtual</h3>
            </div>
           </div>
           <div className='certificado'>
            <div className="certificado-title-container">
              <img src={Certificado} alt="" />
              <p>FreeCodeCamp</p>
            </div>
            <div className="certificado-text-container">
              <h3>Certificado, Responsive Web</h3>
              <h3>mar 2025 - indeterminado</h3>
              <h3>Cartagena de Indias, Bolívar, Colombia </h3>
              <h3>Virtual</h3>
            </div>
          </div>
          <div className='certificado'>
            <div className="certificado-title-container">
              <img src={Certificado} alt="" />
              <p>MinTic</p>
            </div>
            <div className="certificado-text-container">
              <h3>Certificado, Gestión de proyectos</h3>
              <h3>mar 2025 - indeterminado</h3>
              <h3>Cartagena de Indias, Bolívar, Colombia</h3>
              <h3>Virtual</h3>
            </div>
          </div>
        </div>
    </div>
  )
}
