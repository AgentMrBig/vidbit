import "./App.css";
import Video from "./components/Video";
import styled from "styled-components";

function App() {
  return (
    <AppDiv>
      app
      <VideoContainer>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </VideoContainer>
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  place-items: center;

  html {
    scroll-snap-type: y mandatory;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  height: 800px;
  border-radius: 20px;
  overflow: scroll;
  width: 80%;
  max-width: 500px;
  scroll-snap-type: y mandatory;
  border: 2px green solid;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
