import React from "react";
import styled from "styled-components";

function Video() {
  return (
    <VideoPlayer src="https://www.tiktok.com/@funnygoodsshare/video/6975678105935416581?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6963451856517842437" />
  );
}

export default Video;

const VideoPlayer = styled.video`
  position: relative;
  background-color: white;
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
`;
