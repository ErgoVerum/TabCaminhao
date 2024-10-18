import React from 'react';
import StockSobre from '../images/sobre01.jpg';

function Sobre() {
  return (
    <div>
      <h1>Quem Somos</h1>
      <p>Somos uma empresa especializada na venda de caminhões, com mais de 20 anos de experiência no mercado.</p>
      <div className="image-container">
        <img src={StockSobre} alt="Caminhão na Home" className="home-image" />
        <p className="image-caption">Estamos a mais de 65 anos trabalhando no Brasil.</p>
      </div>
    </div>
  );
}

export default Sobre;
