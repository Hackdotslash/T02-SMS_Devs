import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/main.css';
import '../Assets/css/city.css';
import Gallery from "../components/Gallery";

export default class Place extends Component{

    constructor(props){
        super(props);

        this.state = {
            images: [],
        }

        this.place_id = "ChIJkWVv59bBwjsRHarg2LI6ikI";
        this.apiKey = "AIzaSyCD6irhf_cJoK_6l-GkU1T2rw1PS7NqsBc";
        this.fetchImages = this.fetchImages.bind(this);
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages() {
        var detail_url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.place_id}&fields=photos,formatted_phone_number&key=${this.apiKey}`;
        var imgs = [];
        fetch(detail_url)
        .then((response) => response.json())
        .then((data) => {
            var photos = data['result']['photos'];
            for(var i = 0; i < photos.length; i++){
                var photo_reference = photos[i]["photo_reference"];
                var photo_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=${photo_reference}&key=${this.apiKey}`;
                imgs.push(photo_url);
            }
            this.setState({ images: imgs });
            console.log(imgs);
        });
    }

    render() {
        //const photos = Array(this.state.photos);
        return (
            <div className="gallerycontainer container">
                <h1>Gallery</h1>
                <Gallery
                    img1={this.state.images[0]}
                    img2={this.state.images[1]}
                    img3={this.state.images[2]}
                    img4={this.state.images[3]}
                    img5={this.state.images[4]}
                    img6={this.state.images[5]}
                    img7={this.state.images[6]}
                    img8={this.state.images[7]}
                    img9={this.state.images[8]}
                    img10={this.state.images[9]}
                    img11={this.state.images[10]}
                    img12={this.state.images[11]}
                />
            </div>
        );
    }
}