import React from "react";
import Person from "./Person";
import useUsers from "../../state/users";
import { CenterLoader } from "../../libs";
import { useAuth } from "../../state/auth";
import { createEffect, createSignal } from "solid-js";
import { getUsers } from "../../helper/fetch";

const PeoplesFeed = () => {
  const { state } = useAuth();
  const [users, setUsers] = createSignal([]);
  const [isLoading, setIsLoading] = createSignal(false);

  createEffect(() => {
    const getusers = async () => {
      setIsLoading(true);
      const data = await getUsers();
      setIsLoading(false);
      setUsers(data);
    };
    getusers();
  }, [users]);

  return (
    <div className="flex flex-col relative w-full h-full max-[700px]:pb-[5rem] overflow-y-auto mt-8 max-[700px]:hide-scroll">
      <div className="flex flex-col gap-3 w-full relative">
        {users()
          ?.filter((user) => user._id !== state().id)
          .map((user) => (
            <div key={user._id}>
              {isLoading() ? <CenterLoader /> : <Person user={user} />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PeoplesFeed;
