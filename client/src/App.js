import React from 'react';


import './style.css';

import Banner from './components/Banner'
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Foot from './components/Foot';

const App = () => {
  return (
    <div>
      <Banner />
      <Home />
      <Projects />
      <ContactMe />
      <Foot />
    </div>
  )
}

export default App