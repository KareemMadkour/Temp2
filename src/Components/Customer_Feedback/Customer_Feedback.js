import React from 'react';
import './Customer_Feedback_Styling.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function CustomerFeedback() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
        speed:2000
    };
    return (
        <>
            <Container className='Customer-Says-Container'>
                <h1>Customer Says</h1>
                <Row>
                    <Col md={12} sm={12}>
                        <Slider {...settings}>
                            <div className='allCards'>
                                <Card>
                                    <Card.Title>Loliy Mark</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Title>Den Mark</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Title>Johnson Mark</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='allCards'>
                                <Card>
                                    <Card.Title>Loliy Mark</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Title>Den Mark</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Title>Johnson Mark</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Now use Lorem Ipsum as their default model text, and a search for 'loremnow use Lorem Ipsum as their default model text, and a search for 'lorem
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container >
        </>
    )
}