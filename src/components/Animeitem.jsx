import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { Auth, db, storage } from '../firebase-config';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Animeitem = () => {

    const {id} = useParams();
    const [userid] = useAuthState(Auth);
     
    const [isLiked, setIsLiked] = useState(false);
    

    const [anime, setAnime] = useState({})
    const [characters, setCharacters] = useState([])
    const [showMore, setShowMore] = useState(false)

    const [details, setDetails] = useState([])

    const postRef = collection(db, "like")

    //FETCHING ANIME
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    const {
        title, synopsis, 
        trailer,duration,aired, 
        season, images, rank, 
        score,scored_by, popularity, 
        status, rating, source } = anime

    //FETCHING CHARACTERS
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
       
    }

    const compare =() =>{

      let current_user;
      if (userid) {
          current_user = userid.displayName;
      }

      details.map(item=>{
        const {malid, user} = item;
        
        if(malid === id && user === current_user){
            setIsLiked(true);
            console.log("matched")
        }
        else{
          console.log("fuck off")
        }
      })
    }

    const fetchLikeData =async()=> {
      await getDocs(postRef)
        .then(data=>{
          setDetails(data.docs.map((docs)=>({...docs.data(), id:docs.id})))
        })
        console.log(details)
        //compare();
    }
   
    const handleLike = async () => {
      try {
        const likeData = {
          like: true,
          user: current_user,
          malid: id
        };
  
        await addDoc(postRef, likeData);
        setIsLiked(true);
      } catch (error) {
        console.error("Error adding like:", error);
      }
    };

    const handleDislike =async ()=>{
      try{
        await deleteDoc(doc(db, "like", id))
      }catch(e){
        console.log(e)
      }
    }
    
    //INITIAL RENDER
    useEffect(() => {
        getAnime(id)
        getCharacters(id)
        fetchLikeData();
        compare();
    }, [])

  return (
    <div className='bg-gray-700'>
      <div className='flex items-center justify-center p-10 '>
      <a href="/getstarted" class="relative rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Back</span>
</a>
      </div>
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 text-center flex justify-center items-center p-5 ">
            {title}
        </h1>
        <div>
        <div className="bg-gray-500 p-2 mx-[2%] sm:mx-[25%] rounded-lg transition-transform duration-300 transform hover:scale-105">
      <div className="flex">
        <div className="mr-4">
          <img src={images?.jpg.large_image_url} alt="" className="w-auto h-auto" />
        </div>
        <div className="flex-grow sm:ml-[%]">
          <p><span className="font-bold">Aired:</span> {aired?.string}</p>
          <p><span className="font-bold">Rating:</span> {rating}</p>
          <p><span className="font-bold">Rank:</span> {rank}</p>
          <p><span className="font-bold">Score:</span> {score}</p>
          <p><span className="font-bold">Scored By:</span> {scored_by}</p>
          <p><span className="font-bold">Popularity:</span> {popularity}</p>
          <p><span className="font-bold">Status:</span> {status}</p>
          <p><span className="font-bold">Source:</span> {source}</p>
          <p><span className="font-bold">Season:</span> {season}</p>
          <p><span className="font-bold">Duration:</span> {duration}</p>
          {userid && (
  isLiked ? (
    <div> 
    <BsFillHeartFill className="w-10 h-10 sm:ml-[35%] sm:m-[10%] ml-[30%] m-[10%] " onClick={handleDislike}  />
    </div>
  ) : (
    <BsHeart className="w-10 h-10 sm:ml-[35%] sm:m-[10%] ml-[30%] m-[10%]" onClick={handleLike}/>
  )
)}

{    userid && ( <p className="font-extrabold text-white ml-[10%] "><span>User:</span> {userid.displayName}</p>)}

       </div>
      </div>
      </div>
      <p className="mt-4 bg-gray-500 rounded-lg mx-2 p-4 sm:mx-[15%] transition-transform duration-300 transform hover:scale-105">
        {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
        <button onClick={() => setShowMore(!showMore)} className="text-blue-500">{showMore ? 'Show Less' : 'Read More'}</button>
     
      </p>
    </div>

    <div className="sm:mx-[10%]">
  <h3 className="text-gray-200 text-xl sm:text-2xl font-bold tracking-[1px] text-center flex justify-center items-center m-2">Trailer</h3>
  <div className="m-5">
    <div className="sm:h-full sm:w-full">
      {trailer?.embed_url ? (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <h3>Trailer not available</h3>
      )}
    </div>
  </div>
</div>

    <div className='m-2 sm:mx-[5%]'>
    <h3 className="text-gray-200 text-xl sm:text-2xl font-bold tracking-[1px] text-center flex justify-center items-center m-2">Characters</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {characters?.map((character, index) => {
        const { role } = character;
        const { images, name, mal_id } = character.character;
        return (
          <Link to={`/character/${mal_id}`} key={index}>
            <div className=" rounded-lg p-4 flex flex-col items-center border-2 border-black transition-transform duration-300 transform hover:scale-105">
              <img src={images?.jpg.image_url} alt={name} className="w-32 h-32 object-cover mb-2" />
              <h4 className="text-lg font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </Link>
        );
      })}
    </div>
    </div>
           

    </div>
  )
}

export default Animeitem