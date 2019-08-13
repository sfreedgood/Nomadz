import React from 'react'
import { JSONLD } from "react-structured-data"
import { Generic } from "react-structured-data/dist/schemas"
import NomadzInstaHash from './nomadzInstagramHashtag.js'
import NomadzInstaAt from './nomadzInstagramAt.js'
import './about.css'

export default function About () {
  const hashtagFontSize = "1rem"

  return (
    <div className="about">
      <JSONLD>
        <Generic type="about" jsonldtype="AboutPage" >
          <Generic type="mainEntity" jsonldtype="VideoObject" 
                  schema={{
                    name: "Introduction to Nomadz",
                    description: "Promotional Video explaining Nomadz Mission",
                    thumbnailUrl: "http://nomadz.us/assets/youtubeThumbnail.jpg",
                    uploadDate: "2019-04-18"
                  }}
          />
        </Generic>
      </JSONLD>
      <h1 id="title">OUR STORY STARTS HERE</h1>
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
        <h4 className="community">Understanding that together, we are part of something greater: a global community.</h4>
        <NomadzInstaHash fontSize={hashtagFontSize}/>
        <h4 className="mission">Everything we do at NOMADZ is to fit what we believe is most important to our generation. We know how busy life can get, which is why we want to make the travel planning process easy, personal, and efficient.</h4>
          <h4 className="mission">Make sure to stay up to date by following us on Instagram: </h4>
          <h4 id='instagram'>
            <NomadzInstaAt fontSize={hashtagFontSize}/>
          </h4>
      </div>
    </div>
  )
}