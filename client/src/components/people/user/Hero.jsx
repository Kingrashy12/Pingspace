import React from "react";
import { placeholder } from "../../../assets";
import useAuth from "../../../state/auth";
import { decodeToken } from "../../../libs/functions/functions";
import { BottomDivider } from "../../../libs";
import { BiRegularCalendar } from "solid-icons/bi";

const Hero = () => {
  const { state } = useAuth();
  const decode = decodeToken(state()?.token);
  const name = decode?.name;
  console.log("deco:", decode);

  return (
    <div className="flex flex-col relative gap-3">
      <div className="flex items-center gap-3">
        <img
          src={placeholder}
          alt="User profile"
          className="w-[70px] h-[70px] rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-white font-kanit text-[20px]">{name}</h1>
          <p className="font-kanit text-neutral-500 text-[16px]">
            &copy;{decode?.username}
          </p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="flex flex-col text-neutral-500">
          <BiRegularCalendar size={25} />
          {/* <p>{}</p> */}
        </div>
      </div>
      <BottomDivider className="mt-3 max-[700px]:mt-0" />
    </div>
  );
};

export default Hero;
