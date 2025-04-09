import React from "react";
import Location from "/src/assets/location-sharp.svg";
import Mail from "/src/assets/mail.svg";
import Phone from "/src/assets/phone-portrait-outline.svg";
import ReactIcon from "/src/assets/logo-react.svg";
import JsIcon from "/src/assets/logo-javascript.svg";
import TsIcon from "/src/assets/logo-typescript.svg";
import TailwindIcon from "/src/assets/logo-tailwind.svg";
import HtmlIcon from "/src/assets/logo-html5.svg";
import CssIcon from "/src/assets/logo-css.svg";
import PyIcon from "/src/assets/logo-python.svg";
import FigmaIcon from "/src/assets/logo-figma.svg";
import "./about.css";

function about() {
  return (
    <div>
      <section className="sobre-mi">
        <div className="about">
          <h1>Sobre mí</h1>
          <p>Quiero chamba.</p>
          <div className="contact">
            <ul className="contact-info" id="location">
              <li>
                <img src={Location} alt="Ubicación" className="icon" />
                <span>Cartagena de Indias / Bolívar / Colombia</span>
              </li>
            </ul>
          </div>

          <div className="contact">
            <ul className="contact-info">
              <li>
                <img src={Mail} alt="Correo" className="icon" />
                <span>mariouppo1@gmail.com</span>
              </li>
            </ul>

            <ul className="contact-info">
              <li>
                <img src={Phone} alt="Teléfono" className="icon" />
                <span>+57 304 3458159</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="about" id="tecnologias">
          <h1>Tecnologías</h1>
          <p>Que he usado a lo largo de mi aprendizaje</p>
          <ul className="contact-tech">
            <li>
              <img src={ReactIcon} alt="" />
              <p>React Native</p>
            </li>
            <li>
              <img src={ReactIcon} alt="" />
              <p>React.js</p>
            </li>
            <li>
              <img src={JsIcon} alt="" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src={TsIcon} alt="" />
              <p>TypeScript</p>
            </li>
            <li>
              <img src={TailwindIcon} alt="" />
              <p>Tailwind</p>
            </li>
            <li>
              <img src={HtmlIcon} alt="" />
              <p>HTML</p>
            </li>
            <li>
              <img src={CssIcon} alt="" />
              <p>CSS</p>
            </li>
            <li>
              <img src={PyIcon} alt="" />
              <p>Phyton</p>
            </li>
            <li>
              <img src={FigmaIcon} alt="" />
              <p>Figma</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default about;
