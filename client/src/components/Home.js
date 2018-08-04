import React from 'react'

import Img from './Img'


const Home = () => {
  return (
    <div className='home'>
      <div className='welcome'>
        <p>Hello, My name is Thomas Gutierrez I'm a full stack web developer who curently lives in Salt Lake City, Ut. I graduated from V School's full stack web developer program in July 2018. The program focused mainly on JavaScript, ReactJS, Express, MongoDB, and node, as well as HTML5 and CSS3.</p>

        <p>As a programmer I enjoy working in the front end and I work everyday to inprove my design skills. In my free time my hobbies include biking, video games, and hiking.</p>

        <p>Check out my <a href="https://www.github.com/tomg308">github</a> here.</p>
        
      </div>
      <div className='kristnaWells'>
        <Img />
      </div>
    </div>
  )
}

export default Home