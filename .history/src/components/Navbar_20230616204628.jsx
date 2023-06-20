import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' flex fixed top-0 w-full text-black font-bold bg-white bg-opacity-70'>
      Home
      <Link to='/login'><li>Login</li></Link>
      <Link to='/signup'><li>Signup</li></Link>
    </div>
  );
};

export default Navbar;
