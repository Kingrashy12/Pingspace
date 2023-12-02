import React from "react";

const RightNav = () => {
  return (
    <div className="flex relative w-[280px] max-[1024px]:w-[150px] max-[800px]:hidden">
      <div className="flex flex-col fixed bg-black w-[250px] h-full right-0 z-[100]">
        RightNav
      </div>
    </div>
  );
};

export default RightNav;
