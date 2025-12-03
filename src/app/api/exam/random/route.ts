import {getRandomProblems} from "@/service/problems";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get("language") || "ko";

  const randomProblems = await getRandomProblems(language, 10);
  return NextResponse.json(randomProblems);
}
