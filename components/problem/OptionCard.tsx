'use client';

import { Option } from '@/lib/types/problem.types';
import { Card } from '../shared/Card';

interface OptionCardProps {
  option: Option;
  index: number;
  isSelected: boolean;
  isCorrect?: boolean;
  showFeedback: boolean;
  onClick: () => void;
}

export function OptionCard({
  option,
  index,
  isSelected,
  isCorrect,
  showFeedback,
  onClick,
}: OptionCardProps) {
  const letters = ['A', 'B', 'C'];

  const getCardStyles = () => {
    if (!showFeedback) {
      return isSelected
        ? 'border-2 border-blue-600 bg-blue-50 dark:bg-blue-900/20'
        : 'border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400';
    }

    if (isSelected && isCorrect) {
      return 'border-2 border-green-600 bg-green-50 dark:bg-green-900/20';
    }

    if (isSelected && !isCorrect) {
      return 'border-2 border-red-600 bg-red-50 dark:bg-red-900/20';
    }

    return 'border-2 border-gray-200 dark:border-gray-700 opacity-60';
  };

  return (
    <div
      className={`${getCardStyles()} rounded-lg p-4 cursor-pointer transition-all min-h-[44px]`}
      onClick={!showFeedback ? onClick : undefined}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            isSelected && showFeedback
              ? isCorrect
                ? 'bg-green-600 text-white'
                : 'bg-red-600 text-white'
              : isSelected
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          {letters[index]}
        </div>
        <p className="flex-1 text-gray-900 dark:text-gray-100 leading-relaxed pt-1">
          {option.text}
        </p>
      </div>
    </div>
  );
}
