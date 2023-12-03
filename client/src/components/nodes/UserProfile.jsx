import React from "react";
import { useParams } from "solid-start";

const UserProfile = ({ closeViewProfile, setOpenUpdateProfile, viewPhoto }) => {
  const profilePage = useParams();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="flex flex-col justify-center absolute left-[40%] top-[40%]  max-[700px]:top-[25%] max-[700px]:left-[3rem] items-center bg-neutral-900 shadow shadow-neutral-300 h-auto w-[270px] rounded-[9px]"
    >
      <p
        onClick={() => {
          viewPhoto(true);
          closeViewProfile(false);
        }}
        className="text-white font-kanit p-3 cursor-pointer hover:bg-slate-800 w-full rounded-t-[9px]"
      >
        View Profile
      </p>
      <div
        className={`h-[1px] ${
          profilePage ? "hidden" : "block"
        } bg-neutral-400 w-full`}
      />
      <p
        onClick={(e) => {
          e.stopPropagation();
          setOpenUpdateProfile(true);
          //   closeViewProfile(false);
        }}
        className={`text-white ${
          profilePage ? "hidden" : "block"
        } font-kanit p-3 cursor-pointer hover:bg-slate-800 w-full rounded-b-[9px]`}
      >
        Update Profile
      </p>
    </div>
  );
};

export default UserProfile;
