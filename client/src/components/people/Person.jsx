import React from "react";
import { placeholder } from "../../assets";

const Person = ({ user }) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer p-3 max-[700px]:p-[8px] hover:bg-neutral-900 rounded-[9px]">
      <img
        src={placeholder}
        alt="User photo"
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="flex flex-col gap-[-1] text-justify">
        <h2 className="text-white font-kanit text-[18px]">{user.username}</h2>
        <p className="text-neutral-500 font-kanit text-[15px]">{user.desc}</p>
      </div>
      <span className="text-green-600 font-kanit absolute right-1 max-[800px]:right-4">
        {user.status}
      </span>
    </div>
  );
};

export default Person;
