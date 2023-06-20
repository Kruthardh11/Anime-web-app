import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' flex fixed top-0 w-full text-black font-bold bg-white bg-opacity-70'>
      Home
      <ul>
      <Link to='/login'><li>Login</li></Link>
      <Link to='/signup'><li>Signup</li></Link>
      </ul>
      
    </div>
  );
};

export default Navbar;
