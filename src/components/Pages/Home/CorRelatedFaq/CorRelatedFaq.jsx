import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import './Style.css';


const corFaqs = [
    {
        _id: 1,
        title: 'আয়কর কি ?',
        decs: 'একটা পরিবার বা সংসার চালানোর জন্য যেমন পরিবারের কর্তা বা উপার্জনশীল সদস্যদেরকে খরচ দিতে হয় ঠিক তেমনি একটা দেশ বা রাষ্ট্র চালানোর জন্য দেশের জনগণকে খরচ দিতে হয়'
    },
    {
        _id: 2,
        title: 'কোন ব্যক্তি আয়কর প্রদানের জন্য উপযুক্ত?',
        decs: 'একটা পরিবার বা সংসার চালানোর জন্য যেমন পরিবারের কর্তা বা উপার্জনশীল সদস্যদেরকে খরচ দিতে হয় ঠিক তেমনি একটা দেশ বা রাষ্ট্র চালানোর জন্য দেশের জনগণকে খরচ দিতে হয়'
    },
    {
        _id: 3,
        title: 'আয়করের জন্য আয়ের খাত কি কি?',
        decs: 'একটা পরিবার বা সংসার চালানোর জন্য যেমন পরিবারের কর্তা বা উপার্জনশীল সদস্যদেরকে খরচ দিতে হয় ঠিক তেমনি একটা দেশ বা রাষ্ট্র চালানোর জন্য দেশের জনগণকে খরচ দিতে হয়'
    },
    {
        _id: 4,
        title: 'ন্যূনতম কর কি?',
        decs: 'একটা পরিবার বা সংসার চালানোর জন্য যেমন পরিবারের কর্তা বা উপার্জনশীল সদস্যদেরকে খরচ দিতে হয় ঠিক তেমনি একটা দেশ বা রাষ্ট্র চালানোর জন্য দেশের জনগণকে খরচ দিতে হয়'
    },
    {
        _id: 5,
        title: 'আয়কর প্রদানের জন্য কোন বয়স সীমা আছে কি?',
        decs: 'একটা পরিবার বা সংসার চালানোর জন্য যেমন পরিবারের কর্তা বা উপার্জনশীল সদস্যদেরকে খরচ দিতে হয় ঠিক তেমনি একটা দেশ বা রাষ্ট্র চালানোর জন্য দেশের জনগণকে খরচ দিতে হয়'
    },
    {
        _id: 6,
        title: 'আয়কর রিটার্ন জমা না দেয়ার শাস্তি কি?',
        decs: 'একটা পরিবার বা সংসার চালানোর জন্য যেমন পরিবারের কর্তা বা উপার্জনশীল সদস্যদেরকে খরচ দিতে হয় ঠিক তেমনি একটা দেশ বা রাষ্ট্র চালানোর জন্য দেশের জনগণকে খরচ দিতে হয়'
    },
];

function CorRelatedFaq() {
    return (
        <>
            <div className="cor-related-faq">
                <Container>
                    <div className="cor-relatedfaq-header">
                        <h2>আয়কর সংক্রান্ত সচরাচর জিজ্ঞেসা প্রশ্ন</h2>
                    </div>
                    <Row>
                        <div className="cor-related-faq-list">
                            <Accordion atomic={true}>
                                {
                                    corFaqs.map(corFaq => (
                                        <AccordionItem key={corFaq._id} title={` ${corFaq.title}`}>
                                            <p>{corFaq.decs}</p>
                                        </AccordionItem>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CorRelatedFaq;