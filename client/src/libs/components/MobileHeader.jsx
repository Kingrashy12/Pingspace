import React from "react";
import { FaSolidArrowLeft } from "solid-icons/fa";

const MobileHeader = ({ onClick, hide }) => {
  return (
    <div
      className={`w-full ${
        hide ? "hidden" : "max-[700px]:flex"
      } fixed p-3 pl-5 pr-5 bg-black hidden z-[200] top-0`}
    >
      <FaSolidArrowLeft size={25} color="#fff" onClick={onClick} />
    </div>
  );
};

export default MobileHeader;
