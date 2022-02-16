import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem } from 'react-light-accordion';
import './Style.css';

const amaderShebas = [
    {
        _id: 1,
        title: 'এসিসমেন্ট তৈরি করুন',
        details: "ইউনিয়ন পরিষদের কোন এ্যাসেসমেন্ট না থাকিলে  আমরা সেই ইউনিয়ন পরিষদের নিখুঁত ভাবে এ্যাসেসমেন্ট তৈরি করি ৷ আমাদের দক্ষ কর্মী বাড়ি বাড়ি গিয়ে খানা প্রধানের নাম এবং ওই পরিবারের সকল তথ্য হালনাগাদ সংগ্রহ করি, তারপর এভাবে নয়টা ওয়ার্ড নিখুঁতভাবে জরিপ হওয়ার পর ২০১৪ সনের সংশোধনীয় গেজেট মোতাবেক ইউনিয়ন পরিষদের সকল সদস্য এবং চেয়ারম্যান সকলের উপস্থিতিতে কর নির্ধারণ করা হয়, নির্ধারণের পর আমরা নয়টা ওয়ার্ডের আদায় রেজিস্টার কম্পিউটার কম্পোজ করে ইউনিয়ন পরিষদের নিকটে প্রদান করা হয় এবং নয়টা ওয়ার্ডের আবাসিক ও নয়টা ওয়ার্ডের বাণিজ্যিক সহ  একনজরে টপশিট মিলে একটা মূল রেজিস্টার প্রদান করা হয়, এ্যাসেসমেন্ট করার পর সকল খানা প্রদানের নিজস্ব একটা হোল্ডিং নাম্বার হয়ে যায় যা ওই হোল্ডিং নাম্বার ইউনিয়ন পরিষদের কর্মক্ষেত্রে করদাতাদের সকল কাজের প্রয়োজনে লাগে ৷"
    },
    {
        _id: 2,
        title: 'আবাসিক কর আদায়',
        details: "জরিফ এবং কর নির্ধারণের পর আমাদের কর্মী নয়টা ওয়ার্ডের গ্রাম পুলিশ সহ ইউনিয়নের রশিদ বই নিয়ে বাড়ী বাড়ী গিয়ে কর আদায় করে এবং তাদেরকে ইউনিয়নের রশিদে করের টাকা লিখে স্বাক্ষর করে প্রথম  কফি কর দাতার নিকট দিয়ে আদায় রেজিস্টারের লিপি বদ্ধ করে,এবং প্রতিদিন কর আদায়ের টাকা ইউনিয়নের সচিব অথবা চেয়ারম্যানের নিকট জমা দেওয়া হয় ৷"
    },
    {
        _id: 3,
        title: 'বাণিজ্যিক  কর আদায়',
        details: "বাণিজ্যিক করের তালিকা বাংলাদেশের প্রায় সব ইউনিয়নে নেই বললেই চলে, আমাদের কর্মীরা সকল ব্যবসা বাণিজ্যর তালিকা করে এবং ২০১৪ সনে সংশোধনীয় বিধি মোতাবেক কর নির্ধারণ করে এবং কর আদায় করা হয় ৷"
    },
    {
        _id: 4,
        title: 'পাস বহি ',
        details: "সকল খানা প্রধানের পাস বই নিশ্চিত করা এবং ট্যাক্স আদায়ের সকল বিবরণী লিপিবদ্ধ করে স্বাক্ষর করা,খানা প্রধান পরিষদের সকল সেবা নিতে এই পাস বই সঙ্গে নিয়ে আসতে হবে না হলে পরিষদ থেকে কোন সেবা পাবে না ৷"
    },
    {
        _id: 5,
        title: 'ট্রেড লাইসেন্স ফি আদায়',
        details: "ইউনিয়ন পরিষদের আওতায় যে সকল ব্যবসা প্রতিষ্ঠান মিল-কারখানা, গুদাম, ইট ভাটা, বেসরকারি শিক্ষা প্রতিষ্ঠান, বেসরকারি কলেজ, বিনোদন পার্ক, শিল্প প্রতিষ্ঠান, সিনেমা হল, হাঁস মুরগির ফার্ম, দুগ্ধ খামার ইত্যাদির যেমন তাদের কর আছে তেমনি ট্রেড লাইসেন্স ফি আছে ৷ সকল ধরনের ব্যবসা প্রতিষ্ঠান এবং মিল-কারখানার,এই সকল প্রতিষ্ঠানের হোল্ডিং এর আওতায় এনে ফি আদায় করে দেয়া হয় , এবং ব্যাংক লোন আইননত জটিলতা থেকে ট্রেড লাইসেন্স সহায়ক ৷ "
    },
    {
        _id: 6,
        title: 'ইউপির সকল তথ্য MIS এর আওয়াতাভুক্ত করুন  ',
        details: "ইউনিয়ন পরিষদের ওয়েবসাইট ডোমেইন হোস্টিং কিনে নিজস্ব একাউন্ট ইউনিয়ন পরিষদের খুলে দেওয়া হয় যা এম আই এস নামে পরিচিত, এম আই এস এর সুবিধা হল করদাতার ট্যাক্স নেওয়ার পর আমাদের কর্মীরা এস এম এস দিয়ে কর নিশ্চিত করেন ৷ ওয়েবসাইট থেকে ওয়ারিশিয়ান সনদ, নাগরিকত্ব সনদ, চারিত্রিক সনদ, ট্রেড লাইসেন্সস  সকল ধরনের সেবা ওয়েবসাইট থেকে পাবেন এবং ইউনিয়নের সকল তথ্য এম আই এস এর আওতায় ভুক্ত থাকে, এবং সকল তথ্য ইউনিয়ন পরিষদ পৃথিবীর যেকোনো প্রান্ত থেকে ডাউনলোড করতে পারব ৷"
    },
    {
        _id: 7,
        title: 'সকল কর দাতাদের করমুখি করাই আমাদের মূল উদ্দেশ্য',
        details: "জরিপ এবং মাইকিং করার পর আমাদের কর্মী  প্রত্যেক করদাতার কর প্রদান করলে ইউনিয়ন পরিষদের সকল সেবা গ্রহন করতে পারবে, যত বেশি কর প্রদান করা হবে তত বেশি সরকারি  অনুদান  আসবে,সে অনুদান বা বরাদ্দ থেকেই ইউনিয়ন পরিষদের রাস্তাঘাট, কালভাট, টিউবওয়েল, বাড়িঘর, পানি নিষ্কাশনের ড্রেন, বৈদ্যুতিক সুবিধা, ভিজিটিং কার্ড,৪০দিনের কর্মসূচী, অসহায় মানুষদের সাহায্য, ধান,পাটের বিজ,সার,ইত্যাদি।মুল কথা যত বেশি ট্যাক্স প্রদান করা হবে ততই বেশি বাংলাদেশে উন্নত হবে, যেমন পদ্মা সেতু নির্মাণ, বাংলাদেশ এখন মধ্যবিত্ত আয়ের দেশে রূপান্তরিত হয়েছে বিশ্বের দরবার ৷।"
    },
];;


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
                                            <AccordionItem key={amaderSheba._id} title={`(${getDigitBanglaFromEnglish(`${shebaCount++}`)}) ${amaderSheba.title}`}>
                                                <p>{amaderSheba.details}</p>
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