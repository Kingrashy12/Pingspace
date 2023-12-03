import React from "react";
import { CurrentId, RightNav, SideNav } from "~/components";

const CurrentUser = () => {
  return (
    <div className="grid">
      <SideNav />
      <CurrentId />
      <RightNav />
    </div>
  );
};

export default CurrentUser;
