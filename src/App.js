import "./App.css";
import Video from "./components/Video";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      app
      <VideoContainer>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </VideoContainer>
    </div>
  );
}

export default App;

const VideoContainer = styled.div`
  position: relative;
  height: 800px;
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
