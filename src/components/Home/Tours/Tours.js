import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';

const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(()=>{
    fetch('./tours.json')
      .then(response => response.json())
      .then(data => setTours(data))
  }, []);
  return (
    
  <div id="tours" className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      
      <h1 className="title-font sm:text-4xl text-3xl m-16 font-bold text-gray-900" style={{fontFamily: "Montserrat, sans-serif"}}>Book your dream vacation now</h1>

      <div className="mt-6 grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          tours.map(tour => <Tour key={tour.id} tour={tour}></Tour>)
        }
      </div>
    </div>
  </div>

  );
};

export default Tours;