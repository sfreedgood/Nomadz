import React from 'react'
import NomadzTwitter from './nomadzTwitter'
import NomadzInstagram from './nomadzInstagram'
import './about.css'

export default function About () {
  const hashtagFontSize = "1rem"

  return (
    <div className="about">
      <h1>OUR STORY STARTS HERE</h1>
      <div className="youtube-container">
        <iframe title="about nomadz"
                width="80%"
                height="100%" 
                src="https://www.youtube.com/embed/r7grzGjQQ-o" 
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
      </div>
      <div className="text-content">
        <h3 className="community">Understanding that together, we are part of something greater: a global community.</h3>
        <NomadzTwitter fontSize={hashtagFontSize}/>
        <h3 className="mission">Everything we do at NOMADZ is to fit what we believe is most important to our generation. We know how busy life can get, which is why we want to make the travel planning process easy, personal, and efficient.</h3>
        <div id="instagram-container">
          <h3 className="mission">Make sure to stay up to date by following us on Instagram: </h3><h3 id='instagram'><NomadzInstagram  fontSize={hashtagFontSize}/></h3>
        </div>
      </div>
    </div>
  )
}