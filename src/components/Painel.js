import React from 'react'
import './Painel.css'
import arroz from './arroz.jpeg';
import feijao from './feijao.jpeg';
import macarrao from './macarrao.jpeg';
import tomate from './tomate.jpeg';
import melancia from './melancia.jpeg';
import quibebe from './quibebe.jpeg';

export default function Painel(){
    return(
    <div className="painel">
     <img src={arroz} alt="imagem restaurante" />
     <img src={feijao} alt="imagem restaurante" />
     <img src={quibebe} alt="imagem restaurante" />
     <img src={tomate} alt="imagem restaurante" />
     <img src={macarrao} alt="imagem restaurante" />
     <img src={melancia} alt="imagem restaurante" />
    
    </div>
      )
}