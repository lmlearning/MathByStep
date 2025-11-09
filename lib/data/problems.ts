import { Problem } from '../types/problem.types';

// Import JSON files directly
import algebraQuadratic1 from '@/public/problems/algebra-quadratic-1.json';
import algebraSystemsLinear1 from '@/public/problems/algebra-systems-linear-1.json';
import algebraPolynomialDivision1 from '@/public/problems/algebra-polynomial-division-1.json';
import algebraComplexNumbers1 from '@/public/problems/algebra-complex-numbers-1.json';
import algebraMatrixMult1 from '@/public/problems/algebra-matrix-mult-1.json';
import algebraPartialFractions1 from '@/public/problems/algebra-partial-fractions-1.json';
import algebraLogarithmProperties1 from '@/public/problems/algebra-logarithm-properties-1.json';
import algebraVietasFormulas1 from '@/public/problems/algebra-vietas-formulas-1.json';
import calcDerivativeChainRule1 from '@/public/problems/calc-derivative-chain-rule-1.json';
import calculusLimitEpsilonDelta1 from '@/public/problems/calculus-limit-epsilon-delta-1.json';
import calculusIntegrationSubstitution1 from '@/public/problems/calculus-integration-substitution-1.json';
import calculusMvt1 from '@/public/problems/calculus-mvt-1.json';
import calculusFtc1 from '@/public/problems/calculus-ftc-1.json';
import calculusIntegrationByParts1 from '@/public/problems/calculus-integration-by-parts-1.json';
import calculusLhopitalsRule1 from '@/public/problems/calculus-lhopitals-rule-1.json';
import geometryTriangleAngles1 from '@/public/problems/geometry-triangle-angles-1.json';
import geometryPythagoreanProof1 from '@/public/problems/geometry-pythagorean-proof-1.json';
import geometrySimilarTriangles1 from '@/public/problems/geometry-similar-triangles-1.json';
import geometryInscribedAngle1 from '@/public/problems/geometry-inscribed-angle-1.json';
import geometryCoordinateGeometry1 from '@/public/problems/geometry-coordinate-geometry-1.json';
import geometryPowerOfAPoint1 from '@/public/problems/geometry-power-of-a-point-1.json';
import geometryTriangleCenters1 from '@/public/problems/geometry-triangle-centers-1.json';
import differentialGeometryCurvature1 from '@/public/problems/differential-geometry-curvature-1.json';
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
import linearAlgebraOrthogonalMatrices1 from '@/public/problems/linear-algebra-orthogonal-matrices-1.json';
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
import differentialEquationsVariationParameters1 from '@/public/problems/differential-equations-variation-parameters-1.json';
import differentialEquationsBoundaryValue1 from '@/public/problems/differential-equations-boundary-value-1.json';
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
import calculusSequencesLimits1 from '@/public/problems/calculus-sequences-limits-1.json';
// Abstract Algebra (additional)
import abstractAlgebraCyclicGroups1 from '@/public/problems/abstract-algebra-cyclic-groups-1.json';
// Statistics
import statisticsHypothesisTesting1 from '@/public/problems/statistics-hypothesis-testing-1.json';
import statisticsLinearRegression1 from '@/public/problems/statistics-linear-regression-1.json';
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
import calculusMeanValueTheoremIntegrals1 from '@/public/problems/calculus-mean-value-theorem-integrals-1.json';
import calculusInverseFunctions1 from '@/public/problems/calculus-inverse-functions-1.json';
import calculusParametricEquations1 from '@/public/problems/calculus-parametric-equations-1.json';
// Linear Algebra (additional)
import linearAlgebraGaussianElimination1 from '@/public/problems/linear-algebra-gaussian-elimination-1.json';
import linearAlgebraMatrixInverse1 from '@/public/problems/linear-algebra-matrix-inverse-1.json';
import linearAlgebraOrthogonalProjection1 from '@/public/problems/linear-algebra-orthogonal-projection-1.json';
import linearAlgebraLeastSquares1 from '@/public/problems/linear-algebra-least-squares-1.json';
import linearAlgebraQrDecomposition1 from '@/public/problems/linear-algebra-qr-decomposition-1.json';
import linearAlgebraEigenspaces1 from '@/public/problems/linear-algebra-eigenspaces-1.json';
import linearAlgebraSvdIntro1 from '@/public/problems/linear-algebra-svd-intro-1.json';
// Multivariable Calculus (additional)
import multivariableDirectionalDerivative1 from '@/public/problems/multivariable-directional-derivative-1.json';
import multivariableConservativeFields1 from '@/public/problems/multivariable-conservative-fields-1.json';
import multivariableStokesTheorem1 from '@/public/problems/multivariable-stokes-theorem-1.json';
import multivariableJacobian1 from '@/public/problems/multivariable-jacobian-1.json';
// Differential Equations (additional)
import differentialEquationsExact1 from '@/public/problems/differential-equations-exact-1.json';
import differentialEquationsBernoulli1 from '@/public/problems/differential-equations-bernoulli-1.json';
import differentialEquationsPde1 from '@/public/problems/differential-equations-pde-1.json';
// Real Analysis (additional)
import realAnalysisCauchySequence1 from '@/public/problems/real-analysis-cauchy-sequence-1.json';
import realAnalysisBolzanoWeierstrass1 from '@/public/problems/real-analysis-bolzano-weierstrass-1.json';
import realAnalysisUniformConvergence1 from '@/public/problems/real-analysis-uniform-convergence-1.json';
import realAnalysisRiemannIntegration1 from '@/public/problems/real-analysis-riemann-integration-1.json';
import realAnalysisContinuousFunctions1 from '@/public/problems/real-analysis-continuous-functions-1.json';
import realAnalysisSeriesConvergence1 from '@/public/problems/real-analysis-series-convergence-1.json';
import realAnalysisLimsupLiminf1 from '@/public/problems/real-analysis-limsup-liminf-1.json';
// Probability (additional)
import probabilityRandomVariables1 from '@/public/problems/probability-random-variables-1.json';
import probabilityNormalDistribution1 from '@/public/problems/probability-normal-distribution-1.json';
import probabilityConditionalProbability1 from '@/public/problems/probability-conditional-probability-1.json';
import probabilityBayesNetwork1 from '@/public/problems/probability-bayes-network-1.json';
import probabilityContinuousDistributions1 from '@/public/problems/probability-continuous-distributions-1.json';
import probabilityMarkovChains1 from '@/public/problems/probability-markov-chains-1.json';
import probabilityLawLargeNumbers1 from '@/public/problems/probability-law-large-numbers-1.json';
// Numerical Analysis
import numericalAnalysisNewtonsMethod1 from '@/public/problems/numerical-analysis-newtons-method-1.json';
import numericalAnalysisEulerMethod1 from '@/public/problems/numerical-analysis-euler-method-1.json';
import numericalAnalysisRungeKutta1 from '@/public/problems/numerical-analysis-runge-kutta-1.json';
import numericalAnalysisLagrangeInterpolation1 from '@/public/problems/numerical-analysis-lagrange-interpolation-1.json';
import numericalAnalysisSimpsonsRule1 from '@/public/problems/numerical-analysis-simpsons-rule-1.json';
import numericalAnalysisBisectionMethod1 from '@/public/problems/numerical-analysis-bisection-method-1.json';
import numericalAnalysisFiniteDifferences1 from '@/public/problems/numerical-analysis-finite-differences-1.json';
// Abstract Algebra (more topics)
import abstractAlgebraSubgroups1 from '@/public/problems/abstract-algebra-subgroups-1.json';
import abstractAlgebraHomomorphisms1 from '@/public/problems/abstract-algebra-homomorphisms-1.json';
import abstractAlgebraRings1 from '@/public/problems/abstract-algebra-rings-1.json';
import abstractAlgebraGroupActions1 from '@/public/problems/abstract-algebra-group-actions-1.json';
import abstractAlgebraQuotientGroups1 from '@/public/problems/abstract-algebra-quotient-groups-1.json';
import abstractAlgebraFieldExtensions1 from '@/public/problems/abstract-algebra-field-extensions-1.json';
import abstractAlgebraPolynomialRings1 from '@/public/problems/abstract-algebra-polynomial-rings-1.json';
import abstractAlgebraIdeals1 from '@/public/problems/abstract-algebra-ideals-1.json';
// Complex Analysis (more topics)
import complexAnalysisResidueTheorem1 from '@/public/problems/complex-analysis-residue-theorem-1.json';
import complexAnalysisLaurentSeries1 from '@/public/problems/complex-analysis-laurent-series-1.json';
import complexAnalysisCauchyTheorem1 from '@/public/problems/complex-analysis-cauchy-theorem-1.json';
import complexAnalysisConformalMapping1 from '@/public/problems/complex-analysis-conformal-mapping-1.json';
import complexAnalysisAnalyticContinuation1 from '@/public/problems/complex-analysis-analytic-continuation-1.json';
import complexAnalysisPolesResidues1 from '@/public/problems/complex-analysis-poles-residues-1.json';
import complexAnalysisConformalMappings1 from '@/public/problems/complex-analysis-conformal-mappings-1.json';
// Discrete Math (additional)
import discreteMathRecurrenceRelations1 from '@/public/problems/discrete-math-recurrence-relations-1.json';
import discreteMathGraphColoring1 from '@/public/problems/discrete-math-graph-coloring-1.json';
import discreteMathCombinatoricsPigeonhole1 from '@/public/problems/discrete-math-combinatorics-pigeonhole-1.json';
import discreteMathGeneratingFunctions1 from '@/public/problems/discrete-math-generating-functions-1.json';
import discreteMathRamseyTheory1 from '@/public/problems/discrete-math-ramsey-theory-1.json';
import discreteMathInclusionExclusion1 from '@/public/problems/discrete-math-inclusion-exclusion-1.json';
import discreteMathBinomialTheorem1 from '@/public/problems/discrete-math-binomial-theorem-1.json';
import graphTheoryEulersFormula1 from '@/public/problems/graph-theory-eulers-formula-1.json';
import graphTheoryPlanarGraphs1 from '@/public/problems/graph-theory-planar-graphs-1.json';
// Number Theory (additional)
import numberTheoryFermatsLittleTheorem1 from '@/public/problems/number-theory-fermats-little-theorem-1.json';
import numberTheoryChineseRemainder1 from '@/public/problems/number-theory-chinese-remainder-1.json';
import numberTheoryBezoutsIdentity1 from '@/public/problems/number-theory-bezouts-identity-1.json';
import numberTheoryEulerTotient1 from '@/public/problems/number-theory-euler-totient-1.json';
import numberTheoryQuadraticResidues1 from '@/public/problems/number-theory-quadratic-residues-1.json';
// Mathematical Logic
import logicPropositionalLogic1 from '@/public/problems/logic-propositional-logic-1.json';
import logicStrongInduction1 from '@/public/problems/logic-strong-induction-1.json';
// Topology (additional)
import topologyOpenClosedSets1 from '@/public/problems/topology-open-closed-sets-1.json';
import topologyCompactness1 from '@/public/problems/topology-compactness-1.json';
import topologyConnectedness1 from '@/public/problems/topology-connectedness-1.json';
import topologyHausdorffSpaces1 from '@/public/problems/topology-hausdorff-spaces-1.json';
import topologyContinuousFunctions1 from '@/public/problems/topology-continuous-functions-1.json';
import topologyHomeomorphisms1 from '@/public/problems/topology-homeomorphisms-1.json';
import topologyQuotientSpaces1 from '@/public/problems/topology-quotient-spaces-1.json';

