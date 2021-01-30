import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Assets/images/1.jpg';
import img2 from '../Assets/images/2.jpg';
import '../Assets/css/main.css';


class Home extends Component{
    render(){

        return(
            <div className="maincontainer container">
                <div class="row">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
                    <div class="col-sm-6 para">
                        <h1>VACATIONER</h1>
                        <br /><br /><br />
                        <p>Builds the app for production to the build folder.
                        It correctly bundles React in production mode and optimizes the build for the best performance.

                        The build is minified and the filenames include the hashes.
                        Your app is ready to be deployed!See the section about deployment for more information.</p>
                     

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
                        <input type="text" class="form-control ip" id="place" placeholder="Place Name" />
                        <br/>
                        <button type="button" class="btn btn-primary btn-lg letsgo">LET'S SEE</button>


                    </div>
                    
                </div>
                
                  
            </div>

        );
    }
}

export default Home;