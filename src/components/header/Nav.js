import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component{

    render(){
        return(
            <div className="nav">
                <AnchorLink href='#home' offset='10'>Home</AnchorLink>
                <AnchorLink href='#clientes'>Clientes</AnchorLink>
                <AnchorLink href='#notaFiscal'>Nota Fiscal</AnchorLink>
                <AnchorLink href='#contact'>Contato</AnchorLink>
            </div>
        );
    }
}