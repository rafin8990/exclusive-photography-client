import React from 'react';
import './Slider.css'
import slider1 from '../../../Assets/slider 3.jpg'
const Slider = () => {
    return (
        <div className='bg-black flex justify-center'>
            <div className=''>
                <div className="carousel w-full">
                    <div className="carousel-item relative w-full">
                        <div id='carousel-img'>
                            <img src={slider1} alt="" className="w-full " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;