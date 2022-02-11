import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

/* manager photos */
import habib from '../../../../assets/img/habib.png';
import masum from '../../../../assets/img/masum.png';
import ramjan from '../../../../assets/img/ramjan.png';
import habibRahman from '../../../../assets/img/habib-rahman.png';
import sharif from '../../../../assets/img/team-member-2.png';

import './Style.css';

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
        FbLink: 'https://www.facebook.com/profile.php?id=100033459918521',
    },
    {
        name: 'মো: মাসুম ইসলাম',
        photoSrc: masum,
        position: 'ম্যানেজার',
        phone: '০১৭২৯-৮৭৫৬৫৭',
        mail: 'masumislam@gmail.com',
        attendDate: '২০১৩-০১-০১',
        currentWorkStation: 'আলমডাঙ্গা উপজেলা, চুয়াডাঙ্গা',
        FbLink: 'https://www.facebook.com/profile.php?id=100013535533850',
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
        FbLink: 'https://www.facebook.com/profile.php?id=100063062716521',
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
        FbLink: 'https://www.facebook.com/HabiburRahman360F',
        address: 'বীরগঞ্জ উপজেলা, দিনাজপুর'
    },
    {
        name: 'মো: শরিফ উদ্দিন',
        photoSrc: sharif,
        position: 'ম্যানেজার',
        phone: '০১৭৬৩-৮১৬৭৫৮',
        mail: 'নেই',
        attendDate: '২০১২-০১-০১',
        currentWorkStation: 'মিরপুর উপজেলা, কুষ্টিয়া',
        FbLink: 'https://www.facebook.com/profile.php?id=100008247301389',
        address: 'দেবীগঞ্জ উপজেলা, পঞ্চগড়'
    },
];

const Managers = () => {
    return (
        <div className='cormi-managers-sec manager-sec'>
            <div className="cormi-managers-head mb-5 amader-website-header text-center">
                <h2 className='styled-heading'>আমাদের ম্যানেজার সমূহ </h2>
            </div>

            <Container>
                <Row>
                    {
                        managers.map(manager => (
                            <Col md={4} key={manager.name}>
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
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Managers;