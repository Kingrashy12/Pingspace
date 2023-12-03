import { createEffect } from "solid-js";
import { PeoplesFeed, RightNav, SideNav } from "~/components";
import { useAuth } from "~/state/auth";

export default function Home() {
  createEffect(() => {
    document.title = "People | PingSpcae";
  });

  const { actions, state } = useAuth();

  // createEffect(() => {
  //   actions.loadUser();
  //   if (!state().id) {
  //     window.location = "/login";
  //   }
  // });

  return (
    <div class="grid">
      <SideNav />
      <PeoplesFeed />
      <RightNav />
    </div>
  );
}
