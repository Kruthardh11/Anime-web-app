import React from 'react';
import { useGlobalContext } from './context/global';
import { Link } from 'react-router-dom';

const Search = () => {
  const { handleSubmit, search, searchAnime, handleChange, searchResults } =
    useGlobalContext();

  const renderResults = () => {
    if (searchResults) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {searchResults.map((anime) => (
            <div
              key={anime.mal_id}
              className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 mt-4"
            >
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
      );
    } else {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <h2 className="text-xl text-white">No results found.</h2>
        </div>
      );
    }
  };

  return (
    <div className="bg-gray-700">
      <div className="relative p-5 border-4 border-yellow-400 rounded-lg">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Anime"
            value={search}
            onChange={handleChange}
            className="w-48 py-2 px-4 rounded-lg bg-gray-500 text-white placeholder-gray-300 focus:outline-none"
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
      <div className="p-10">{renderResults()}</div>
    </div>
  );
};

export default Search;
