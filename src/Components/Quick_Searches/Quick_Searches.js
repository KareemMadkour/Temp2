import React from 'react';
import './Quick_Searches_Styling.css'; //import the related css file
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
//import the structural components of react bootstrap
import { Container, Row, Col, Card } from 'react-bootstrap';
//import the images
import AlcoholImg from './QS_Images/alcohol-img.png'
import BreakfastImg from './QS_Images/breakfast-img.png'
import CoffeeImg from './QS_Images/coffee-img.png'
import DeliveryImg from './QS_Images/delivery-img.png'
import DinningTableImg from './QS_Images/diningtable-img.png'
import DinnerImg from './QS_Images/dinner-img.png'

export default function QuickSearches() {
    return (
        <div className='animate__bounceIn'>
            <Container className='Quick-Searches-Container animate__zoomIn' id='Quick-Searches-Container'>
                <Row>
                    <h1 style={{ textAlign: 'center' }}>Quick Searches</h1>
                    <Col sm={4} md={2}>
                        <Card className='cardClass'>
                            <Card.Body>
                                <Card.Title> <img src={BreakfastImg} alt='No-img-found' /> </Card.Title>
                            </Card.Body>
                            <Card.Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                                Breakfast
                            </Card.Text>
                            <Card.Link href='#home' className='seeMore-btn'>SEE MORE </Card.Link>
                        </Card>
                    </Col>
                    <Col sm={4} md={2}>
                        <Card className='cardClass'>
                            <Card.Body>
                                <Card.Title> <img src={DeliveryImg} alt='No-img-found' /> </Card.Title>
                            </Card.Body>
                            <Card.Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                                Delivery
                            </Card.Text>
                            <Card.Link href='#home' className='seeMore-btn'>SEE MORE </Card.Link>
                        </Card>
                    </Col>
                    <Col sm={4} md={2}>
                        <Card className='cardClass'>
                            <Card.Body>
                                <Card.Title> <img src={DinnerImg} alt='No-img-found' /> </Card.Title>
                            </Card.Body>
                            <Card.Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                                Dinner
                            </Card.Text>
                            <Card.Link href='#home' className='seeMore-btn'>SEE MORE </Card.Link>
                        </Card>
                    </Col>
                    <Col sm={4} md={2}>
                        <Card className='cardClass'>
                            <Card.Body>
                                <Card.Title> <img src={CoffeeImg} alt='No-img-found' /> </Card.Title>
                            </Card.Body>
                            <Card.Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                                Coffee
                            </Card.Text>
                            <Card.Link href='#home' className='seeMore-btn'>SEE MORE </Card.Link>
                        </Card>
                    </Col>
                    <Col sm={4} md={2}>
                        <Card className='cardClass'>
                            <Card.Body>
                                <Card.Title> <img src={AlcoholImg} alt='No-img-found' /> </Card.Title>
                            </Card.Body>
                            <Card.Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                                Alcohol
                            </Card.Text>
                            <Card.Link href='#home' className='seeMore-btn'>SEE MORE </Card.Link>
                        </Card>
                    </Col>
                    <Col sm={4} md={2}>
                        <Card className='cardClass'>
                            <Card.Body>
                                <Card.Title> <img src={DinningTableImg} alt='No-img-found' /> </Card.Title>
                            </Card.Body>
                            <Card.Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
                                DinningTable
                            </Card.Text>
                            <Card.Link href='#home' className='seeMore-btn'>SEE MORE </Card.Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}