import React from "react";
import {Card,Button} from "react-bootstrap";
import EditIcon from '@material-ui/icons/Edit';
function Orderitemcard(props){
    return (
    <Card className="mycard" bg="secondary" text="white" style={{height:"23rem"}}>
  <Card.Img variant="top"  src={props.imgurl} style={{height:"12rem"}}/>
  <Card.Body>
    <Card.Title style={{fontSize:"20px",fontWeight:"bold"}}>{props.name}</Card.Title>
    <Card.Text style={{fontSize:"15px"}}>
      {props.price}
    </Card.Text>
    <Card.Text style={{fontSize:"15px"}}>
      {props.time}
    </Card.Text>
    <Card.Text style={{fontSize:"15px"}}>
      {props.available}
    </Card.Text>
    <Button variant="light">Edit Info <EditIcon style={{height:"1rem",marginBottom:"3px"}}/></Button>
  </Card.Body>
</Card>
    );
}

export default Orderitemcard;