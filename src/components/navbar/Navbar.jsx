import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="seccion-logo-navbar">
        <Link to="/" style={{textDecoration: 'none'}}>
          <img 
            className="logotipo-navbar"
            src={require("../../images/logoPabloBlanco.png")}
            alt="Logo Pablo Martin Web Developer" 
          />
        </Link>
      </div>
      <div className="seccion-opciones-navbar">
        <ul className="lista-elementos-navbar">
          <li>
            <Link to="/" style={{textDecoration: 'none'}}>
              <p className="elemento-navbar">Inicio</p>
            </Link>
          </li>
          <li>
            <Link to="/expedientes" style={{textDecoration: 'none'}}>
              <p className="elemento-navbar">Expedientes</p>
            </Link>
            <div className="contenedor-submenu">
              <div className="submenu-navbar">
                <ul>
                  <li>Listados General</li>
                  <li>Circulación de Expedientes</li>
                </ul>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div className="seccion-users-navbar">
        <div className="container-icono-usuario">
          <img 
            className="icono-usuario" 
            src={require("../../images/UserNotLogged.png")}
            alt="Usuario Inactivo" 
          />
        </div>
      </div>
    </nav>
  )
}

