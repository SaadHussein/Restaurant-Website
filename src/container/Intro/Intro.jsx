import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />

      <div className="flex__center app__video-overlay">
        <div
          className="flex__center app__video-overlay_circle"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill fontSize={30} color="#fff" />
          ) : (
            <BsFillPlayFill fontSize={30} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
