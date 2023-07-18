import React from 'react';
import Banner from './Banner/Banner';
import SectionTitle from '../../Shared/Section Title/SectionTitle';
import AboutMe from './About Me/AboutMe';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SectionTitle title={'About Me_'}></SectionTitle>
            <AboutMe></AboutMe>
            <SectionTitle title={'Contact With Me_'}></SectionTitle>
            <Contact></Contact>
        </>
    );
};

export default Home;