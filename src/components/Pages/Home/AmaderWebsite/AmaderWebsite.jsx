import React from 'react'
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';
import './Style.css';
import { Card, Container } from 'react-bootstrap';
import websitePhoto from '../../../../assets/img/websiteImg.png';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


const amaderSites = [
    {
        _id: 1,
        title: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        subTitle: 'জীবননগর, চুয়াডাঙ্গা',
        website: 'https://hasadahup.com/',
        websiteImg: websitePhoto,
        fbLink: '#',
        twitterLink: '#'
    },
    {
        _id: 2,
        title: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        subTitle: 'জীবননগর, চুয়াডাঙ্গা',
        website: 'https://hasadahup.com/',
        websiteImg: websitePhoto,
        fbLink: '#',
        twitterLink: '#'
    },
    {
        _id: 3,
        title: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        subTitle: 'জীবননগর, চুয়াডাঙ্গা',
        website: 'https://hasadahup.com/',
        websiteImg: websitePhoto,
        fbLink: '#',
        twitterLink: '#'
    },
    {
        _id: 4,
        title: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        subTitle: 'জীবননগর, চুয়াডাঙ্গা',
        website: 'https://hasadahup.com/',
        websiteImg: websitePhoto,
        fbLink: '#',
        twitterLink: '#'
    },
    {
        _id: 5,
        title: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        subTitle: 'জীবননগর, চুয়াডাঙ্গা',
        website: 'https://hasadahup.com/',
        websiteImg: websitePhoto,
        fbLink: '#',
        twitterLink: '#'
    },
    {
        _id: 6,
        title: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        subTitle: 'জীবননগর, চুয়াডাঙ্গা',
        website: 'https://hasadahup.com/',
        websiteImg: websitePhoto,
        fbLink: '#',
        twitterLink: '#'
    },

];

function AmaderWebsite() {
    return (
        <>
            <div className="amader-website">
                <Container>
                    <div className="amader-website-header">
                        <h3 className='text-center'>আমাদের ওয়েবসাইট</h3>
                    </div>
                    <div className="amader-website-slide">
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            className="mySwiper"
                            slidesPerView={3}
                            spaceBetween={30}
                            style={{ padding: '3rem' }}
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
                                amaderSites.map(amaderSite => (
                                    <SwiperSlide key={amaderSite._id}>
                                        <Card>
                                            <div className="website-image">
                                                <Card.Img variant="top" src={amaderSite.websiteImg} />
                                            </div>
                                            <Card.Body>
                                                <div className="website-titleIcon">
                                                    <Card.Title>{amaderSite.title}</Card.Title>
                                                    <div className="website-socialIcon">
                                                        <a href="/"><i class="fas fa-phone-alt"></i></a>
                                                        <a href="/"><i class="far fa-envelope"></i></a>
                                                    </div>
                                                </div>
                                                <Card.Text>
                                                    {amaderSite.subTitle}
                                                </Card.Text>
                                                <p>ওয়েবসাইট: <span className='websiteLink'>{amaderSite.website}</span></p>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AmaderWebsite;
