import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context/global'

function Airing({rendered}) {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {airingAnime.map((anime) => (
              <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="flex justify-center items-center">
                <div className="w-56 h-80 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
                  <img src={anime.images.jpg.large_image_url} alt="" className="w-full h-full object-cover" />
                </div>
              </Link>
            ))}
          </div>

        }else{
          return searchResults?.map((anime) => {
            return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {searchResults.map((anime) => (
              <div key={anime.mal_id} className="rounded-lg overflow-hidden bg-white shadow-md transition-transform duration-300 transform hover:scale-105 mt-4">
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
    }
     return (
   
          <div className="bg-gray-700">
              {conditionalRender()}
          </div>
          
  )
}

export default Airing;

