import React from 'react';
import Services from '../ServicesHome/ServicesHome';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='bg-black'>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;