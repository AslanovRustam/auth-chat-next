import s from "./userinfo.module.scss";
import avatar from "../../../public/images/Ellipse 1.png";
import Cross from "../../../public/cross.svg";
import Deny from "../../../public/deny.svg";
import Image from "next/image";
import RecentFiles from "../recentFiles/RecentFiles";
import ImagesList from "../imagesList/ImagesList";

type Props = { close: () => void };

function UserInfo({ close }: Props) {
  const name = "Robert Fox";
  return (
    <section className={s.section}>
      <div className={s.crossContainer} onClick={close}>
        <Cross className={s.icon} />
      </div>
      <div className={s.userContainer}>
        <Image src={avatar} alt="avatar" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.id}>@robert.fox12</p>
      </div>
      <label className={s.labelCheckbox}>
        <span className={s.text}>Notifications</span>
        <input type="checkbox" className={s.checkbox} />
        <span className={s.customCheckbox}></span>
      </label>
      <RecentFiles />
      <ImagesList />
      <button type="button" className={s.button}>
        <Deny className={s.blok} />
        <span className={s.blokText}>Block {name}</span>
      </button>
    </section>
  );
}

export default UserInfo;
