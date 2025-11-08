// Core data types for Math By Step application

export interface Problem {
  id: string;
  type: 'proof' | 'problem';

  // Metadata
  title: string;
  topic: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  estimatedTime: number; // Minutes
  tags: string[];
  prerequisites?: string[];

  // Content
  statement: {
    text: string;
    visual?: VisualElement;
  };

  // Learning objectives
  objectives: string[];

  // Step-by-step solution
  steps: Step[];

  // Completion content
  summary: {
    keyInsights: string[];
    fullSolution: string;
    relatedProblems: string[];
  };
}

export interface Step {
  id: string;
  order: number;

  // Current state display
  currentState: {
    description: string;
    visual?: VisualElement;
    equations?: string[];
  };

  // Reflection prompt
  prompt: {
    question: string;
    hint?: string;
    thinkingTime?: number;
  };

  // Options for user selection
  options: Option[];

  // Correct answer index
  correctOptionIndex: number;

  // Feedback after selection
  feedback: {
    correct: {
      explanation: string;
      insight?: string;
    };
    incorrect: {
      [optionIndex: number]: string;
    };
  };

  // Resulting state after this step
  resultState: {
    description: string;
    visual?: VisualElement;
    equations?: string[];
  };
}

export interface Option {
  id: string;
  text: string;
  visual?: VisualElement;
  reasoning?: string;
}

export interface VisualElement {
  type: 'image' | 'svg' | 'latex' | 'diagram';
  content: string;
  caption?: string;
  alt: string;
}

// User progress types
export interface UserProgress {
  problemProgress: {
    [problemId: string]: ProblemProgress;
  };
  stats: {
    problemsCompleted: number;
    totalSteps: number;
    correctFirstTries: number;
    averageAccuracy: number;
  };
}

export interface ProblemProgress {
  status: 'not-started' | 'in-progress' | 'completed';
  currentStepIndex: number;
  attempts: StepAttempt[];
  startedAt: string;
  completedAt?: string;
  bookmarked: boolean;
}

export interface StepAttempt {
  stepId: string;
  selectedOption: number;
  isCorrect: boolean;
  attemptNumber: number;
  timestamp: string;
  timeSpent: number; // Seconds
}
