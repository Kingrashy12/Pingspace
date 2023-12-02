import React from "react";
import { userdata } from "../../constant/user";
import Person from "./Person";

const PeoplesFeed = () => {
  return (
    <div className="flex flex-col relative w-full h-full overflow-y-auto mt-8 max-[700px]:hide-scroll">
      <div className="flex flex-col gap-5">
        {userdata.map((user, index) => (
          <Person user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PeoplesFeed;
