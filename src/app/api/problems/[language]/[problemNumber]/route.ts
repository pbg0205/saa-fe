import { NextResponse } from "next/server";
import { getProblemData } from "@/service/problems";

export async function GET(
  request: Request,
  { params }: { params: { problemNumber: string; language: string } }
) {
  const { problemNumber, language } = params;
  const problem = await getProblemData(parseInt(problemNumber), language);

  if (!problem) {
    return NextResponse.json({ error: "Problem not found" }, { status: 404 });
  }

  return NextResponse.json(problem);
}
