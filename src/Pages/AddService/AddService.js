import React from 'react';
import image from '../../Assets/br-1.png'
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handleAddServiceToDB = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const picture=form.picture.value;
        const about=form.about.value;
        const price=form.price.value;
        const time=new Date()
        const data = {
            name: name,
            picture:picture,
            about:about,
            price:price,
            time:time
        }
        fetch('https://exclusive-photography-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Service Added Successfully!")
                    event.target.reset()
                }
            });
    }
    return (
        <div>
            <div>
                <div>
                    <div className="">
                        <div className="flex items-center justify-around flex-col lg:flex-row">
                            <img src={image} alt='' className="rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-6xl font-bold text-orange-500">Add A Service!!!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=' md:p-10 pt-10 bg-gradient-to-r min-h-screen from-black to-white bg-black'>
                    <div className='flex justify-center '>

                        <form onSubmit={handleAddServiceToDB} className=" border  border-orange-500 p-10 shadow-md shadow-orange-500 bg-slate-600 md:w-1/2">
                            <div className='w-full'>
                                <label className="label">
                                    <span className="label-text text-gray-300"></span>
                                </label>
                                <input type="text" placeholder="Service Name" name='name' className="input input-bordered w-full " required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-gray-300"></span>
                                </label>
                                <input type="text" placeholder="price" name='price' className="input input-bordered w-full " required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-gray-300"></span>
                                </label>
                                <input type="text" placeholder="photoURL" name='picture' className="input input-bordered w-full " required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-gray-300"></span>
                                </label>
                                <textarea type="text" placeholder="Add discription about service" name='about' className="textarea input-bordered w-full" required ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-orange-500">Add service</button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddService;