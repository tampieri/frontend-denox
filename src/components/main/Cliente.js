import React from 'react';

export default class Cliente extends React.Component{

    render(){
        return(

            <div className="formulario" id="clientes">
                <h1>Cliente</h1>
                <h2>Cadastro novo cliente</h2>
                <form name="insereCliente" method="post" action="/controller/services/cliente.service.js">
                    <input type="text" name="nome" id="nome" placeholder="Nome:"/>
                    <input type="cpfoucnpj" name="cpfoucnpj" id="cpfoucnpj" placeholder="Cpf ou cnpj"/>
                    <input type="submit" value="enviar"/>
                </form>

                <div className="pesquisaCliente">
                    <h2>Pesquisar cliente</h2>
                    <input type="text" name="id" id="id" placeholder="Id cliente:"/>
                    <button action="">Buscar</button>
                    <br/><br/>
                    <p id="resultCliente">Id: 1 Nome: Higor Tampieri Cpf: 04473269612</p>
                    <button action="" >Excluir</button>
                    <br/><br/>
                </div>

                <div className="listaCliente">
                    <h2>lista clientes</h2>
                    <button action="">Carregar</button>
                    <h3>Resultado Lista</h3>
                    <table>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cpf/cnpj</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Higor Tampieri</td>
                        <td>04473269612</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Higor Tampieri1</td>
                        <td>04473269611</td>
                    </tr>
                    </table>
                </div>
            </div>
            
        );
    }
}