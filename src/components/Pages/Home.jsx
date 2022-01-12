import React from 'react'
import AmaderWebsite from './Home/AmaderWebsite/AmaderWebsite';
import Banner from './Home/Banner/Banner';
import Manager from './Home/Manager/Manager';
import WorkingDistrict from './Home/WorkingDistrict/WorkingDistrict';

function Home() {
    return (
        <>
            <Banner />
            <Manager />
            <AmaderWebsite />
            <WorkingDistrict />
        </>
    )
}

export default Home;