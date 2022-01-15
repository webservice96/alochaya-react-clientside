import React from 'react'
import AmaderReview from './Home/AmaderReview/AmaderReview';
import AmaderSheba from './Home/AmaderSheba/AmaderSheba';
import AmaderWebsite from './Home/AmaderWebsite/AmaderWebsite';
import Banner from './Home/Banner/Banner';
import CorRelatedFaq from './Home/CorRelatedFaq/CorRelatedFaq';
import FormPreview from './Home/FormPreview/FormPreview';
import LinkBtn from './Home/LinkBtn/LinkBtn';
import Manager from './Home/Manager/Manager';
import WorkingDistrict from './Home/WorkingDistrict/WorkingDistrict';

function Home() {
    return (
        <>
            <Banner />
            <Manager title="আমাদের ম্যানেজার সমূহ" desc="আমাদের দলের সাথে যোগাযোগ করুন" />
            <AmaderWebsite />
            <WorkingDistrict />
            <AmaderSheba />
            <AmaderReview />
            <CorRelatedFaq />
            <LinkBtn />
            <FormPreview />
        </>
    )
}

export default Home;