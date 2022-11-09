import React from 'react';
import profilepicture from '../../Assets/blank-profile-picture.webp'
import { FaStar } from "react-icons/fa";

const ReviewDetails = ({ reviews, serviceName }) => {
    const { name, review, photoURL } = reviews;


    return (

        <div className=''>
            <div className='border border-gray-300 bg-gray-800  rounded-lg shadow-md shadow-gray-500 p-5'>
                <div className='flex items-center'>
                    <div className='mr-10'>
                        <img className='w-20 h-20 rounded-[40px] ' src={photoURL ? photoURL : profilepicture} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold text-orange-500'>Name:{name}</h3>
                        <p className='text-lg text-gray-300'> {review}</p>
                    </div>
                </div>
                <div className='px-5 pb-5 mt-5'>
                    <p className='text-gray-300'>Service Name: {serviceName}</p>
                    <p className='flex items-center text-gray-300'>
                        Ratings:
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                        <FaStar className='text-orange-500'></FaStar>
                    </p>
                    <p className='text-gray-300'>
                        Quality: Excellent
                    </p>
                    
                </div>
            </div>
        </div>

    );
};

export default ReviewDetails;