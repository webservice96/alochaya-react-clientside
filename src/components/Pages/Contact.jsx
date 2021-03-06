import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import ContactForm from './Contact/ContactForm/ContactForm';

const Contact = () => {
    return (
        <>
            <Breadcrumb title="যোগাযোগ" desc="কোন প্রশ্ন বা মন্তব্য? শুধু আমাদের একটি বার্তা লিখুন" />
            <ContactForm />
        </>
    )
}

export default Contact;
