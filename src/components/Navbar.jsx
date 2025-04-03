import React, { useState } from "react";
import MenuImg from "../assets/menu.svg";
import GithubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
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
    <nav className="navbar">
      <div className="nav">
        <a className="menu" onClick={toggleMenu}>
          <img src={MenuImg} alt="Menu" />
        </a>
        <a href="https://github.com/AkaMario" target="_blank">
          <img src={GithubLogo} alt="Menu" />
        </a>
        <a href="https://www.linkedin.com/in/mario-uparela-posada-18661632b/" target="_blank">
          <img src={LinkedInLogo} alt="Menu" />
        </a>
      </div>
    </nav>
    
    {menuAbierto && <div className="overlay" onClick={closeMenu}></div>}

    <div className={`menu-deslizable ${menuAbierto ? "abierto" : ""}`}>
        <ul>
          <li><a href="#inicio">Sobre mi</a></li>
          <li><a href="#servicios">Tecnologias</a></li>
          <li><a href="#contacto">Experiencia</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Formacion</a></li>
          <li><a href="#">Extras</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;