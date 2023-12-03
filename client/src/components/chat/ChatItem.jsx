import { placeholder } from "../../assets";
import { createSignal } from "solid-js";
import { MessageIcon } from "../../libs";

const ChatItem = ({ user, setChat }) => {
  return (
    <div
      onclick={() => setChat(user)}
      className="flex items-center gap-3 p-2 rounded-[8px] hover:bg-neutral-700 cursor-pointer"
    >
      <img
        src={user?.image || placeholder}
        alt="Profile"
        className="w-[55px] h-[55px] rounded-full"
      />
      <div className="flex flex-col">
        <p className="text-white font-kanit text-[20px]">{user?.username}</p>
      </div>
      <MessageIcon value={user.totalMsg} />
    </div>
  );
};

export default ChatItem;
