import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/main.css';
import Card from '../components/Card';
import '../Assets/css/city.css';
import last from '../Assets/images/4.jpg';
import corona from '../Assets/images/corona.png';



class City extends Component {
    render() {

        return (
            <div className="citycontainer container">
                <div class="jumbotron">
                    <h1>Covid 19 Scenario</h1>
                    <img src="https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_960_720.png"/>
                    <hr></hr>
                    <p><span>XXXX active cases</span><br/>
                    <b>Safe to visit ;)</b>
                    </p>
                </div>
               <h2>The best Places to visit:</h2>
        
              <Card />
              <Card />
              <Card />

                <center><img className="last" src={last} /></center>

            </div>

        );
    }
}

export default City;