'use client';

import { useState } from 'react';
import { Card } from '../shared/Card';
import { TextWithMath } from '../shared/MathRenderer';

interface ReflectionPromptProps {
  question: string;
  hint?: string;
}

export function ReflectionPrompt({ question, hint }: ReflectionPromptProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <Card padding="md" className="bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800">
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-2xl">🤔</span>
          <TextWithMath text={question} className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1" />
        </div>

        {hint && (
          <div>
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium underline"
            >
              {showHint ? 'Hide hint' : 'Show hint'}
            </button>
            {showHint && (
              <div className="mt-2 p-3 bg-purple-100 dark:bg-purple-900/30 rounded border border-purple-200 dark:border-purple-700">
                <TextWithMath text={`💡 ${hint}`} className="text-sm text-gray-800 dark:text-gray-200" />
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
