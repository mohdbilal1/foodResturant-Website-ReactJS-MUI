import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Errorpage from './Components/Errorpage';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;