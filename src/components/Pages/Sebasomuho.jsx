import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import SebasomuhoDetail from './Sebasomuho/SebasomuhoDetail/SebasomuhoDetail';

const Sebasomuho = () => {
    return (
        <>
            <Breadcrumb title="আমাদের সেবা সমূহ " />
            <SebasomuhoDetail />
        </>
    )
}

export default Sebasomuho;
