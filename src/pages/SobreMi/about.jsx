import React from "react";
import Location from "/src/assets/location-sharp.svg";
import Mail from "/src/assets/mail.svg";
import Phone from "/src/assets/phone-portrait-outline.svg";
import "./about.css";

function about() {
  return (
    <div>
      <section>
        <div className="about">
          <h1>Sobre mí</h1>
          <p>Quiero chamba.</p>

          <div className="direccion">
            <img src={Location} alt="Ubicación" className="icon" />
            <span>Cartagena de Indias / Bolívar / Colombia</span>
          </div>

          <div className="contact">
            <div className="contact-row">
              <img src={Mail} alt="Correo" className="icon" />
              <span>mariouppo1@gmail.com</span>
            </div>

            <div className="contact-row">
              <img src={Phone} alt="Teléfono" className="icon" />
              <span>+57 304 3458159</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="tecnologias">
          <h1>Tecnologías</h1>
          <p>Que he usado a lo largo de mi aprendizaje</p>
          <div className="tecnologias-lista">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Git</li>
            </ul>
        </div>
        </div>
      </section>
    </div>
  );
}

export default about;
