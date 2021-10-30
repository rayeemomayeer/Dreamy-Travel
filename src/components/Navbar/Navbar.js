import React from 'react';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const {user, logOut} = useAuth(); 
  return (
    <nav className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-2 mx-auto">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-700">
                        <Link to="/home" className="text-2xl font-bold text-green-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"> Dreamy Travels</Link>
                    </div>

                    <div id="mobileMenu" className="flex md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div className="flex-1 md:flex md:items-center md:justify-between">
                    <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                        <HashLink to="/home#home" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Home</HashLink>
                        <HashLink to="/home#destination" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Destination</HashLink>
                        <HashLink to="/home#tours" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Tours</HashLink>
                        <HashLink to="/home#services" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Services</HashLink>
                        <HashLink to="" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">My Orders</HashLink>
                        
                    </div>

                    <div className="flex items-center align-center my-auto mt-4 md:mt-0">

                        <Link to="" className="p-2 mx-2  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Admin Panel</Link>

                        {
                        user?.email?
                            <button onClick={logOut} className="text-white bg-gray-700 hover:bg-gray-800 p-2 px-3 mx-2 rounded-xl">LOGOUT</button>:<Link to="/login" className="text-white bg-indigo-700 hover:bg-indigo-800 p-2 px-3 mx-2 rounded-xl">LOGIN</Link>
                        }
                        <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                            {user?.photoURL?
                            <Link to={`/user/${user.displayName}`}><div className="my-auto w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img src={user.photoURL} />
                            </div></Link>:<span></span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;