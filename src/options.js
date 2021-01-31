import React from "react";
import {Link,Switch} from "react-router-dom";
import page1 from "./page1";
import page2 from "./page2";

function Options() {
    return (
        <div class="container foot">
        
            <p> How to reach? </p>
            <p>
            <Link to={"/page1"}> Flight</Link></p>
            <p>
            <Link to={"/page2"}> Train</Link></p>
          
       </div>
     
    );
}

export default Options;