import React from 'react';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Chef></Chef>
                <Award></Award>
            </div>
                <AboutUs></AboutUs>
        </div>
    );
};

export default Home;