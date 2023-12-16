import React, { useEffect, useState } from 'react'
import"./Header.css"
import { HeaderSmall } from './HeaderSmall';
export const Header = () => {
    const [tamanoPantalla, setTamanoPantalla] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTamanoPantalla(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
                <li>Tratamientos</li>
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
