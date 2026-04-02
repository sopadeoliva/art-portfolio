import React from 'react';
import './App.css';
import './assets/style.css'

import { LangProvider } from './LangContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import About from './pages/About';
import Artworks from './pages/Artworks';
import CharArt from './pages/CharArt';
import Commissions from './pages/Commissions';

function App() {
  return (
    <div className="App">
      <LangProvider>
      <div className="header-bar">
        <Header />
        <Navbar />
      </div>
      <div className='main-page'>
        <Routes>
          <Route path='/' element={<Artworks />} />
          <Route path='/chars' element={<CharArt />} />
          <Route path='/commissions' element={<Commissions />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
      </LangProvider>
    </div>
  );
}

export default App;
