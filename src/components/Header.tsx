import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">
        <Link href="/">SAA</Link>
      </h1>
      <nav className="flex gap-4">
        <Link href="/problems/ko">KO</Link>
        <Link href="/problems/en">EN</Link>
        <Link href="/problems/answers">answers</Link>
        <Link href="/problems/random-number">random</Link>
      </nav>
    </header>
  );
}
