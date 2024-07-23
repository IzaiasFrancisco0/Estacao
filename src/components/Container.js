import React from 'react';
import './Container.css';

export default function Container(){
    return (
        <div className="container" id="container">
        <div className="container_img">
            <div className="descricao">
             <h2>Venha conhecer a melhor comida mineira da região de Uberlândia!!</h2>
             <span>Venha visitar nosso Restaurante ou</span>
             <span>Faça seu pedido no Sistema 😋</span>
            </div>
            <div className="botao_sobre">
            <button><a href="https://atendi.com.br/estacaogrill/" target="_blank">Faça seu pedido</a></button>
            </div>
        </div>
        </div>
    )
}