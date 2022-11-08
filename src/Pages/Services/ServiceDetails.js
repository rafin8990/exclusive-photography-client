import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const { name, about, price, picture, _id } = serviceDetails
    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState({})
    console.log(reviews)

    

    const handleAddReviewToDB = event => {
        event.preventDefault()
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review added usccesfully')
                    event.target.reset();
                }
            });
    }


    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        console.log(event.target);
        const newReview = { ...reviews }
        newReview[field] = value;
        setReviews(newReview)
    }

    
    return (
        <div>
            {/* service details  */}
            <div>
                <div className='bg-black flex justify-center'>
                    <div className='md:w-2/6 border border-gray-400 rounded-lg shadow-lg shadow-gray-600'>
                        <div className='p-5'>
                            <h1 className='text-2xl font-bold text-orange-500'>Service Name:{name}</h1>
                        </div>
                        <div>
                            <img className='w-full' src={picture} alt="" />
                        </div>
                        <div className='flex justify-between items-center p-5'>
                            <h3 className='text-gray-300'>Price: <span className='text-orange-500'>{price}</span></h3>
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
            <section>
                <div>
                    <div>
                        {
                            user?.uid ?
                                <div>
                                    <h1 className='text-orange-500 text-4xl flex justify-center mt-10'>Add A Review</h1>
                                    <div className='flex justify-center mt-5'>
                                        <form onSubmit={handleAddReviewToDB} className=" md:w-1/2">
                                            <div className='w-full'>
                                                <label className="label">
                                                    <span className="label-text text-gray-300"></span>
                                                </label>
                                                <input onBlur={handleInputBlur} type="text" placeholder="Your Name" name='Name' className="input input-bordered w-full text-2xl" required />
                                            </div>
                                            <div >
                                                <label className="label">
                                                    <span className="label-text text-gray-300"></span>
                                                </label>
                                                <textarea onBlur={handleInputBlur} name='review' className="textarea text-2xl w-full" placeholder="text here to review"></textarea>
                                            </div>
                                            <div className="form-control mt-6">
                                                <button type='submit' className="btn bg-orange-500">Add Review</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                :
                                <div className='flex justify-center mt-10'>
                                    <Link to='/login' className='text-white text-4xl' >Please login for <span className='text-orange-500'> Add a Review</span></Link>
                                </div>
                        }
                    </div>

                    <div>
                        {

                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;