import { placeholder } from "~/assets";
import { userdata } from "~/constant/user";
import { BottomDivider, StatusDot } from "~/libs";

const RightNav = () => {
  return (
    <div className="flex relative w-[280px] max-[1024px]:w-[150px] max-[800px]:hidden">
      <div className="flex flex-col fixed bg-black w-[250px] h-full right-0 z-[100]">
        <h1 class="text-white font-kanit text-center mt-2 text-[20px]">
          Online Friends
        </h1>
        <BottomDivider />
        <div className="flex flex-col gap-0 relative">
          {userdata
            .filter((user) => user.status === "online")
            .map((user, index) => (
              <div className="flex items-center w-full p-3 hover:bg-neutral-800 cursor-pointer gap-3">
                <div className="flex flex-col relative">
                  <img
                    src={user.image || placeholder}
                    alt="User"
                    class="w-[50px] h-[50px] rounded-full"
                  />
                  <StatusDot />
                </div>
                <div className="flex flex-col gap-[-1] text-justify max-[1024px]:hidden">
                  <h2 className="text-white font-kanit text-[17px]">
                    {user.username}
                  </h2>
                  {/* <p className="text-neutral-500 font-kanit text-[15px]">{user?.desc}</p> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RightNav;
