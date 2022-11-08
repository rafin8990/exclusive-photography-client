import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const ReviewDetails = ({ reviews }) => {
    const { user } = useContext(AuthContext)
    const { Name, review } = reviews;
    return (

        <div className='flex items-center mt-10 border border-gray-300  rounded-lg shadow-lg shadow-gray-500 p-5'>
            <div className='mr-10'>
                <img className='w-20 h-20 rounded-[40px] ' src={user?.photoURL} alt="" />
            </div>
            <div>
                <h3 className='text-xl font-bold text-orange-500'>Name:{Name}</h3>
                <p className='text-lg text-gray-300'> {review}</p>
            </div>
        </div>

    );
};

export default ReviewDetails;