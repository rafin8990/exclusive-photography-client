import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AboutJourney from '../AboutJourney/AboutJourney';
import Services from '../ServicesHome/ServicesHome';
import Slider from '../Slider/Slider';
import SomeWork from '../SomeWork/SomeWork';


const Home = () => {
    useTitle("Home")
    return (
        <div className='bg-black'>
            <Slider></Slider>
            <Services></Services>
            <AboutJourney></AboutJourney>
            <SomeWork></SomeWork>
        </div>
    );
};

export default Home;