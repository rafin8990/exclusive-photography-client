import React from 'react';
import { Link } from 'react-router-dom';
import register from '../../Assets/register.png'

const Register = () => {
    return (
        <div className='bg-black'>
            <div className='container min-h-screen mt-20'>
                <div className="md:flex md:justify-around">
                    <div className='mb-10'>
                        <img src={register} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Name</span>
                                </label>
                                <input type="text" placeholder="Full-Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="">
                                    <p className='text-gray-300'>Don't Have an Account? <Link to='/register' className='text-orange-500'>Please Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-orange-500">Login</button>
                                <button type='submit' className="btn btn-primary mt-5"> SignIn WIth Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;