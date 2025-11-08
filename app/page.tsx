import Link from 'next/link';
import { getAllProblemMetadata } from '@/lib/data/problems';
import { Card } from '@/components/shared/Card';
import { TextWithMath } from '@/components/shared/MathRenderer';

export default async function Home() {
  const problems = await getAllProblemMetadata();

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

        {/* Problem List */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Available Problems
          </h2>

          <div className="grid gap-4">
            {problems.map((problem) => (
              <Link key={problem.id} href={`/problems/${problem.id}`}>
                <Card className="hover:shadow-xl transition-all cursor-pointer">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                            {problem.type}
                          </span>
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            {problem.topic}
                          </span>
                        </div>
                        <TextWithMath text={problem.title} className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100" />
                      </div>

                      {/* Difficulty Badge */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-6 rounded-sm ${
                              idx < problem.difficulty
                                ? 'bg-blue-600'
                                : 'bg-gray-300 dark:bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {problem.estimatedTime} min
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        {problem.tags.slice(0, 2).join(', ')}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
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
