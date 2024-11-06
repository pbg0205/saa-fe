import path from "path";
import {promises as fs} from "fs";

export type Problem = {
  testNumber: number;
  testPassage: string;
  choices: string[];
  answer: string;
};

export type ProblemData = Problem & {
  prev: Problem | null;
  next: Problem | null;
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

export async function getProblemData(
  id: number,
  language: string
): Promise<ProblemData> {
  const problems = await getAllProblems(language);
  const problem = problems.find((item) => {
    return item.testNumber === id;
  });

  if (!problem) throw new Error(`${id} 의 문제를 찾을 수 없음`);

  const index = problems.indexOf(problem);
  const prev = index > 0 ? problems[index - 1] : null;
  const next = index < problems.length - 1 ? problems[index + 1] : null;

  return { ...problem, prev, next };
}

export async function getRandomProblems(language: string, count: number): Promise<Problem[]> {
  const jsonData = await getAllProblems(language);

  const randomSet = new Set<number>;
  while(randomSet.size < count) {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    randomSet.add(randomIndex);
  }

  return Array.from(randomSet).map((index) => jsonData[index]);
}
