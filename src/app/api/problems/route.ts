import { NextResponse } from "next/server";
import { getAllProblems } from "@/service/problems";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get("language") || "ko";

  try {
    const problems = await getAllProblems(language);
    return NextResponse.json(problems);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch problems" },
      { status: 500 }
    );
  }
}