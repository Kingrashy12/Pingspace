import React from "react";
import { AccountFeed, RightNav, SideNav } from "../../components";
import { createEffect } from "solid-js";
import { pageName } from "../../libs/functions/functions";

const Account = () => {
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

export default Account;
