import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import CormiSomuho from './Cormi/CormiSomuho/CormiSomuho';
import HeadManager from './Cormi/HeadManager/HeadManager';
import Manager from './Home/Manager/Manager';
import Managers from './Cormi/managers/Managers';

const Cormi = () => {
    return (
        <>
            <Breadcrumb title="আমাদের ম্যানেজার এবং কর্মী সমূহ" />
            <HeadManager />

            {/* <Manager title="আমাদের ম্যানেজার সমূহ" /> */}
            <Managers />

            <CormiSomuho />
        </>
    )
}

export default Cormi;
