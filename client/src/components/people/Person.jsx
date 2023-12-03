import { createSignal, onCleanup } from "solid-js";
import { placeholder } from "../../assets";

const Person = ({ user }) => {
  const [onlineStatus, setOnlineStatus] = createSignal(
    navigator.onLine ? "online" : "offline"
  );

  // Event listener to update online status when it changes
  const handleOnlineStatusChange = () => {
    setOnlineStatus(navigator.onLine ? "online" : "offline");
  };

  // Add event listeners for online/offline events
  window.addEventListener("online", handleOnlineStatusChange);
  window.addEventListener("offline", handleOnlineStatusChange);

  // Cleanup event listeners on component unmount
  onCleanup(() => {
    window.removeEventListener("online", handleOnlineStatusChange);
    window.removeEventListener("offline", handleOnlineStatusChange);
  });

  return (
    <div className="flex gap-3 items-center cursor-pointer select-none p-3 max-[700px]:p-[8px] hover:bg-neutral-900 rounded-[9px]">
      <img
        src={placeholder}
        alt="User photo"
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="flex flex-col gap-[-1] text-justify">
        <h2 className="text-white font-kanit text-[16px]">{user.username}</h2>
        <p className="text-neutral-500 font-kanit text-[15px]">{user?.desc}</p>
      </div>
      <span
        className={`font-kanit absolute right-1 max-[800px]:right-4 ${
          onlineStatus() === "online" ? "text-green-500" : "text-red-600"
        }`}
      >
        {onlineStatus()}
      </span>
    </div>
  );
};

export default Person;
