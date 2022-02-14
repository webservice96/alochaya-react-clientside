import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import websitePhoto from '../../../../assets/img/websiteImg.png';

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

const PortfolioWebsite = () => {
    return (
        <>
            <div className="amader-website mt-5">
                <Container>
                    <div className="amader-website-header text-center mb-5">
                        <h3 className='styled-heading'>আমাদের ওয়েবসাইট</h3>
                    </div>
                    <div className="amader-website-slide">
                        <Row>
                            {
                                amaderSites.map(amaderSite => (
                                    <Col xs={12} sm={6} md={4} className="mb-4">
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
                                                {/* <p>ওয়েবসাইট: <span className='websiteLink'>{amaderSite.website}</span></p> */}
                                                <div className="website-footer d-flex justify-content-between">
                                                    <div>
                                                        <Button variant="outline-danger">
                                                            <a href={amaderSite.website}>ওয়েবসাইট</a>
                                                        </Button>
                                                    </div>
                                                    {/* <div>
                                                        <Button variant="outline-danger">
                                                            <Link to="/">মন্তব্য</Link>
                                                        </Button>
                                                    </div> */}
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default PortfolioWebsite;
