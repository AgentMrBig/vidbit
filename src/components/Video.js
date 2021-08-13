import React, { useRef, useState } from "react";
import styled from "styled-components";
import VideoFooter from "./VideoFooter";

function Video() {
  const [play, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlaying(false);
    }
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <>
      <VideoPlayer
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://www.tiktok.com/foryou?is_copy_url=0&is_from_webapp=v1&item_id=6979599393120881922&sender_device=pc&sender_web_id=6963451856517842437#/@kate_johansson/video/6979599393120881922"
      />
      <VideoFooter />
    </>
  );
}

export default Video;

const VideoPlayer = styled.video`
  position: relative;
  background-color: white;
  height: 100%;
  width: 100%;
  scroll-snap-align: start;

  object-fit: fill;
  width: 100%;
  height: 100%;
`;
