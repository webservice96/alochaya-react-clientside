import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png';
import './Style.css';

function Header() {
    return (
        <div className="header">
            <Container>
                <Row className='align-items-center'>
                    <Col sm={3} md={2}>
                        <div className="header-logo">
                            <Link to="/"><img src={Logo} alt="Alo Chaya" /></Link>
                        </div>
                    </Col>
                    <Col sm={5} md={8}>
                        <div className="menu">
                            <Navbar expand="lg">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="justify-content-evenly">
                                            <NavLink to="/" className="nav-link">মূল পাতা</NavLink>
                                            <NavLink to="/portfolio" className="nav-link">পোর্টফলিও</NavLink>
                                            <NavLink to="/cormi" className="nav-link">কর্মী সমূহ</NavLink>
                                            <NavLink to="/sebasomuho" className="nav-link">সেবা সমূহ</NavLink>
                                            <NavLink to="/contact" className="nav-link">যোগাযোগ</NavLink>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                    <Col sm={4} md={2}>
                        <div className="header-social text-end">
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="far fa-envelope"></i></a>
                        </div>
                    </Col>
                </Row>

                {/* <Row>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row> */}
            </Container>
        </div>
    )
}

export default Header;