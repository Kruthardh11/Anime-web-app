import React from 'react';
import Navbar from './Navbar';
import background from '../assets/backgroundtwo.jpg';  

const Home = () => {
  return (
    <div
    className="flex items-center justify-center bg-cover bg-opacity-10 bg-no-repeat bg-center min-h-screen"
    style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Navbar />
    </div>
  );
};

export default Home;
