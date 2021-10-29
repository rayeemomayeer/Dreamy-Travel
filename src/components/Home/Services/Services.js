import React from 'react';
import electric from './electrical-energy.png';
import motorhome from './motorhome.png';
import parking from './parking-sign.png';
import sanitary from './shower.png';
import washing from './washing-machine.png';
import internet from './wifi.png';

const Services = () => {

  return (
    <div di="services">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap w-full mb-16 flex-col items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900" style={{fontFamily: "Montserrat, sans-serif"}}>Services From Our Hotels</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-2 border-green-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full text-green-500 mb-4">
                  <img src={parking} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Parking in the camp</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-2 border-green-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4">
                  <img src={motorhome} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Motorhome service</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-2 border-green-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4">
                  <img src={washing} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Washing machines</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-2 border-green-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4">
                  <img src={sanitary} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Sanitary facilities</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-2 border-green-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4">
                  <img src={internet} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Fast Internet</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-2 border-green-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-green-500 mb-4">
                  <img src={electric} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Electrical cabinets</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        </div>
      </section>
    </div>
  );
};

export default Services;