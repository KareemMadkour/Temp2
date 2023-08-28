import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import './Navbar_Styling.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from './logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Navbar() {
    return (
        <>
            <Container className='Navbar-container'>
                <Row>
                    <Col md={4}>
                        <a href="#home" className='leftA'><FontAwesomeIcon icon={faPhone} /> Call : +01 234567890</a>
                    </Col>
                    <Col md={4}>
                        <img src={Logo} alt='No-img-found' />
                    </Col>
                    <Col md={4}>
                        <a href='#home' className='rightA'> <FontAwesomeIcon icon={faEnvelope} /> Email : Demo@gmail.com </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}