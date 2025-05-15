"use client";
import { ChangeEvent, useState } from "react";
import Search from "../../../public/search.svg";
import Plus from "../../../public/plus.svg";
import s from "./searchbar.module.scss";

type Props = {};

function Searchbar({}: Props) {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className={s.container}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search for chats..."
          className={s.input}
        />
        <Search className={s.icon} />
      </div>
      <button type="button" className={s.button}>
        <Plus className={s.iconBtn} />
        <span className={s.text}>Start New Chat</span>
      </button>
    </>
  );
}

export default Searchbar;
