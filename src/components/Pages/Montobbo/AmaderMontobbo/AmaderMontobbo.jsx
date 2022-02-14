import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Style.css';

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
    }
];

const AmaderMontobbo = () => {
    return (
        <>
            <div className="amader-montobbo py-5">
                <Container>
                    <Row>
                        <Col className='col-md-12'>
                            <div className="montobbo-input">
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control type="text" placeholder='✎ নাম' />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder='✎ মন্তব্য লিখুন' rows={3} />
                                    </Form.Group>
                                    <div className="add-montobbo text-end">
                                        <Button variant="danger" type="submit">
                                            পাঠান
                                        </Button>
                                    </div>
                                </Form>
                            </div>

                            <div className="montobbo-list-header">
                                <h2 className='styled-heading mb-5'>আপনাদের মন্তব্য</h2>
                                <Row>
                                    {
                                        reviews.map(review => (
                                            <Col xs={12} md={12} key={review._id} className="mb-4">
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AmaderMontobbo;