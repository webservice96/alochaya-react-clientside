import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Up from '../../../../assets/img/u-porisad.png';
import booCov from '../../../../assets/img/book-cover.png';
import niogPotro from '../../../../assets/img/cormi-form.png';

import chuktiPotro from '../../../../assets/img/chuktiPotro.png';
import PataOne from '../../../../assets/img/PataOne.png';
import charPotro1 from '../../../../assets/img/charPotro1.png';
import charPotro2 from '../../../../assets/img/charPotro1.png';



import './Style.css';

const PortfolioFormPreview = () => {
    return (
        <>
            <div className="PortfolioFormPreview">
                <Container className="mb-5">
                    <div className="PortfolioFormPreview-header text-center mb-4">
                        <h2>আবেদন পত্র</h2>
                    </div>
                    <Row>
                        <Col md={6}>
                            <img src={Up} alt="Not Found!" />
                        </Col>
                        <Col md={6}>
                            <img src={booCov} alt="Not Found!" />
                        </Col>
                    </Row>
                </Container>

                <Container className="mb-5">
                    <div className="PortfolioFormPreview-header text-center mb-4">
                        <h2>চুক্তিপত্র</h2>
                    </div>
                    <Row>
                        <Col md={6}>
                            <img src={chuktiPotro} alt="Not Found!" />
                        </Col>
                        <Col md={6}>
                            <img src={PataOne} alt="Not Found!" />
                        </Col>
                    </Row>
                </Container>

                <Container className="mb-5">
                    <div className="PortfolioFormPreview-header text-center mb-4">
                        <h2>নিয়োগ পত্র</h2>
                    </div>
                    <Row>
                        <Col md={12} className="text-center">
                            <img src={niogPotro} alt="Not Found!" />
                        </Col>
                    </Row>
                </Container>

                <Container className='portfolio-second-form'>
                    <div className="PortfolioFormPreview-header text-center mb-4">
                        <h2>ছাড়পত্র</h2>
                    </div>
                    <Row>
                        <Col md={6}>
                            <img src={charPotro1} alt="Not Found!" />
                        </Col>
                        <Col md={6}>
                            <img src={charPotro2} alt="Not Found!" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default PortfolioFormPreview;
