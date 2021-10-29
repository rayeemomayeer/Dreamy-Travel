import React from 'react';
import Navbar from '../Navbar/Navbar';
import Destination from './Destination/Destination';
import Map from './Map/Map';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <Map></Map>
      <Destination></Destination>
    </div>
  );
};

export default Home;