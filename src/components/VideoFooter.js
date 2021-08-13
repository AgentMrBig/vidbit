import React from "react";
import styled from "styled-components";

function VideoFooter() {
  return (
    <VideoFooterContainer>
      <VideoFooterText>
        <h3>@testGuy</h3>
        <p>This is a description</p>
        <VideoFooterTicker>
          <MusicNoteIcon></MusicNoteIcon>
        </VideoFooterTicker>
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
  margin-right: 40px;
  color: black;
  display: flex;
  border: 1px blue solid;
`;

const VideoFooterText = styled.div``;

const SoundImg = styled.img``;

const VideoFooterTicker = styled.div``;

const MusicNoteIcon = styled.div``;
