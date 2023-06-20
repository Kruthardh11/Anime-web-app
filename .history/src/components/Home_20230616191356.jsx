import React from 'react';
import Navbar from './Navbar';
import background from '../assets/background.jpg';  

const Home = () => {
  return (
    <div
    
    >
        <img src={background} className='absolute min-h-screen overflow-hidden bg-cover'/>
      <Navbar />
    </div>
  );
};

export default Home;
