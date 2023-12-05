// chat-context.js
import { createEffect, createSignal } from "solid-js";

const initialState = {
  chat: [],
};

const useChat = () => {
  const [chats, setChats] = createSignal(initialState);

  // createEffect(() => {
  //   if (chats()) {
  //     setChats((prev) => ({
  //       chat: prev,
  //     }));
  //   }
  // });

  function viewChat(data) {
    createEffect(() => {
      localStorage.setItem("ping-chat", JSON.stringify(data));
    });
    setChats((prev) => ({
      ...prev,
      chat: data,
    }));
    console.log("chats:", chats().chat);
  }

  function closeChat() {
    setChats((prev) => ({
      ...prev,
      chat: [],
    }));
  }

  return {
    chats,
    viewChat,
    closeChat,
  };
};

export { useChat };
