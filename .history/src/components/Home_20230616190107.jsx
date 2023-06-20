import React from 'react';
import Navbar from './Navbar';
import background from '../assets/backgroundtwo.jpg';  

const Home = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
      <Navbar />
    </div>
  );
};

export default Home;
