import React from "react";
import {Button, Toast} from "react-bootstrap";
function Mytoast(props){
    return (
        <Toast>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
    <strong className="mr-auto">{props.name}</strong>
    <small>{props.time}</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
  <Button >Accept</Button>
</Toast>
    );
}

export default Mytoast;