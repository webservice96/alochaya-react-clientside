import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import AmaderMontobbo from './Montobbo/AmaderMontobbo/AmaderMontobbo';

const Montobbo = () => {
    return (
        <>
            <Breadcrumb title="মন্তব্য সমূহ" />
            <AmaderMontobbo />
        </>
    )
}

export default Montobbo;