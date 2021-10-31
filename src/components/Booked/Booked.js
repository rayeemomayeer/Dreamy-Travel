import React from 'react';
import { Link } from 'react-router-dom';

const Booked = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img src="https://c.tenor.com/vNBOXD71os4AAAAC/olsen-twins-thank-you.gif" alt="this slowpoke moves"  width="250" />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl my-4 font-medium text-pink-900">Successfully Booked</h1>
            
            <div class="flex justify-center">
              <Link to="/home"><button class="inline-flex text-white bg-pink-700 border-0 py-1 px-4 focus:outline-none hover:bg-pink-800 rounded text-lg">Back to the Home</button></Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booked;