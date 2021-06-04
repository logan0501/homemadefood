import React from "react";
import MyNavbar from "../Navbar";
import Mytoast from "./Mytoast";
import orderitems from "./orderitems";
function Orderspage(){
    return (
        <div>
            <MyNavbar />
            <div className="bodytag">
            <h3 className="orderheading">ORDERS</h3>
             <div className = "mymenuitem">
                {orderitems.map(item=>{
                    return <Mytoast className="menuitem" name={item.order} time={item.time}/>;
                })}     
            </div> 
        </div>
        </div>
        
        
    );
}

export default Orderspage;