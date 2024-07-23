import react from 'react';
import './Feedback.css';
import {useState} from 'react';
import emailjs from '@emailjs/browser';

export default function Feedback(){
     const [usuario, setUsuario] = useState("");
     const [mensagem, setMensagem] = useState("");
     const [email, setEmail] = useState("");
     const [confirmacao, setConfirmacao] = useState(false);

     function handleClick(e){
        e.preventDefault();
         
        if(mensagem && usuario !== ''){
        setTimeout(() => {

            setConfirmacao(true);
        }, 1500)

        
            /*
        localStorage.setItem("usuario", usuario)
        localStorage.setItem("mensagem", mensagem)

        const getUsuario = localStorage.getItem("usuario");
        const getMensagem = localStorage.getItem("mensagem");
        
    setTimeout(() => {



        console.log(getUsuario, getMensagem)
     
        
   
*/

        }
        const templateParams = {
            from_name: usuario,
            message: mensagem,
            email: email

        }
     emailjs.send("service_a1z5n3j", "template_d8qzo9o", templateParams, "oj2MWs7-IHUBmdza1")
     .then((response) => {
       console.log("email enviado", response.status, response.text)
       setUsuario("");
        setMensagem("");
        setEmail("")
     }, (err) => {
        console.log("error", err)
     })
  
     }

    return (
        <div className="feedback" id="feedback">
            <form>
                <h2>Mande uma Sugestão</h2>
                <label>Digite seu nome</label>
                <input type="text" value={usuario} required onChange={(e) => setUsuario(e.target.value)}/>
                <label>Digite seu email</label>
                <input type="text" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                <label>Feedback</label>
                <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)}>
                 
                </textarea>
                <button onClick={handleClick}>Enviar</button>
                 {(confirmacao && (
                    <span className="mensagem">Enviado!! Obrigado pelo feedback..</span>
                 ))}
            </form>
        </div>
    )
}