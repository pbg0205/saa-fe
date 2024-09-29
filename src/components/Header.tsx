import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">
        <Link href="/">SAA-practice</Link>
      </h1>
      <nav className="flex gap-4">
        <Link href="/problems/ko">problems_ko</Link>
        <Link href="/problems/en">problems_en</Link>
        <Link href="/problems/answers">answers</Link>
      </nav>
    </header>
  );
}
