import React from 'react';
import "animate.css/animate.min.css";
import './Get_The_App_Styling.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import Icon1 from './Images/icon-1.png'
import Icon2 from './Images/icon-2.png'
import IconMobile from './Images/mobile-img.png'


export default function GetTheApp() {
    return (
        <div className='bgColorContainer '>
            <Container className='Get-The-App-Container animate__bounceIn' id='Get-The-App-Container'>
                <Row>
                    <Col md={6}>
                        <h1 style={{ color: 'white' }}>Get the</h1>
                        <h1 style={{ color: 'black' }}>Food Finda App</h1>
                        <p>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        </p>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <img src={Icon1} alt='No-img-found' />
                                    <img src={Icon2} alt='No-img-found' />
                                </Col>
                                <a href='#home' className='downloadNow-btn'>Download Now</a>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={6}>
                        <img src={IconMobile} alt='No-img-found' className='mobileImg' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}