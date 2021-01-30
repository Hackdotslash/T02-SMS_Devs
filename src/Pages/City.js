import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/main.css';
import Card from '../components/Card';
import '../Assets/css/city.css';
import last from '../Assets/images/4.jpg';
import corona from '../Assets/images/corona.png';

export default class City extends Component{

    constructor(props){
        super(props);

        this.state = {
            places: [],
        }

        this.place = "delhi city point of interest".split(' ').join('+');
        this.apiKey = "AIzaSyCD6irhf_cJoK_6l-GkU1T2rw1PS7NqsBc";
        this.fetchPlaces = this.fetchPlaces.bind(this);
    }

    componentDidMount() {
        this.fetchPlaces();
    }

    fetchPlaces() {
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
               
               {
                    this.state.places.map((val, i) => {
                            return (
                            <Card key={i} img_url={val.img_url} name={val.name} rating={val.rating} num_ratings={val.num_ratings} open_now={val.open_now} />
                            )
                    })
               }

                <center><img className="last" src={last} /></center>

            </div>

        );
    }
}