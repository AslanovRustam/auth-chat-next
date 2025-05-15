import s from "./messages.module.scss";
import Dots from "../../../public/dots.svg";
import Searchbar from "../searchbar/Searchbar";
import { defaultUserList } from "@/constants/constants";
import ChatItem from "../chatItem/ChatItem";

type Props = {};

function Messages({}: Props) {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <p className={s.title}>Messages</p>
        <Dots className={s.dots} />
      </div>
      <div className={s.searchbar}>
        <Searchbar />
      </div>
      <ul className={s.list}>
        {defaultUserList.map((item) => (
          <ChatItem key={item.userName} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Messages;
