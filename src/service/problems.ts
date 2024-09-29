import path from "path";
import { promises as fs } from "fs";

export type Problem = {
  testNumber: number;
  testPassage: string;
  choices: string[];
  answer: string;
};

export async function getAllProblems(language: string): Promise<Problem[]> {
  const filePath = path.join(
    process.cwd(),
    "data",
    `problems_${language}.json`
  );
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProblem(
  id: number,
  language: string
): Promise<Problem | undefined> {
  const products = await getAllProblems(language);
  return products.find((item) => {
    return item.testNumber === id;
  });
}
