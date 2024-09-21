import Link from "next/link";
import styles from "./layout.module.css";
import "./globals.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">SAA-practice</Link>
      </h1>
      <nav className={styles.nav}>
        <Link href="/problems">problems</Link>
        <Link href="/problems/answers">answers</Link>
      </nav>
    </header>
  );
}
