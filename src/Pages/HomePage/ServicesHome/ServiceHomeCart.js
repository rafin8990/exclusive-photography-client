import React from 'react';

const ServiceHomeCart = ({ service }) => {
    const { name, price, picture, about } = service
    const names = 'hsdfhjsdfgjhsbdfcjhzgjbzj'
    const aaa= names.slice(100)
    console.log(aaa)
    return (
        <div>
            <div className="card card-compact w-96 border border-white shadow-xl">
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Name: {name}</h2>
                    <p className='text-gray-300'>{about}</p>
                    <div className="flex justify-between items-center">
                        <p className='text-orange-500 text-2xl'>Price: {price}</p>
                        <button className="btn bg-orange-500">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHomeCart;