import React from 'react'

import league from '../assets/league.PNG'
import blitz from '../assets/blitz.PNG'

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Personal and V School projects</h1>
      <div className='link-container'>
        <div className='projLink'>
          <p>V School leauge of Legends api project.</p>
          <a href="http://league-project.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={league} alt="league-project" className='projectIcons'/></a>
        </div>
        <div className='projLink'>
          <p>V School FFX Blitz Ball full stack project.(link coming soon)</p>
          <img src={blitz} alt="Full stack blitz app" className="projectIcons"/>
        </div>
      </div>
    </div>
  )
}

export default Projects