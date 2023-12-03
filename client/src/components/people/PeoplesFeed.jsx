import React from "react";
import { userdata } from "../../constant/user";
import Person from "./Person";
import useUsers from "../../state/users";
import { CenterLoader } from "../../libs";
import useAuth from "../../state/auth";

const PeoplesFeed = () => {
  const { state, isLoading } = useUsers();
  const { state: person } = useAuth();

  // Filter the users based on the condition
  const filteredUsers = state().users.filter((user) => user._id !== person.id);

  return (
    <div className="flex flex-col relative w-full h-full max-[700px]:pb-[5rem] overflow-y-auto mt-8 max-[700px]:hide-scroll">
      <div className="flex flex-col gap-3 w-full relative">
        {state().users.map((user, index) => (
          <>
            {isLoading() ? (
              <CenterLoader />
            ) : (
              <Person user={user} key={index} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default PeoplesFeed;
