import React from 'react';
import './Contact_Styling.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Contact() {
    return (
        <>
            <Container className='Contact-Container' id='Contact-Container'>
                <Row>
                    <h1>Get In Touch</h1>
                    <Col md={12}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="Text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="Text" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="Email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={4} placeholder="Message"></Form.Control>
                            </Form.Group>
                            <button className='send-btn'>SEND</button>
                        </Form>
                        <div className='mini-div'>
                            <h1>ORDER BEST FOOD AT TIME</h1>
                            <button className='send-btn'>ORDER NOW</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}