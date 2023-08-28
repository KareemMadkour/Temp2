import React from 'react';
import './Home_Styling.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from './search.png';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Home() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
    };
    return (
        <>
            <Container className='Home-Container animate__zoomIn' id='Home-Container'>
                <Row>
                    <Col md={12}>
                        <Slider {...settings}>
                            <div>
                                <h1 className='mt-4'>Find The Best Restaurants</h1>
                                <h1>Cafes And Bars in</h1>
                                <div className='yourCity-cont'>YOUR CITY</div>
                                <div className='dropdown-with-input'>
                                    <Dropdown className="d-inline mx-2 allCategory">
                                        <Dropdown.Toggle id="dropdown-autoclose-true">
                                            All Category
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#home">Action</Dropdown.Item>
                                            <Dropdown.Item href="#home">Another Action</Dropdown.Item>
                                            <Dropdown.Item href="#home">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <InputGroup className="mb-3 mt-4 inputGroup">
                                        <Form.Control
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <Button variant="secondary">
                                            <img src={Search} alt='No-img-found' />
                                        </Button>
                                    </InputGroup>
                                </div>
                                <a href='#home' className='orderNow-btn'>Order now</a>
                            </div>
                            <div>
                                <h1 className='mt-4'>Find The Best Restaurants</h1>
                                <h1>Cafes And Bars in</h1>
                                <div className='yourCity-cont'>YOUR CITY</div>
                                <div className='dropdown-with-input'>
                                    <Dropdown className="d-inline mx-2 allCategory">
                                        <Dropdown.Toggle id="dropdown-autoclose-true">
                                            All Category
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#home">Action</Dropdown.Item>
                                            <Dropdown.Item href="#home">Another Action</Dropdown.Item>
                                            <Dropdown.Item href="#home">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <InputGroup className="mb-3 mt-4 inputGroup">
                                        <Form.Control
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <Button variant="secondary">
                                            <img src={Search} alt='No-img-found' />
                                        </Button>
                                    </InputGroup>
                                </div>
                                <a href='#home' className='orderNow-btn'>Order now</a>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
