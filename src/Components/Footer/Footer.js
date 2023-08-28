import React from 'react'
import './Footer_Styling.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import FaceBookIcon from '../../images/facebook.png';
import InstagramIcon from '../../images/instagram.png';
import TwitterIcon from '../../images/twitter.png';

export default function Footer() {
    return (
        <>
            <Container className='Footer-Container'>
                <Row>
                    <Col md={3}>
                        <h1>FOODFINDA</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </Col>
                    <Col md={3}>
                        <h2>NAVIGATION</h2>
                        <div className='navigation-anchors'>
                            <ul>
                                <li><a href='#Home-Container'>Home</a></li>
                                <li><a href='#Home-Container'>About</a></li>
                                <li><a href='#Home-Container'>Location</a></li>
                                <li><a href='#Home-Container'>Services</a></li>
                                <li><a href='#Home-Container'>Features</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} className='contact-info'>
                        <h2>CONTACT INFO</h2>
                        <h6>Office address : </h6>
                        <a href='#Home-Container'><FontAwesomeIcon icon={faMapMarkerAlt} /> Loram ipusm New York, NY 36524</a>
                        <br />
                        <h6>Customer Service : </h6>
                        <a href='#Home-Container'><FontAwesomeIcon icon={faPhone} /> ( +01 1234567890 ) </a>
                        <a href='#Home-Container'><FontAwesomeIcon icon={faEnvelope} /> demo@gmail.com </a>
                    </Col>
                    <Col md={3}>
                        <h2>DISCOVER</h2>
                        <div className='discover-anchors'>
                            <a href='#Home-Container'>Help</a>
                            <a href='#Home-Container'>How It works</a>
                            <a href='#Home-Container'>Subscribe</a>
                            <a href='#Contact-Container'>Contact Us</a>
                        </div>
                        <div className='social-media-icons'>
                            <a href='https://www.google.com/'><img src={FaceBookIcon} alt='No-img-found' /></a>
                            <a href='https://www.google.com/'><img src={InstagramIcon} alt='No-img-found' /></a>
                            <a href='https://www.google.com/'><img src={TwitterIcon} alt='No-img-found' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}