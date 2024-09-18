import path from "path";
import { promises as fs } from "fs";

export type Problem = {
  testNumber: number;
  testPassage: string;
  choices: string[];
  answer: string;
};

export async function getProblems(): Promise<Problem[]> {
  const filePath = path.join(process.cwd(), "data", "problems.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProblem(id: number): Promise<Problem | undefined> {
  const products = await getProblems();
  return products.find((item) => {
    return item.testNumber === id;
  });
}
