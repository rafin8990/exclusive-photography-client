import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceHomeCart from './ServiceHomeCart';

const ServicesHome = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:p-20 mt-5 bg-black'>
            <div className='flex justify-center'>
                <h1 className='text-orange-500 text-2xl md:text-4xl lg:text-5xl m-10'>My Popular Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <ServiceHomeCart
                        key={service?._id}
                        service={service}
                    ></ServiceHomeCart>)
                }
            </div>
            <div className=' flex justify-center mt-10'>
                <Link to='/services'><button className='btn bg-orange-500 mt-5'>See More Services</button></Link>
            </div>
        </div>
    );
};

export default ServicesHome;