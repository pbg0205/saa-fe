import Link from "next/link";
import styles from "../app/layout.module.css";
import "../app/globals.css";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">
        <Link href="/">SAA-practice</Link>
      </h1>
      <nav className="flex gap-4">
        <Link href="/problems">problems</Link>
        <Link href="/problems/answers">answers</Link>
      </nav>
    </header>
  );
}
