import Link from 'next/link';
import { getAllProblemMetadata } from '@/lib/data/problems';
import { Card } from '@/components/shared/Card';

// Category configuration
const CATEGORIES = [
  {
    name: 'Algebra',
    slug: 'algebra',
    description: 'Equations, polynomials, and algebraic structures',
    icon: '𝑥',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Calculus',
    slug: 'calculus',
    description: 'Limits, derivatives, integrals, and infinite series',
    icon: '∫',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Linear Algebra',
    slug: 'linear-algebra',
    description: 'Vector spaces, matrices, eigenvalues, and transformations',
    icon: '⊕',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Multivariable Calculus',
    slug: 'multivariable-calculus',
    description: 'Partial derivatives, multiple integrals, vector calculus',
    icon: '∇',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Differential Equations',
    slug: 'differential-equations',
    description: 'ODEs, PDEs, systems, and solution techniques',
    icon: 'dy/dx',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Geometry',
    slug: 'geometry',
    description: 'Shapes, angles, proofs, and spatial reasoning',
    icon: '△',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Number Theory',
    slug: 'number-theory',
    description: 'Primes, divisibility, modular arithmetic, and more',
    icon: '#',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Logic & Proofs',
    slug: 'logic-proofs',
    description: 'Proof techniques, reasoning, and mathematical logic',
    icon: '∴',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    name: 'Probability & Statistics',
    slug: 'probability-statistics',
    description: 'Random variables, distributions, inference, and regression',
    icon: '𝜎',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Real Analysis',
    slug: 'real-analysis',
    description: 'Sequences, series, continuity, and rigorous calculus',
    icon: '𝜀',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    name: 'Abstract Algebra',
    slug: 'abstract-algebra',
    description: 'Groups, rings, fields, and algebraic structures',
    icon: '⊗',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    name: 'Complex Analysis',
    slug: 'complex-analysis',
    description: 'Analytic functions, contour integrals, and residues',
    icon: 'ℂ',
    color: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Discrete Mathematics',
    slug: 'discrete-mathematics',
    description: 'Combinatorics, graph theory, and discrete structures',
    icon: '∑',
    color: 'from-emerald-500 to-green-600',
  },
  {
    name: 'Topology',
    slug: 'topology',
    description: 'Open sets, continuity, compactness, and connectedness',
    icon: '○',
    color: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Numerical Analysis',
    slug: 'numerical-analysis',
    description: 'Approximation methods, numerical ODEs, and error analysis',
    icon: '≈',
    color: 'from-amber-500 to-yellow-600',
  },
];

export default async function Home() {
  const problems = await getAllProblemMetadata();

  // Count problems per category
  const categoryCounts = problems.reduce((acc, problem) => {
    const category = CATEGORIES.find(c => c.name === problem.topic);
    if (category) {
      acc[category.slug] = (acc[category.slug] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Math By Step
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Learn mathematical proofs and problem-solving step by step
          </p>
        </header>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Explore by Topic
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATEGORIES.map((category) => {
              const count = categoryCounts[category.slug] || 0;

              return (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <Card className="hover:shadow-xl transition-all cursor-pointer h-full">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-2xl font-bold`}>
                        {category.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {count} problem{count !== 1 ? 's' : ''}
                          </span>
                          <svg
                            className="w-4 h-4 text-blue-600 dark:text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12">
          <Card padding="lg" className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              How It Works
            </h3>
            <ol className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <span>Read the problem or theorem to prove</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <span>Think about the right approach for each step</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <span>Choose from plausible options and learn from feedback</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <span>Build your understanding step by step to the solution</span>
              </li>
            </ol>
          </Card>
        </div>
      </div>
    </div>
  );
}
