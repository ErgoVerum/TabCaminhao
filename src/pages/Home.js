import React from 'react';
import imagemHome from '../images/Frota01.jpeg';
function Home() {
  return (
    <div className="container">
      <h1>Bem-vindo à Empresa de Caminhões</h1>
      <p>Oferecemos os melhores caminhões para todas as suas necessidades de transporte.</p>
      <div className="image-container">
        <img src={imagemHome} alt="Caminhão na Home" className="home-image" />
        <p className="image-caption">Junte-se a maior frota de caminhões do Brasil.</p>
      </div>
    </div>
  );
}

export default Home;
