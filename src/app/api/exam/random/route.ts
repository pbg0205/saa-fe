import {getRandomProblems} from "@/service/problems";
import {NextResponse} from "next/server";

export async function GET(){
  const randomProblems = await getRandomProblems("ko", 10);
  return NextResponse.json(randomProblems);
}
