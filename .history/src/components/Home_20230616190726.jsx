import React from 'react';
import Navbar from './Navbar';
import background from '../assets/backgroundtwo.jpg';  

const Home = () => {
  return (
    <div
    
    >
        <img src={background} className='absolute min-h-screen'/>
      <Navbar />
    </div>
  );
};

export default Home;
