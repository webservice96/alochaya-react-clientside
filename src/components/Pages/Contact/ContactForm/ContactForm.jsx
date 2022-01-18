import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Style.css';

const ContactForm = () => {
    return (
        <>
            <div className="contact-sec">
                <Container>
                    <Row className='align-items-center'>
                        <Col sm={12} xs={12} md={7}>
                            <div className="contact-form shadow-lg p-5">
                                <Form>
                                    <Form.Group className="mb-5" controlId="name">
                                        <Form.Label>আপনার নাম *</Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>

                                    <Form.Group className="mb-5" controlId="email">
                                        <Form.Label>ইমেইল *</Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>

                                    <Form.Group className="mb-5" controlId="email">
                                        <Form.Label>বার্তা লিখুন *</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            style={{ height: '100px' }}
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant="danger" type="submit">
                                        সাবমিট করুন
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                        <Col sm={12} xs={12} md={5} className='ps-5'>
                            <div className="text-contact-right">
                                <div className="textContact-box mb-5">
                                    <h3>ঠিকানা</h3>
                                    <p>ডাকঘরঃ দুবলহাটি-৬৫০০, উপজেলাঃ নওগাঁ সদর, জেলাঃ নওগাঁ</p>
                                </div>
                                <div className="textContact-box mb-5">
                                    <h3>হটলাইন</h3>
                                    <p>০১৭১৩-৭০৫৩৪০</p>
                                    <p>০১৮২৪-৭০৫৩৪০</p>
                                </div>
                                <div className="textContact-box mb-5">
                                    <h3>ইমেইল</h3>
                                    <p>ah3849495@gmail.com</p>
                                </div>

                                <div className="social-contact">
                                    <a href="https://www.facebook.com/alochaya.org" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="/#"><i class="fab fa-instagram"></i></a>
                                    <a href="/#"><i class="fab fa-twitter"></i></a>
                                    <a href="mailto:ah3849495@gmail.com"><i class="far fa-envelope"></i></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ContactForm;
