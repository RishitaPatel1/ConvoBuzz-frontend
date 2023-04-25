import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import SideDrawer from "../ChatContents/SideDrawer";
import { ChatState } from "../../state/ChatProvider";

const VideoHome = () => {
  const [RoomCode, setRoomCode] = useState("");
  const [link, setLink] = useState();
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/video/room/${RoomCode}`);
  };
  const submitLink = (e) => {
    e.preventDefault();
    window.location.replace(link);
  };
  const { user } = ChatState();
  return (
    <div>
      {user && <SideDrawer />}
      <Sidebar />
      <div className="grid grid-cols-2">
        <div className="pl-[400px] pt-6">
          <div className="rounded-xl bg-[#93BFCF] py-4 h-[500px] w-[500px]">
            <div className="flex justify-center items-center">
              <img
                className="w-[100px] h-[100px]"
                src="./images/icons/convobuzz.svg"
              />
            </div>
            <div className=" flex flex-col items-center justify-center">
              <h1 className="text-[50px] md:text-[60px] text-[#303B69] font-bold pt-9">
                Create a meeting
              </h1>
            </div>
            <form
              onSubmit={submitCode}
              className="text-[#303B69] md:pt-12 flex flex-col items-center justify-center"
            >
              <div className=" flex flex-col justify-center items-center">
                <label className="text-[30px] md:text-[40px] font-bold">
                  Enter Room Code
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Room Code"
                  value={RoomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
                />
              </div>
              <button
                type="submit"
                className=" bg-[#303B69] text-white duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
              >
                Create Room
              </button>
            </form>
          </div>
        </div>

        <div className="pr-[300px] pt-6">
          <div className="rounded-xl bg-[#93BFCF] py-4 h-[500px] w-[500px]">
            <div className="flex justify-center items-center">
              <img
                className="w-[100px] h-[100px]"
                src="./images/icons/convobuzz.svg"
              />
            </div>
            <div className=" flex flex-col items-center justify-center">
              <h1 className="text-[50px] md:text-[60px] text-[#303B69] font-bold pt-9">
                Join a meeting
              </h1>
            </div>
            <form
              onSubmit={submitLink}
              className="text-[#303B69] md:pt-12 flex flex-col items-center justify-center"
            >
              <div className=" flex flex-col justify-center items-center">
                <label className="text-[30px] md:text-[40px] font-bold">
                  Enter Room Link
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Room Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
                />
              </div>
              <button
                type="submit"
                className=" bg-[#303B69] text-white duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4"
              >
                join Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHome;
