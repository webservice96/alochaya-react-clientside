import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Style.css';

import Up from '../../../../assets/img/u-porisad.png';
import booCov from '../../../../assets/img/book-cover.png';

function FormPreview() {
    return (
        <div className="home-form-preview-sec">
            <Container>
                <div className="home-form-preview-container">
                    <Row className='align-items-center justify-content-center'>
                        <Col xs={12} md={6} className='text-center'>
                            <img src={Up} alt="Not Found!" />
                        </Col>
                        <Col xs={12} md={6} className='text-center'>
                            <img src={booCov} alt="Not Found!" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default FormPreview;