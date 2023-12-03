import React from "react";
import { createEffect, createSignal } from "solid-js";
import { getUserById, getUserChats } from "../../helper/fetch";
import { useAuth } from "../../state/auth";
import { placeholder } from "../../assets";
import { CenterLoader } from "../../libs";
import ChatItem from "./ChatItem";

const ChatFeed = () => {
  const { state } = useAuth();
  const [chats, setChats] = createSignal([]);
  const [chatUser, setChatUser] = createSignal([]);
  const userId = state().id;

  createEffect(() => {
    const fetchChats = async () => {
      const data = await getUserChats(userId);
      setChats(data);
    };

    fetchChats();

    const intervalId = setInterval(fetchChats, 3000);

    onCleanup(() => clearInterval(intervalId));
  }, [userId]);

  createEffect(() => {
    const getChatUsers = async () => {
      const latestChats = chats();

      const users = await Promise.all(
        latestChats.map(async (chat) => {
          const otherUserId = chat.people.find((id) => id !== userId);
          if (otherUserId) {
            try {
              return await getUserById(otherUserId);
            } catch (error) {
              console.log(error);
              return null;
            }
          }
          return null;
        })
      );

      const validUsers = users.filter((user) => user !== null);
      setChatUser(validUsers);
    };

    getChatUsers();

    const intervalId = setInterval(getChatUsers, 3000);

    onCleanup(() => clearInterval(intervalId));
  }, [userId]);

  return (
    <div className="relative w-[300px] max-[700px]:w-full flex flex-col h-full">
      <div className="bg-neutral-900 flex-col gap-3 flex max-[700px]:w-full max-[700px]:relative fixed w-[250px] translate-x-[15.5rem] border-l border-r border-neutral-500 top-0/ left-0 h-full p-3 bottom-0">
        {chatUser().map((user, index) => (
          //   <>
          //     {isLoading() ? (
          //       <CenterLoader />
          //     ) : (
          <ChatItem user={user} />
          //     )}
          //   </>
        ))}
      </div>
    </div>
  );
};

export default ChatFeed;
