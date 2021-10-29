import React from 'react';
import './Msg.css'

const Msg = () => {
  return (
    <div>
      <section>
        <div class="w-full bg-center bg-cover h-80 mb-24 msg-container">
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 px-4">
                <div class="text-center">
                    <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Take only memories, leave only footprints</h1>
                    <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">check destination</button>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Msg;