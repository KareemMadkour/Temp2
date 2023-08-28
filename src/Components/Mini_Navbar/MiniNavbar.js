import React from "react";
import './MiniNavbar_Styling.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './search.png';
import { NavLink } from 'react-router-dom';

export default function MiniNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/quick-searches1">Services</NavLink>
                        <NavLink to="/collection-food1">Blog</NavLink>
                        <NavLink to="/get-the-app1">Shop</NavLink>
                        <NavLink to="/customer-feedback1">Feedback</NavLink>
                        <NavLink to="/contact1">Contact</NavLink>
                        <span className="space"></span>
                        <Nav.Link href="#login" className="login-btn">Login</Nav.Link>
                        <Nav.Link href="#search"> <img src={Search} alt='No-img-found' /> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}