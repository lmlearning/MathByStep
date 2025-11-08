import { Problem } from '../types/problem.types';

// Import JSON files directly
import algebraQuadratic1 from '@/public/problems/algebra-quadratic-1.json';
import algebraSystemsLinear1 from '@/public/problems/algebra-systems-linear-1.json';
import algebraPolynomialDivision1 from '@/public/problems/algebra-polynomial-division-1.json';
import calcDerivativeChainRule1 from '@/public/problems/calc-derivative-chain-rule-1.json';
import calculusLimitEpsilonDelta1 from '@/public/problems/calculus-limit-epsilon-delta-1.json';
import calculusIntegrationSubstitution1 from '@/public/problems/calculus-integration-substitution-1.json';
import geometryTriangleAngles1 from '@/public/problems/geometry-triangle-angles-1.json';
import geometryPythagoreanProof1 from '@/public/problems/geometry-pythagorean-proof-1.json';
import geometrySimilarTriangles1 from '@/public/problems/geometry-similar-triangles-1.json';
import numberTheoryDivisibility1 from '@/public/problems/number-theory-divisibility-1.json';
import numberTheoryGcd1 from '@/public/problems/number-theory-gcd-1.json';
import numberTheoryInfinitelyManyPrimes1 from '@/public/problems/number-theory-infinitely-many-primes-1.json';
import logicProofContradiction1 from '@/public/problems/logic-proof-contradiction-1.json';
import logicProofInduction1 from '@/public/problems/logic-proof-induction-1.json';
import logicProofDirect1 from '@/public/problems/logic-proof-direct-1.json';

// Problem database
const PROBLEM_DB: { [key: string]: Problem } = {
  'algebra-quadratic-1': algebraQuadratic1 as Problem,
  'algebra-systems-linear-1': algebraSystemsLinear1 as Problem,
  'algebra-polynomial-division-1': algebraPolynomialDivision1 as any as Problem,
  'calc-derivative-chain-rule-1': calcDerivativeChainRule1 as Problem,
  'calculus-limit-epsilon-delta-1': calculusLimitEpsilonDelta1 as Problem,
  'calculus-integration-substitution-1': calculusIntegrationSubstitution1 as Problem,
  'geometry-triangle-angles-1': geometryTriangleAngles1 as Problem,
  'geometry-pythagorean-proof-1': geometryPythagoreanProof1 as Problem,
  'geometry-similar-triangles-1': geometrySimilarTriangles1 as any as Problem,
  'number-theory-divisibility-1': numberTheoryDivisibility1 as Problem,
  'number-theory-gcd-1': numberTheoryGcd1 as Problem,
  'number-theory-infinitely-many-primes-1': numberTheoryInfinitelyManyPrimes1 as any as Problem,
  'logic-proof-contradiction-1': logicProofContradiction1 as Problem,
  'logic-proof-induction-1': logicProofInduction1 as any as Problem,
  'logic-proof-direct-1': logicProofDirect1 as any as Problem,
};

const PROBLEM_IDS = Object.keys(PROBLEM_DB);

/**
 * Get a single problem by ID (works on both server and client)
 */
export async function getProblem(id: string): Promise<Problem | null> {
  return PROBLEM_DB[id] || null;
}

/**
 * Get all available problems
 */
export async function getAllProblems(): Promise<Problem[]> {
  return PROBLEM_IDS.map(id => PROBLEM_DB[id]);
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
