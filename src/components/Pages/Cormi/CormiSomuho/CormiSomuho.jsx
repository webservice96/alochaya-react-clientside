import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Style.css';

import cormiImg1 from '../../../../assets/img/cormi-1.png';
import cormiImg2 from '../../../../assets/img/cormi-2.png';
import cormiImg3 from '../../../../assets/img/cormi-3.png';

const cormiPhotos = [
    { _id: 1, photo: cormiImg1 },
    { _id: 2, photo: cormiImg2 },
    { _id: 3, photo: cormiImg3 },
    { _id: 4, photo: cormiImg1 },
    { _id: 5, photo: cormiImg2 },
    { _id: 6, photo: cormiImg3 },
];

const CormiSomuho = () => {
    return (
        <>
            <div className="cormiSomuho-sec">
                <Container>
                    <div className="cormiSomuho-header text-center mb-4">
                        <h2>আমাদের কর্মী সমূহ </h2>
                    </div>
                    <Row>
                        {
                            cormiPhotos.map(cormiPhoto => (
                                <Col key={cormiPhoto._id} sm={12} xs={12} md={4} className="mb-4">
                                    <img src={cormiPhoto.photo} alt="" />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CormiSomuho;
