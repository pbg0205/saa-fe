import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <h1>
            <Link href="/">SAA-practice</Link>
          </h1>
          <nav className={styles.nav}>
            <Link href="/problems">problems</Link>
            <Link href="/problems/answers">answers</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
