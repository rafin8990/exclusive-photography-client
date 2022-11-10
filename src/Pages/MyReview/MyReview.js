import React, { useContext, useEffect, useState } from 'react';
import image from '../../Assets/br-1.png'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewDetails from './MyReviewDetails';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';


const MyReview = () => {
    useTitle('MyReview')
    const { user, logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user?.email}`,{
                headers: {
                    authorization:`bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
    }, [user?.email , logOut])

    // delete review 

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure to delete this')
        if (proceed) {
            fetch(`http://localhost:5000/myreview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast("Deleted Successfully!")
                        const remaining = reviews.filter(odr => odr?._id !== id)
                        setReviews(remaining);
                    }
                })


        }
    }

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
            <div>
                {
                    reviews.length === 0 ?
                        <h1 className='text-4xl flex justify-center items-center text-orange-500'>No Review were added ...Please add a review .</h1>
                        :
                        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
                            {
                                reviews?.map(review => <MyReviewDetails
                                    key={review?._id}
                                    reviewdb={review}
                                    handleDelete={handleDelete}
                                ></MyReviewDetails>)
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default MyReview;