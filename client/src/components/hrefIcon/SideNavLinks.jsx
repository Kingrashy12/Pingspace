import React from "react";
import { BsPeopleFill } from "solid-icons/bs";
import { FaSolidLayerGroup, FaSolidMessage } from "solid-icons/fa";
import { CgProfile } from "solid-icons/cg";

const SideNavLinks = () => {
  return (
    <div className="flex flex-col translate-y-20 gap-4">
      <div
        title="People"
        class="flex gap-2 w-full items-center p-3 rounded-[8px] text-white hover:bg-neutral-800 cursor-pointer"
      >
        <BsPeopleFill size={25} />
        <p className="font-poppins max-[1024px]:hidden">People</p>
      </div>
      <div
        title="Messages"
        class="flex gap-2 w-full items-center p-3 rounded-[8px] text-white hover:bg-neutral-800 cursor-pointer"
      >
        <FaSolidMessage size={25} />
        <p className="font-poppins max-[1024px]:hidden">Messages</p>
      </div>
      <div
        title="Group"
        class="flex gap-2 w-full items-center p-3 rounded-[8px] text-white hover:bg-neutral-800 cursor-pointer"
      >
        <FaSolidLayerGroup size={25} />
        <p className="font-poppins max-[1024px]:hidden">Group</p>
      </div>
      <div
        title="Profile"
        class="flex gap-2 w-full items-center p-3 rounded-[8px] text-white hover:bg-neutral-800 cursor-pointer"
      >
        <CgProfile size={25} />
        <p className="font-poppins max-[1024px]:hidden">Profile</p>
      </div>
    </div>
  );
};

export default SideNavLinks;
