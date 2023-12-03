import React from "react";
import { placeholder } from "../../../assets";
import { decodedUser, formatDate } from "../../../libs/functions/functions";
import { BackDrop, BottomDivider, Button } from "../../../libs";
import { BiRegularCalendar } from "solid-icons/bi";
import { useAuth } from "../../../state/auth";
import { BsPeopleFill } from "solid-icons/bs";
import { FiLogOut } from "solid-icons/fi";
import { createSignal } from "solid-js";
import UserProfile from "../../nodes/UserProfile";
import { currentUser } from "~/constant/user";
import { useToast } from "~/libs/components/ToastContainer";
// import UpdatedProfile from "~/components/nodes/UpdatedProfile";

const CurrentHero = ({ user }) => {
  const { state, actions } = useAuth();
  const { showToast } = useToast();
  // const token = localStorage.getItem("pingspace-token");
  // const user = decodedUser(token);
  const [viewProfile, setViewProfile] = createSignal(false);
  const [openUpdateProfile, setOpenUpdateProfile] = createSignal(false);
  const [viewPhoto, setViewPhoto] = createSignal(false);

  function add() {
    showToast("success", `You've followed ${user.username}`);
  }

  return (
    <div className="flex flex-col relative gap-3">
      <div className="flex items-center gap-3">
        <img
          src={user?.image || placeholder}
          onClick={() => setViewProfile(true)}
          alt="User profile"
          className="w-[70px] h-[70px] rounded-full cursor-pointer"
        />
        <div className="flex flex-col">
          <h1 className="text-white font-kanit text-[20px]">{user?.name}</h1>
          <p className="font-kanit text-neutral-500 text-[16px]">
            &copy;{user?.username}
          </p>
        </div>
      </div>
      <p class="text-white font-kanit text-[13px]">{user.desc}</p>
      <div className="flex mt-5 items-center gap-5">
        <div className="flex flex-col items-center text-neutral-500">
          <BiRegularCalendar size={25} />
          <p className="font-kanit text-[13px]">{formatDate(user?.created)}</p>
          {/* <p className="font-kanit text-[13px]">{formatDate(user?.created)}</p> */}
        </div>
        <div className="flex flex-col items-center text-neutral-500">
          <BsPeopleFill size={25} />
          <p className="font-kanit text-[13px]">{user.friends}</p>
        </div>
        <Button
          secondary
          text="Add friend"
          className="absolute right-0"
          onClick={add}
        />
      </div>
      <BottomDivider className="mt-3 max-[700px]:mt-0" />

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
              src={user?.image || placeholder}
              className="w-[300px] h-[300px] rounded-full fixed left-[40%] max-[700px]:left-[2rem] top-[25%] max-[700px]:top-[15%]"
            />
          }
        />
      )}
    </div>
  );
};

export default CurrentHero;
