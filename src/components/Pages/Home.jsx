import React from 'react'
import AmaderReview from './Home/AmaderReview/AmaderReview';
import AmaderSheba from './Home/AmaderSheba/AmaderSheba';
import AmaderWebsite from './Home/AmaderWebsite/AmaderWebsite';
import Banner from './Home/Banner/Banner';
import CorRelatedFaq from './Home/CorRelatedFaq/CorRelatedFaq';
import Manager from './Home/Manager/Manager';
import WorkingDistrict from './Home/WorkingDistrict/WorkingDistrict';

function Home() {
    return (
        <>
            <Banner />
            <Manager />
            <AmaderWebsite />
            <WorkingDistrict />
            <AmaderSheba />
            <AmaderReview />
            <CorRelatedFaq />
        </>
    )
}

export default Home;