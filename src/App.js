import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Chatscreen from "./components/layout/Chatscreen";
import Chatpage from "./components/pages/Chatpage";
import LoriRoutes from "./Routes/loriRoutes";
import Landingpage from "./components/pages/landingpage";
import SignupForm from "./components/layout/SignupForm";

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <LoriRoutes/>
    </>
  );
}

export default App;
