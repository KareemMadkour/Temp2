import React from 'react';
import './Collection_Food_Styling.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import { Container, Row, Col, } from 'react-bootstrap';
import Img1 from './Images/blog-img1.png'
import Img2 from './Images/blog-img2.png'
import Img3 from './Images/blog-img3.png'

export default function CollectionFood() {
    return (
        <>
            <Container className='Collection-Food-Container' id='Collection-Food-Container'>
                <Row>
                    <h1>Collections Food In city</h1>
                    <Col md={6}>
                        <img src={Img1} alt='No-img-found' />
                    </Col>
                    <Col md={6} className='colRight'>
                        <h2>This Week going</h2>
                        <p>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                        <button className='seeMore-btn'>SEE MORE </button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img src={Img2} alt='No-img-found' />
                    </Col>
                    <Col md={6} className='colRight'>
                        <h2>Just Delivery Food</h2>
                        <p>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                        <button className='seeMore-btn'>SEE MORE </button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img src={Img3} alt='No-img-found' />
                    </Col>
                    <Col md={6} className='colRight'>
                        <h2>Newly Opened Cafe</h2>
                        <p>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                        <button className='seeMore-btn'>SEE MORE </button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}