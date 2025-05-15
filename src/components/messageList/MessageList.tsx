import clsx from "clsx";
import Image from "next/image";
import defaultAvatar from "../../../public/images/avatarDefault.png";
import { IMessage } from "@/types/types";
import s from "./messagelist.module.scss";

type Props = { messages: IMessage[]; username: string };

function MessageList({ messages, username }: Props) {
  return (
    <ul className={s.messageList}>
      {messages.map((message) => (
        <li
          className={clsx(
            s.messageItem,
            username === message.userName && "ml-auto"
          )}
          key={`${message.id}-${message.time}`}
        >
          <Image
            src={message.avatar ? message.avatar : defaultAvatar}
            alt={message.userName}
            className={clsx(
              s.userAvatar,
              username === message.userName && "order-1 "
            )}
          />
          <p
            className={clsx(
              s.message,
              username === message.userName ? s.currentUser : s.companionUser
            )}
          >
            {message.message}
            <span
              className={clsx(
                s.time,
                username === message.userName && s.timeCurrentUser
              )}
            >
              {message.time}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default MessageList;
