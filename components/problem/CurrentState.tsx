import { Card } from '../shared/Card';
import { TextWithMath, MathRenderer } from '../shared/MathRenderer';

interface CurrentStateProps {
  description: string;
  equations?: string[];
}

export function CurrentState({ description, equations }: CurrentStateProps) {
  return (
    <Card padding="md" className="bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
      <div className="space-y-3">
        <TextWithMath text={description} className="text-gray-800 dark:text-gray-200 font-medium" />
        {equations && equations.length > 0 && (
          <div className="space-y-2">
            {equations.map((eq, idx) => (
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
  );
}
