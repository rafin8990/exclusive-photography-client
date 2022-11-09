import React from 'react';
import about from '../../../Assets/about.jpg'
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const AboutJourney = () => {
    return (
        <div>
            <div className='md:bg-gray-900 p-10'>
                <div className='flex md:justify-between bg-black rounded-xl'>
                    <div className='flex justify-center items-center bg-black p-20 rounded-lg w-1/2'>
                        <div>
                            <h1 className='text-xl  md:text-2xl lg:text-4xl  text-orange-500 flex justify-center'>About Me</h1>
                            <p className='text-gray-300 mt-5'>If you’re looking for wedding photography inspiration, I may Shoes is the place to go. I have a ton of posts brimming with fresh ideas for wedding photoshoots. I have pose ideas for the wedding party. And there are pre-wedding location suggestions.
                            It’s easy to get lost on the Green Wedding Shoes site. And I mean that as a good thing. One post leads to another, and before you know it, your head will be bursting with exciting photography ideas. If you feel flat about your last wedding shoot, Green Wedding Shoes will ensure the next one is 100% fabulous.

                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <img className='rounded-lg shadow-lg shadow-gray-600' src={about} alt="" />
                    </div>

                </div>

            </div>
            <div>
                <div>
                    <div className='lg:mx-40 mb-20 bg-black p-20 rounded-md'>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            <div className='flex items-center'>
                                <FaCalendarAlt className='text-white'></FaCalendarAlt>
                                <div className='ml-5'>
                                    <p className='text-white'>Contact Me Monday-Friday</p>
                                    <h5 className='text-white text-2xl font-semibold'>7:00 AM - 9:00 PM</h5>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <FaPhoneAlt className='text-white'></FaPhoneAlt>
                                <div className='ml-5'>
                                    <p className='text-white'>Have A Question? </p>
                                    <h5 className='text-white text-2xl font-semibold'>+2546 251 2658</h5>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <HiOutlineLocationMarker className='text-white'></HiOutlineLocationMarker>
                                <div className='ml-5'>
                                    <p className='text-white'>Need a repair? Our Address</p>
                                    <h5 className='text-white text-2xl font-semibold'>Liza Street, Dhaka</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutJourney;