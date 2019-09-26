import { API_CONFIG } from './../config/api.config';
import React from 'react';
import * as ReactDOM from "react-dom";


export default class ClienteService extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: any,
            url:`${API_CONFIG.baseUrl}/customer/${id}`
        }
    }

    componentDidMount(){

    }S

    render(){
        return null
    }
}