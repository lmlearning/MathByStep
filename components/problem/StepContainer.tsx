'use client';

import { Step } from '@/lib/types/problem.types';
import { CurrentState } from './CurrentState';
import { ReflectionPrompt } from './ReflectionPrompt';
import { OptionCard } from './OptionCard';
import { FeedbackDisplay } from './FeedbackDisplay';

interface StepContainerProps {
  step: Step;
  selectedOption: number | null;
  showFeedback: boolean;
  onOptionSelect: (index: number) => void;
  onContinue: () => void;
  isLastStep: boolean;
}

export function StepContainer({
  step,
  selectedOption,
  showFeedback,
  onOptionSelect,
  onContinue,
  isLastStep,
}: StepContainerProps) {
  return (
    <div className="space-y-6">
      {/* Current State */}
      <CurrentState
        description={step.currentState.description}
        equations={step.currentState.equations}
      />

      {/* Reflection Prompt (only shown before selection) */}
      {!showFeedback && (
        <ReflectionPrompt question={step.prompt.question} hint={step.prompt.hint} />
      )}

      {/* Options (only shown before feedback) */}
      {!showFeedback && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 px-1">
            Choose the best approach:
          </p>
          {step.options.map((option, index) => (
            <OptionCard
              key={option.id}
              option={option}
              index={index}
              isSelected={selectedOption === index}
              showFeedback={false}
              onClick={() => onOptionSelect(index)}
            />
          ))}
        </div>
      )}

      {/* Feedback (shown after selection) */}
      {showFeedback && selectedOption !== null && (
        <FeedbackDisplay
          step={step}
          selectedOption={selectedOption}
          onContinue={onContinue}
          isLastStep={isLastStep}
        />
      )}
    </div>
  );
}
