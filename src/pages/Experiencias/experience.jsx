import React from "react";
import "./experience.css";
import FigmaIcon from "/src/assets/logo-figma.svg";
import JsIcon from "/src/assets/logo-javascript.svg";
import NextIcon from "/src/assets/logo-nextjs.svg";
import ClickUp from "/src/assets/logo-clickup.svg";
import Excel from "/src/assets/logo-excel.svg";
import Postman from "/src/assets/logo-postman.svg";
import M365 from "/src/assets/logo-microsoft365.svg";

export default function experience() {
  return (
    <div className="contenedor">
      <h1>Experiencia</h1>
      <p>Mi experiencia haciendo lo que me gusta</p>
      <div className="experiencia">
        <div className="experiencia-title-container">
          <p>CEDO (Chief Experience & Design Officer)</p>
        </div>
        <div className="experiencia-text-container">
          <h3>
            Urbanestia · Jornada parcial jun. 2024 - actualidad · 11 meses
            Colombia · En remoto Aptitudes:
          </h3>
          <p>
            Comunicación · Capacidad de análisis · Usabilidad · Facilidad de
            adaptación · Gestión de atención al cliente · Gestión de proyectos ·
            Diseño visual · Equipos informáticos · Experiencia de usuario
          </p>
          <ul className="tech">
            <li>
              <img src={NextIcon} alt="" />
              <p>Next.js</p>
            </li>
            <li>
              <img src={JsIcon} alt="" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src={FigmaIcon} alt="" />
              <p>Figma</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="experiencia">
        <div className="experiencia-title-container">
          <p>Aprendiz de Implementaciones</p>
        </div>
        <div className="experiencia-text-container">
          <h3>
            ESTELA · Jornada completa
            jun. 2024 - dic. 2024 · 7 meses
            Cartagena de Indias, Bolívar, Colombia 
            Presencial
            Aptitudes:
          </h3>
          <p>
            Comunicación · Capacidad de análisis · Usabilidad · Facilidad de
            adaptación · Gestión de atención al cliente · Gestión de proyectos ·
            Diseño visual · Equipos informáticos · Experiencia de usuario
          </p>
          <ul className="tech">
            <li>
              <img src={ClickUp} alt="" />
              <p>ClickUp</p>
            </li>
            <li>
              <img src={Excel} alt="" />
              <p>Excel</p>
            </li>
            <li>
              <img src={M365} alt="" />
              <p>365</p>
            </li>
            <li>
              <img src={Postman} alt="" />
              <p>Postman</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
