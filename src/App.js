import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Menu from "./components/Menu";
import Video from "./components/Video";

const videos = {
  fast: "./public/videos/react_video-fast.mp4",
  slow: "./public/videos/react_video-slow.mp4",
  cute: "./public/videos/react_video-cute.mp4",
  eek: "./public/videos/react_video-eek.mp4",
};

function App() {
  return (
    <div>
      <h1>React Player</h1>
      <Menu />
      <Video />
    </div>
  );
}

export default App;
