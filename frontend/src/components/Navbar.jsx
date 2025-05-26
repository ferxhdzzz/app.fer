import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {
  FaBox, FaTruck, FaPlusCircle, FaShoppingCart,
  FaTags, FaUsers, FaCog,
  FaCompass
} from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logop">
       <NavLink to="/">
          <img src="/LE_SSERAFIM_logo.svg" alt="Logo" />
        </NavLink>
      </div>

      <nav className="menu">
      <NavLink to="/empleados" className="nav-link">
          <FaCompass className="icon" /> <span>Empleados</span>
        </NavLink>
        <NavLink to="/clientes" className="nav-link">
          <FaBox className="icon" /> <span>Usuarios</span>
        </NavLink>
        <NavLink to="/productos" className="nav-link">
          <FaTruck className="icon" /> <span>Productos</span>
        </NavLink>
      </nav>

      
    </div>
  );
}

export default Sidebar;