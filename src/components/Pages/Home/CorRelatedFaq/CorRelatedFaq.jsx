import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import './Style.css';


const corFaqs = [
    {
        _id: 1,
        title: 'কর কি ?',
        decs: 'কর (এসেছে ল্যাটিন শব্দ \'ট্যাক্সো\' থেকে) হল একটি আজ্ঞাধীন আর্থিক মূল্য কিংবা অন্য কোন ধরনের আরোপ যা করদাতা (একক কিংবা অন্যান্য আইনগত সত্তা)\'র উপর সরকারি প্রতিষ্ঠান কর্তৃক আরোপিত হয়েছে সর্বসাধারণের বিভিন্ন ব্যয়ের তহবিল গঠনের জন্য। কর পরিশোধে ব্যর্থ হলে,ছল-চাতুরি করলে কিংবা বিরোধিতা করলে তা আইনের দ্বারা শাস্তিযোগ্য হবে। কর গঠিত হয় প্রত্যক্ষ এবং পরোক্ষ করের সমন্বয়ে এবং এই কর টাকার মাধ্যমে কিংবা এর সমতুল্য শ্রমের বিনিময়ে পরিশোধ করা হয়  ৷।'
    },
    {
        _id: 2,
        title: 'আবাসিক কর কি ?',
        decs: 'দেশের জনগনের ব্যবহিত ব্যাক্তিগত সম্পদ যেমন বাড়ি, দোকানপাট ইত্যাদির উপর যে কর ধার্য করা হয় তাকে আবাসিক কর বলে  ৷।'
    },
    {
        _id: 3,
        title: 'বাণিজ্যিক কর কি ?',
        decs: 'বাংলাদেশের সরকারের আয়ের প্রধান উৎস হলো বানিজ্যিক কর। দেশের আমদানি ও রপ্তানিকৃত দ্রব্যের উপর যে কর ধার্য করা হয় তাকে বানিজ্যিক কর বলা হয়  ৷।'
    },
    {
        _id: 4,
        title: 'কর কারা দিবেন ?',
        decs: 'সাধারণ ভাবে কোন ব্যক্তির বার্ষিক আয় যদি ২ লাখ ৫০ হাজার টাকার বেশি হয় তাহলে তাকে আয় কর রিটার্ণ জমা দিতে হবে  ৷।'
    },
    {
        _id: 5,
        title: 'কর কেন দিতে হবে?',
        decs: 'অধিকাংশ সরকারের রাজস্বের প্রধান উৎস কর । অন্যান্য জিনিসের মধ্যে, এই অর্থ ব্যয় করা হয় পাবলিক অবকাঠামোর উন্নতি ও রক্ষণাবেক্ষণের জন্য, যার মধ্যে আমরা যে রাস্তাগুলিতে যাতায়াত করি এবং সরকারী পরিষেবা যেমন স্কুল, জরুরি পরিষেবা এবং কল্যাণমূলক কর্মসূচীতে অর্থায়ন করে  ৷।'
    }
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