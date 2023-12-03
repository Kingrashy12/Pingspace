import { useLocation, useNavigate } from "@solidjs/router";
import { BsPeopleFill } from "solid-icons/bs";
import { FaSolidLayerGroup, FaSolidMessage } from "solid-icons/fa";
import { CgProfile } from "solid-icons/cg";

const BottomNav = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const notHome = path.pathname === "/register" || path.pathname === "/chat";
  const hideOnChat = path.pathname === "/chat";
  return (
    <div
      className={`hidden border-t border-t-neutral-800 select-none ${
        notHome ? "" : "max-[700px]:flex"
      } justify-between p-3 pl-5 pr-5 fixed bottom-0 w-full bg-black`}
    >
      <a
        href="/"
        className={`flex flex-col items-center ${
          path.pathname === "/" ? "text-blue-600" : "text-white"
        }`}
      >
        <BsPeopleFill size={25} />
        <p className="font-kanit text-[13px]">People</p>
      </a>
      <a
        href="/group"
        className={`flex flex-col items-center ${
          path.pathname === "/group" ? "text-blue-600" : "text-white"
        }`}
      >
        <FaSolidLayerGroup size={25} />
        <p className="font-kanit text-[13px]">Group</p>
      </a>
      <a
        href="/chat"
        className={`flex flex-col items-center ${
          path.pathname === "/chat" ? "text-blue-600" : "text-white"
        }`}
      >
        <FaSolidMessage size={25} />
        <p className="font-kanit text-[13px]">Chat</p>
      </a>
      <a
        href="/profile"
        className={`flex flex-col items-center ${
          path.pathname === "/profile" ? "text-blue-600" : "text-white"
        }`}
      >
        <CgProfile size={25} />
        <p className="font-kanit text-[13px]">Profile</p>
      </a>
    </div>
  );
};

export default BottomNav;
