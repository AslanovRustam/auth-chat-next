import Image from "next/image";
import { CSSProperties } from "react";
import clsx from "clsx";
import avatar from "../../../public/images/Ellipse 1.png";
import Phone from "../../../public/phone.svg";
import Camera from "../../../public/camera.svg";
import Dots from "../../../public/dots.svg";
import { STATUS, TRIAL_MESSAGES } from "@/constants/constants";
import s from "./session.module.scss";
import MessageList from "../messageList/MessageList";
import MessageForm from "../messageForm/MessageForm";

type Props = {};

function Session({}: Props) {
  const status = STATUS.active;
  const username = "me";
  return (
    <section className={clsx("ml-[25rem]", s.section)}>
      <div className={s.header}>
        <div className={s.userContainer}>
          <Image src={avatar} alt="avatar" className={s.avatar} />
          <div className={s.user}>
            <p className={s.name}>Robert Fox</p>
            <p
              className={s.status}
              style={{ "--statusColor": status } as CSSProperties}
            >
              {status === STATUS.active ? "Active Now" : "Inactive"}
            </p>
          </div>
        </div>
        <ul className={s.list}>
          <li className={s.item}>
            <Phone className={s.icon} />
          </li>
          <li className={s.item}>
            <Camera className={s.icon} />
          </li>
          <li className={s.item}>
            <Dots className={s.icon} />
          </li>
        </ul>
      </div>
      {/* <div> */}
      <MessageList messages={TRIAL_MESSAGES} username={username} />
      <MessageForm />
      {/* </div> */}
    </section>
  );
}

export default Session;
