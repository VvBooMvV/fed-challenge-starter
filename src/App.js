import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function Card({imageName, title, icon, time, views, numberRelatedVideos, hasViews, hasTime}){
  const [hover, setHover] = useState("");

  return (
    <>
      
        <a className="card"
          onMouseEnter={() => setHover("View Details")}
          onMouseLeave={() => setHover("")}
          href="#"
        >

          <div className="bannerContainer">
            <img src = {imageName} className="videoBanner"/>
          </div>

          <div className="container">
            <div className="titleContainer">
              <div className="title">{title}</div>
            </div>

            <img src = {icon} className="userIcon"/>
          </div>
          <div className="lowerContainer">
            <div className="time">
              {hasTime ? <i class='fas fa-stopwatch'/> : ""}
              &nbsp;{time}</div>
            <div className="views">
              {hasViews ? <i class='far fa-eye'/> : ""}
              &nbsp;{views}
            </div>
          </div>
          <br/>
          <div className="viewDetails">
            {hover}
          </div>
        </a>
    </>
  );
}

var videos = [
  {
    title: "Lake Inniscarra, Ireland-Pyramid",
    imagePath: "/images/lake-inniscarra-thumb.jpg",
    iconPath: "/images/lake-inniscarra-trainer.jpg",
    time: "30:53",
    hasTime: true,
    views: "6,248 M",
    hasViews: true,
    numberRelatedVideos: 1
  },{
    title: "Performace Series",
    imagePath: "/images/performance-series-thumb.jpg",
    iconPath: "/images/performance-series-trainer.jpg",
    time: "",
    hasTime: false,
    views: "",
    hasViews: false,
    numberRelatedVideos: 9
  },{
    title: "Slow Pulls and Fast Intervals",
    imagePath: "/images/slow-pulls-thumb.jpg",
    iconPath: "/images/slow-pulls-trainer.jpg",
    time: "44:13",
    hasTime: true,
    views: "9,948 M",
    hasViews: true,
    numberRelatedVideos: 1
  },{
    title: "20 Minutes to Toned",
    imagePath: "/images/20-minutes-to-toned-thumb.jpg",
    iconPath: "/images/20-minutes-to-toned-trainer.jpg",
    time: "",
    hasTime: false,
    views: "",
    hasViews: false,
    numberRelatedVideos: 12
  },{
    title: "Charles Race, Boston, Massachusetts",
    imagePath: "/images/charles-race-thumb.jpg",
    iconPath: "/images/charles-race-trainer.jpg",
    time: "36:22",
    hasTime: true,
    views: "8,648 M",
    hasViews: true,
    numberRelatedVideos: 1
  },{
    title: "Full-Body HIIT Series",
    imagePath: "/images/full-body-hiit-thumb.jpg",
    iconPath: "/images/full-body-hiit-trainer.jpg",
    time: "",
    hasTime: false,
    views: "",
    hasViews: false,
    numberRelatedVideos: 12
  },{
    title: "Kafue River, Zambia-Power Stroke Pyramid",
    imagePath: "/images/kafue-river-thumb.jpg",
    iconPath: "/images/kafue-river-trainer.jpg",
    time: "22:22",
    hasTime: true,
    views: "4,660 M",
    hasViews: true,
    numberRelatedVideos: 1
  },{
    title: "Shred & Burn Series",
    imagePath: "/images/shred-and-burn-thumb.jpg",
    iconPath: "/images/shred-and-burn-trainer.jpg",
    time: "",
    hasTime: false,
    views: "",
    hasViews: false,
    numberRelatedVideos: 16
  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {videos.map(video =>
          <Card
            imageName={video.imagePath}
            title={video.title}
            icon={video.iconPath}
            time={video.time}
            views={video.views}
            numberRelatedVideos={video.numberRelatedVideos}
            hasViews={video.hasViews}
            hasTime={video.hasTime}
          />
        )}
      </header>
    </div>
  );
}

export default App;
