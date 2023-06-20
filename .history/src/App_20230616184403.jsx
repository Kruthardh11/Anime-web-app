import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';



function App() {
  const [count, setCount] = useState(0)

  return (
      <div >
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login />  }/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/generatemail' element={ <ColdMail/> }></Route>
        <Route path='/generateResume' element={ <ResumeMaker/> }></Route>
        <Route path='/options' element={ <Options/> } /> 
      </Routes>
      </BrowserRouter>
      </div>

  )
}

export default App
