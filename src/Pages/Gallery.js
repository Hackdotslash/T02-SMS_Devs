import React,{Component} from 'react';
import '../Assets/css/gallery.css';
import img from '../Assets/images/4.jpg';
import img2 from '../Assets/images/2.jpg';

class Gallery extends Component {
    render() {

        return (
            <div className="gallerycontainer container">
                <div class="row">
                    <div class="column">
                        <img src={img} />
                        <img src={img2} />
                        <img src="/w3images/falls2.jpg" />
                        <img src="/w3images/paris.jpg" />
                        <img src="/w3images/nature.jpg" />
                        <img src="/w3images/mist.jpg" />
                        <img src="/w3images/paris.jpg" />
                    </div>
                    <div class="column">
                        <img src="/w3images/underwater.jpg" />
                        <img src="/w3images/ocean.jpg" />
                        <img src={img} />
                        <img src="/w3images/mountainskies.jpg" />
                        <img src={img2} />
                        <img src="/w3images/underwater.jpg" />
                    </div>
                    <div class="column">
                        <img src={img} />
                        <img src={img2} />
                        <img src="/w3images/falls2.jpg" />
                        <img src="/w3images/paris.jpg" />
                        <img src="/w3images/nature.jpg" />
                        <img src="/w3images/mist.jpg" />
                        <img src="/w3images/paris.jpg" />
                    </div>
                    <div class="column">
                        <img src="/w3images/underwater.jpg" />
                        <img src="/w3images/ocean.jpg" />
                        <img src={img} />
                        <img src="/w3images/mountainskies.jpg" />
                        <img src={img2} />
                        <img src="/w3images/underwater.jpg" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Gallery;