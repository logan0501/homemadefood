import React from "react"
import MyNavbar from "./Navbar"
import Myaddform from "./Myaddform";

function Editing(){
    return <div className="bodytag">
        <MyNavbar/>
        <h3 className="orderheading">ADD FooD</h3>
        <div class="addform">
                <Myaddform />
        </div>
    </div>;
}

export default Editing;