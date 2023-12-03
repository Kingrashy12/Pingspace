import React from "react";
import { placeholder } from "../../../assets";
import { formatDate } from "../../../libs/functions/functions";
import { BackDrop, BottomDivider } from "../../../libs";
import { BiRegularCalendar } from "solid-icons/bi";
import { useAuth } from "../../../state/auth";
import { BsPeopleFill } from "solid-icons/bs";
import { FiLogOut } from "solid-icons/fi";
import { createSignal } from "solid-js";
import UserProfile from "../../nodes/UserProfile";
// import UpdatedProfile from "../../nodes/UpdatedProfile";

const Hero = () => {
  const { state, actions } = useAuth();
  const date = state().created;
  const [viewProfile, setViewProfile] = createSignal(false);
  const [openUpdateProfile, setOpenUpdateProfile] = createSignal(false);
  const [viewPhoto, setViewPhoto] = createSignal(false);

  return (
    <div className="flex flex-col relative gap-3">
      <div className="flex items-center gap-3">
        <img
          src={placeholder}
          onClick={() => setViewProfile(true)}
          alt="User profile"
          className="w-[70px] h-[70px] rounded-full cursor-pointer"
        />
        <div className="flex flex-col">
          <h1 className="text-white font-kanit text-[20px]">{state()?.name}</h1>
          <p className="font-kanit text-neutral-500 text-[16px]">
            &copy;{state()?.username}
          </p>
        </div>
      </div>
      <div className="flex mt-5 items-center gap-5">
        <div className="flex flex-col items-center text-neutral-500">
          <BiRegularCalendar size={25} />
          <p className="font-kanit text-[13px]">{formatDate(date)}</p>
        </div>
        <div className="flex flex-col items-center text-neutral-500">
          <BsPeopleFill size={25} />
          <p className="font-kanit text-[13px]">0</p>
        </div>
      </div>
      <BottomDivider className="mt-3 max-[700px]:mt-0" />
      <div className="fixed bottom-16 hidden max-[700px]:flex left-0 bg-slate-800 w-full h-auto p-3">
        <div
          title="Logout"
          onClick={() => actions.logOut()}
          class="flex gap-2 left-2 items-center p-3 rounded-[8px] text-white hover:bg-neutral-800 cursor-pointer"
        >
          <FiLogOut size={25} />
          <p className="font-poppins max-[1024px]:hidden max-[700px]:block">
            Logout
          </p>
        </div>
      </div>
      {viewProfile() && (
        <BackDrop
          onClick={() => setViewProfile(false)}
          node={
            <UserProfile
              setOpenUpdateProfile={setOpenUpdateProfile}
              closeViewProfile={setViewProfile}
              viewPhoto={setViewPhoto}
            />
          }
        />
      )}
      {openUpdateProfile() && (
        <BackDrop
          onClick={() => setOpenUpdateProfile(false)}
          node={<div>Hello</div>}
          // node={<UpdatedProfile />}
        />
      )}
      {viewPhoto() && (
        <BackDrop
          onClick={() => setViewPhoto(false)}
          node={
            <img
              src={placeholder}
              className="w-[300px] h-[300px] rounded-full fixed left-[40%] max-[700px]:left-[2rem] top-[25%] max-[700px]:top-[15%]"
            />
          }
        />
      )}
    </div>
  );
};

export default Hero;
