import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className='landingpage-hero'>
      <Navbar />
      <div className="container hero-section">
        <div className="row col-12">
          <h1 className='text-white'>Das A Team</h1>
          <span className='text-white motto'>Innovate, Connect, Inspire</span>
          <br />
          <h3 className='text-white mt-2'>Wir entwickeln "Das Verrückte Labyrinth"</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
