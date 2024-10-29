import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import LastPublication from './components/LastPublication';
import { fetchData  } from './services/ApiService';
import logo from './logo.svg';

const App = () => {

  /* const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);*/

  return (
    <div className="App">
      <Header/>
      <About />
      <Skills />
      <Projects/>
      <ContactForm/>
      <LastPublication/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <p className='messageconection'>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
