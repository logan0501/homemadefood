import React from "react";
import MyNavbar from "./Navbar";
import Myorder from "./Myorder";
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router";
function Homepage(){
    const history = useHistory();
    return (
        <div>
        <MyNavbar />
        <Myorder className="order" />
        <button className="fbtn" onClick={()=>{
            history.push("/editing")
        }}><AddIcon style={{color:"white"}}/></button>
        </div>
        
    );
}

export default Homepage; 