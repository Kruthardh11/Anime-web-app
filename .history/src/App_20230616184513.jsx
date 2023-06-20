import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Popular from './components/Popular';



function App() {
  const [count, setCount] = useState(0)

  return (
      <div >
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login />  }/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/popular' element={ <Popular/> }></Route>
        
      </Routes>
      </BrowserRouter>
      </div>

  )
}

export default App
