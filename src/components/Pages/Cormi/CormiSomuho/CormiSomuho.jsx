import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Style.css';

import cormi1Man from '../../../../assets/img/habib.png';
import cormi2Man from '../../../../assets/img/masum.png';
import cormi3Man from '../../../../assets/img/ramjan.png';
import cormi4Man from '../../../../assets/img/habib-rahman.png';
import cormi5Man from '../../../../assets/img/team-member-2.png';

import cormiGl1 from '../../../../assets/img/alochya-10.png';
import cormiGl2 from '../../../../assets/img/alochya-9.png';

import cormiGl3 from '../../../../assets/img/alochya-8.png';
import cormiGl4 from '../../../../assets/img/alochya-11.png';

import cormiGl5 from '../../../../assets/img/alochya-12.png';
import cormiGl6 from '../../../../assets/img/alochya-13.png';

import cormiGl7 from '../../../../assets/img/alochya-14.png';
import cormiGl8 from '../../../../assets/img/alochya-15.png';

import cormiGl9 from '../../../../assets/img/alochya-16.png';
import cormiGl10 from '../../../../assets/img/alochya-17.png';



const cormiGroups = [
    {
        _id: 1,
        groupMan: "মো: হাবিব রহমান",
        groupManPhoto: cormi1Man,
        position: 'ম্যানেজার',
        groupNumber: "দল নাম্বার-১",
        cormiGallery1: cormiGl1,
        cormiGallery2: cormiGl2
    },
    {
        _id: 2,
        groupMan: "মো: মাসুম ইসলাম",
        groupManPhoto: cormi2Man,
        position: 'ম্যানেজার',
        groupNumber: "দল নাম্বার-২",
        cormiGallery1: cormiGl3,
        cormiGallery2: cormiGl4
    },
    {
        _id: 3,
        groupMan: "মো: রমজান আলী",
        groupManPhoto: cormi3Man,
        position: 'ম্যানেজার',
        groupNumber: "দল নাম্বার-৩",
        cormiGallery1: cormiGl5,
        cormiGallery2: cormiGl6
    },
    {
        _id: 4,
        groupMan: "মো: হাবিবুর রহমান (হাবিব)",
        groupManPhoto: cormi4Man,
        position: 'ম্যানেজার',
        groupNumber: "দল নাম্বার-৪",
        cormiGallery1: cormiGl7,
        cormiGallery2: cormiGl8
    },
    {
        _id: 5,
        groupMan: "মো: শরিফ উদ্দিন",
        groupManPhoto: cormi5Man,
        position: 'ম্যানেজার',
        groupNumber: "দল নাম্বার-৫",
        cormiGallery1: cormiGl9,
        cormiGallery2: cormiGl10
    },
];

const CormiSomuho = () => {
    return (
        <>
            <div className="cormiSomuho-sec">
                <Container>
                    <div className="cormiSomuho-header text-center mb-4">
                        <h2 className='styled-heading'>আমাদের কর্মী সমূহ</h2>
                    </div>

                    {/* cormi group start */}
                    {
                        cormiGroups.map(cormiGroup => (
                            <div className="cormi-group">
                                <Row className='mb-5'>
                                    <div className="cormi-group-header d-flex align-items-center">
                                        <div className="cormi-grop-img">
                                            <img src={cormiGroup.groupManPhoto} alt="Not found!" />
                                        </div>
                                        <div className="cormi-grop-text ps-4">
                                            <h3>{cormiGroup.groupMan}</h3>
                                            <p className='group-position'>{cormiGroup.position}</p>
                                            <p className='group-number'>{cormiGroup.groupNumber}</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className='align-items-center cormi-galler mb-5'>
                                    <Col md={6} className="mb-4">
                                        <img src={cormiGroup.cormiGallery1} alt="Not Found!" />
                                    </Col>
                                    <Col md={6}>
                                        <img src={cormiGroup.cormiGallery2} alt="Not Found!" />
                                    </Col>
                                </Row>
                            </div>
                        ))
                    }
                    {/* cormi group end */}
                </Container>
            </div>
        </>
    )
}

export default CormiSomuho;
