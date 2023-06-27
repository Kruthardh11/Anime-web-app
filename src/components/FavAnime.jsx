import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth, db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const FavAnime = () => {
    const [userid] = useAuthState(Auth);
    const [details, setDetails] = useState([]);
    const current_user = userid.displayName;

    const postRef = collection(db, "like")
    const [anime, setAnime] = useState({})


    const Card = ({ title, image }) => {
      return (
        <div className="w-56 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 m-4">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-md mb-4" />
          <h3 className=" text-sm sm:text-lg font-martian text-white">{title}</h3>
        </div>
      );
    };

    

    const fetchLikeData =async()=> {
        await getDocs(postRef)
          .then(data=>{
            setDetails(data.docs.map((docs)=>({...docs.data(), id:docs.id})))
          })
          // console.log(details)
      }

      const filteredData = details.filter(anime => anime.user === current_user);

      
      useEffect(() => {
        fetchLikeData();
        
    }, [])

  return (
    <div className='bg-gray-800 h-screen  '>
        <div className='flex flex-col sm:flex-row text-white bg-gray-900 p-8 sm:justify-between '>
            <div className='hover:text-gray-400 m-1'>
                <Link to='/'>Home</Link></div>
            <div className='hover:text-gray-400 m-1'><Link to='/getstarted'>Back to explorin</Link>g</div>
            <div className='hover:text-gray-400 m-1'><Link to='/searchanime'>Search Anime</Link></div>
        </div>
        <h2 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 text-center mt-5'>Favorites</h2>
        <div className='flex items-center justify-center mt-6 text-white font-martian'>
            <h3>User : {userid.displayName} </h3>
        </div>
          <div className="flex flex-col items-center sm:flex-row justify-center items-center m-4 object-cover">
        {filteredData.map((anime, index) => (
          <Card key={index} title={anime.Title} image={anime.image} />
        ))}
    </div>
    </div>
  )
}

export default FavAnime