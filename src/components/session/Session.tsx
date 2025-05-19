"use client";
import Image from "next/image";
import { CSSProperties, useState } from "react";
import clsx from "clsx";
import avatar from "../../../public/images/Ellipse 1.png";
import Phone from "../../../public/phone.svg";
import Camera from "../../../public/camera.svg";
import Dots from "../../../public/dots.svg";
import { STATUS, TRIAL_MESSAGES } from "@/constants/constants";
import s from "./session.module.scss";
import MessageList from "../messageList/MessageList";
import MessageForm from "../messageForm/MessageForm";
import UserInfo from "../userInfo/UserInfo";

type Props = {};

function Session({}: Props) {
  const [showUserInfo, setShowUserInfo] = useState<boolean>(true);

  const status = STATUS.active;
  const username = "me";

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <section className="ml-[25rem] flex w-[67.5vw] ">
      <section
        className={clsx(
          s.section,
          "transition-all duration-300 ease-in-out w-full"
        )}
      >
        <div className={s.wrapper}>
          <div className={s.header}>
            <div className={s.userContainer} onClick={toggleUserInfo}>
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
          <MessageList messages={TRIAL_MESSAGES} username={username} />
          <MessageForm />
        </div>
        <div
          className={clsx(
            "transition-all duration-300 ease-in-out overflow-hidden flex flex-col",
            showUserInfo ? "w-[66%]" : "w-0"
          )}
        >
          <UserInfo close={toggleUserInfo} />
        </div>
      </section>
    </section>
  );
}

export default Session;
