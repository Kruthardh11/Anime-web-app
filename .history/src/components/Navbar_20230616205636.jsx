import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between fixed top-0 w-full text-black font-bold bg-white bg-opacity-70 p-7'>
    <Link to='/' className='mr-4 text-2xl font-semibold text-indigo-500'>Home</Link>
    <Link to='/login' className='mr-4 text-2xl font-semibold text-indigo-500'>Login</Link>
    <Link to='/signup' className='text-2xl font-semibold text-indigo-500'>Signup</Link>
  </div>
  );
};

export default Navbar;
