import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Style.css';

const managers = [
    {
        name: 'মো:শাকিল হোসেন',
        photoSrc: 'https://avatars.githubusercontent.com/u/35348437?v=4',
        position: 'ম্যানেজার',
        phone: '০১৬৫০২২৩৫৭৮',
        mail: 'shakilhasan055@gmail.com',
        attendDate: '2017-04-01',
        currentWorkStation: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        FbLink: '#',
        twitterLink: '#'
    },
    {
        name: 'মো:শাকিল হোসেন',
        photoSrc: 'https://avatars.githubusercontent.com/u/35348437?v=4',
        position: 'ম্যানেজার',
        phone: '০১৬৫০২২৩৫৭৮',
        mail: 'shakilhasan055@gmail.com',
        attendDate: '2017-04-01',
        currentWorkStation: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        FbLink: '#',
        twitterLink: '#'
    },
    {
        name: 'মো:শাকিল হোসেন',
        photoSrc: 'https://avatars.githubusercontent.com/u/35348437?v=4',
        position: 'ম্যানেজার',
        phone: '০১৬৫০২২৩৫৭৮',
        mail: 'shakilhasan055@gmail.com',
        attendDate: '2017-04-01',
        currentWorkStation: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        FbLink: '#',
        twitterLink: '#'
    },
    {
        name: 'মো:শাকিল হোসেন',
        photoSrc: 'https://avatars.githubusercontent.com/u/35348437?v=4',
        position: 'ম্যানেজার',
        phone: '০১৬৫০২২৩৫৭৮',
        mail: 'shakilhasan055@gmail.com',
        attendDate: '2017-04-01',
        currentWorkStation: '৫ নং হাসাদাহ ইউনিয়ন পরিষদ',
        FbLink: '#',
        twitterLink: '#'
    },
];

function Manager() {
    return (
        <>
            <div className="manager-sec">
                <Container>
                    <div className="manager-textContent text-center">
                        <h3>আমাদের ম্যানেজার সমূহ</h3>
                        <h2>আমাদের দলের সাথে যোগাযোগ করুন</h2>
                    </div>
                    <Row>
                        {
                            managers.map(manager => (
                                <Col key={manager.name}>
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

                                            <p>বর্তমান কর্মস্থলে যোগদানের তারিখ: <span>{manager.attendDate}</span></p>
                                            <p>বর্তমান কর্মস্থল: <span>{manager.currentWorkStation}</span></p>

                                            <div className="manager-social text-end">
                                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                                <a href="/"><i class="fab fa-twitter"></i></a>
                                            </div>
                                        </Card.Body>
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

export default Manager;