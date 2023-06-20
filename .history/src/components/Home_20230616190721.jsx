import React from 'react';
import Navbar from './Navbar';
import background from '../assets/backgroundtwo.jpg';  

const Home = () => {
  return (
    <div
    className="flex items-center justify-center bg-cover bg-opacity-90 bg-no-repeat bg-center min-h-screen"
    style={{
        backgroundImage: `url(${background})`,
      }}
    >
        <img src={background} className='absolute min-h-screen'/>
      <Navbar />
    </div>
  );
};

export default Home;
