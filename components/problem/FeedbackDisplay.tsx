import { Step } from '@/lib/types/problem.types';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { TextWithMath, MathRenderer } from '../shared/MathRenderer';

interface FeedbackDisplayProps {
  step: Step;
  selectedOption: number;
  onContinue: () => void;
  isLastStep: boolean;
}

export function FeedbackDisplay({
  step,
  selectedOption,
  onContinue,
  isLastStep,
}: FeedbackDisplayProps) {
  const isCorrect = selectedOption === step.correctOptionIndex;
  const feedbackText = isCorrect
    ? step.feedback.correct.explanation
    : step.feedback.incorrect[selectedOption];

  return (
    <div className="space-y-4">
      {/* Feedback Card */}
      <Card
        padding="md"
        className={
          isCorrect
            ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800'
            : 'bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800'
        }
      >
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-2xl">{isCorrect ? '✓' : '→'}</span>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
                {isCorrect ? 'Correct!' : "Let's think about this..."}
              </h3>
              <TextWithMath text={feedbackText} className="text-gray-800 dark:text-gray-200 leading-relaxed" />
            </div>
          </div>

          {isCorrect && step.feedback.correct.insight && (
            <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-700">
              <TextWithMath
                text={`💡 Key Insight: ${step.feedback.correct.insight}`}
                className="text-sm font-medium text-gray-800 dark:text-gray-200"
              />
            </div>
          )}
        </div>
      </Card>

      {/* Result State */}
      {step.resultState && (
        <Card padding="md" className="bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
          <div className="space-y-3">
            <TextWithMath text={step.resultState.description} className="text-gray-800 dark:text-gray-200 font-medium" />
            {step.resultState.equations && step.resultState.equations.length > 0 && (
              <div className="space-y-2">
                {step.resultState.equations.map((eq, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 px-4 py-3 rounded border border-blue-200 dark:border-blue-700"
                  >
                    <MathRenderer math={eq} block={false} className="text-gray-900 dark:text-gray-100" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Continue Button */}
      <div className="flex justify-center pt-2">
        <Button onClick={onContinue} size="lg" className="w-full md:w-auto min-w-[200px]">
          {isLastStep ? 'Complete Problem' : 'Continue to Next Step'}
        </Button>
      </div>
    </div>
  );
}
