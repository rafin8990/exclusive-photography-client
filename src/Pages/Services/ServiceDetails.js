import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
    const [reviews, setReview] = useState({})

    const serviceDetails = useLoaderData()
    const { name, about, price, picture } = serviceDetails
    return (
        <div>
            {/* service details  */}
            <div>
                <div className='bg-black flex justify-center'>
                    <div className='w-2/6 border border-gray-400 rounded-lg shadow-lg shadow-gray-600'>
                        <div className='p-5'>
                            <h1 className='text-2xl font-bold text-orange-500'>Service Name:{name}</h1>
                        </div>
                        <div>
                            <img className='w-full' src={picture} alt="" />
                        </div>
                        <div className='flex justify-between items-center p-5'>
                            <h3 className='text-gray-300'>Price: {price}</h3>
                            <p className='flex items-center text-gray-300'>
                                Ratings:
                                <FaStar className='text-orange-500'></FaStar>
                                <FaStar className='text-orange-500'></FaStar>
                                <FaStar className='text-orange-500'></FaStar>
                                <FaStar className='text-orange-500'></FaStar>
                                <FaStar className='text-orange-500'></FaStar>
                            </p>
                        </div>
                        <div className='p-5'>
                            <p className='text-gray-300'>{about}</p>
                        </div>
                        <div className='px-5 pb-5'>
                            <li className='text-gray-300'> Premium package</li>
                            <li className='text-gray-300'>A short trailer</li>
                            <li className='text-gray-300'>50 Copy Printed Picture </li>
                            <li className='text-gray-300'>20-25 min Full video</li>
                            <li className='text-gray-300'>100% Effort</li>
                        </div>
                    </div>
                </div>
            </div>
            {/* review section  */}
            <div>
                <div>
                    <Link to='/login' className='text-white' >Please login for <span className='text-orange-500'> Add a Review</span></Link>

                    <form>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </form>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;