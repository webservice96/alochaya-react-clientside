import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem } from 'react-light-accordion';
import './Style.css';

const amaderShebas = [
    { id: 1, sheba: 'এসিসমেন্ট তৈরি করুন' },
    { id: 2, sheba: 'পাস বহি' },
    { id: 3, sheba: 'আবাসিক কর আদায়' },
    { id: 4, sheba: 'বাণিজ্যিক কর আদায়' },
    { id: 5, sheba: 'ট্রেড লাইসেন্স ফি আদায়' },
    { id: 6, sheba: 'ইউপির সকল তথ্য MIS এর আওয়াতাভুক্ত করুন' },
    { id: 7, sheba: 'পাস বহিসকল কর দাতাদের করমুখি করাই আমাদের মূল উদ্দেশ্য' }
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
                        <h2 className='styled-heading'>আমাদের সেবা সমূহ</h2>
                    </div>
                    <Row>
                        <Col md={8} className='offset-md-2'>
                            <div className="amaderShebaList">
                                <Accordion atomic={true}>
                                    {
                                        amaderShebas.map(amaderSheba => (
                                            <AccordionItem key={amaderSheba.id} title={`(${getDigitBanglaFromEnglish(`${shebaCount++}`)}) ${amaderSheba.sheba}`}>
                                                <p>১.ব্যবসা প্রতিষ্ঠানের নামে ব্যাংক একাউন্ট খোলা অত্যান্ত জরুরী, এই একাউন্ট খোলার জন্য ব্যাংক কতৃপক্ষ প্রথমেই ট্রেড লাইসেন্স চাইবে৷

                                                    ২.যে কোন ব্যবসায়ীক চুক্তি, এসোসিয়েশনের সদস্য পদ, আমদানি ও রপ্তানী লাইসেন্স,প্রোজেক্ট লোন ইত্যাদির ক্ষেত্রেও প্রয়োজন ৷

                                                    ৩.ব্যাবসায়িক পরিচিতি সহ মামলা-মোকদ্দমা পরিচালনায় অনেক সময় প্রয়োজন ৷</p>
                                            </AccordionItem>
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AmaderSheba;