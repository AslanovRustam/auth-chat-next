import Image from "next/image";
import start from "../../../public/images/startScreen.png";
import styles from "./signin.module.scss";
import Login from "../form/Login";
import Github from "../../../public/github.svg";
import Link from "next/link";

type Props = {};

export default function SignIn({}: Props) {
  return (
    <section className={styles.container}>
      <Image src={start} alt="the boat" className={styles.image} />
      <div className={styles.loginContainer}>
        <Login />
        <div className={styles.info}>
          <Link
            href="https://github.com/AslanovRustam"
            target="_blank"
            className={styles.link}
          >
            <Github className={styles.icon} />
            GitHub
          </Link>
          <p>©Created 2025</p>
        </div>
      </div>
    </section>
  );
}
