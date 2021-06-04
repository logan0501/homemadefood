import React, { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Editing from "./components/Editing"
import firebase from "./firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import Orderspage from "./components/orderscomponents/Orderspage";

function App() {
  // function adddata(){
  //   firebase.firestore().collection("samplewebtesting").add({
  //     name:"logan",
  //     name1:"sethu",
  //     name2:"nishant"
  //   }).then((res)=>{
  //     console.log(res);
  //   })
  // }
  return <Router >
      <Route path="/" exact >
        <div>
          <Header/>
          <Form/>
        </div>
        </Route>
      <Route path="/homepage"><Homepage/></Route>
      <Route path="/orders"><Orderspage/></Route> 
      <Route path="/editing" exact ><Editing /></Route >
    </Router>
    
   
}
export default App;
