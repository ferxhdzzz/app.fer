import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import "./Inicio.css";


const Inicio = () => {
  return (
    <section className="hero-section">
      <section className="hero-container">
        <div className="hero-text">
          <h1>Actividad !</h1>
          <p>
           Fernanda Mizel Hernandez Cruz
           <p>20220031</p>

          </p>
          <Button as={Link} to="/empleados" className="btn-customm">
             comezar
            </Button> {/* Botón que redirige al registro/compras */}
        </div>
        <div className="hero-image">
          <img src="/LE_SSERAFIM_logo.svg" alt="Perro" />
        </div>
      </section>
    </section>
  );
};

export default Inicio;
