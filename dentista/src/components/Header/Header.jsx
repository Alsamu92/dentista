import React, { useEffect, useState } from 'react'
import"./Header.css"
import { HeaderSmall } from './HeaderSmall';
import { NavLink } from 'react-router-dom';
import { useSize } from '../../context/sizeContext';
export const Header = () => {
  const{tamanoPantalla}=useSize()
  
  return (<>
  {tamanoPantalla > 768 ?<header className='headerDesktop'>
        <nav className="navUno">
            <ul className='about'>
                <li>Sobre DentiVital</li>
                <li>Convenios</li>
                <li>Empleo</li>
                <li>Contacto</li>
            </ul>
            <ul className='redes'>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
                <li>e</li>
            </ul>
        </nav>
        <nav className="navDos">
            <img src="" alt="Logo de la clínica"/>
            <ul className='mainNav'>
                <li>Pedir Cita</li>
                <li>Método DentiVital</li>
                <NavLink to={"/tratamientos"}>
                <li>Tratamientos</li>
                </NavLink>
                <li>Promociones</li>
                <li>Clínicas</li>
                <li>Blog</li>
           
            </ul>
            <section className='pideCita'>
                <p>Pide GRATIS tu cita <br/>
                64629253645</p>
            </section>
        </nav>
    </header>:<HeaderSmall/>
  }
    
    </>
  )
}
