import React, { useContext, useEffect, useState } from 'react';
import image from '../../Assets/br-1.png'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div className='bg-black'>
            <div>
                <div className="">
                    <div className="flex items-center justify-around flex-col lg:flex-row">
                        <img src={image} alt='' className="rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-6xl font-bold text-orange-500">Your All Review Here!!!</h1>
                            <p className="py-6 text-gray-200">You Will find All of your review here</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
                {
                    reviews?.map(review => <MyReviewDetails
                        key={review?._id}
                        reviewdb={review}
                    ></MyReviewDetails>)
                }
            </div>
        </div>
    );
};

export default MyReview;