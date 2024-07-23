import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import {useState} from 'react';

export default function Menu(){
    const [menuOpen, setMenuOpen] = useState(false)

    function menuShow(){
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="menu" id="inicio">
            <div className="logo_name">
            <img src="https://th.bing.com/th/id/R.3dbe043a49e91333e57b5187b8d2e04b?rik=5R6dENIxI%2fGARQ&pid=ImgRaw&r=0" alt="logo restaurante" />
            <h1>Estação Grill</h1>
            </div>
            <div className="pedido">
            <span><FontAwesomeIcon className="icone" icon={faWhatsapp} /> (34) 99723-0876</span>
            </div>
            <div className="nav_bar" onClick={menuShow}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
            <div className={`mobile_menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li className="item_list"><a href="#container">Inicio</a></li>
                    <li className="item_list"><a href="#sobre">Sobre</a></li>
                    <li className="item_list"><a href="#feedback" onClick={() => setMenuOpen(false)}>Feedback</a></li>
                    <li className="item_list"><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </div>
    )
}