import React from "react";
import "./Home.css";
export const Home = () => {



  return (
    <div className="mainHome">
      <section className="mainImage">
        <div className="infoDental">
          <h3>Recupera la confianza en tu sonrisa</h3>
          <h1>Clínicas dentales <br/> DentiVital con<br/>  profesionales<br/>  certificados</h1>
          <p>Contamos con dentistas cualificados y certificados<br/> en una amplia gama de tratamientos dentales.</p>
          <div className="check">
          <span className="material-symbols-outlined">
done
</span>
            <p>Dentistas certificados</p>
          </div>
          <div className="check">
          <span className="material-symbols-outlined">
done
</span>
            <p>Clínicas modernas</p>
          </div>
          <button >Pide tu cita gratis</button>
        </div>
        <div className="ofertaDental">
          <div className="ofertaTop">
            <button className="derCita">PIDE TU CITA</button>
            <button className="derLlamamos">TE LLAMAMOS</button>
          </div>
          <div className="ofertaCircular">
            <p className="numeroOferta">-10%</p>
            <p>En tu tratamiento</p>
            <p className="letraPeque">Del 10 al 23 de Octubre*</p>
          </div>
        </div>
      </section>
    </div>
  );
};
