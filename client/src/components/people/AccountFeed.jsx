import React from "react";
import Hero from "./user/Hero";
import Friends from "./user/Friends";

const AccountFeed = () => {
  return (
    <div className="flex flex-col w-full p-5">
      <Hero />
      <Friends />
    </div>
  );
};

export default AccountFeed;
