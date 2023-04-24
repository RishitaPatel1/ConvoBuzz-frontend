import React from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VideoRoom = () => {
  const navigate = useNavigate();
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 946219318;
    const serverSecret = "8e0b853d79deae0bcbfe949b73ca46a4";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      " "
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    zp.joinRoom({
      container: element,
      sharedLinks: [{
        name: 'Personal Link',
        url: 
          window.location.protocol + '//' +
          window.location.host + window.location.pathname +
          '?roomID=' +
          roomID,
      }],
      scenario: {
        // mode: ZegoUIKitPrebuilt.GroupCall,
         mode:ZegoUIKitPrebuilt.VideoConference,
      },
      onLeaveRoom:()=>{
        navigate("/video");
      }
    });
  };
 
  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}>
  </div>;
 
};

export default VideoRoom;
