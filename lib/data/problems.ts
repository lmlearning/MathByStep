import { Problem } from '../types/problem.types';

// Import JSON files directly
import algebraQuadratic1 from '@/public/problems/algebra-quadratic-1.json';
import algebraSystemsLinear1 from '@/public/problems/algebra-systems-linear-1.json';
import algebraPolynomialDivision1 from '@/public/problems/algebra-polynomial-division-1.json';
import algebraComplexNumbers1 from '@/public/problems/algebra-complex-numbers-1.json';
import algebraMatrixMult1 from '@/public/problems/algebra-matrix-mult-1.json';
import algebraPartialFractions1 from '@/public/problems/algebra-partial-fractions-1.json';
import calcDerivativeChainRule1 from '@/public/problems/calc-derivative-chain-rule-1.json';
import calculusLimitEpsilonDelta1 from '@/public/problems/calculus-limit-epsilon-delta-1.json';
import calculusIntegrationSubstitution1 from '@/public/problems/calculus-integration-substitution-1.json';
import calculusMvt1 from '@/public/problems/calculus-mvt-1.json';
import calculusFtc1 from '@/public/problems/calculus-ftc-1.json';
import calculusIntegrationByParts1 from '@/public/problems/calculus-integration-by-parts-1.json';
import geometryTriangleAngles1 from '@/public/problems/geometry-triangle-angles-1.json';
import geometryPythagoreanProof1 from '@/public/problems/geometry-pythagorean-proof-1.json';
import geometrySimilarTriangles1 from '@/public/problems/geometry-similar-triangles-1.json';
import geometryInscribedAngle1 from '@/public/problems/geometry-inscribed-angle-1.json';
import numberTheoryDivisibility1 from '@/public/problems/number-theory-divisibility-1.json';
import numberTheoryGcd1 from '@/public/problems/number-theory-gcd-1.json';
import numberTheoryInfinitelyManyPrimes1 from '@/public/problems/number-theory-infinitely-many-primes-1.json';
import numberTheoryModularArithmetic1 from '@/public/problems/number-theory-modular-arithmetic-1.json';
import logicProofContradiction1 from '@/public/problems/logic-proof-contradiction-1.json';
import logicProofInduction1 from '@/public/problems/logic-proof-induction-1.json';
import logicProofDirect1 from '@/public/problems/logic-proof-direct-1.json';
import logicSetTheoryDemorgans1 from '@/public/problems/logic-set-theory-demorgans-1.json';
// Linear Algebra
import linearAlgebraVectorSpace1 from '@/public/problems/linear-algebra-vector-space-1.json';
import linearAlgebraEigenvalues1 from '@/public/problems/linear-algebra-eigenvalues-1.json';
import linearAlgebraBasisDimension1 from '@/public/problems/linear-algebra-basis-dimension-1.json';
import linearAlgebraDeterminants1 from '@/public/problems/linear-algebra-determinants-1.json';
import linearAlgebraNullSpace1 from '@/public/problems/linear-algebra-null-space-1.json';
import linearAlgebraLinearTransformation1 from '@/public/problems/linear-algebra-linear-transformation-1.json';
import linearAlgebraGramSchmidt1 from '@/public/problems/linear-algebra-gram-schmidt-1.json';
import linearAlgebraDiagonalization1 from '@/public/problems/linear-algebra-diagonalization-1.json';
// Multivariable Calculus
import multivariablePartialDerivatives1 from '@/public/problems/multivariable-partial-derivatives-1.json';
import multivariableDoubleIntegral1 from '@/public/problems/multivariable-double-integral-1.json';
import multivariableChainRule1 from '@/public/problems/multivariable-chain-rule-1.json';
import multivariableLagrangeMultipliers1 from '@/public/problems/multivariable-lagrange-multipliers-1.json';
import multivariableLineIntegral1 from '@/public/problems/multivariable-line-integral-1.json';
import multivariableGreensTheorem1 from '@/public/problems/multivariable-greens-theorem-1.json';
import multivariableTripleIntegral1 from '@/public/problems/multivariable-triple-integral-1.json';
import multivariableDivergenceTheorem1 from '@/public/problems/multivariable-divergence-theorem-1.json';
// Differential Equations
import differentialEquationsSeparable1 from '@/public/problems/differential-equations-separable-1.json';
import differentialEquationsFirstOrderLinear1 from '@/public/problems/differential-equations-first-order-linear-1.json';
import differentialEquationsSecondOrderHomogeneous1 from '@/public/problems/differential-equations-second-order-homogeneous-1.json';
import differentialEquationsUndeterminedCoefficients1 from '@/public/problems/differential-equations-undetermined-coefficients-1.json';
import differentialEquationsSystems1 from '@/public/problems/differential-equations-systems-1.json';
import differentialEquationsLaplaceTransform1 from '@/public/problems/differential-equations-laplace-transform-1.json';
// Real Analysis
import realAnalysisSequenceConvergence1 from '@/public/problems/real-analysis-sequence-convergence-1.json';
import realAnalysisContinuityUniform1 from '@/public/problems/real-analysis-continuity-uniform-1.json';
// Abstract Algebra
import abstractAlgebraGroup1 from '@/public/problems/abstract-algebra-group-1.json';
// Complex Analysis
import complexAnalysisCauchyRiemann1 from '@/public/problems/complex-analysis-cauchy-riemann-1.json';
// Topology
import topologyMetricSpaces1 from '@/public/problems/topology-metric-spaces-1.json';
// Probability
import probabilityBayesTheorem1 from '@/public/problems/probability-bayes-theorem-1.json';
// Discrete Math
import discreteMathCombinatorics1 from '@/public/problems/discrete-math-combinatorics-1.json';
import graphTheoryEulerPath1 from '@/public/problems/graph-theory-euler-path-1.json';
// Calculus (Sequences & Series)
import calculusSeriesRatioTest1 from '@/public/problems/calculus-series-ratio-test-1.json';
// Abstract Algebra (additional)
import abstractAlgebraCyclicGroups1 from '@/public/problems/abstract-algebra-cyclic-groups-1.json';
// Statistics
import statisticsHypothesisTesting1 from '@/public/problems/statistics-hypothesis-testing-1.json';
// Complex Analysis (additional)
import complexAnalysisContourIntegration1 from '@/public/problems/complex-analysis-contour-integration-1.json';
// Calculus (additional topics)
import calculusLimitLaws1 from '@/public/problems/calculus-limit-laws-1.json';
import calculusProductQuotientRule1 from '@/public/problems/calculus-product-quotient-rule-1.json';
import calculusOptimization1 from '@/public/problems/calculus-optimization-1.json';
import calculusLhopitalRule1 from '@/public/problems/calculus-lhopital-rule-1.json';
import calculusVolumesRevolution1 from '@/public/problems/calculus-volumes-revolution-1.json';
import calculusImplicitDifferentiation1 from '@/public/problems/calculus-implicit-differentiation-1.json';
import calculusRelatedRates1 from '@/public/problems/calculus-related-rates-1.json';
import calculusTrigSubstitution1 from '@/public/problems/calculus-trig-substitution-1.json';
import calculusAreaBetweenCurves1 from '@/public/problems/calculus-area-between-curves-1.json';
import calculusArcLength1 from '@/public/problems/calculus-arc-length-1.json';
import calculusPowerSeries1 from '@/public/problems/calculus-power-series-1.json';
import calculusTaylorSeries1 from '@/public/problems/calculus-taylor-series-1.json';
import calculusSeriesComparisonTest1 from '@/public/problems/calculus-series-comparison-test-1.json';
// Linear Algebra (additional)
import linearAlgebraGaussianElimination1 from '@/public/problems/linear-algebra-gaussian-elimination-1.json';
import linearAlgebraMatrixInverse1 from '@/public/problems/linear-algebra-matrix-inverse-1.json';
import linearAlgebraOrthogonalProjection1 from '@/public/problems/linear-algebra-orthogonal-projection-1.json';
// Multivariable Calculus (additional)
import multivariableDirectionalDerivative1 from '@/public/problems/multivariable-directional-derivative-1.json';
// Differential Equations (additional)
import differentialEquationsExact1 from '@/public/problems/differential-equations-exact-1.json';
// Real Analysis (additional)
import realAnalysisCauchySequence1 from '@/public/problems/real-analysis-cauchy-sequence-1.json';
// Probability (additional)
import probabilityRandomVariables1 from '@/public/problems/probability-random-variables-1.json';
// Numerical Analysis
import numericalAnalysisNewtonsMethod1 from '@/public/problems/numerical-analysis-newtons-method-1.json';

