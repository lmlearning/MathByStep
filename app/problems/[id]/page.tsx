'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Problem } from '@/lib/types/problem.types';
import { getProblem } from '@/lib/data/problems';
import { useProgress } from '@/lib/hooks/useProgress';
import { ProblemStatement } from '@/components/problem/ProblemStatement';
import { StepContainer } from '@/components/problem/StepContainer';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { Button } from '@/components/shared/Button';
import { shuffleOptions, ShuffledStep } from '@/lib/utils/shuffleOptions';

export default function ProblemPage() {
  const params = useParams();
  const router = useRouter();
  const problemId = params.id as string;

  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [stepStartTime, setStepStartTime] = useState(Date.now());
  const [shuffledStep, setShuffledStep] = useState<ShuffledStep | null>(null);

  const { startProblem, recordAttempt, nextStep, completeProblem, getProblemProgress } =
    useProgress();

  // Load problem data
  useEffect(() => {
    async function loadProblem() {
      const data = await getProblem(problemId);
      if (!data) {
        router.push('/');
        return;
      }
      setProblem(data);
      setLoading(false);

      // Check if problem is already in progress
      const progress = getProblemProgress(problemId);
      if (progress) {
        setCurrentStepIndex(progress.currentStepIndex);
      } else {
        startProblem(problemId);
      }
    }

    loadProblem();
  }, [problemId]);

  // Shuffle options when step changes
  useEffect(() => {
    if (problem && problem.steps[currentStepIndex]) {
      const currentStep = problem.steps[currentStepIndex];
      const shuffled = shuffleOptions(
        currentStep.options,
        currentStep.correctOptionIndex
      );
      setShuffledStep(shuffled);
    }
  }, [problem, currentStepIndex]);

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback || !problem || !shuffledStep) return;

    setSelectedOption(optionIndex);
    setShowFeedback(true);

    const currentStep = problem.steps[currentStepIndex];
    const isCorrect = optionIndex === shuffledStep.shuffledCorrectIndex;
    const timeSpent = Math.floor((Date.now() - stepStartTime) / 1000);

    recordAttempt(problemId, currentStep.id, optionIndex, isCorrect, timeSpent);
  };

  const handleContinue = () => {
    if (!problem) return;

    const isLastStep = currentStepIndex >= problem.steps.length - 1;

    if (isLastStep) {
      completeProblem(problemId);
      router.push(`/completed/${problemId}`);
    } else {
      setCurrentStepIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
      setStepStartTime(Date.now());
      nextStep(problemId);

      // Scroll to top on mobile
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading problem...</p>
        </div>
      </div>
    );
  }

  if (!problem) {
    return null;
  }

  const currentStep = problem.steps[currentStepIndex];
  const isLastStep = currentStepIndex >= problem.steps.length - 1;

  // Create a modified step with shuffled options
  const stepWithShuffledOptions = shuffledStep
    ? {
        ...currentStep,
        options: shuffledStep.shuffledOptions,
        correctOptionIndex: shuffledStep.shuffledCorrectIndex,
      }
    : currentStep;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-6 md:py-8">
        {/* Back Button */}
        <div className="mb-4">
          <Button variant="outline" size="sm" onClick={handleBack}>
            ← Back to Problems
          </Button>
        </div>

        {/* Problem Statement */}
        <div className="mb-6">
          <ProblemStatement
            title={problem.title}
            statement={problem.statement.text}
            type={problem.type}
          />
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <ProgressBar current={currentStepIndex + 1} total={problem.steps.length} />
        </div>

        {/* Current Step */}
        <StepContainer
          step={stepWithShuffledOptions}
          selectedOption={selectedOption}
          showFeedback={showFeedback}
          onOptionSelect={handleOptionSelect}
          onContinue={handleContinue}
          isLastStep={isLastStep}
          shuffledToOriginalMap={shuffledStep?.shuffledToOriginalMap}
        />
      </div>
    </div>
  );
}
