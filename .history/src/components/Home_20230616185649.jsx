import React from 'react';
import Navbar from './Navbar';
import background from '../assets/background.jpg';

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-opacity-50"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Navbar />
    </div>
  );
};

export default Home;
