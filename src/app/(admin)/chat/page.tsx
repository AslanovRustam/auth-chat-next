import PrivateRouteClient from "@/app/utils/PrivateRouteClient";
import Messages from "@/components/messages/Messages";
import Session from "@/components/session/Session";
import React from "react";

type Props = {};

function Chat({}: Props) {
  return (
    <PrivateRouteClient>
      <div className="flex">
        <Messages />
        <Session />
      </div>
    </PrivateRouteClient>
  );
}

export default Chat;
