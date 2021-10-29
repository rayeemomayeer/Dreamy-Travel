import React from 'react';
import { Link } from 'react-router-dom';

const Tour = (props) => {
  const {id, name, image, price} = props.tour;
  return (
    <div>
      <div className="group relative">
          
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className="overflow-hidden tour-card w-full h-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
          <img className="" src={image} alt="" />
        </div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>
            
            <div className="flex items-center justify-between px-3 py-2 bg-yellow-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">$ {price}</span>
                <Link to={`/tour/${id}`}><button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">book now</button></Link>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Tour;