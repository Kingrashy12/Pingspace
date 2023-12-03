import React from "react";
import { BsThreeDotsVertical } from "solid-icons/bs";
import { FaSolidArrowLeft } from "solid-icons/fa";
import { placeholder } from "~/assets";

const ChatHeader = ({ chat, setChatState }) => {
  const name = "Rapheal Chizitere";
  return (
    <div class="flex items-center gap-3 max-[1024px]:w-[675px] max-[800px]:w-[610px] max-[700px]:top-0 max-[700px]:w-full fixed bg-black border-b border-neutral-600 p-3 w-[900px] rounded-t-[9px] h-auto">
      <FaSolidArrowLeft
        size={20}
        color="#fff"
        class="cursor-pointer"
        onclick={() => setChatState([])}
      />
      <img
        src={chat?.image || placeholder}
        alt="Image"
        class="w-[45px] h-[45px] rounded-full"
      />
      <div className="flex flex-col">
        <p class="text-white font-kanit">{chat?.name}</p>
        <p class="font-kanit text-[13px] text-neutral-500">Offline</p>
      </div>
      <BsThreeDotsVertical
        color="#fff"
        size={25}
        class="cursor-pointer absolute right-3"
      />
    </div>
  );
};

export default ChatHeader;
