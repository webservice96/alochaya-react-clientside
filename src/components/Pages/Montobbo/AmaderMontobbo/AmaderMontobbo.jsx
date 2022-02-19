import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Style.css';

import reviewer1 from '../../../../assets/img/reviwer-1.png';
import reviewer2 from '../../../../assets/img/reviwer-2.png';

const reviews = [
    {
        _id: 1,
        name: 'মো: আ: ছালাম বিপ্লব',
        photo: reviewer1,
        podobi: "চেয়ারম্যান",
        shortdesc: "১৪ নং চিৎলা ইউনিয়ন পরিষদ",
        review: 'আমি এখান থেকে কাজ করিয়েছি, তারা খুবই ভালো সার্ভিস দিয়েছে। তাদের কর্মী গুলো খুব এক্সপার্ট, আমি কল্পনা ই করতে পারিনি বাংলাদেশে এতো সুন্দর একটা সেবা মূলক প্রতিষ্ঠান আছে।',
    },
    {
        _id: 2,
        name: 'চির কুমার সাহ',
        photo: reviewer2,
        podobi: " সচিব",
        shortdesc: "১৪ নং চিৎলা ইউনিয়ন পরিষদ",
        review: 'আমি এদের এখানে না আসলে জানতেই পারতাম না,যে বাংলাদেশে এমন একটি প্রতিষ্ঠান আছে। যাদের কর্মদক্ষতা ও সেবা আমাকে অত্যন্ত মুগ্ধ করছে',
    },
];

const AmaderMontobbo = () => {
    return (
        <>
            <div className="amader-montobbo py-5 mb-5">
                <Container>
                    <Row>
                        <Col className='col-md-12'>
                            {/* <div className="montobbo-input">
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
                            </div> */}

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
                                                                <div className="reviewer-img">
                                                                    <img src={review.photo} className="reviwer-img" alt="Not Found!" />
                                                                </div>
                                                                <div className="review-person-info ps-3">
                                                                    <h3>{review.name}</h3>
                                                                    <p className='podobi'>পদবিঃ {review.podobi}</p>
                                                                    <p className='short-desc'>{review.shortdesc}</p>
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