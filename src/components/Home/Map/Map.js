import React from 'react';

const Map = () => {
  return (
    <div id="destination">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900" style={{fontFamily: "Montserrat, sans-serif"}}>Explore The World For Yourself</h1>
            <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR</p>
          </div>
          <img className="lg:w-4/6 md:w-6/6 w-6/6 mb-10 object-cover object-center rounded" alt="hero" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h1-img-1.png" />
        </div>
      </section>
    </div>
  );
};

export default Map;