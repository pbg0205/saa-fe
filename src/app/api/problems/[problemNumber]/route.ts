import { NextResponse } from "next/server";
import { getProblemData } from "@/service/problems";

export async function GET(
  request: Request,
  { params }: { params: { problemNumber: string } }
) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get("language") || "ko";
  const { problemNumber } = params;

  try {
    const problem = await getProblemData(parseInt(problemNumber), language);

    if (!problem) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });
    }

    return NextResponse.json(problem);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch problem" },
      { status: 500 }
    );
  }
}