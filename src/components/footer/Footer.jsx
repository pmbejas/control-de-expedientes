import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div className="main-footer">
      <a href="http://www.instagram.com/pablomartin2206"
        target='_blank' rel="noreferrer noopener">
        <img 
            className="logotipo-navbar"
            src={require("../../images/logoPabloBlanco.png")}
            alt="Logo Pablo Martin Web Developer" 
          />
      </a>
      
      <p className="texto-copyright-footer">Realizado por Pablo Bejas © 2023</p>
      <p className="texto-copyright-footer">Todos los derechos reservados</p>
    </div>
  )
}

