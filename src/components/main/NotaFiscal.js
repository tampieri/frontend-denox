import React from 'react';
import InputMask from 'react-input-mask';

export default class NotaFiscal extends React.Component{

    render(){
        return(
            <div className="formulario" id="notaFiscal">
            <h1>Nota fiscal</h1>
            <h2>Cadastro nota fiscal</h2>
            <form name="insereNotaFiscal" method="post" action="/controller/notaFiscal.js">
                <input type="text" name="cliente" id="cliente" placeholder="Id cliente:"/>
                <input type="item" name="nomeItem" id="nomeItem" placeholder="Nome item:"/>
                <input type="item" name="quantidade" id="quantidade" placeholder="Quantidade:"/>
                <input type="item" name="preco" id="preco" placeholder="Preço:"/>
                <input type="submit" value="Incluir Item"/>
                <h3>Itens</h3>
                    <table>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                    </tr>
                    <tr>
                        <td>Notebook</td>
                        <td>1</td>
                        <td>2000.00</td>
                    </tr>
                    <tr>
                        <td>Monitor</td>
                        <td>2</td>
                        <td>600.00</td>
                    </tr>
                    </table>
                <input type="submit" value="Salvar"/>
            </form>

            <div className="pesquisaNotaFiscal">
                <h2>Pesquisar Nota</h2>
                <input type="text" name="id" id="id" placeholder="Id Nota:"/>
                <button action="">Buscar</button>
                <br/><br/>
                <h3>Resultado</h3>
                <p id="resultNota">Id: 1 Cliente: Higor Tampieri</p>
                <table>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Preço Total</th>
                </tr>
                <tr>
                    <td>Notebook</td>
                    <td>1</td>
                    <td>2000.00</td>
                    <td>2000.00</td>
                </tr>
                <tr>
                    <td>Monitor</td>
                    <td>2</td>
                    <td>600.00</td>
                    <td>1200.00</td>
                </tr>
                </table>
                <br/><br/>
            </div>
            
            <div className="listaCliente">
                <h2>Lista Notas Fiscais</h2>
                <button action="">Carregar</button>
                <h3>Resultado Lista Nota Fiscal</h3>
                <p id="resultNota">Id: 1 Cliente: Higor Tampieri</p>
                <table>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Preço Total</th>
                </tr>
                <tr>
                    <td>Notebook</td>
                    <td>1</td>
                    <td>2000.00</td>
                    <td>2000.00</td>
                </tr>
                <tr>
                    <td>Monitor</td>
                    <td>2</td>
                    <td>600.00</td>
                    <td>1200.00</td>
                </tr>
                </table>
            </div>
        </div>
        );
    }
}