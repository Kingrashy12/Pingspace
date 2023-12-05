import { useChat } from "~/context/Chats";
import ChatHeader from "./ChatHeader";
import MessageBox from "./MessageBox";
import Messages from "./Messages";
import {
  createEffect,
  createRenderEffect,
  createSignal,
  useContext,
} from "solid-js";

const ChatContianer = () => {
  const [stateChat, setStateChat] = createSignal([]);

  const { chats } = useChat();
  const show = chats().chat?.length === 0;

  createEffect(() => {
    const data = localStorage.getItem("ping-chat");
    if (data) {
      const parsedData = JSON.parse(data);
      setStateChat(parsedData);
    }
  });

  return (
    <div
      class={`flex flex-col relative ${
        show ? "max-[800px]:hidden" : "max-[800px]:flex"
      } w-[900px] bg-neutral-900 h-[730px] max-[800px]:ml-0 max-[800px]:w-[600px] rounded-[9px] mt-2 max-[1024px]:ml-24 max-[1024px]:w-[680px] max-[1024px]:h-[1300px]`}
    >
      {stateChat.length !== 0 ? (
        <div className="flex flex-col w-full h-full relative overflow-x-auto">
          <ChatHeader chat={stateChat()} />
          <Messages chat={stateChat()} />
          <MessageBox />
        </div>
      ) : (
        <p class="text-neutral-400 font-kanit items-center h-full text-center mt-72 max-[700px]:text-[19px] justify-center text-[20px]">
          Select a chat to start conversation
        </p>
      )}
    </div>
  );
};

export default ChatContianer;
