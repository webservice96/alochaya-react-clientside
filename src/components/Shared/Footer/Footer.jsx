import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Style.css';

function Footer() {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={2}>
                            <div className="footer-logo">
                                <h2>আলো ছায়া</h2>
                                <div className="footer-social">
                                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/"><i className="far fa-envelope"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="footer-menu">
                                <Nav className="justify-content-evenly">
                                    <Nav.Item>
                                        <Nav.Link href="/">মূল পাতা</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/">পোর্টফলিও</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/">কর্মী সমূহ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/">সেবা সমূহ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/">যোগাযোগ</Nav.Link>
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