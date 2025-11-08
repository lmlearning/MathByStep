'use client';

import { useState, useEffect } from 'react';
import { UserProgress, ProblemProgress, StepAttempt } from '../types/problem.types';

const STORAGE_KEY = 'mathbystep_progress';

// Default progress structure
const defaultProgress: UserProgress = {
  problemProgress: {},
  stats: {
    problemsCompleted: 0,
    totalSteps: 0,
    correctFirstTries: 0,
    averageAccuracy: 0,
  },
};

/**
 * Hook for managing user progress with localStorage persistence
 */
export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProgress(parsed);
      } catch (error) {
        console.error('Failed to parse stored progress:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  /**
   * Start a new problem
   */
  const startProblem = (problemId: string) => {
    setProgress(prev => ({
      ...prev,
      problemProgress: {
        ...prev.problemProgress,
        [problemId]: {
          status: 'in-progress',
          currentStepIndex: 0,
          attempts: [],
          startedAt: new Date().toISOString(),
          bookmarked: false,
        },
      },
    }));
  };

  /**
   * Record a step attempt
   */
  const recordAttempt = (
    problemId: string,
    stepId: string,
    selectedOption: number,
    isCorrect: boolean,
    timeSpent: number
  ) => {
    setProgress(prev => {
      const problemProgress = prev.problemProgress[problemId];
      if (!problemProgress) return prev;

      const existingAttempts = problemProgress.attempts.filter(a => a.stepId === stepId);
      const attemptNumber = existingAttempts.length + 1;

      const newAttempt: StepAttempt = {
        stepId,
        selectedOption,
        isCorrect,
        attemptNumber,
        timestamp: new Date().toISOString(),
        timeSpent,
      };

      return {
        ...prev,
        problemProgress: {
          ...prev.problemProgress,
          [problemId]: {
            ...problemProgress,
            attempts: [...problemProgress.attempts, newAttempt],
          },
        },
        stats: {
          ...prev.stats,
          totalSteps: prev.stats.totalSteps + 1,
          correctFirstTries:
            prev.stats.correctFirstTries + (isCorrect && attemptNumber === 1 ? 1 : 0),
          averageAccuracy: calculateAccuracy([...prev.problemProgress[problemId].attempts, newAttempt]),
        },
      };
    });
  };

  /**
   * Move to next step
   */
  const nextStep = (problemId: string) => {
    setProgress(prev => {
      const problemProgress = prev.problemProgress[problemId];
      if (!problemProgress) return prev;

      return {
        ...prev,
        problemProgress: {
          ...prev.problemProgress,
          [problemId]: {
            ...problemProgress,
            currentStepIndex: problemProgress.currentStepIndex + 1,
          },
        },
      };
    });
  };

  /**
   * Mark problem as completed
   */
  const completeProblem = (problemId: string) => {
    setProgress(prev => {
      const problemProgress = prev.problemProgress[problemId];
      if (!problemProgress) return prev;

      return {
        ...prev,
        problemProgress: {
          ...prev.problemProgress,
          [problemId]: {
            ...problemProgress,
            status: 'completed',
            completedAt: new Date().toISOString(),
          },
        },
        stats: {
          ...prev.stats,
          problemsCompleted: prev.stats.problemsCompleted + 1,
        },
      };
    });
  };

  /**
   * Get progress for a specific problem
   */
  const getProblemProgress = (problemId: string): ProblemProgress | null => {
    return progress.problemProgress[problemId] || null;
  };

  /**
   * Reset all progress (for testing)
   */
  const resetProgress = () => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    isLoaded,
    startProblem,
    recordAttempt,
    nextStep,
    completeProblem,
    getProblemProgress,
    resetProgress,
  };
}

/**
 * Calculate accuracy from attempts
 */
function calculateAccuracy(attempts: StepAttempt[]): number {
  if (attempts.length === 0) return 0;
  const correct = attempts.filter(a => a.isCorrect).length;
  return (correct / attempts.length) * 100;
}
