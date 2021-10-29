import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Destination from './Destination/Destination';
import Gallery from './Gallery/Gallery';
import Map from './Map/Map';
import Msg from './Msg/Msg';
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
      <Msg></Msg>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;