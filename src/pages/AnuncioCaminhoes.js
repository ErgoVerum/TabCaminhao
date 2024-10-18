import React from 'react';
import '../App.css';
import C1 from '../images/scania01.jpg';
import C2 from '../images/scania02.png';
import C3 from '../images/scania03.jpg';

function AnuncioCaminhoes() {
  return (
    <div className="container anuncio-caminhoes">
      <h1>Anúncio de Caminhões</h1>
      <ul>
        <li>
        <img src={C1} alt="Caminhão 1" />
          <p>SCANIA Briar - Eleita #1 para transporte de bens por todo o Brasil.</p>
        </li>
        <li>
        <img src={C2} alt="Caminhão 2" />
          <p>SCANIA Kaiser 2025 - O primeiro modelo de SCANIA 100% eletrico.</p>
        </li>
        <li>
        <img src={C3} alt="Caminhão 3" />
          <p>SCANIA 65 - Para comemorar 65 anos de presença no Brasil.</p>
        </li>
      </ul>
    </div>
  );
}

export default AnuncioCaminhoes;
