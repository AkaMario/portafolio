import React from "react";
import "./proyectos.css";
import Card from "../../components/Card/Card";
export default function proyectos() {
  return (
    <div className="projecto-container">
      <h1 className="title-project-section">Proyectos</h1>
      <p className="description-project-section">
        Mi repertorio de proyectos mas relevantes
      </p>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
