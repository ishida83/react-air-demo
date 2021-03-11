import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          A better way to enjoy every day.
        </a>
        <p>
          Be the first to know when we launch.
        </p>
        <button className="button">Request an invite</button>
      </header>

      <Footer />
    </div>
  );
}

export default App;
