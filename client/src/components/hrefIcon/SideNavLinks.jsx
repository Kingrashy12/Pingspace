import React from "react";
import { BsPeopleFill } from "solid-icons/bs";
import { FaSolidLayerGroup, FaSolidMessage } from "solid-icons/fa";
import { CgProfile } from "solid-icons/cg";
import { useLocation, useNavigate } from "@solidjs/router";

const SideNavLinks = () => {
  const navigate = useNavigate();
  const path = useLocation();
  return (
    <div className="flex flex-col translate-y-20 gap-4">
      <div
        onClick={() => navigate("/people")}
        title="People"
        class={`flex gap-2 w-full items-center p-3 rounded-[8px] ${
          path.pathname === "/people"
            ? "text-blue-600 bg-neutral-800"
            : "text-white bg-transparent"
        } hover:bg-neutral-800 cursor-pointer`}
      >
        <BsPeopleFill size={25} />
        <p className="font-poppins max-[1024px]:hidden">People</p>
      </div>
      <div
        onClick={() => navigate("/chat")}
        title="Messages"
        class={`flex gap-2 w-full items-center p-3 rounded-[8px] ${
          path.pathname === "/chat"
            ? "text-blue-600 bg-neutral-800"
            : "text-white bg-transparent"
        } hover:bg-neutral-800 cursor-pointer`}
      >
        <FaSolidMessage size={25} />
        <p className="font-poppins max-[1024px]:hidden">Messages</p>
      </div>
      <div
        title="Group"
        onClick={() => navigate("/group")}
        class={`flex gap-2 w-full items-center p-3 rounded-[8px] ${
          path.pathname === "/group"
            ? "text-blue-600 bg-neutral-800"
            : "text-white bg-transparent"
        } hover:bg-neutral-800 cursor-pointer`}
      >
        <FaSolidLayerGroup size={25} />
        <p className="font-poppins max-[1024px]:hidden">Group</p>
      </div>
      <div
        onClick={() => navigate("/profile")}
        title="Profile"
        class={`flex gap-2 w-full items-center p-3 rounded-[8px] ${
          path.pathname === "/profile"
            ? "text-blue-600 bg-neutral-800"
            : "text-white bg-transparent"
        } hover:bg-neutral-800 cursor-pointer`}
      >
        <CgProfile size={25} />
        <p className="font-poppins max-[1024px]:hidden">Profile</p>
      </div>
    </div>
  );
};

export default SideNavLinks;
