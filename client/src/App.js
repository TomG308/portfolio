import React from 'react';


import './style.css';

import Banner from './components/Banner'
import Home from './components/Home';
import Projects from './components/Projects';
import ContactInfo from './components/ContactInfo';
import Foot from './components/Foot';

const App = () => {
  return (
    <div>
      <Banner />
      <Home />
      <ContactInfo />
      <Projects />
      <Foot />
    </div>
  )
}

export default App