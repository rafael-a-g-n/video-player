import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Menu from "./components/Menu";
import Video from "./components/Video";
import Footer from "./components/Footer";

const videos = {
  fast: "/videos/react_video-fast.mp4",
  slow: "/videos/react_video-slow.mp4",
  cute: "/videos/react_video-cute.mp4",
  eek: "/videos/react_video-eek.mp4",
};

function App() {
  const [video, setVideo] = useState(videos.fast);

  function handleVideoChange(newVideo) {
    setVideo(videos[newVideo]);
  }

  return (
    <div className="App">
      <h1>React Player</h1>
      <Menu onSelectVideo={handleVideoChange} />
      <Video src={video} />
      <Footer />
    </div>
  );
}

export default App;
