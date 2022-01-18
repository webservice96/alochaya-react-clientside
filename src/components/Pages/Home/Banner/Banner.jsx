import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BanngerImg from '../../../../assets/img/hero-bg.png';
import ReadMoreReact from 'read-more-react';
import './Style.css';

function Banner() {
    return (
        <>
            <div className="homeBanner">
                <Container>
                    <Row>
                        <Col md={6} className='pb-lg-5'>
                            <div className="banner-left">
                                <h2>আমাদের পরিচিতি</h2>
                                <ReadMoreReact text="আলো ছায়া সেচ্ছাসেবিক দল এর আওতায় ইউ,পি হাউজিং কর আদায়করণ প্রকল্প একটি সেবামূলক প্রকল্প। এর আওতায় গৃহীত ইউপি হাউজিং কর আদায়করণ প্রকল্পের মাধ্যমে ডিজিটাল বাংলাদেশ গড়ার লক্ষে সারা বাংলাদেশ বিভিন্ন ইউনিয়ন/পৌরসভা ১৯৬০ শালের বিধি মতাবেক এসিসমেন্ট তৈরী, হোল্ডিং কর ধার্য অ আদায় কর্মসূচী বাস্তবায়ন স্থানীয় সরকারকে শক্তিশালীকরণে কনফারেন্স এর মাধ্যমে জনগণকে কর প্রদানমুখী করাইএই প্রকল্পের মূল লক্ষ্য এসিসমেন্ট ইউনিয়ন পরিষদের 'মেরুদণ্ড' হোল্ডিং নম্বরটি নাগরিকের পূর্ণাঙ্গ পরিচয় বহন করে এবং এ কার্যক্রম ডিজিটাল বাংলাদেশের একটি অংশ"
                                    min={160}
                                    ideal={200}
                                    max={500}
                                    readMoreText={'আরও পড়ুন'}
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="banner-right">
                                <img src={BanngerImg} alt="Banner Not Found!" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Banner;