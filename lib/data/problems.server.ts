/**
 * Server-side only problem data access
 * This file should ONLY be imported by server components or API routes
 */

import { readdir, readFile } from 'fs/promises';
import path from 'path';
import { Problem } from '../types/problem.types';

/**
 * Load all problems from filesystem (server-side only)
 */
export async function getAllProblemsServer(): Promise<Problem[]> {
  const problemsDir = path.join(process.cwd(), 'public', 'problems');
  const files = await readdir(problemsDir);
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  const problems: Problem[] = [];

  for (const file of jsonFiles) {
    const filePath = path.join(problemsDir, file);
    const fileContent = await readFile(filePath, 'utf-8');
    const problem = JSON.parse(fileContent) as Problem;
    problems.push(problem);
  }

  return problems;
}

/**
 * Get a single problem by ID (server-side only)
 */
export async function getProblemServer(id: string): Promise<Problem | null> {
  try {
    const problemsDir = path.join(process.cwd(), 'public', 'problems');
    const filePath = path.join(problemsDir, `${id}.json`);

    const fileContent = await readFile(filePath, 'utf-8');
    return JSON.parse(fileContent) as Problem;
  } catch (error) {
    return null;
  }
}

/**
 * Get problem metadata (server-side only)
 */
export interface ProblemMetadata {
  id: string;
  title: string;
  topic: string;
  difficulty: number;
  estimatedTime: number;
  tags: string[];
  type: 'proof' | 'problem';
}

export async function getAllProblemMetadataServer(): Promise<ProblemMetadata[]> {
  const problems = await getAllProblemsServer();
  return problems.map(p => ({
    id: p.id,
    title: p.title,
    topic: p.topic,
    difficulty: p.difficulty,
    estimatedTime: p.estimatedTime,
    tags: p.tags,
    type: p.type,
  }));
}
