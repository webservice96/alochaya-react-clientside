import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import CormiSomuho from './Cormi/CormiSomuho/CormiSomuho';
import HeadManager from './Cormi/HeadManager/HeadManager';
import Manager from './Home/Manager/Manager';
import form from '../../assets/img/cormi-form.png';

const Cormi = () => {
    return (
        <>
            <Breadcrumb title="আমাদের ম্যানেজার এবং কর্মী সমূহ" />
            <HeadManager />
            <Manager title="আমাদের ম্যানেজার সমূহ" />
            <CormiSomuho />

            <div className="cormiFormPreview text-center mb-5">
                <img src={form} alt="Not Found!" />
            </div>
        </>
    )
}

export default Cormi;
