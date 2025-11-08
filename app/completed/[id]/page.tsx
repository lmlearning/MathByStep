'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Problem } from '@/lib/types/problem.types';
import { getProblem } from '@/lib/data/problems';
import { useProgress } from '@/lib/hooks/useProgress';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';

export default function CompletionPage() {
  const params = useParams();
  const router = useRouter();
  const problemId = params.id as string;

  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState(true);

  const { getProblemProgress, progress } = useProgress();

  useEffect(() => {
    async function loadProblem() {
      const data = await getProblem(problemId);
      if (!data) {
        router.push('/');
        return;
      }
      setProblem(data);
      setLoading(false);
    }

    loadProblem();
  }, [problemId]);

  if (loading || !problem) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  const problemProgress = getProblemProgress(problemId);
  const attempts = problemProgress?.attempts || [];

  // Calculate stats
  const correctFirstTries = attempts.filter(
    (a, idx, arr) => a.isCorrect && arr.findIndex(attempt => attempt.stepId === a.stepId) === idx
  ).length;

  const accuracy = attempts.length > 0
    ? Math.round((attempts.filter(a => a.isCorrect).length / attempts.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-6 md:py-8">
        {/* Success Banner */}
        <Card padding="lg" className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-300 dark:border-green-700">
          <div className="text-center space-y-4">
            <div className="text-6xl">🎉</div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Problem Complete!
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Great work on <strong>{problem.title}</strong>
            </p>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card padding="md" className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {correctFirstTries}/{problem.steps.length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Correct First Try
            </p>
          </Card>
          <Card padding="md" className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {accuracy}%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Overall Accuracy
            </p>
          </Card>
        </div>

        {/* Key Insights */}
        <Card padding="lg" className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Key Insights
          </h2>
          <ul className="space-y-3">
            {problem.summary.keyInsights.map((insight, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300 pt-0.5">{insight}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Full Solution */}
        <Card padding="lg" className="mb-6 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Complete Solution
          </h2>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
            <p className="text-gray-900 dark:text-gray-100 font-mono text-sm md:text-base whitespace-pre-wrap">
              {problem.summary.fullSolution}
            </p>
          </div>
        </Card>

        {/* Learning Objectives */}
        <Card padding="lg" className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What You Learned
          </h2>
          <ul className="space-y-2">
            {problem.objectives.map((objective, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-green-600 dark:text-green-400 flex-shrink-0">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{objective}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push('/')}
            className="flex-1"
          >
            Back to Problems
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push(`/problems/${problemId}`)}
            className="flex-1"
          >
            Try Again
          </Button>
        </div>

        {/* Overall Progress */}
        <Card padding="lg" className="mt-6 bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Your Progress
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {progress.stats.problemsCompleted}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Problems Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {progress.stats.totalSteps}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Steps</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
