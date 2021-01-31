import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/main.css';
import '../Assets/css/city.css';
import Gallery from "Gallery";

export default class City extends Component{

    constructor(props){
        super(props);

        this.state = {
            images: [],
        }

        this.apiKey = "AIzaSyCD6irhf_cJoK_6l-GkU1T2rw1PS7NqsBc";
        this.fetchImages = this.fetchImages.bind(this);
    }

    componentDidMount() {
        this.fetchImages(this.props.place_id);
    }

    fetchImages(place_id) {
        var detail_url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=photos,formatted_phone_number&key=${this.apiKey}`;
        var imgs = [];
        fetch(detail_url)
        .then((response) => response.json())
        .then((data) => {
            var photos = data['result']['photos'];
            for(var i = 0; i < photos.length; i++){
                var photo_reference = photo[i]["photo_reference"];
                photo_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${this.apiKey}`;
                imgs.push(photo_url);
            }
            console.log(imgs);
        });

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
               
               {
                    this.state.images.map((val, i) => {
                            return (
                            <Card key={i} img_url={val.img_url} name={val.name} address={val.address} rating={val.rating} num_ratings={val.num_ratings} open_now={val.open_now} />
                            )
                    })
               }

            </div>

        );
    }
}