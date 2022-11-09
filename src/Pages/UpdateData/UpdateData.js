import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const UpdateData = () => {
    const updateData = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id } = updateData
    const [data, setData] = useState({})
    // update review 
    const handleUpdateData = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = user?.email || 'unregistered'
        const review = form.review.value
        const photoURL = user?.photoURL
        const newData = {
            name: name,
            email: email,
            review: review,
            photoURL: photoURL
        }
        setData(newData)
        fetch(`http://localhost:5000/myreview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Updated successfully')
                    setData(data)
                    form.reset()
                }

            })
    };
    return (
        <div>
            <div className='flex justify-center mt-5'>
                <form onSubmit={handleUpdateData} className=" md:w-1/2">
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text text-gray-300"></span>
                        </label>
                        <input type="text" placeholder="Your Name" name='name' className="input input-bordered w-full text-2xl" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-gray-300"></span>
                        </label>
                        <textarea name='review' className="textarea text-2xl w-full" placeholder="text here to review" required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn bg-orange-500">Update Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateData;