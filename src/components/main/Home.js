import React from 'react';

export default class Home extends React.Component{

    render(){
        return(
            <div className="home" id="home">
                <h1>Home</h1>
                <div>
                <p>Uma das práticas mais corriqueiras quando sem tem várias aplicações controlando 
                    diversas partes dos sistemas é a necessidade das aplicações conversarem entre sí. 
                    Uma das formas mais difundidas atualmente são serviços REST.
                    Queremos observar a capacidade do candidato de inicar um projeto do zero contendo 
                    um módulo de cadastro de clientes e utilização deste cliente em um registro de uma nova nota fiscal.</p>
                </div>
            </div>
        )
    }
}