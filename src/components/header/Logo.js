import React from 'react';

export default class Logo extends React.Component{

    render(){
        return(
            <div className="logo">
                <source media="(max-width: 768px)" srcSet="/img/dlogo-white-small.png"/>
                <source media="(min-width: 769px)" srcSet="/img/dlogo-white-big.png"/>
                <img src="/img/dlogo-white-big.png" alt="Logomarca"/>
            </div>
        );
    }
}