import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/main.css';
import Card from '../components/Card';
import '../Assets/css/city.css';
import last from '../Assets/images/4.jpg';
import corona from '../Assets/images/corona.png';
import { Link, Redirect } from "react-router-dom";

export default class City extends Component{

    constructor(props){
        super(props);

        this.state = {
            places: [],
            covid: [],
            place: "",
        }

        var dest = `${this.props.city} city point of interest`;
        this.place = dest.split(' ').join('+');
        this.apiKey = "AIzaSyCD6irhf_cJoK_6l-GkU1T2rw1PS7NqsBc";
        this.fetchPlaces = this.fetchPlaces.bind(this);
    }

    componentDidMount() {
        console.log(this.props.city);
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
                var address = results[i]['formatted_address'];
                var open_now = Object(results[i]['opening_hours'])['open_now'] ? "Open" : "Closed";
                var place_id = results[i]['place_id'];
                
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
                    "address": address,
                    "open_now": open_now,
                    "img_url": photo_url,
                    "place_id": place_id
                };

                final.push(place);
            }

            const covid_url = `https://corona-virus-world-and-india-data.p.rapidapi.com/api_india`;
            const requestOptions = {
                headers: {
                    "Content-Type": "application/json",
                    "x-rapidapi-key": "59ce8d6adbmsh65239e69c1fe1c3p1b6698jsn937eacd16b51",
                    "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
                    "useQueryString": true
                }
            };
            var covid = results[0]['plus_code']['compound_code'].split(', ');
            var state = covid[1];
            var city_str = covid[0].split(' ');
            var size = city_str.length;
            var city = city_str.slice(1, size).join(' ');
            //console.log(covid);
            console.log(`state: ${state}, city: ${city}`);
            fetch(covid_url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                var keys = Object.keys(data['state_wise']);
                //console.log(keys);
                for(var i = 0; i < keys.length; i++){
                    //console.log(state, keys[i]);
                    if(keys[i].includes(state)){
                        state = keys[i];
                        break;
                    }
                }
                var cov_data = Object(data['state_wise'][state]);
                if(cov_data.hasOwnProperty('district')){
                    var covid_results = cov_data['district'][city];
                } else {
                    var covid_results = cov_data;
                }
                console.log(covid_results);
                this.setState({ covid: covid_results });
            });

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
                    <p>
                        <span>{this.state.covid['active']} active cases</span><br/>
                    </p>
                    <b>{this.state.covid['active'] < 200 ? "Safe to visit :)" : "Not good to visit this time :("}</b>
                </div>
               <h2>The best Places to visit:</h2>
               
               {
                    this.state.places.map((val, i) => {
                            return (
                                // <Link
                                //     onClick={(e) => {
                                //         e.preventDefault();
                                //         this.setState({ place: val.place_id });
                                //         Redirect("/Place");
                                //     }}
                                // >
                                    <Card key={i} img_url={val.img_url} name={val.name} address={val.address} rating={val.rating} num_ratings={val.num_ratings} open_now={val.open_now} />
                                // </Link>
                            )
                    })
               }

                <center><img className="last" src={last} /></center>

            </div>

        );
    }
}