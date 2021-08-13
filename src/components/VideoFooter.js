import React from "react";
import styled from "styled-components";

function VideoFooter() {
  return (
    <VideoFooterContainer>
      <VideoFooterText>
        <h3>@testGuy</h3>
        <p>This is a description</p>
      </VideoFooterText>
      <SoundImg src="" alt="" />
    </VideoFooterContainer>
  );
}

export default VideoFooter;

const VideoFooterContainer = styled.div`
  position: relative;
  bottom: 70px;
  left: 20px;
  color: black;
  display: flex;
`;

const VideoFooterText = styled.div``;

const SoundImg = styled.img`
  h
`;
