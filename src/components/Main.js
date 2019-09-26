import React from 'react';
import Cliente from './main/Cliente';
import NotaFiscal from './main/NotaFiscal';
import Contact from './main/Contact';
import Home from './main/Home';

export default class Main extends React.Component{

    render(){
        return(
            <div className="main">
                <Home/>
                <Cliente/>
                <NotaFiscal/>
                <Contact/>
            </div>
        );
    }
}