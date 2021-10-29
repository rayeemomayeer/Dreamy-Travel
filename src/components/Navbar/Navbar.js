import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-2 mx-auto">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-700">
                        <Link className="text-2xl font-bold text-green-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to=""> Dreamy Travels</Link>
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
                        <Link to="" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Home</Link>
                        <Link to="" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Destination</Link>
                        <Link to="" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Tour</Link>
                        <Link to="" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Services</Link>
                        <Link to="" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Adventure</Link>
                        <Link to="" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">My Orders</Link>
                        
                    </div>

                    <div className="flex items-center my-auto mt-4 md:mt-0">

                        <Link to="" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Admin Panel</Link>
                        <button className="text-white bg-indigo-700 hover:bg-indigo-800 p-2 px-3 mx-2 rounded-xl">Log in</button>
                        <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                           
                            <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                            </div>
                           
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;