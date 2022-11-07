import React from 'react';
import './Slider.css'

import slider1 from '../../../Assets/Slider 1.jpg'
import slider2 from '../../../Assets/slider 2.jpg'
import slider3 from '../../../Assets/slider 3.jpg'
import slider4 from '../../../Assets/slider-4.png'

const Slider = () => {
    return (
        <div className='flex justify-center bg-black'>
            <div className=' w-5/6'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div id='carousel-img'>
                            <img src={slider1} alt="" className="w-full lg:h-[800px]" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div id='carousel-img2'>
                            <img src={slider2} alt="" className="w-full lg:h-[800px]" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div id='carousel-img3'>
                            <img src={slider3} alt="" className="w-full lg:h-[800px]" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div id='carousel-img4'>
                            <img src={slider4} alt="" className="w-full lg:h-[800px]" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;