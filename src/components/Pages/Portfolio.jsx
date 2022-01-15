import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import PortfolioFormPreview from './Portfolio/PortfolioFormPreview/PortfolioFormPreview';
import PortfolioWebsite from './Portfolio/PortfolioWebsite/PortfolioWebsite';

const Portfolio = () => {
    return (
        <>
            <Breadcrumb title="আমাদের ওয়েবসাইট" />
            <PortfolioWebsite />
            <PortfolioFormPreview />
        </>
    )
}

export default Portfolio;
