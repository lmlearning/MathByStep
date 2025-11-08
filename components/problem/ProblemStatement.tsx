import { Card } from '../shared/Card';

interface ProblemStatementProps {
  title: string;
  statement: string;
  type: 'problem' | 'proof';
}

export function ProblemStatement({ title, statement, type }: ProblemStatementProps) {
  return (
    <Card padding="lg" className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-300 dark:border-blue-700">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
            {type}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
          {statement}
        </p>
      </div>
    </Card>
  );
}
