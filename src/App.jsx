
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Nav from './components/Nav';

import Home from './Pages/Home'; 
import Profile from './Pages/Profile'; 
import Contact from './Pages/Contact';

function App() {
  return (
    <div className='bg-white'>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/profile" element={<Profile />} /> {/* Profile page route */}
        <Route path="/contact" element={<Contact />} /> {/* Profile page route */}
      </Routes>
    </div>
  );
}

export default App;
