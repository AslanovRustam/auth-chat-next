import Image from "next/image";
import defaultAvatar from "../../../public/images/avatarDefault.png";
import Status from "../../../public/status.svg";
import { IUserForChat } from "@/types/types";
import s from "./chatItem.module.scss";

type Props = { item: IUserForChat };

export default function ChatItem({ item }: Props) {
  return (
    <li className={s.item}>
      <Image
        src={item.avatar ? item.avatar : defaultAvatar}
        alt={item.userName}
        className={s.avatar}
      />
      <div className={s.container}>
        <div className={s.main}>
          <p className={s.name}>{item.userName}</p>
          <p className={s.text}>{item.message}</p>
        </div>
        <div className={s.additional}>
          <p className={s.time}>18s</p>
          <p className={s.read}>
            <Status className={s.icon} />
          </p>
        </div>
      </div>
    </li>
  );
}
