import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' flex fixed top-0 w-full text-black font-bold bg-white bg-opacity-70'>
      <Link to='/'><div>Home</div></Link>
      <Link to='/login'><div>Login</div></Link>
      <Link to='/signup'><div>Signup</div></Link>
    </div>
  );
};

export default Navbar;
