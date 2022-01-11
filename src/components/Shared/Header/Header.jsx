import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png';
import './Style.css';

function Header() {
    return (
        <div className="header">
            <Container>
                <Row className='align-items-center'>
                    <Col md={2}>
                        <div className="header-logo">
                            <Link to="/"><img src={Logo} alt="Alo Chaya" /></Link>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="menu">
                            <Navbar expand="lg">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="justify-content-evenly">
                                            <Nav.Link href="/">মূল পাতা</Nav.Link>
                                            <Nav.Link href="/">পোর্টফলিও</Nav.Link>
                                            <Nav.Link href="/">কর্মী সমূহ</Nav.Link>
                                            <Nav.Link href="/">সেবা সমূহ</Nav.Link>
                                            <Nav.Link href="/">যোগাযোগ</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="header-social text-end">
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="far fa-envelope"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;