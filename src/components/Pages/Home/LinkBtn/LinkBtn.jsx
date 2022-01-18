import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css';



function LinkBtn() {
    return (
        <>
            <div className="homeBtn-sec">
                <Container>
                    <Row>
                        <Col md={8} className='offset-md-2'>
                            <div className="homeBtn">
                                <Link to="/cormi"><Button className='shadow'><i class="fas fa-caret-right"></i> নিয়োগ পত্র</Button></Link>
                                <Link to="/portfolio"><Button className='shadow'><i class="fas fa-caret-right"></i> চুক্তিপত্র</Button></Link>
                                <Link to="/portfolio"><Button className='shadow'><i class="fas fa-caret-right"></i> ছাড়পত্র</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LinkBtn;