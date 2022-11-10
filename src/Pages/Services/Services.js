import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';
import image from '../../Assets/br-1.png'
import useTitle from '../../Hooks/useTitle';

const Services = () => {
    useTitle('Service')
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('https://exclusive-photography-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='bg-black pt-10'>
            <div>
                <div className="">
                    <div className="flex items-center justify-around flex-col lg:flex-row">
                        <img src={image} alt='' className="rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-6xl font-bold text-orange-500">All Services Here!!!</h1>
                            <p className="py-6 text-gray-200">You Will find All of my services here</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:p-20'>
                {
                    services.map(service=><ServiceCart
                    key={service?._id}
                    service={service}
                    ></ServiceCart>)
                }
            </div>

        </div>
    );
};

export default Services;