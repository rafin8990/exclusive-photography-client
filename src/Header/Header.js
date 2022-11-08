import React, { useContext } from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import { AuthContext } from '../Pages/Context/AuthProvider/AuthProvider';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const { logOut, user } = useContext(AuthContext);

    return (
        <div>
            <nav className="w-full bg-black shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link className='flex items-center'>
                                <img className='mr-3 w-16' src={logo} alt="" />
                                <h2 className="text-2xl font-bold text-orange-500">Exclusive World</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white hover:text-orange-500">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="text-white hover:text-orange-500">
                                    <Link to='/services' >Services</Link>
                                </li>
                                {
                                    user?.uid? 
                                    <div className='flex'>
                                    <li className="text-white hover:text-orange-500 mr-5">
                                        <Link to='/myreview'>My Reviews</Link>
                                    </li>
                                    <li className="text-white hover:text-orange-500">
                                        <Link>Add Service</Link>
                                    </li>
                                </div>
                                    :
                                    <>
                                    </>


                                }
                                <li className="text-white hover:text-orange-500">
                                    <Link to='/blog'>Blog</Link>
                                </li>
                            </ul>

                            <div>
                                {
                                    user?.uid ?
                                        <button className='btn md:hidden bg-orange-500' onClick={logOut}>LogOut</button>

                                        :
                                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                            <Link to='/login'

                                                className="inline-block w-full px-4 py-2 md:hidden text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                            >
                                                Sign in
                                            </Link>
                                            <Link to='/register'

                                                className="inline-block w-full  px-4 md:hidden py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                            >
                                                Sign up
                                            </Link>
                                        </div>

                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            user?.uid ?
                                <button className='btn bg-orange-500 hidden md:block' onClick={logOut}>LogOut</button>
                                :
                                <div className="hidden space-x-2 md:inline-block">
                                    <Link to='/login'

                                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                    >
                                        Sign in
                                    </Link>
                                    <Link to='/register'

                                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                        }
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;