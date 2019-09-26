import React from 'react';
import InputMask from 'react-input-mask';

export default class Cliente extends React.Component{

    render(){
        return(
            <div className="formulario" id="contact">
                <h1>Contato</h1>
                <form name="form1" method="post" action="/controller/contact.js">
                    <input type="text" name="nome" id="nome" placeholder="Nome:"/>
                    <InputMask 
                        mask="(99) 99999-9999" 
                        type="tel" 
                        name="telefone" 
                        id="telefone" 
                        placeholder="Telefone:" 
                        />
                    <input type="email" name="email" id="email" placeholder="Email:"/>
                    <textarea name="mensagem" id="mensagem" placeholder="Mensagem"></textarea>
                    <input type="submit" value="enviar"/>
                </form>
            </div>
        );
    }
}