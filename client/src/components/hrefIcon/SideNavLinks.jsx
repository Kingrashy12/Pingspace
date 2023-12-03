import { BsPeopleFill } from "solid-icons/bs";
import { FaSolidLayerGroup, FaSolidMessage } from "solid-icons/fa";
import { CgProfile } from "solid-icons/cg";
import { useLocation, useNavigate } from "@solidjs/router";

const SideNavLinks = () => {
  const navigate = useNavigate();
  const path = useLocation();
  return (
    <div className="flex flex-col translate-y-20 gap-4">
      <a
        href="/"
        title="People"
        class={`flex gap-2 w-full items-center p-3 rounded-[8px] ${
          path.pathname === "/"
            ? "text-blue-600 bg-neutral-800"
            : "text-white bg-transparent"
        } hover:bg-neutral-800 cursor-pointer`}
      >
        <BsPeopleFill size={25} />
        <p className="font-poppins max-[1024px]:hidden">People</p>
      </a>
      <a
        href="/chat"
        title="Messages"
        class={`flex gap-2 w-full items-center p-3 rounded-[8px] ${
          path.pathname === "/chat"
            ? "text-blue-600 bg-neutral-800"
            : "text-white bg-transparent"
        } hover:bg-neutral-800 cursor-pointer`}
      >
        <FaSolidMessage size={25} />
        <p className="font-poppins max-[1024px]:hidden">Messages</p>
      </a>
      <a
        title="Group"
        href="/group"
        class={`flex gap-2 w-full items-center p-3 rounded-[8px] ${
          path.pathname === "/group"
            ? "text-blue-600 bg-neutral-800"
            : "text-white bg-transparent"
        } hover:bg-neutral-800 cursor-pointer`}
      >
        <FaSolidLayerGroup size={25} />
        <p className="font-poppins max-[1024px]:hidden">Group</p>
      </a>
      <a
        href="/profile"
        title="Profile"
        class={`flex gap-2 w-full items-center p-3 rounded-[8px] ${
          path.pathname === "/profile"
            ? "text-blue-600 bg-neutral-800"
            : "text-white bg-transparent"
        } hover:bg-neutral-800 cursor-pointer`}
      >
        <CgProfile size={25} />
        <p className="font-poppins max-[1024px]:hidden">Profile</p>
      </a>
    </div>
  );
};

export default SideNavLinks;
