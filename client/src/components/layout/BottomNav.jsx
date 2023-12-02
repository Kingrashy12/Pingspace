import { useLocation, useNavigate } from "@solidjs/router";
import React from "react";
import { BsPeopleFill } from "solid-icons/bs";
import { FaSolidLayerGroup, FaSolidMessage } from "solid-icons/fa";
import { CgProfile } from "solid-icons/cg";

const BottomNav = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const notHome = path.pathname === "/register";
  return (
    <div
      className={`hidden border-t border-t-neutral-800 select-none ${
        notHome ? "" : "max-[700px]:flex"
      } justify-between p-3 pl-5 pr-5 fixed bottom-0 w-full bg-black`}
    >
      <div
        className={`flex flex-col items-center ${
          path.pathname === "/people" ? "text-blue-600" : "text-white"
        }`}
      >
        <BsPeopleFill size={25} />
        <p className="font-kanit text-[13px]">People</p>
      </div>
      <div
        className={`flex flex-col items-center ${
          path.pathname === "/group" ? "text-blue-600" : "text-white"
        }`}
      >
        <FaSolidLayerGroup size={25} />
        <p className="font-kanit text-[13px]">Group</p>
      </div>
      <div
        className={`flex flex-col items-center ${
          path.pathname === "/chat" ? "text-blue-600" : "text-white"
        }`}
      >
        <FaSolidMessage size={25} />
        <p className="font-kanit text-[13px]">Chat</p>
      </div>
      <div
        className={`flex flex-col items-center ${
          path.pathname === "/profile" ? "text-blue-600" : "text-white"
        }`}
      >
        <CgProfile size={25} />
        <p className="font-kanit text-[13px]">Profile</p>
      </div>
    </div>
  );
};

export default BottomNav;
