import React from "react";

const ChatConvert = () => {
  return (
    <div
      class={`flex flex-col relative w-[900px] bg-neutral-900 h-[730px] max-[800px]:ml-0 max-[800px]:w-[600px] rounded-[9px] mt-2 max-[1024px]:ml-24 max-[1024px]:w-[680px] max-[1024px]:h-[1300px]`}
    >
      <p class="text-neutral-400 font-kanit items-center h-full text-center mt-72 max-[700px]:text-[19px] justify-center text-[20px]">
        Select a chat to start conversation
      </p>
    </div>
  );
};

export default ChatConvert;
