import Person from "./Person";
import useUsers from "../../state/users";
import { CenterLoader } from "../../libs";
import { useAuth } from "../../state/auth";
import { createEffect, createSignal } from "solid-js";
import { getUsers } from "../../helper/fetch";
import { userdata } from "~/constant/user";

const PeoplesFeed = ({ short }) => {
  const { state } = useAuth();
  // const [users, setUsers] = createSignal([]);
  const [isLoading, setIsLoading] = createSignal(false);

  createEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  // createEffect(() => {
  //   const getusers = async () => {
  //     setIsLoading(true);
  //     const data = await getUsers();
  //     setIsLoading(false);
  //     setUsers(data);
  //   };
  //   getusers();
  // }, [users]);

  return (
    <div className="flex flex-col relative w-full h-full max-[700px]:pb-[5rem] overflow-y-auto mt-8 max-[700px]:hide-scroll">
      <div className="flex flex-col gap-3 w-full relative">
        {isLoading() ? (
          <CenterLoader />
        ) : (
          userdata
            .map((user) => (
              <div key={user._id}>
                <Person user={user} />
              </div>
            ))
            .slice(short ? 0 : undefined, short ? 6 : undefined)
        )}
        {/* {users()
          ?.filter((user) => user._id !== state().id)
          .map((user) => (
            <div key={user._id}>
              {isLoading() ? <CenterLoader /> : <Person user={user} />}
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default PeoplesFeed;
