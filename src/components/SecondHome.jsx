import React, { useState } from 'react'
import { useGlobalContext } from './context/global'
import Popular from './Popular.jsx'
import Upcoming from './Upcoming.jsx'
import Airing from './Airing.jsx'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import { FiMenu } from 'react-icons/fi';
import { BsFillHeartFill, BsHeartFill } from "react-icons/bs";




const SecondHome = () => {

    const {
        handleSubmit, 
        search, 
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()

    const [rendered, setRendered] = useState('popular')
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

 
    return (
        <div className='bg-gray-800 w-screen'>
               <div className="flex flex-col items-center justify-between sm:px-4 sm:py-2 ">
         <div>
    <h1 className="text-white text-xl font-bold my-3 font-sans">
      {rendered === 'popular' ? 'Popular Anime' :
      rendered === 'airing' ? 'Airing Anime' : 'Top Anime'}
    </h1>
    <Link to='/' className='flex my-3'><BiArrowBack className='bg-white m-3'/> <h1 className='text-white m-2'>Back Home</h1></Link>
    <Link to='/favoriteanime' className='flex my-3'><BsHeartFill className=' w-5 h-5 m-3'/> <h1 className='text-white m-2'>Favorites</h1></Link>
  </div>
  <div className="flex flex-col items-center ">
    <div className="relative my-3">
        <form action='' onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Search Anime"
        value={search}
        onChange={handleChange}
        className="w-48 py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 h-full px-4 text-gray-400 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M9 2a7 7 0 100 14A7 7 0 009 2zM5 9a4 4 0 118 0 4 4 0 01-8 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      </form>
    </div>
    <div className="m-4">
          <FiMenu
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 z-50">
          <div className="container mx-auto px-6 py-10">
            <div className="flex flex-col items-center">
              <button
                onClick={() => {
                  setRendered('popular');
                  toggleMenu();
                }}
                className={`m-2 text-white ${
                  rendered === 'popular' ? 'font-bold' : ''
                }`}
              > Popular
              </button>
              <button
                onClick={() => {
                  setRendered('airing');
                  getAiringAnime();
                  toggleMenu();
                }}
                className={`m-2 text-white ${
                  rendered === 'airing' ? 'font-bold' : ''
                }`}
              >
                Airing
              </button>
              <button
                onClick={() => {
                  setRendered('upcoming');
                  getUpcomingAnime();
                  toggleMenu();
                }}
                className={`m-2 text-white ${
                  rendered === 'upcoming' ? 'font-bold' : ''
                }`}
              >Top
              </button>
              <button></button>
            </div>
          </div>
        </div>)}
  </div>
  {switchComponent()}
</div>
            
       
    )
}

export default SecondHome