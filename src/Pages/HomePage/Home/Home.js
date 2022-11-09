import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Services from '../ServicesHome/ServicesHome';
import Slider from '../Slider/Slider';


const Home = () => {
    useTitle("Home")
    return (
        <div className='bg-black'>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;