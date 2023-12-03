import { AiFillAudio } from "solid-icons/ai";
import { BsEmojiSmileFill } from "solid-icons/bs";
import { FaSolidFileImage } from "solid-icons/fa";

const MessageBox = () => {
  return (
    <div class="flex fixed items-center gap-5 w-[900px] max-[1024px]:w-[675px] max-[1024px]:bottom-1 max-[800px]:w-[610px] max-[700px]:w-full bg-black border-neutral-600 border-t bottom-3 p-3 rounded-b-[9px] h-auto">
      <BsEmojiSmileFill color="#fff" size={25} class="cursor-pointer" />
      <input
        type="text"
        placeholder="Type message..."
        class="bg-transparent border-none outline-none text-white font-kanit p-1 w-full"
      />
      <FaSolidFileImage color="#fff" size={25} class="cursor-pointer" />
      <AiFillAudio color="#fff" size={25} class="cursor-pointer" />
    </div>
  );
};

export default MessageBox;
