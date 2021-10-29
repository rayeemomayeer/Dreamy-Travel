import React from 'react';
import Destination from './Destination/Destination';
import Gallery from './Gallery/Gallery';
import Map from './Map/Map';
import Msg from './Msg/Msg';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';
import Tours from './Tours/Tours';


const Home = () => {
  return (
    <div id="home">
      
      <TopBanner></TopBanner>
      <Map></Map>
      <Destination></Destination>
      <Tours></Tours>
      <Services></Services>
      <Msg></Msg>
      <Gallery></Gallery>
      
    </div>
  );
};

export default Home;