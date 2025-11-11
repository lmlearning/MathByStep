/**
 * Client-side problem data access
 * This file fetches data from API routes
 */

import { Problem } from '../types/problem.types';

/**
 * Get a single problem by ID
 */
export async function getProblem(id: string): Promise<Problem | null> {
  try {
    const response = await fetch(`/api/problems/${id}`, {
      cache: 'force-cache',
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch problem:', error);
    return null;
  }
}

/**
 * Get all available problems
 */
export async function getAllProblems(): Promise<Problem[]> {
  try {
    const response = await fetch('/api/problems', {
      cache: 'force-cache',
    });

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch problems:', error);
    return [];
  }
}

/**
 * Get problem metadata (without full step content) for list view
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

export async function getProblemMetadata(id: string): Promise<ProblemMetadata | null> {
  const problem = await getProblem(id);
  if (!problem) return null;

  return {
    id: problem.id,
    title: problem.title,
    topic: problem.topic,
    difficulty: problem.difficulty,
    estimatedTime: problem.estimatedTime,
    tags: problem.tags,
    type: problem.type,
  };
}

export async function getAllProblemMetadata(): Promise<ProblemMetadata[]> {
  const problems = await getAllProblems();
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
