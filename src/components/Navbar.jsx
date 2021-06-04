import React from "react";
import {  Navbar, Nav,  NavDropdown  } from 'react-bootstrap';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import firebase from "firebase";
import {useHistory} from "react-router-dom";
function MyNavbar(){
    const history = useHistory();
    return (  
    <Navbar sticky="top" collapseOnSelect expand="lg"  variant="dark" className="navbar">
  <Navbar.Brand className="heading" href="#home">Home Made Food <RestaurantIcon /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
     
    </Nav>
    <Nav>
    <NavDropdown title="Contents" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/homepage"><RestaurantMenuIcon /> Menus</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><FeedbackIcon /> Feedbacks</NavDropdown.Item>
        <NavDropdown.Item href="/orders"><FastfoodIcon /> Orders</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><AccountCircleIcon /> Profile</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" onClick={
          ()=>{
              firebase.auth().signOut().then((res)=>{
                  history.replace("/")
              })
          }
      }>Logout</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
    }

export default MyNavbar;