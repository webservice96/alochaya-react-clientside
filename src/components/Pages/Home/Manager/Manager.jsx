import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

import './Style.css';

/* manager photos */
import habib from '../../../../assets/img/habib.png';
import masum from '../../../../assets/img/masum.png';
import ramjan from '../../../../assets/img/ramjan.png';
import habibRahman from '../../../../assets/img/habib-rahman.png';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const managers = [
    {
        name: 'মো: হাবিব রহমান',
        photoSrc: habib,
        position: 'ম্যানেজার',
        phone: '০১৭৬১-৯১৯৮৪৭',
        mail: 'habiburrahman919847@gmail.com',
        attendDate: '২০১৩-০১-০১',
        currentWorkStation: 'চুয়াডাঙ্গা সদর,চুয়াডাঙ্গা',
        address: 'ডোমার থানা, নীলফামারী',
        FbLink: '#',
    },
    {
        name: 'মো: মাসুম ইসলাম',
        photoSrc: masum,
        position: 'ম্যানেজার',
        phone: '০১৭২৯-৮৭৫৬৫৭',
        mail: 'masumislam@gmail.com',
        attendDate: '২০১৩-০১-০১',
        currentWorkStation: 'আলমডাঙ্গা উপজেলা, চুয়াডাঙ্গা',
        FbLink: '#',
        address: 'চিলাহাটি, নীলফামারী'
    },
    {
        name: 'মো: রমজান আলী',
        photoSrc: ramjan,
        position: 'ম্যানেজার',
        phone: '০১৭৯৩-১১২২২৮',
        mail: 'romjanali5222@gmail.com',
        attendDate: '২০১৫-০১-০১',
        currentWorkStation: 'দামুরহুদা উপজেলা, চুয়াডাঙ্গা',
        FbLink: '#',
        address: 'নওগাঁ সদর, নওগাঁ'
    },
    {
        name: 'মো: হাবিবুর রহমান (হাবিব)',
        photoSrc: habibRahman,
        position: 'ম্যানেজার',
        phone: '০১৭৭৩-৭৮৯২৯৫',
        mail: 'habibf3284@gmail.com',
        attendDate: '2017-04-01',
        currentWorkStation: 'জীবননগর উপজেলা চুয়াডাঙ্গা',
        FbLink: '#',
        address: 'বীরগঞ্জ উপজেলা, দিনাজপুর'
    },
];

function Manager({ title, desc }) {
    return (
        <>
            <div className="manager-sec">
                <Container>
                    <div className="manager-textContent text-center">
                        <h3>{title}</h3>
                        {
                            desc && (
                                <h2>{desc}</h2>
                            )
                        }
                    </div>
                    <Row>
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            className="mySwiper"
                            slidesPerView={3}
                            spaceBetween={30}
                            style={{ padding: '5rem' }}
                            breakpoints={{
                                "0": {
                                    "slidesPerView": 1,
                                },
                                "640": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 20
                                },
                                "768": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 30
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 30
                                }
                            }}
                        >
                            {
                                managers.map(manager => (
                                    <SwiperSlide key={manager.name}>
                                        <Card>
                                            <div className="manager-img text-center">
                                                <Card.Img variant="top" src={manager.photoSrc} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title className='text-center'>{manager.name}</Card.Title>
                                                <p className='manger-position text-center'>{manager.position}</p>
                                                <ul>
                                                    <li><i class="fas fa-phone-alt"></i> {manager.phone}</li>
                                                    <li><i class="far fa-envelope"></i> {manager.mail}</li>
                                                </ul>

                                                <p><strong>ঠিকানা:</strong> <span>{manager.address}</span></p>
                                                <p><strong>বর্তমান কর্মস্থলে যোগদানের তারিখ:</strong> <span>{manager.attendDate}</span></p>
                                                <p><strong>বর্তমান কর্মস্থল:</strong> <span>{manager.currentWorkStation}</span></p>

                                                <div className="manager-social text-end">
                                                    <a href={manager.FbLink} target="_blank"><i class="fab fa-facebook-f"></i></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Manager;