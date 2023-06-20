import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CharacterCard = () => {
  
    const {id} = useParams();

    const [character, setCharacters] = useState({});

    const {
        mal_id,
        url,
        images,
        name,
        name_kanji,
        about,
        favorites,
        nicknames,
      } = character;

    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/characters/${id}`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }

    useEffect(() => {
        getCharacters(id)
    }, [])

    return (
      <div className='bg-gradient-to-r from-purple-400 to-blue-400'>
        <div className="max-w-sm mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg p-2 pt-6 ">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 text-center flex justify-center items-center p-5">{name}</h1>
        <img
          src={images?.webp.image_url}
          alt={name}
          className="w-full h-64 object-contain object-center"
        />
        <div className="p-4">
          <p className="text-gray-300 text-sm mb-4">Mal ID: {mal_id}</p>
          <p className="text-gray-300 text-sm mb-4">Name (Kanji): {name_kanji}</p>
          <p className="text-gray-300 text-sm mb-4">
            URL: <a href={url} className="text-blue-400 hover:underline">{url}</a>
          </p>
          <p className="text-gray-300 mb-4">{about}</p>
          <p className="text-gray-300 text-sm mb-4">Favorites: {favorites}</p>
          {nicknames && (
            <p className="text-gray-300 text-sm mb-4">
              Nicknames: {nicknames.join(', ')}
            </p>
          )}
        </div>
      </div>
      </div>
  )
}

export default CharacterCard