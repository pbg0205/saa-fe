import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Problem } from "@/service/problems";

export async function GET(
  request: Request,
  { params }: { params: { problemNumber: string; language: string } }
) {
  const { problemNumber, language } = params;
  const filePath = path.join(
    process.cwd(),
    "data",
    `problems_${language}.json`
  );
  const fileContents = await fs.readFile(filePath, "utf-8");
  const problems = JSON.parse(fileContents);

  const problem = problems.find(
    (item: Problem) => item.testNumber === parseInt(problemNumber)
  );

  if (!problem) {
    return NextResponse.json({ error: "Problem not found" }, { status: 404 });
  }

  const index = problems.indexOf(problem);
  const prev = index > 0 ? problems[index - 1] : null;
  const next = index < problems.length - 1 ? problems[index + 1] : null;

  return NextResponse.json({ ...problem, prev, next });
}
