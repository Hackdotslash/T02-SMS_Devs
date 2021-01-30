import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/main.css';
import Card from '../components/Card';
import '../Assets/css/city.css';


class City extends Component {
    render() {

        return (
            <div className="citycontainer container">
        
              <Card />
              <Card />
              <Card />

            </div>

        );
    }
}

export default City;