// Problem database
const PROBLEM_DB: { [key: string]: Problem } = {
  'algebra-quadratic-1': algebraQuadratic1 as Problem,
  'algebra-systems-linear-1': algebraSystemsLinear1 as Problem,
  'algebra-polynomial-division-1': algebraPolynomialDivision1 as any as Problem,
  'algebra-complex-numbers-1': algebraComplexNumbers1 as any as Problem,
  'algebra-matrix-mult-1': algebraMatrixMult1 as any as Problem,
  'algebra-partial-fractions-1': algebraPartialFractions1 as any as Problem,
  'calc-derivative-chain-rule-1': calcDerivativeChainRule1 as Problem,
  'calculus-limit-epsilon-delta-1': calculusLimitEpsilonDelta1 as Problem,
  'calculus-integration-substitution-1': calculusIntegrationSubstitution1 as Problem,
  'calculus-mvt-1': calculusMvt1 as any as Problem,
  'calculus-ftc-1': calculusFtc1 as any as Problem,
  'calculus-integration-by-parts-1': calculusIntegrationByParts1 as any as Problem,
  'geometry-triangle-angles-1': geometryTriangleAngles1 as Problem,
  'geometry-pythagorean-proof-1': geometryPythagoreanProof1 as Problem,
  'geometry-similar-triangles-1': geometrySimilarTriangles1 as any as Problem,
  'geometry-inscribed-angle-1': geometryInscribedAngle1 as any as Problem,
  'number-theory-divisibility-1': numberTheoryDivisibility1 as Problem,
  'number-theory-gcd-1': numberTheoryGcd1 as Problem,
  'number-theory-infinitely-many-primes-1': numberTheoryInfinitelyManyPrimes1 as any as Problem,
  'number-theory-modular-arithmetic-1': numberTheoryModularArithmetic1 as any as Problem,
  'logic-proof-contradiction-1': logicProofContradiction1 as Problem,
  'logic-proof-induction-1': logicProofInduction1 as any as Problem,
  'logic-proof-direct-1': logicProofDirect1 as any as Problem,
  'logic-set-theory-demorgans-1': logicSetTheoryDemorgans1 as any as Problem,
  // Linear Algebra
  'linear-algebra-vector-space-1': linearAlgebraVectorSpace1 as any as Problem,
  'linear-algebra-eigenvalues-1': linearAlgebraEigenvalues1 as any as Problem,
  'linear-algebra-basis-dimension-1': linearAlgebraBasisDimension1 as any as Problem,
  'linear-algebra-determinants-1': linearAlgebraDeterminants1 as any as Problem,
  'linear-algebra-null-space-1': linearAlgebraNullSpace1 as any as Problem,
  'linear-algebra-linear-transformation-1': linearAlgebraLinearTransformation1 as any as Problem,
  'linear-algebra-gram-schmidt-1': linearAlgebraGramSchmidt1 as any as Problem,
  'linear-algebra-diagonalization-1': linearAlgebraDiagonalization1 as any as Problem,
  // Multivariable Calculus
  'multivariable-partial-derivatives-1': multivariablePartialDerivatives1 as any as Problem,
  'multivariable-double-integral-1': multivariableDoubleIntegral1 as any as Problem,
  'multivariable-chain-rule-1': multivariableChainRule1 as any as Problem,
  'multivariable-lagrange-multipliers-1': multivariableLagrangeMultipliers1 as any as Problem,
  'multivariable-line-integral-1': multivariableLineIntegral1 as any as Problem,
  'multivariable-greens-theorem-1': multivariableGreensTheorem1 as any as Problem,
  'multivariable-triple-integral-1': multivariableTripleIntegral1 as any as Problem,
  'multivariable-divergence-theorem-1': multivariableDivergenceTheorem1 as any as Problem,
  // Differential Equations
  'differential-equations-separable-1': differentialEquationsSeparable1 as any as Problem,
  'differential-equations-first-order-linear-1': differentialEquationsFirstOrderLinear1 as any as Problem,
  'differential-equations-second-order-homogeneous-1': differentialEquationsSecondOrderHomogeneous1 as any as Problem,
  'differential-equations-undetermined-coefficients-1': differentialEquationsUndeterminedCoefficients1 as any as Problem,
  'differential-equations-systems-1': differentialEquationsSystems1 as any as Problem,
  'differential-equations-laplace-transform-1': differentialEquationsLaplaceTransform1 as any as Problem,
  // Real Analysis
  'real-analysis-sequence-convergence-1': realAnalysisSequenceConvergence1 as any as Problem,
  'real-analysis-continuity-uniform-1': realAnalysisContinuityUniform1 as any as Problem,
  // Abstract Algebra
  'abstract-algebra-group-1': abstractAlgebraGroup1 as any as Problem,
  // Complex Analysis
  'complex-analysis-cauchy-riemann-1': complexAnalysisCauchyRiemann1 as any as Problem,
  // Topology
  'topology-metric-spaces-1': topologyMetricSpaces1 as any as Problem,
  // Probability
  'probability-bayes-theorem-1': probabilityBayesTheorem1 as any as Problem,
  // Discrete Math
  'discrete-math-combinatorics-1': discreteMathCombinatorics1 as any as Problem,
  'graph-theory-euler-path-1': graphTheoryEulerPath1 as any as Problem,
  // Calculus (Sequences & Series)
  'calculus-series-ratio-test-1': calculusSeriesRatioTest1 as any as Problem,
  // Abstract Algebra (additional)
  'abstract-algebra-cyclic-groups-1': abstractAlgebraCyclicGroups1 as any as Problem,
  // Statistics
  'statistics-hypothesis-testing-1': statisticsHypothesisTesting1 as any as Problem,
  // Complex Analysis (additional)
  'complex-analysis-contour-integration-1': complexAnalysisContourIntegration1 as any as Problem,
  // Calculus (additional topics)
  'calculus-limit-laws-1': calculusLimitLaws1 as any as Problem,
  'calculus-product-quotient-rule-1': calculusProductQuotientRule1 as any as Problem,
  'calculus-optimization-1': calculusOptimization1 as any as Problem,
  'calculus-lhopital-rule-1': calculusLhopitalRule1 as any as Problem,
  'calculus-volumes-revolution-1': calculusVolumesRevolution1 as any as Problem,
  'calculus-implicit-differentiation-1': calculusImplicitDifferentiation1 as any as Problem,
  'calculus-related-rates-1': calculusRelatedRates1 as any as Problem,
  'calculus-trig-substitution-1': calculusTrigSubstitution1 as any as Problem,
  'calculus-area-between-curves-1': calculusAreaBetweenCurves1 as any as Problem,
  'calculus-arc-length-1': calculusArcLength1 as any as Problem,
  'calculus-power-series-1': calculusPowerSeries1 as any as Problem,
  'calculus-taylor-series-1': calculusTaylorSeries1 as any as Problem,
  'calculus-series-comparison-test-1': calculusSeriesComparisonTest1 as any as Problem,
  // Linear Algebra (additional)
  'linear-algebra-gaussian-elimination-1': linearAlgebraGaussianElimination1 as any as Problem,
  'linear-algebra-matrix-inverse-1': linearAlgebraMatrixInverse1 as any as Problem,
  'linear-algebra-orthogonal-projection-1': linearAlgebraOrthogonalProjection1 as any as Problem,
  // Multivariable Calculus (additional)
  'multivariable-directional-derivative-1': multivariableDirectionalDerivative1 as any as Problem,
  // Differential Equations (additional)
  'differential-equations-exact-1': differentialEquationsExact1 as any as Problem,
  // Real Analysis (additional)
  'real-analysis-cauchy-sequence-1': realAnalysisCauchySequence1 as any as Problem,
  // Probability (additional)
  'probability-random-variables-1': probabilityRandomVariables1 as any as Problem,
  // Numerical Analysis
  'numerical-analysis-newtons-method-1': numericalAnalysisNewtonsMethod1 as any as Problem,
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
