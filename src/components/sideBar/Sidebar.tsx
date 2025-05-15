import Image from "next/image";
import defaultAvatar from "../../../public/images/avatarDefault.png";
import Dashboard from "../../../public/dashboard.svg";
import People from "../../../public/people.svg";
import Chat from "../../../public/chat.svg";
import Phone from "../../../public/phone.svg";
import Settings from "../../../public/settings.svg";
import Question from "../../../public/question.svg";
import Leave from "../../../public/leave.svg";
import s from "./sidebar.module.scss";

type Props = {};

function Sidebar({}: Props) {
  return (
    <aside className={s.aside}>
      <div className={s.container}>
        <Image src={defaultAvatar} alt="avatar" className={s.avatar} />
        <ul className={s.list}>
          <li className={s.item}>
            <Dashboard className={s.icon} />
          </li>
          <li className={s.item}>
            <People className={s.icon} />
          </li>
          <li className={s.item}>
            <Chat className={s.icon} />
          </li>
          <li className={s.item}>
            <Phone className={s.icon} />
          </li>
          <li className={s.item}>
            <Settings className={s.icon} />
          </li>
        </ul>
      </div>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.item}>
            <Question className={s.icon} />
          </li>
          <li className={s.item}>
            <Leave className={s.icon} />
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
