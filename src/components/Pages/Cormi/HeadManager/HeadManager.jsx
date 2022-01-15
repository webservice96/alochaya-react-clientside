import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headManager from '../../../../assets/img/head-manager.png';
import './Style.css';

const HeadManager = () => {
    return (
        <div className='headManager-sec'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <div className="headManager-left">
                            <h2 className='mb-4'>মোঃ আনোয়ার হোসেন</h2>
                            <p className='text-danger mb-3'>ব্যবস্থাপক পরিচালক - ইউপি হাউজিং অ্যান্ড ডেভেলপমেন্ট বোর্ডের</p>
                            <p >আমার উদ্দেশ্য হচ্ছে পিতা-মাতাকে সেবা করা, সন্তান কে সুশিক্ষিত করা,হালাল উপার্জন করা,এবং সৎ ভাবে চলা</p>

                            <div className="headManager-social mt-4 d-flex align-items-end justify-content-between">
                                <ul>
                                    <li><i className="fas fa-phone-alt"></i> ০১৬৫০২২৩৫৭৮</li>
                                    <li><i className="fas fa-envelope"></i> shakilhasan055@gmail.com</li>
                                </ul>
                                <div>
                                    <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={headManager} alt="Manager" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeadManager;
