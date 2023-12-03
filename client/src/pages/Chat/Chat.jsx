import React from "react";
import { ChatContianer, ChatFeed, RightNav, SideNav } from "../../components";

const Chat = () => {
  return (
    <div className="chat-grid">
      <SideNav />
      <ChatFeed />
      <ChatContianer />
    </div>
  );
};

export default Chat;
