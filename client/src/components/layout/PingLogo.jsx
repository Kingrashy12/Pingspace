import React from "react";
import { FaSolidMessage } from "solid-icons/fa";
import { pinginfo } from "../../constant";

const PingLogo = () => {
  return (
    <div className="flex flex-col center font-kanit items-center translate-y-5 max-[700px]:gap-[-1rem] text-white h-auto w-full">
      <FaSolidMessage size={120} />
      <h1 className="text-3xl">Pingspace</h1>
      <p className="font-kanit text-neutral-400 text-[14px] mt-1 w-[400px] max-[700px]:w-[80%] max-[700px]:mb-16">
        {pinginfo.desc}
      </p>
    </div>
  );
};

export default PingLogo;
