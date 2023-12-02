import React from "react";
import { FaSolidMessage } from "solid-icons/fa";
import SideNavLinks from "../hrefIcon/SideNavLinks";
import { FiLogOut } from "solid-icons/fi";
import useAuth from "../../state/auth";
import { useLocation } from "@solidjs/router";

const SideNav = () => {
  const { actions } = useAuth();
  const path = useLocation();
  const notHome = path.pathname.includes("login");

  return (
    <div
      className={`${
        notHome ? "hidden" : "flex"
      } relative w-[300px] max-[1024px]:w-[150px] max-[700px]:hidden`}
    >
      <div
        className={`flex flex-col fixed left-0 h-full w-[250px] max-[1024px]:w-[100px] max-[700px]:hidden bg-black p-6`}
      >
        <div className="flex gap-2 items-center mt-6">
          <FaSolidMessage size={30} color="#fff" />
          <p className="text-white font-kanit text-[19px] max-[1024px]:hidden">
            Pingspace
          </p>
        </div>
        <SideNavLinks />
        <div
          title="Logout"
          onClick={() => actions.logout()}
          class="flex gap-2 absolute bottom-5 left-2 items-center p-3 rounded-[8px] text-white hover:bg-neutral-800 cursor-pointer"
        >
          <FiLogOut size={25} />
          <p className="font-poppins max-[1024px]:hidden">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
