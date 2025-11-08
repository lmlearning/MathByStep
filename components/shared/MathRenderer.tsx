'use client';

import 'katex/dist/katex.min.css';
import katex from 'katex';
import { useEffect, useRef } from 'react';

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

export function MathRenderer({ math, block = false, className = '' }: MathRendererProps) {
  const containerRef = useRef<HTMLSpanElement | HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          displayMode: block,
          throwOnError: false,
          errorColor: '#cc0000',
          strict: false,
          trust: false,
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
        if (containerRef.current) {
          containerRef.current.textContent = math;
        }
      }
    }
  }, [math, block]);

  const Component = block ? 'div' : 'span';

  return (
    <Component
      ref={containerRef as any}
      className={`math-renderer ${block ? 'math-block' : 'math-inline'} ${className}`}
    />
  );
}

interface TextWithMathProps {
  text: string;
  className?: string;
}

/**
 * Renders text with inline LaTeX math between $ delimiters
 * Example: "The derivative of $x^2$ is $2x$"
 */
export function TextWithMath({ text, className = '' }: TextWithMathProps) {
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1);
          return <MathRenderer key={index} math={math} block={false} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}
