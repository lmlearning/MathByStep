import Link from 'next/link';
import { getAllProblemMetadata } from '@/lib/data/problems';
import { Card } from '@/components/shared/Card';
import { TextWithMath } from '@/components/shared/MathRenderer';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map URL slugs to display names
const CATEGORY_MAP: { [key: string]: string } = {
  'algebra': 'Algebra',
  'calculus': 'Calculus',
  'geometry': 'Geometry',
  'number-theory': 'Number Theory',
  'logic-proofs': 'Logic & Proofs',
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = CATEGORY_MAP[slug];

  if (!categoryName) {
    notFound();
  }

  // Get all problems and filter by category
  const allProblems = await getAllProblemMetadata();
  const problems = allProblems.filter(p => p.topic === categoryName);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Back to Categories
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {categoryName}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            {problems.length} problem{problems.length !== 1 ? 's' : ''} available
          </p>
        </header>

        {/* Problem List */}
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

        {problems.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No problems available in this category yet.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
