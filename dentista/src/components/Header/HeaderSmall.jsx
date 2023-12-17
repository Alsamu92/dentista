import React, { useState } from "react";
import "./HeaderSmall.css";
export const HeaderSmall = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="headerSmall">
      <div className="smallUno">
        <button className="hamburguesa" onClick={handleMenu}><span class="material-symbols-outlined">
menu
</span></button>

        <img src="" alt="Logo de la clínica" />
      </div>
      <div className="smallDos">
        <section>
          <p>
            Pide <strong>AQUI</strong> tu cita
          </p>
          <span class="material-symbols-outlined">
call
</span>
        </section>
      </div>
      {showMenu && (
      <div className="zonaMobile mostrar"> 
        <nav className="navMobile">
      
            <figure className="figureNav">
              <span class="material-symbols-outlined">home</span>
              <p>Home</p>
            </figure>
            <figure className="figureNav">
            <span class="material-symbols-outlined">
badge
</span>
              <p>Método DentiVital</p>
            </figure>
            <figure className="figureNav">
              <span class="material-symbols-outlined">edit_note</span>
              <p>Pedir Cita</p>
            </figure>
            <figure className="figureNav">
              <span class="material-symbols-outlined">diamond</span>
              <p>Tratamientos</p>
            </figure>
            <figure className="figureNav">
            <span class="material-symbols-outlined">
dentistry
</span>
              <p>Promociones</p>
            </figure>
            <figure className="figureNav">
              <span class="material-symbols-outlined">handshake</span>
              <p>Convenios</p>
            </figure>
            <figure className="figureNav">
            <span class="material-symbols-outlined">
source_environment
</span>
              <p>Clínicas</p>
            </figure>
            <figure className="figureNav">
            <span class="material-symbols-outlined">
person_search
</span>
              <p>Empleo</p>
            </figure>
            <figure className="figureNav">
              <span class="material-symbols-outlined">edit_note</span>
              <p>Sobre DentiVital</p>
            </figure>
           
          
        </nav>
        </div>
      )}
    </header>
  );
};
