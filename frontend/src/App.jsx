import logo from './logo.svg';
import './styles/styles.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
