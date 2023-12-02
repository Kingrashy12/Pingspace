import { createEffect, createSignal } from "solid-js";
import { PeoplesFeed, RightNav, SideNav } from "../../components";
import { pageName } from "../../libs/functions/functions";
import { gridwrap } from "../../styles/global";

const People = () => {
  createEffect(() => {
    document.title = `${pageName()} | Pingspace`;
  });

  return (
    <div className="grid">
      <SideNav />
      <PeoplesFeed />
      <RightNav />
    </div>
  );
};

export default People;
