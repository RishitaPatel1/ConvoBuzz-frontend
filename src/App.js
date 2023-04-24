import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChatPage1 from "./components/pages/ChatPage1";
import Homepage from "./components/pages/Homepage";
import VideoHome from './components/VideoContents/VideoHome';
import VideoRoom from './components/VideoContents/VideoRoom';
// import AudioHome from "./components/AudioContents/AudioHome";
// import AudioCalling from "./components/AudioContents/AudioCalling";
// import VideoCalling from "./components/AudioContents/VideoCalling";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<ChatPage1 />} exact/>
         <Route path="/video" element={<VideoHome />} exact/>
        <Route path="/video/room/:roomID" element={<VideoRoom />} exact/> 
        {/* <Route path="/audio" element={<AudioHome />} />
        <Route path="/audio/room" element={<AudioCalling />} />
        <Route path="/video" element={<VideoCalling />} /> */}
      </Routes>
    </div>
  );
}

export default App;
