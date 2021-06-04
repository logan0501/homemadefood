import React,{useEffect, useState} from "react";
import menuitems from "./menuitems";
import Orderitemcard from "./Orderitemcard";
import {useHistory} from "react-router-dom";
import firebase from "firebase"
function Myorder(){
    
    const History = useHistory();
    const [menu,changemenu]=useState(menuitems);
    useEffect(()=>{
        var uid = firebase.auth().currentUser.uid;
        if(uid!=null){
            firebase.firestore().collection("Food maker").doc(uid)
            .collection("menus").onSnapshot((snapshot)=>{
              var menulist=[];
                snapshot.forEach((data)=>{
                  var id = data.id;
                  var data = data.data();
                 
                 var datas= {
                    foodid:data.id,
                    foodname:data.name,
                    duration:data.duration,
                    imgurl:data.file,
                    isavailable:data.available,
                    price:data.price,
            
                };
                 
                menulist.push(datas);
               
                });
                changemenu([...menuitems,...menulist]);
              })
        }else{
            console.log("error occured");
        }
       
    },[])
    function handleclick(){
        History.push("/editing")
    }
    return (

        <div className="bodytag">
            <h3 className="orderheading">MENUS</h3>
            
            <div className="mycards">
                {menu.map(item=>{
                    var available = item.isavailable?"Available":"Not Available";
                    var price="Price :"+item.price;
                    var time = " \nDuration for prepartion:"+item.duration
                    return <Orderitemcard name={item.foodname} imgurl={item.imgurl} price={price} available={available} time={time}/>
                })}
                
              
            </div>
          
        </div>
    );
}
export default Myorder;