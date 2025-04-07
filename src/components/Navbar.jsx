import React, { useState } from "react";
import MenuImg from "../assets/menu.svg";
import GithubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import SobreMiIcon from "../assets/man-sobre-mi.svg";
import Tecnologias from "../assets/terminal-sharp.svg";
import Experiencia from "../assets/briefcase.svg";
import Proyectos from "../assets/layers.svg";
import Formacion from "../assets/school.svg";
import Extras from "../assets/code-slash-outline.svg";
import "./Navbar.css";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  }

  const closeMenu = () => {
    setMenuAbierto(false);
  }
  return (
    <>
    <div className="degradado"></div>
    <nav className="navbar">
      <div className="nav">
        <a className="navbaricons" onClick={toggleMenu} >
          <img className='icon' src={MenuImg} alt="Menu" style={{ width: "40px", height: "auto" }}/>
        </a>
        <a className="navbaricons" href="https://github.com/AkaMario" target="_blank">
          <img className='icon' src={GithubLogo} alt="Menu" style={{ width: "30px", height: "auto" }}/>
        </a>
        <a className="navbaricons" href="https://www.linkedin.com/in/mario-uparela-posada-18661632b/" target="_blank">
          <img className='icon' src={LinkedInLogo} alt="Menu" style={{ width: "30px", height: "auto" }}/>
        </a>
      </div>
    </nav>
    
    {menuAbierto && <div className="overlay" onClick={closeMenu}></div>}

    <div className={`menu-deslizable ${menuAbierto ? "abierto" : ""}`}>
        <ul>
          <li><a href="#"><img src={SobreMiIcon} alt="" />Sobre mi</a></li>
          <li><a href="#"><img src={Tecnologias} alt="" />Tecnologias</a></li>
          <li><a href="#"><img src={Experiencia} alt="" />Experiencia</a></li>
          <li><a href="#"><img src={Proyectos} alt="" />Proyectos</a></li>
          <li><a href="#"><img src={Formacion} alt="" />Formacion</a></li>
          <li><a href="#"><img src={Extras} alt="" />Extras</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;