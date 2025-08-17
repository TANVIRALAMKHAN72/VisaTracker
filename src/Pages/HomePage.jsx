import React from 'react';
import HeroSection from '../Component/HeroSection';
import HowItWorksSection from '../Component/HowItWorksSection.jsx';
import FeaturesSection from '../Component/FeaturesSection.JSX';
import Footer from '../Component/Footer.jsx';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <HowItWorksSection></HowItWorksSection>
        </div>
    );
};

export default HomePage;