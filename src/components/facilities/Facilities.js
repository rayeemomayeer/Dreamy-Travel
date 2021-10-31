import React from 'react';
import conditioning from './eco.png';
import hotTub from './hot-tub.png';
import laundry from './laundry.png';
import pool from './swimming-pool.png';
import spa from './massage.png'
import pet from './pets-allowed.png'

const Facilities = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto">
    <h1 className="sm:text-3xl text-3xl font-medium title-font text-center text-gray-900 mb-20">Our Facilities
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4  -mt-4 md:space-y-0 space-y-6">

      <div className="w-1/2">
        <div className="px-4 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
          <img src={pet} alt="" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-600 text-lg title-font font-medium mb-2">Pet friendly</h2>
          
        </div>
      </div>
      <div className="px-4 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
          <img src={hotTub} alt="" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-600 text-lg title-font font-medium mb-2">Hot tub</h2>
          
          
        </div>
      </div>
      <div className="px-4 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
          <img src={pool} alt="" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-600 text-lg title-font font-medium mb-2">Pool</h2>
          
        </div>
      </div>
      </div>

      <div  className="w-1/2">
        <div className="px-4 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
          <img src={conditioning} alt="" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-600 text-lg title-font font-medium mb-2">Cool</h2>
          
        </div>
      </div>
      <div className="px-4 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
          <img src={laundry} alt="" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-600 text-lg title-font font-medium mb-2">Laundry</h2>
          
        </div>
      </div>
      <div className="px-4 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
          <img src={spa} alt="" />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-600 text-lg title-font font-medium mb-2">Spa</h2>
          
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Facilities;