// Problem database
const PROBLEM_DB: { [key: string]: Problem } = {
  'algebra-quadratic-1': algebraQuadratic1 as Problem,
  'algebra-systems-linear-1': algebraSystemsLinear1 as Problem,
  'algebra-polynomial-division-1': algebraPolynomialDivision1 as any as Problem,
  'algebra-complex-numbers-1': algebraComplexNumbers1 as any as Problem,
  'algebra-matrix-mult-1': algebraMatrixMult1 as any as Problem,
  'algebra-partial-fractions-1': algebraPartialFractions1 as any as Problem,
  'algebra-logarithm-properties-1': algebraLogarithmProperties1 as any as Problem,
  'algebra-vietas-formulas-1': algebraVietasFormulas1 as any as Problem,
  'calc-derivative-chain-rule-1': calcDerivativeChainRule1 as Problem,
  'calculus-limit-epsilon-delta-1': calculusLimitEpsilonDelta1 as Problem,
  'calculus-integration-substitution-1': calculusIntegrationSubstitution1 as Problem,
  'calculus-mvt-1': calculusMvt1 as any as Problem,
  'calculus-ftc-1': calculusFtc1 as any as Problem,
  'calculus-integration-by-parts-1': calculusIntegrationByParts1 as any as Problem,
  'calculus-lhopitals-rule-1': calculusLhopitalsRule1 as any as Problem,
  'geometry-triangle-angles-1': geometryTriangleAngles1 as Problem,
  'geometry-pythagorean-proof-1': geometryPythagoreanProof1 as Problem,
  'geometry-similar-triangles-1': geometrySimilarTriangles1 as any as Problem,
  'geometry-inscribed-angle-1': geometryInscribedAngle1 as any as Problem,
  'geometry-coordinate-geometry-1': geometryCoordinateGeometry1 as any as Problem,
  'geometry-power-of-a-point-1': geometryPowerOfAPoint1 as any as Problem,
  'geometry-triangle-centers-1': geometryTriangleCenters1 as any as Problem,
  'differential-geometry-curvature-1': differentialGeometryCurvature1 as any as Problem,
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
  'linear-algebra-orthogonal-matrices-1': linearAlgebraOrthogonalMatrices1 as any as Problem,
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
  'differential-equations-variation-parameters-1': differentialEquationsVariationParameters1 as any as Problem,
  'differential-equations-boundary-value-1': differentialEquationsBoundaryValue1 as any as Problem,
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
  'calculus-sequences-limits-1': calculusSequencesLimits1 as any as Problem,
  // Abstract Algebra (additional)
  'abstract-algebra-cyclic-groups-1': abstractAlgebraCyclicGroups1 as any as Problem,
  // Statistics
  'statistics-hypothesis-testing-1': statisticsHypothesisTesting1 as any as Problem,
  'statistics-linear-regression-1': statisticsLinearRegression1 as any as Problem,
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
  'calculus-mean-value-theorem-integrals-1': calculusMeanValueTheoremIntegrals1 as any as Problem,
  'calculus-inverse-functions-1': calculusInverseFunctions1 as any as Problem,
  'calculus-parametric-equations-1': calculusParametricEquations1 as any as Problem,
  // Linear Algebra (additional)
  'linear-algebra-gaussian-elimination-1': linearAlgebraGaussianElimination1 as any as Problem,
  'linear-algebra-matrix-inverse-1': linearAlgebraMatrixInverse1 as any as Problem,
  'linear-algebra-orthogonal-projection-1': linearAlgebraOrthogonalProjection1 as any as Problem,
  'linear-algebra-least-squares-1': linearAlgebraLeastSquares1 as any as Problem,
  'linear-algebra-qr-decomposition-1': linearAlgebraQrDecomposition1 as any as Problem,
  'linear-algebra-eigenspaces-1': linearAlgebraEigenspaces1 as any as Problem,
  'linear-algebra-svd-intro-1': linearAlgebraSvdIntro1 as any as Problem,
  // Multivariable Calculus (additional)
  'multivariable-directional-derivative-1': multivariableDirectionalDerivative1 as any as Problem,
  'multivariable-conservative-fields-1': multivariableConservativeFields1 as any as Problem,
  'multivariable-stokes-theorem-1': multivariableStokesTheorem1 as any as Problem,
  'multivariable-jacobian-1': multivariableJacobian1 as any as Problem,
  // Differential Equations (additional)
  'differential-equations-exact-1': differentialEquationsExact1 as any as Problem,
  'differential-equations-bernoulli-1': differentialEquationsBernoulli1 as any as Problem,
  'differential-equations-pde-1': differentialEquationsPde1 as any as Problem,
  // Real Analysis (additional)
  'real-analysis-cauchy-sequence-1': realAnalysisCauchySequence1 as any as Problem,
  'real-analysis-bolzano-weierstrass-1': realAnalysisBolzanoWeierstrass1 as any as Problem,
  'real-analysis-uniform-convergence-1': realAnalysisUniformConvergence1 as any as Problem,
  'real-analysis-riemann-integration-1': realAnalysisRiemannIntegration1 as any as Problem,
  'real-analysis-continuous-functions-1': realAnalysisContinuousFunctions1 as any as Problem,
  'real-analysis-series-convergence-1': realAnalysisSeriesConvergence1 as any as Problem,
  'real-analysis-limsup-liminf-1': realAnalysisLimsupLiminf1 as any as Problem,
  // Probability (additional)
  'probability-random-variables-1': probabilityRandomVariables1 as any as Problem,
  'probability-normal-distribution-1': probabilityNormalDistribution1 as any as Problem,
  'probability-conditional-probability-1': probabilityConditionalProbability1 as any as Problem,
  'probability-bayes-network-1': probabilityBayesNetwork1 as any as Problem,
  'probability-continuous-distributions-1': probabilityContinuousDistributions1 as any as Problem,
  'probability-markov-chains-1': probabilityMarkovChains1 as any as Problem,
  'probability-law-large-numbers-1': probabilityLawLargeNumbers1 as any as Problem,
  // Numerical Analysis
  'numerical-analysis-newtons-method-1': numericalAnalysisNewtonsMethod1 as any as Problem,
  'numerical-analysis-euler-method-1': numericalAnalysisEulerMethod1 as any as Problem,
  'numerical-analysis-runge-kutta-1': numericalAnalysisRungeKutta1 as any as Problem,
  'numerical-analysis-lagrange-interpolation-1': numericalAnalysisLagrangeInterpolation1 as any as Problem,
  'numerical-analysis-simpsons-rule-1': numericalAnalysisSimpsonsRule1 as any as Problem,
  'numerical-analysis-bisection-method-1': numericalAnalysisBisectionMethod1 as any as Problem,
  'numerical-analysis-finite-differences-1': numericalAnalysisFiniteDifferences1 as any as Problem,
  // Abstract Algebra (more topics)
  'abstract-algebra-subgroups-1': abstractAlgebraSubgroups1 as any as Problem,
  'abstract-algebra-homomorphisms-1': abstractAlgebraHomomorphisms1 as any as Problem,
  'abstract-algebra-rings-1': abstractAlgebraRings1 as any as Problem,
  'abstract-algebra-group-actions-1': abstractAlgebraGroupActions1 as any as Problem,
  'abstract-algebra-quotient-groups-1': abstractAlgebraQuotientGroups1 as any as Problem,
  'abstract-algebra-field-extensions-1': abstractAlgebraFieldExtensions1 as any as Problem,
  'abstract-algebra-polynomial-rings-1': abstractAlgebraPolynomialRings1 as any as Problem,
  'abstract-algebra-ideals-1': abstractAlgebraIdeals1 as any as Problem,
  // Complex Analysis (more topics)
  'complex-analysis-residue-theorem-1': complexAnalysisResidueTheorem1 as any as Problem,
  'complex-analysis-laurent-series-1': complexAnalysisLaurentSeries1 as any as Problem,
  'complex-analysis-cauchy-theorem-1': complexAnalysisCauchyTheorem1 as any as Problem,
  'complex-analysis-conformal-mapping-1': complexAnalysisConformalMapping1 as any as Problem,
  'complex-analysis-analytic-continuation-1': complexAnalysisAnalyticContinuation1 as any as Problem,
  'complex-analysis-poles-residues-1': complexAnalysisPolesResidues1 as any as Problem,
  'complex-analysis-conformal-mappings-1': complexAnalysisConformalMappings1 as any as Problem,
  // Discrete Math (additional)
  'discrete-math-recurrence-relations-1': discreteMathRecurrenceRelations1 as any as Problem,
  'discrete-math-graph-coloring-1': discreteMathGraphColoring1 as any as Problem,
  'discrete-math-combinatorics-pigeonhole-1': discreteMathCombinatoricsPigeonhole1 as any as Problem,
  'discrete-math-generating-functions-1': discreteMathGeneratingFunctions1 as any as Problem,
  'discrete-math-ramsey-theory-1': discreteMathRamseyTheory1 as any as Problem,
  'discrete-math-inclusion-exclusion-1': discreteMathInclusionExclusion1 as any as Problem,
  'discrete-math-binomial-theorem-1': discreteMathBinomialTheorem1 as any as Problem,
  'graph-theory-eulers-formula-1': graphTheoryEulersFormula1 as any as Problem,
  'graph-theory-planar-graphs-1': graphTheoryPlanarGraphs1 as any as Problem,
  // Number Theory (additional)
  'number-theory-fermats-little-theorem-1': numberTheoryFermatsLittleTheorem1 as any as Problem,
  'number-theory-chinese-remainder-1': numberTheoryChineseRemainder1 as any as Problem,
  'number-theory-bezouts-identity-1': numberTheoryBezoutsIdentity1 as any as Problem,
  'number-theory-euler-totient-1': numberTheoryEulerTotient1 as any as Problem,
  'number-theory-quadratic-residues-1': numberTheoryQuadraticResidues1 as any as Problem,
  // Mathematical Logic
  'logic-propositional-logic-1': logicPropositionalLogic1 as any as Problem,
  'logic-strong-induction-1': logicStrongInduction1 as any as Problem,
  // Topology (additional)
  'topology-open-closed-sets-1': topologyOpenClosedSets1 as any as Problem,
  'topology-compactness-1': topologyCompactness1 as any as Problem,
  'topology-connectedness-1': topologyConnectedness1 as any as Problem,
  'topology-hausdorff-spaces-1': topologyHausdorffSpaces1 as any as Problem,
  'topology-continuous-functions-1': topologyContinuousFunctions1 as any as Problem,
  'topology-homeomorphisms-1': topologyHomeomorphisms1 as any as Problem,
  'topology-quotient-spaces-1': topologyQuotientSpaces1 as any as Problem,
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
