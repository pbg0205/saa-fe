import Link from "next/link";

export type ProblemMoveButtonProps = {
  href: string;
  name: string;
};

export default function ProblemMoveButton({
  href,
  name,
}: ProblemMoveButtonProps) {
  return (
    <Link href={href} className="text-blue-500">
      {name}
    </Link>
  );
}
