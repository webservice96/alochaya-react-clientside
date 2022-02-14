import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png';
import './Style.css';

function Header() {
    return (
        <div className="header">
            <Container>
                <Row className='align-items-center desktop-menu'>
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
                                            <NavLink to="/montobbo" className="nav-link">মন্তব্য</NavLink>
                                            <NavLink to="/contact" className="nav-link">যোগাযোগ</NavLink>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                    <Col sm={4} md={2}>
                        <div className="header-social text-end">
                            <a href="https://www.facebook.com/alochaya.org" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="mailto:ah3849495@gmail.com"><i className="far fa-envelope"></i></a>
                        </div>
                    </Col>
                </Row>

                <Row className='mobile-menu'>
                    <Navbar expand="lg">
                        <Link to="/" className='navbar-brand'>
                            <div className="header-logo">
                                <Link to="/"><img src={Logo} alt="Alo Chaya" /></Link>
                            </div>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/" className="nav-link">মূল পাতা</NavLink>
                                <NavLink to="/portfolio" className="nav-link">পোর্টফলিও</NavLink>
                                <NavLink to="/cormi" className="nav-link">কর্মী সমূহ</NavLink>
                                <NavLink to="/sebasomuho" className="nav-link">সেবা সমূহ</NavLink>
                                <NavLink to="/montobbo" className="nav-link">মন্তব্য</NavLink>
                                <NavLink to="/contact" className="nav-link">যোগাযোগ</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </div>
    )
}

export default Header;