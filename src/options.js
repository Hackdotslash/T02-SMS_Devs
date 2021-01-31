import React from "react";
import {Link,Switch} from "react-router-dom";

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

function Options() {
    return (
        <div class="container foot">
        
            <h3> How to reach? </h3>
            <p>
            <Link to={'/Page1'}> Flight</Link></p>
            <p>
            <Link to={"/Page2"}> Train</Link></p>
          
       </div>
     
    );
}

export default Options;