import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Assets/images/1.jpg';
import img2 from '../Assets/images/2.jpg';
import '../Assets/css/main.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

$("#button").click(function () {
    $(window).scrollTop(0);
});


export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            places: [],
        }

        this.apiKey = "AIzaSyCD6irhf_cJoK_6l-GkU1T2rw1PS7NqsBc";
        this.fetchPlaces = this.fetchPlaces.bind(this);
    }

    fetchPlaces() {
        var dest = `${document.getElementById("place").value} city point of interest`;
        this.place = dest.split(' ').join('+');
        console.log(this.place);
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.place}&language=en&key=${this.apiKey}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            var final = [];
            var results = Array(data)[0]['results'];
            //console.log(results);
            
            for(var i = 0; i < results.length; i++){
                var name = results[i]['name'];
                var rating = results[i]['rating'];
                var num_ratings = results[i]['user_ratings_total'];
                var open_now = Object(results[i]['opening_hours'])['open_now'];
                
                var photo = Object(results[i]['photos']);
                var photo_url = "NA";
                if(photo.length > 0){
                    var photo_reference = photo["0"]["photo_reference"];
                    photo_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${this.apiKey}`;
                    //console.log(photo_url);
                }

                var place = {
                    "name": name,
                    "rating": rating,
                    "num_ratings": num_ratings,
                    "open_now": open_now,
                    "img_url": photo_url
                };

                final.push(place);
            }
            console.log(final);
            this.setState({ places: final });
            return final;
        });
    }

    render(){
      

        return(
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
                        <input type="text" class="form-control ip" id="place" placeholder="Place Name" />
                        <br/>
                        <button id="button" class="btn btn-large btn-primary" onClick={this.fetchPlaces}><Link to={"/City"}><b>LET'S SEE</b></Link></button>


                    </div>
                    
                </div>
                
                  
            </div>

        );
    }
}