import React, { useEffect, useState } from 'react';
import desktopbg from '../assets/newbg.jpg'; 
import mobilebg from '../assets/bgmobile.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Auth, Provider } from '../firebase-config';
import {useAuthState} from "react-firebase-hooks/auth";
import {signInWithPopup, signOut} from "firebase/auth";

const Home = () => {
  const [bgImageUrl, setBgImageUrl] = useState('');
  const [navTrue, setNav] = useState(false)

  const [user] = useAuthState(Auth);
  const navigator = useNavigate()


  const logOut = async () => {
    await signOut(Auth)
    navigator("/")
  }

  const sign =()=>{
    signInWithPopup(Auth, Provider)
    .then(res=>console.log("sign in"))
    .catch(err=>console.log(err));
  }


  const handleWindowResize = () => {
    if (window.innerWidth < 768) {
      setBgImageUrl(mobilebg); // Mobile image
      setNav(!navTrue);
    }
     else {
      setBgImageUrl(desktopbg); // Desktop image
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div
    className="flex items-start justify-start bg-cover bg-opacity-50 bg-no-repeat bg-center min-h-screen"
    style={{
        backgroundImage: `url(${bgImageUrl})`,
      }}
    >
      <div className='hidden sm:flex pl-[5%] pt-[5%]'>
        
      <div className='flex flex-col font-bold mt-[100%]  sm:mb-[5%] sm:mt-[10%] '>
{  user &&    <div className='text-white border-b-2 border-white mb-[10%] font-martian'><p className='font-extrabold '>User : </p> {user.displayName} </div>
}         
 <p className=' text-yellow-300 mb-[12%] font-bold text-lg'>Explore  anime </p>
        <Link to='/getstarted'>
        <a  class="relative inline-flex items-center justify-center p-4 px-8   py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group  ">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Explore  </span>
  <span class="relative invisible"> Text</span>
</a></Link>

<Link to='/popular'>
        <a  class="relative mt-[19%] inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group  ">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Popular</span>
  <span class="relative invisible"> Text</span>
</a></Link>

<Link to='/searchanime'>
        <a  class="relative mt-[19%] inline-flex items-center justify-center p-4 px-12 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group  ">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Search Anime</span>
  <span class="relative invisible"> Text</span>
</a></Link>
<div className='sm:m-[15%]' >
  {user ? (
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={logOut}>
      Logout
    </button>
  ) : (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={sign}>
      Login
    </button>
  )}
</div>



      <div className='flex mt-6 space-x-4'>
      <a href="https://github.com/Kruthardh11" target="_blank" rel="noopener noreferrer">
        <BsGithub className="text-gray-500 hover:text-gray-800 text-2xl" />
      </a>
      <a href="https://www.instagram.com/karlsefni_11" target="_blank" rel="noopener noreferrer">
        <BsInstagram className="text-gray-500 hover:text-gray-800 text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/kruthardh-tirunahari-bba216264/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin className="text-gray-500 hover:text-gray-800 text-2xl" />
      </a>
      </div>
      </div>
      
      <div className="relative text-yellow-300 mt-10 sm:mt-[22%] mr-0 sm:mr-15 sm:ml-[15%] animate-pulse   ">
      <div className="font-extrabold text-4xl ml-20 sm:ml-0">
         DIVE
      </div>
      <p className='text-2xl'>Into the captivating world of ANIME.</p>
      <div className='text-2xl'>
        All in one place, here!
      </div>
      <div className='text-md mt-[20%] text-gray-400 '>
          ~by Kruthardh
      </div>
    </div>
</div>

 
        <div className='sm:hidden flex flex-col'> 
          <div className='text-yellow-300 flex flex-col p-12 text-2xl font-montserrat'>
            Dive into the captivating world of anime. All at one place, here!!
          </div>
          <div className='mt-[100%]  flex flex-col items-center'>
          <p className=' text-yellow-300  font-bold text-lg'>Explore  anime </p>
        <Link to='/getstarted'>
        <a  class="relative inline-flex mt-[15%] items-center justify-center p-4 px-8   py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group  ">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Explore  </span>
  <span class="relative invisible"> Text</span>
</a></Link>

<Link to='/popular'>
        <a  class="relative mt-[15%] inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group  ">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Popular</span>
  <span class="relative invisible"> Text</span>
</a></Link>
<Link to='/searchanime'>
        <a  class="relative mt-[19%] inline-flex items-center justify-center p-4 px-12 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group  ">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Search Anime</span>
  <span class="relative invisible"> Text</span>
</a></Link>
<div>
{user ? (
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={logOut}>
      Logout
    </button>
  ) : (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={sign}>
      Login
    </button>
  )}
  </div>

<div className='flex mt-6 space-x-4 '>
      <a href="https://github.com/Kruthardh11" target="_blank" rel="noopener noreferrer">
        <BsGithub className="text-gray-500 hover:text-gray-800 text-2xl" />
      </a>
      <a href="https://www.instagram.com/karlsefni_11" target="_blank" rel="noopener noreferrer">
        <BsInstagram className="text-gray-500 hover:text-gray-800 text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/kruthardh-tirunahari-bba216264/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin className="text-gray-500 hover:text-gray-800 text-2xl" />
      </a>
      </div>

          </div>
          <p className='text-md text-gray-400'>~by kruthardh</p>
        </div>



     
    </div>
  );
};

export default Home;
