import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Style.css';

import districtPreview from '../../../../assets/img/alo-chaya-book.png';

import SwiperCore, {
    Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

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
                                <Swiper navigation={true}>
                                    <SwiperSlide>
                                        <div>
                                            <img src={districtPreview} alt="Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src={districtPreview} alt="Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src={districtPreview} alt="Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src={districtPreview} alt="Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src={districtPreview} alt="Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            <img src={districtPreview} alt="Not Found!" />
                                        </div>
                                    </SwiperSlide>
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