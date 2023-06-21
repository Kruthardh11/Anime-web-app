import React, { useEffect, useState } from 'react';
import desktopbg from '../assets/newbg.jpg'; 
import mobilebg from '../assets/bgmobile.jpg'
import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Home = () => {
  const [bgImageUrl, setBgImageUrl] = useState('');
  const [navTrue, setNav] = useState(false)

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
      <div className='flex flex-col font-bold mt-[100%]  sm:mb-[5%] sm:mt-[18%] '>
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
        <a  class="relative mt-[19%] inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group  ">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Search Anime</span>
  <span class="relative invisible"> Text</span>
</a></Link>


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
      
      <div className="absolute text-yellow-300 mt-10 sm:mt-[22%] mr-0 sm:mr-15 sm:ml-2 animate-pulse  ">
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
        <a  class="relative mt-[19%] inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group  ">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">Search Anime</span>
  <span class="relative invisible"> Text</span>
</a></Link>

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
        </div>



     
    </div>
  );
};

export default Home;
