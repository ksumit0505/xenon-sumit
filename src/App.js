import React from 'react'
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Signin from './components/Signin';
function App() {
  return (
   <>
    <NavBar/>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
   </>
    
  );
}

export default App;
