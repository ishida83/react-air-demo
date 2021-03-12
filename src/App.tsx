import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import Footer from './Footer';
import Navbar from './Navbar';
import Register from './Form';

function App() {
  const [isOpen, toggleOpen] = useState(false);
  const close = useCallback(() => {
    toggleOpen(false);
  }, [])
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
        <button className="button" onClick={()=>toggleOpen(!isOpen)}>Request an invite</button>
        {isOpen && <Register close={close}/>}
      </header>

      <Footer />
    </div>
  );
}

export default App;
