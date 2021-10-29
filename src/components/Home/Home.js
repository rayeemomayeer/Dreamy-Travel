import React from 'react';
import Navbar from '../Navbar/Navbar';
import Destination from './Destination/Destination';
import Map from './Map/Map';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';
import Tours from './Tours/Tours';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <Map></Map>
      <Destination></Destination>
      <Tours></Tours>
      <Services></Services>
    </div>
  );
};

export default Home;