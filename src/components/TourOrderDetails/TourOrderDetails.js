import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const TourOrderDetails = () => {
  const {tourId} = useParams();
  const [details, setDetails]=useState({})
  const {user} = useAuth(); 
  useEffect(() => {
    fetch('/tours.json')
      .then(res=>res.json())
      .then(data=>{
    const p=data.find(p=>p.id==tourId)
      console.log('this is details',p)

      setDetails(p)
    })
    },[tourId])
  return (
    <div>
      
<div className="bg-white">
  <div className="pt-6">
    {/* Image gallery */}
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img src={details.detailImage} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src={details.detailImage2} alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src={details.detailImage3} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <img src={details.detailImage4} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
      </div>
    </div>
    {/* Product info */}
    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        
      </div>
      {/* Options */}
      <div className="mt-4 lg:mt-0 lg:row-span-3">
        <PlaceOrder></PlaceOrder>
      </div>
      <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        {/* Description and details */}
        <div className="w-full">
  <h2 className="text-sm title-font text-gray-500 tracking-widest">DREAMY TRAVELS</h2>
  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{details.name}</h1>
  <div className="flex mb-4">
    <span className="flex items-center">
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span className="text-gray-600 ml-3">{details.reviews} Reviews</span>
    </span>
    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
      <a href={details.facebook} target="_blank" className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a href={details.twitter} target="_blank" className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a href={details.messenger} target="_blank" className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </a>
    </span>
  </div>
  <p className="leading-relaxed">{details.description}</p>
  <hr className="my-12 text-gray-400" />
  <div className="flex">
    <span className="title-font font-medium text-3xl text-gray-900">$ {details.price}</span>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
      </div>
    
  );
};

export default TourOrderDetails;