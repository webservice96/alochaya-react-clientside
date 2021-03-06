import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Style.css';

import topImg from '../../../assets/img/footer-top-right.png';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>

            <div className="footer-top">
                <Container>
                    <Row>
                        <Col md={8} className='offset-md-2'>
                            <Row className="justify-content-center align-items-center">
                                <Col xs={12} md={6}>
                                    <div className="footer-top-left">
                                        <h3>কোন প্রশ্ন থাকলে যোগাযোগ করুন</h3>
                                        <ul>
                                            <li><i class="fas fa-phone-alt"></i> ০১৭১৩-৭০৫৩৪০</li>
                                            <li><i class="fas fa-envelope"></i> ah3849495@gmail.com</li>
                                        </ul>
                                        <a href="mailto:ah3849495@gmail.com"><Button variant="danger">বার্তা পাঠান <i class="fas fa-arrow-right"></i></Button></a>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="footer-top-right text-center">
                                        <img src={topImg} alt="Not Found!" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={2}>
                            <div className="footer-logo">
                                <h2>আলো ছায়া</h2>
                                <div className="footer-social">
                                    <a href="https://www.facebook.com/alochaya.org" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="mailto:ah3849495@gmail.com"><i className="far fa-envelope"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="footer-menu">
                                <Nav className="footer-menu-flex justify-content-evenly">
                                    <Nav.Item>
                                        <NavLink to="/" className="nav-link">মূল পাতা</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/portfolio" className="nav-link">পোর্টফলিও</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/cormi" className="nav-link">কর্মী সমূহ</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/sebasomuho" className="nav-link">সেবা সমূহ</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/montobbo" className="nav-link">মন্তব্য</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/contact" className="nav-link">যোগাযোগ</NavLink>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-contact">
                                <span>যোগাযোগের তথ্য</span>
                                <p>ডাকঘরঃ দুবলহাটি-৬৫০০,
                                    উপজেলাঃ নওগাঁ সদর, জেলাঃ নওগাঁ
                                    ০১৭১৩-৭০৫৩৪০
                                    alochaya@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="footer-copyright">
                <Container>
                    © Copyright 2021 be_DEVELOPER
                </Container>
            </div>
        </>
    )
}

export default Footer;