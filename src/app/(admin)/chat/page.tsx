import Messages from "@/components/messages/Messages";
import Session from "@/components/session/Session";
import React from "react";

type Props = {};

function Chat({}: Props) {
  return (
    <div className="flex">
      <Messages />
      <Session />
    </div>
  );
}

export default Chat;
