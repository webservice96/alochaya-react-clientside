import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Style.css';

import districtPreview1 from '../../../../assets/img/nidorshone-1.png';
import districtPreview2 from '../../../../assets/img/1.মুজিবনগর_স্মৃতিসৌধ.jpg';
import districtPreview3 from '../../../../assets/img/alochya-1.jpg';
import districtPreview4 from '../../../../assets/img/alochya-2.png';
import districtPreview5 from '../../../../assets/img/alochya-3.jpg';
import districtPreview6 from '../../../../assets/img/alochya-4.jpg';
import districtPreview7 from '../../../../assets/img/alochya-5.jpg';
import districtPreview8 from '../../../../assets/img/alochya-6.jpg';
import districtPreview9 from '../../../../assets/img/alochya-7.jpg';
import districtPreview10 from '../../../../assets/img/Kusumba_Mosque,_Naogaon.jpg';

import SwiperCore, {
    Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

const districtPreviews = [
    {
        _id: 1,
        photo: districtPreview1
    },
    {
        _id: 2,
        photo: districtPreview2
    },
    {
        _id: 3,
        photo: districtPreview3
    },
    {
        _id: 4,
        photo: districtPreview4
    },
    {
        _id: 5,
        photo: districtPreview5
    },
    {
        _id: 6,
        photo: districtPreview6
    },
    {
        _id: 7,
        photo: districtPreview7
    },
    {
        _id: 8,
        photo: districtPreview8
    },
    {
        _id: 9,
        photo: districtPreview9
    },
    {
        _id: 10,
        photo: districtPreview10
    },
];

function WorkingDistrict() {
    return (
        <>
            <div className="working-district">
                <Container>
                    <Row>
                        <Col xs={12} md={7}>
                            <div className="working-district-left">
                                <h2>আমরা কোন কোন জেলায় কাজ করেছি</h2>
                                <Tabs
                                    defaultActiveKey="first"
                                    transition={false}
                                    className="working-distict-tab"
                                >
                                    <Tab eventKey="first" title="জেলা">
                                        <ol>
                                            <li>চুয়াডাঙ্গা</li>
                                            <li>মেহেরপুর</li>
                                            <li>নড়াইল</li>
                                            <li>কুষ্টিয়া</li>
                                            <li>জয়পুরহাট</li>
                                            <li>চাঁপাইনবাগঞ্জ</li>
                                            <li> বগুড়া</li>
                                            <li>যশোর</li>
                                        </ol>
                                    </Tab>
                                    <Tab eventKey="upozela" title="উপজেলা">
                                        <ol>
                                            <li>চুয়াডাঙ্গা সদর</li>
                                            <li> আলমডাঙ্গা</li>
                                            <li>জীবননগর</li>
                                            <li>ভেড়ামারা</li>
                                            <li>মহম্মদপুর</li>
                                            <li>কুমারখালী</li>
                                            <li>কুষ্টিয়া সদর</li>
                                        </ol>
                                    </Tab>
                                    <Tab eventKey="up" title="ইউনিয়ন">
                                        <ol>
                                            <li>আলুকদিয়া</li>
                                            <li>মোমিনপুর</li>
                                            <li>তিতুদাহ</li>
                                            <li>শংকরচন্দ্র</li>
                                            <li>বেগমপুর</li>
                                            <li>কুতুবপুর</li>
                                            <li>পদ্মবিলা</li>
                                        </ol>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                        <Col xs={12} md={5}>
                            <div className="district-slider">
                                <Swiper
                                    navigation={true}
                                    style={{ padding: '0.5rem' }}
                                >
                                    {
                                        districtPreviews.map(districtPreview => (
                                            <SwiperSlide key={districtPreview._id}>
                                                <div>
                                                    <img src={districtPreview.photo} alt="Not Found!" />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default WorkingDistrict;