import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Style.css';

const Breadcrumb = ({ title, desc }) => {
    return (
        <div className='breacrumb'>
            <Container className='text-center'>
                <Row>
                    <h2>{title}</h2>
                    {
                        desc && (
                            <>
                                <p>{desc}</p>
                            </>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Breadcrumb;
