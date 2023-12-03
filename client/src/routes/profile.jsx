import { createEffect } from "solid-js";
import { AccountFeed, RightNav, SideNav } from "~/components";
import { pageName } from "~/libs/functions/functions";

const Profile = () => {
  createEffect(() => {
    document.title = `${pageName()} | Pingspace`;
  });
  return (
    <div className="grid">
      <SideNav />
      <AccountFeed />
      <RightNav />
    </div>
  );
};

export default Profile;
