import { createEffect, createSignal } from "solid-js";
import { ChatContianer, ChatConvert, ChatFeed, SideNav } from "~/components";
import { pageName } from "~/libs/functions/functions";

const Chat = () => {
  const [chats, setChat] = createSignal([]);

  createEffect(() => {
    document.title = `${pageName()} | PingSpace`;
  });
  return (
    <div className="chat-grid">
      <SideNav />
      <ChatFeed setChatState={setChat} chat={chats} />
      <ChatContianer chat={chats} setChatState={setChat} />
    </div>
  );
};

export default Chat;
