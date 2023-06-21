import React from 'react';
import { useGlobalContext } from './context/global';
import { Link } from 'react-router-dom';

const Popular = ({ rendered }) => {
  const { popularAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => (
        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="flex justify-center items-center m-4">
          <div className="w-56 h-80 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 mt-10">
            <img src={anime.images.jpg.large_image_url} alt='' className="w-full h-full object-cover" />
          </div>
        </Link>
      ));
    }else{
      return searchResults?.map((anime) => {
          return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {searchResults.map((anime) => (
            <div key={anime.mal_id} className="rounded-lg overflow-hidden  shadow-md transition-transform duration-300 transform hover:scale-105 mt-4">
              <Link to={`/anime/${anime.mal_id}`}>
                <img
                  src={anime.images.jpg.large_image_url}
                  alt=""
                  className="w-56 h-80"
                />
              </Link>
            </div>
          ))}
        </div>      
      })
  }
  };
//searchResults
  return (
    <div className='bg-gray-700 '>
     
      <div className="container mx-auto px-6  py-10">
        <div className="flex flex-wrap justify-center -mx-4">
          {conditionalRender()}
        </div>
      </div>
    </div>
  );
};

export default Popular;
