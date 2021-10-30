import React from 'react';

const PlaceOrder = () => {
  return (
    <div>
      <section className="h-screen bg-gray-100 bg-opacity-50">
  <form className="max-w-2xl mx-auto shadow-md">
    <div className="p-4 bg-gray-100 border-t-2 border-green-400 rounded-lg bg-opacity-5">
      <div className="max-w-sm mx-auto md:w-full md:mx-0">
        <div className="inline-flex items-center space-x-4">
          <a href="#" className="block relative">
            <img alt="profil" src="https://media.istockphoto.com/photos/portrait-of-happy-casual-bearded-man-holding-trophy-and-celebrating-picture-id1327485360?k=20&m=1327485360&s=612x612&w=0&h=vkGZBciLl2cfelmB8vXZInFu82zUT6dh_7mnLFVFV3U=" className="mx-auto object-cover rounded-full h-16 w-16 " />
          </a>
          <h1 className="text-gray-600">
            Charlie brakham
          </h1>
        </div>
      </div>
    </div>
    <div className="space-y-6 bg-white">
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <h2 className="max-w-sm mx-auto md:w-1/3">
          Account
        </h2>
        <div className="max-w-sm mx-auto md:w-2/3">
          <div className=" relative ">
            <input type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
          </div>
        </div>
      </div>
      <hr />
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <h2 className="max-w-sm mx-auto md:w-1/3">
          Personal info
        </h2>
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
          <div>
            <div className=" relative ">
              <input type="text" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
            </div>
          </div>
          <div>
            <div className=" relative ">
              <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone number" />
            </div>
          </div>
          <div>
            <div className=" relative ">
              <input type="text" id="user-info-address" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Current Address" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full px-4 pb-4 mx-auto text-gray-500 md:w-2/3">
        <button type="submit" className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          Book Now
        </button>
      </div>
    </div>
  </form>
</section>
    </div>
  );
};

export default PlaceOrder;