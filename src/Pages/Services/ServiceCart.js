import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCart = ({ service }) => {

    const { name, about, price, picture, _id } = service
    return (
        <div>
            <div className="card card-compact w-96 border border-white shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img src={picture} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Name: {name}</h2>
                    <p className='text-gray-300'>{about.slice(0, 100)}......</p>
                    <div className="flex justify-between items-center">
                        <p className='text-orange-500 text-2xl'>Price: {price}</p>
                        <Link to={`/services/${_id}`}><button className="btn bg-orange-500">View details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;