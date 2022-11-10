// ~/src/App.tsx

// REACT DEPENDENCIES
import React from 'react';

// BOOTSTRAP STYLESHEET
import 'bootstrap/dist/css/bootstrap.css';

// APP STYLESHEET
import './App.scss';

// NAVBAR
import Navbar from './components/navbar/Navbar';

// APP ROUTER
import AppRouter from './components/app-router/AppRouter';

function App() {

  return (
    <>
      <Navbar />
      <div className="landingpage-hero">
        <div className="container hero-section">
          <div className="row col-12">
            <h1 className='text-white'>Das A Team</h1>
            <span className='text-white motto'>Innovate, Connect, Inspire</span>
            <br />
            <h3 className='text-white mt-2'>Wir entwickeln "Das Verrückte Labyrinth"</h3>
          </div>
        </div>
      </div>
      <AppRouter />
    </>
  );
}

export default App;
