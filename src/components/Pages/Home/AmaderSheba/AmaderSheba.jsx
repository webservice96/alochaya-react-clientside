import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css';

const amaderShebas = [
    { sheba: 'এসিসমেন্ট তৈরি করুন' },
    { sheba: 'পাস বহি' },
    { sheba: 'আবাসিক কর আদায়' },
    { sheba: 'বাণিজ্যিক কর আদায়' },
    { sheba: 'ট্রেড লাইসেন্স ফি আদায়' },
    { sheba: 'ইউপির সকল তথ্য MIS এর আওয়াতাভুক্ত করুন' },
    { sheba: 'পাস বহিসকল কর দাতাদের করমুখি করাই আমাদের মূল উদ্দেশ্য' }
]


function AmaderSheba() {

    var finalEnlishToBanglaNumber = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
    const getDigitBanglaFromEnglish = (num) => {
        var retStr = num;
        for (var x in finalEnlishToBanglaNumber) {
            retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
        }
        return retStr;
    };
    let shebaCount = 1;

    return (
        <>
            <div className="amaderSheba">
                <Container>
                    <div className="amadershebaHeader text-center">
                        <h2>আমাদের সেবা সমূহ</h2>
                    </div>
                    <Row>
                        <Col md={8} className='offset-md-2'>
                            <div className="amaderShebaList">
                                <ListGroup>
                                    {
                                        amaderShebas.map(amaderSheba => (
                                            <>
                                                <Link to="#" key={amaderSheba.sheba}><ListGroup.Item>({getDigitBanglaFromEnglish(`${shebaCount++}`)}) {amaderSheba.sheba}</ListGroup.Item></Link>
                                            </>
                                        ))
                                    }
                                </ListGroup>
                            </div>

                            <div className="amadershebaBtn">
                                <Link to="#"><Button variant="light" className='shadow'><i className="fas fa-plus"></i> নিয়োগ পত্র</Button></Link>
                                <Link to="#"><Button variant="light" className='shadow'><i className="fas fa-plus"></i> চুক্তিপত্র</Button></Link>
                                <Link to="#"><Button variant="light" className='shadow'><i className="fas fa-plus"></i> ছাড়পত্র</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AmaderSheba;