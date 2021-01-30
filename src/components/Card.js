import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/card.css';

function Card() {
    return (
       
        <div className=" row " id="card">
            <div class="col-sm-6">
                <img src="https://static.toiimg.com/photo/75012798/mumbai-live.jpg?width=748&resize=4"/>
            </div>
            <div class="col-sm-6 content">
                <h2>Mumbai</h2>
                <p>City of dreams!! vbdhvhdvbhdvvvvvvbvhgvhejvhjvjnbjrjbinribb
                    vhvhjrubhujrhbvujrbjuhjurbjbrjjnjhdhdb.
                </p>
           

                <p><span class="badge badge-pill badge-info">5/5</span><small>(10,545)</small></p>
                <br /><br />

                <div class="alert alert-secondary">
                    <strong>Open</strong>
                </div>

            </div>
        </div>
           
       
     
    );
}

export default Card;