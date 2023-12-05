import {
  createEffect,
  createRenderEffect,
  createSignal,
  onCleanup,
} from "solid-js";
import { getUserById, getUserChats } from "../../helper/fetch";
import { useAuth } from "../../state/auth";
import { placeholder } from "../../assets";
import { CenterLoader, MobileHeader } from "../../libs";
import ChatItem from "./ChatItem";
import { chatdata } from "~/constant/chat";
import { useNavigate } from "solid-start";
import { useChat } from "~/context/Chats";

const ChatFeed = ({ setChatState, chat }) => {
  const { state } = useAuth();
  // const [chats, setChats] = createSignal(chatdata);
  const [stateChat, setStateChat] = createSignal([]);
  const [chatUser, setChatUser] = createSignal([]);
  const navigate = useNavigate();
  const userId = state().id;

  const { chats } = useChat();
  const show = chats().chat?.length === 0;

  // createEffect(() => {
  //   const fetchChats = async () => {
  //     const data = await getUserChats(userId);
  //     setChats(data);
  //   };

  //   fetchChats();

  //   const intervalId = setInterval(fetchChats, 3000);

  //   onCleanup(() => clearInterval(intervalId));
  // }, [userId]);

  // createEffect(() => {
  //   const getChatUsers = async () => {
  //     const latestChats = chats();

  //     const users = await Promise.all(
  //       latestChats.map(async (chat) => {
  //         const otherUserId = chat.people.find((id) => id !== userId);
  //         if (otherUserId) {
  //           try {
  //             return await getUserById(otherUserId);
  //           } catch (error) {
  //             console.log(error);
  //             return null;
  //           }
  //         }
  //         return null;
  //       })
  //     );

  //     const validUsers = users.filter((user) => user !== null);
  //     setChatUser(validUsers);
  //   };

  //   getChatUsers();

  //   const intervalId = setInterval(getChatUsers, 3000);

  //   onCleanup(() => clearInterval(intervalId));
  // }, [userId]);

  return (
    <div
      className={`relative w-[300px] max-[800px]:w-full flex  ${
        show ? "max-[800px]:flex" : "max-[800px]:hidden"
      } flex-col h-full`}
    >
      <MobileHeader hide onClick={() => navigate(-1)} />

      <div
        className={`bg-neutral-900 max-[700px]:translate-y-10 flex-col gap-3 flex max-[800px]:w-full max-[1024px]:translate-x-[100px] fixed max-[700px]:translate-x-0 w-[250px] translate-x-[15.5rem] border-l border-r border-neutral-500 left-0 h-full p-3 bottom-0`}
      >
        {chatdata.map((user, index) => (
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
