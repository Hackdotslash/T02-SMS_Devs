import React, { Component, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Assets/images/1.jpg';
import img2 from '../Assets/images/2.jpg';
import '../Assets/css/main.css';
import {Link} from 'react-router-dom';
import City from './City';


export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            city: null,
            clicked: false,
        }

        this.handleButtonPressed = this.handleButtonPressed.bind(this);
        
    }

    // useEffect(() => {
    //     console.log(this.state.clicked);
    // });

    handleButtonPressed() {
        var dest = document.getElementById("place").value;
        // var place = dest.split(' ').join('+');
        // console.log(place);
        this.setState({ city: document.getElementById("place").value });
        console.log(this.state.city, dest);
    }

    // componentWillUnmount() {
    //     this.setState({ city: document.getElementById("place").value });
    //     console.log(this.state.city);
    // }

    renderHomePage() {
        return (
            <div className="maincontainer container">
                <div class="row">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
                    <div class="col-sm-6 para">
                        <br /><br /><br />
                        <p> <h2>Hey there!</h2> <h5>Planning a vacation but worried about COVID? </h5>
                        <br/>
                        Put an end to your worry and pack your bags as we tell you about the safest 
                        destinations to visit in the city of your choice...In just one click!
                        <br/>
                         </p>
                     

                    </div>
                    <div class="col-sm-6">
                          <img src={img1}/>
                    </div>
                </div>

                <br />

                <div class="row">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
                    
                    <div class="col-sm-6">
                        <img src={img2} />
                    </div>
                    <div class="col-sm-6">
                        <br /><br /><br />
                        <p> Enter the place where you want to visit and find:
                        <ul><li> COVID Scenario of the place </li>
                        <li> Major tourist attractions of the place </li>
                        <li> How to reach the place </li>
                        </ul></p>
                        <br/>
                        <input type="text" class="form-control ip" id="place" placeholder="Place Name" onChange={() => this.handleButtonPressed()} />
                        <br/>
                        <Link to={"/City"} onClick={() => {this.setState({clicked: true})}}>CLICK TO SEE</Link>

                    </div>
                    
                </div>
                
                  
            </div>
        );
    }

    renderCityPage() {
        this.setState({ city: document.getElementById('place').value });
        return (
            <div className="maincontainer container">
                <City city={this.state.city} />
            </div>
        );
    }

    render(){

        return(
            <div>
                {this.state.clicked ? this.renderCityPage() : this.renderHomePage()}
            </div>
        );
    }
}