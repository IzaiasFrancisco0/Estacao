import './Rodape.css';
import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import image from './banner.png';

export default function(){
    return (
        <div className="rodape" id="contato">
            <div className="info_rodape"> 
            <div className="logo_img">
                <img src={image} /> 
            </div>
           <div className="frase">
            <span>O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo? (Salmos 27:1)</span>
           </div>
           <div className="redes_sociais">
            <h3>Redes</h3>
            <a href="#"><FontAwesomeIcon className="icone" icon={faInstagram} /> EstacaoGrill034</a>
            <a href="#"><FontAwesomeIcon className="icone" icon={faWhatsapp} /> Whatsapp </a>
            <a href="#">Email: EstacaoGrill@gmail.com</a>
            <span className="adress">Endereço: Av Wilson Rodrigues n: 161 🔗</span>
           </div>
           </div>
           <div className="direito_reservado">
            <h4>Copyright © 2024. Todos os direitos reservados</h4>
           </div>
        </div>
    )
}