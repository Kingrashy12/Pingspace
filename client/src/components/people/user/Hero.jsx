import React from "react";
import { placeholder } from "../../../assets";
import { decodeToken, formatDate } from "../../../libs/functions/functions";
import { BottomDivider } from "../../../libs";
import { BiRegularCalendar } from "solid-icons/bi";
import { useAuth } from "../../../state/auth";

const Hero = () => {
  const { state } = useAuth();
  const date = state().created;

  return (
    <div className="flex flex-col relative gap-3">
      <div className="flex items-center gap-3">
        <img
          src={placeholder}
          alt="User profile"
          className="w-[70px] h-[70px] rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-white font-kanit text-[20px]">{state()?.name}</h1>
          <p className="font-kanit text-neutral-500 text-[16px]">
            &copy;{state()?.username}
          </p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="flex flex-col items-center text-neutral-500">
          <BiRegularCalendar size={25} />
          <p className="font-kanit text-[13px]">{formatDate(date)}</p>
        </div>
      </div>
      <BottomDivider className="mt-3 max-[700px]:mt-0" />
    </div>
  );
};

export default Hero;
