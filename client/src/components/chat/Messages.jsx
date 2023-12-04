import { placeholder } from "~/assets";
import { messagedata } from "~/constant/chat";

const Messages = ({ chat }) => {
  let lastMessageUser = null;

  return (
    <div class="flex flex-col gap-5 relative overflow-x-auto mt-16 text-white p-5">
      {messagedata
        .filter((m) => m.username === chat.username)
        .map((message, array, index) => {
          const isLastMessage = index === array.length - 1;

          const classNames = `flex flex-col p-2 w-auto max-w-[200px] ${
            message.username === lastMessageUser
              ? isLastMessage
                ? "sender bg-neutral-500"
                : "reciever self-end bg-blue-600"
              : "reciever self-end bg-blue-600"
          }`;

          lastMessageUser = message.username;

          return (
            <div className="flex relative gap-2 w-full">
              <img
                src={message.image || placeholder}
                alt="User"
                class="w-[40px] h-[40px] rounded-full self-end translate-y-1"
              />
              <div className="flex flex-col gap-5 w-full relative">
                {message.messages.map((msg) => (
                  <div
                    class={`flex flex-col p-2 w-auto max-w-[200px] ${
                      msg.reciever
                        ? "reciever self-end bg-blue-600"
                        : "sender bg-neutral-500"
                    }`}
                  >
                    <p class="text-white font-poppins text-[14px]">{msg.msg}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Messages;
