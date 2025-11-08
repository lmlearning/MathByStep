import { Card } from '../shared/Card';

interface CurrentStateProps {
  description: string;
  equations?: string[];
}

export function CurrentState({ description, equations }: CurrentStateProps) {
  return (
    <Card padding="md" className="bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
      <div className="space-y-3">
        <p className="text-gray-800 dark:text-gray-200 font-medium">{description}</p>
        {equations && equations.length > 0 && (
          <div className="space-y-2">
            {equations.map((eq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 px-4 py-2 rounded border border-blue-200 dark:border-blue-700"
              >
                <p className="text-gray-900 dark:text-gray-100 font-mono text-sm md:text-base">
                  {eq}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
