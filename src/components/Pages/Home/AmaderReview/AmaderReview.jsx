import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Style.css';

import websitePhoto from '../../../../assets/img/websiteImg.png';

const reviews = [
    {
        _id: 1,
        name: 'মো: শাকিল হোসেন',
        review: 'হাসাদাহ ইউনিয়ন বাংলাদেশের খুলনা বিভাগের চুয়াডাঙ্গা জেলার জীবননগর উপজেলার অন্তর্গত একটি ইউনিয়ন ব্যহত্তম বাঁকা ইউনিয়ন ভাগ হয়ে ৩ টি ইউনিয়ন করা হয়।  তার একটি ইউনিয়ন হলো হাসাদাহ ইউনিয়ন ২০১৩ সালে নিবার্চনের মাধ্যমে অত্র ইউনিয়ন প্রতিষ্টিত হয়।',
    },
    {
        _id: 2,
        name: 'মো: শাকিল হোসেন',
        review: 'হাসাদাহ ইউনিয়ন বাংলাদেশের খুলনা বিভাগের চুয়াডাঙ্গা জেলার জীবননগর উপজেলার অন্তর্গত একটি ইউনিয়ন ব্যহত্তম বাঁকা ইউনিয়ন ভাগ হয়ে ৩ টি ইউনিয়ন করা হয়।  তার একটি ইউনিয়ন হলো হাসাদাহ ইউনিয়ন ২০১৩ সালে নিবার্চনের মাধ্যমে অত্র ইউনিয়ন প্রতিষ্টিত হয়।',
    },
    {
        _id: 3,
        name: 'মো: শাকিল হোসেন',
        review: 'হাসাদাহ ইউনিয়ন বাংলাদেশের খুলনা বিভাগের চুয়াডাঙ্গা জেলার জীবননগর উপজেলার অন্তর্গত একটি ইউনিয়ন ব্যহত্তম বাঁকা ইউনিয়ন ভাগ হয়ে ৩ টি ইউনিয়ন করা হয়।  তার একটি ইউনিয়ন হলো হাসাদাহ ইউনিয়ন ২০১৩ সালে নিবার্চনের মাধ্যমে অত্র ইউনিয়ন প্রতিষ্টিত হয়।',
    },
    {
        _id: 4,
        name: 'মো: শাকিল হোসেন',
        review: 'হাসাদাহ ইউনিয়ন বাংলাদেশের খুলনা বিভাগের চুয়াডাঙ্গা জেলার জীবননগর উপজেলার অন্তর্গত একটি ইউনিয়ন ব্যহত্তম বাঁকা ইউনিয়ন ভাগ হয়ে ৩ টি ইউনিয়ন করা হয়।  তার একটি ইউনিয়ন হলো হাসাদাহ ইউনিয়ন ২০১৩ সালে নিবার্চনের মাধ্যমে অত্র ইউনিয়ন প্রতিষ্টিত হয়।',
    },
];


function AmaderReview() {
    return (
        <>
            <div className="amaderReview">
                <Container>
                    <div className="amderReview-header mb-5">
                        <h2 className='styled-heading'>আমাদের মন্তব্য</h2>
                    </div>
                    <Row>
                        {
                            reviews.map(review => (
                                <Col xs={12} md={6} key={review._id} className="mb-4">
                                    <Card>
                                        <div className="single-review">
                                            <div className="review-header">
                                                <div className="review-person">
                                                    {/* <div className="reviewer-img">
                                                        <img src={review.photo} className="reviwer-img" alt="Not Found!" />
                                                    </div> */}
                                                    <div className="review-person-info">
                                                        <h3>{review.name}</h3>
                                                        {/* <p>{review.posittion}</p> */}
                                                    </div>
                                                </div>
                                                {/* <div className="website-image">
                                                    <img src={review.websitePhoto} alt="Not found!" />
                                                </div> */}
                                            </div>
                                            <div className="review-body">
                                                <p>{review.review}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AmaderReview;