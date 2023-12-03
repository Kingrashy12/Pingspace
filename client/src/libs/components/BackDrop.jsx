import React from "react";

const BackDrop = ({ node, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed w-full h-full right-0 left-0 z-[300] items-center justify-center top-0 flex-col bg-[rgb(0,0,0,0.4)]"
    >
      {node}
    </div>
  );
};

export default BackDrop;
