import React, { useState } from 'react';
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const video = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if(playVideo){
      video.current.pause();
    }else{
      video.current.play();
    }
  }
  return(
  <div className="app__video">
    <video src={meal} type='video/ogg' loop controls={false} muted ref={video}></video>
    <div className="app__video_overlay flex__center">
      <div className="app__video_overlay_circle flex__center" onClick={handleVideo}>
          {playVideo 
            ? <BsFillPauseFill color='#fff' size={30}></BsFillPauseFill>
            : <BsPlayFill color='#fff' size={30}></BsPlayFill>
          }
      </div>
    </div>
  </div>
  )
};

export default Intro;
