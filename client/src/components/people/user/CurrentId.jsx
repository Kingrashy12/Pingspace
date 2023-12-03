import CurrentHero from "./CurrentHero";
import { useParams } from "solid-start";
import { userdata } from "~/constant/user";
import Friends from "./Friends";

const CurrentId = () => {
  // const user =
  const { userId } = useParams();
  const user = userdata.find((u) => u.id === userId);
  return (
    <div className="flex flex-col w-full p-5">
      <CurrentHero user={user} />
      <Friends />
    </div>
  );
};

export default CurrentId;
