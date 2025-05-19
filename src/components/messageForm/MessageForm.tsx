"use client";
import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import Camera from "../../../public/camera.svg";
import Dots from "../../../public/dots.svg";
import Microphone from "../../../public/microphone.svg";
import Emoji from "../../../public/emoji.svg";
import Attach from "../../../public/attach.svg";
import Blank from "../../../public/blank.svg";
import Arrow from "../../../public/arrow.svg";
import s from "./messageform.module.scss";

type Props = {};

function MessageForm({}: Props) {
  const [input, setInput] = useState<string>("");

  const handleSetInput = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setInput(value);
  };
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <textarea
          className={s.textarea}
          placeholder="Type here..."
          value={input}
          onChange={handleSetInput}
        />
        <div className={s.bottomSection}>
          <ul className={s.list}>
            <li className={s.item}>
              <Camera className={s.icon} />
            </li>
            <li className={s.item}>
              <Microphone className={s.icon} />
            </li>
            <li className={s.verticalLine}></li>
            <li className={s.item}>
              <Emoji className={s.icon} />
            </li>
            <li className={s.item}>
              <Attach className={s.icon} />
            </li>
            <li className={s.item}>
              <Blank className={s.icon} />
            </li>
            <li className={s.verticalLine}></li>
            <li className={s.item}>
              <Dots className={clsx(s.icon, "rotate-90")} />
            </li>
          </ul>
          <button type="button" className={s.button}>
            <Arrow className={s.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageForm;
