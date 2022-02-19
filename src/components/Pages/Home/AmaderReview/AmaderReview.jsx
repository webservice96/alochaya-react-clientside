import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
                </Container>
            </div>
        </>
    )
}

export default AmaderReview;