import React, { Component } from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

export default class Options extends Component{
    constructor(props){
        super(props);

        this.renderPage1 = this.renderPage1.bind(this);
        this.renderPage2 = this.renderPage2.bind(this);
    }

    renderPage1() {
        return (
            <Page1 />
        );
    }

    renderPage2() {
        return (
            <Page2 />
        );
    }

    render() {
        return (
            <div class="container foot">
            
                <h3> How to reach? </h3>
                <button onClick={() => this.renderPage1()}>Flights</button>
                <br />
                <button onClick={() => this.renderPage2()}>Trains</button>
            
        </div>
        
        );
    }
}