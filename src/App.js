import React from 'react';
import './App.css';
import './assets/style.css'

import { LangProvider } from './LangContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
// import Sketches from './pages/Sketches';
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
          <Route path='/' element={<Portfolio />} />
          <Route path='/art-portfolio' element={<Portfolio />} />
          <Route path='/art-portfolio/about' element={<About />} />
          <Route path='/art-portfolio/commissions' element={<Commissions />} />
          <Route path='/art-portfolio/chars' element={<CharArt />} />
        </Routes>
      </div>
      <Footer />
      </LangProvider>
    </div>
  );
}

export default App;
