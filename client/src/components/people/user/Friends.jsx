import PeoplesFeed from "../PeoplesFeed";

const Friends = () => {
  return (
    <div class="flex flex-col p-2">
      <h1 class="text-white font-kanit text-[22px]">Friends</h1>
      <div className="flex flex-col max-[700px]:pb-[4rem]">
        <PeoplesFeed short />
      </div>
    </div>
  );
};

export default Friends;
