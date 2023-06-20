import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import Animeitem from './components/Animeitem';
import SecondHome from './components/SecondHome';
import Airing from './components/Airing';
import Upcoming from './components/Upcoming';
import CharacterCard from './components/CharacterCard';
import Search from './components/Search';



function App() {

  return (
      <div  >
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchanime" element={<Search />}/>
        <Route path='/popular' element={ <Popular/> }></Route>
        <Route path='/anime/:id' element={ <Animeitem/> }></Route>
        <Route path='/getstarted' element={ <SecondHome/> }></Route>
        <Route path='/airing' element={ <Airing/> }></Route>
        <Route path='/upcoming' element={ <Upcoming/> }></Route>
        <Route path='/character/:id' element={ <CharacterCard/> }></Route>
      </Routes>
      </BrowserRouter>
      </div>

  )
}

export default App
