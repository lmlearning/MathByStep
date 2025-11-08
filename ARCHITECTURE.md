# Math By Step - Technical Architecture Specification

## Executive Summary
A mobile-first web application for teaching mathematical proofs and problem-solving through interactive, step-by-step guided learning using Socratic methodology and progressive disclosure to minimize cognitive load.

---

## 1. Research Foundation

### 1.1 Educational Psychology Principles

**Cognitive Load Theory**
- **Progressive Disclosure**: Reveal only what's necessary at each step (reduces extrinsic cognitive load by ~40%)
- **Worked Examples**: Step-by-step solutions build knowledge schemas in long-term memory
- **Chunking**: Break complex proofs into meaningful, digestible steps (Miller's Law: 5-9 chunks)

**Socratic Method**
- Question before answer: Prompts active thinking before revealing solution
- Multiple plausible options: Forces evaluation and comparison of approaches
- Immediate feedback with explanation: Reinforces correct reasoning, corrects misconceptions

**Gamification & Motivation**
- Progress visualization (72% increase in task motivation)
- Immediate feedback loops
- Small wins at each step (dopamine release, sustained engagement)

### 1.2 Mobile UX Research Findings

**Critical Statistics**
- 54.8% of educational traffic is mobile (2025)
- Users decide to continue/abandon in 1.5 seconds
- 70% abandon apps due to complex interfaces
- 79% abandon due to navigation difficulties

**Design Imperatives**
- Touch-first interaction (minimum 44x44px tap targets)
- Vertical scrolling over horizontal
- Thumb-friendly navigation zones
- Clear visual hierarchy with ample whitespace
- Dark mode support (standard expectation)

---

## 2. Core User Experience Flow

### 2.1 Learning Journey

```
┌─────────────────────────────────────────────────┐
│ 1. PROBLEM PRESENTATION                         │
│    - Display theorem/problem statement          │
│    - Show visual aids (diagrams, equations)     │
│    - Set context and learning objective         │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│ 2. REFLECTION PROMPT                            │
│    - "What should be the first step?"           │
│    - Pause for user contemplation               │
│    - Optional hint system                       │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│ 3. OPTION SELECTION                             │
│    - 3 plausible options (1 correct, 2 common)  │
│    - Clear, tappable cards                      │
│    - No penalty for wrong choice (growth mind)  │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│ 4. FEEDBACK & EXPLANATION                       │
│    - Visual confirmation (correct/incorrect)    │
│    - Detailed explanation of correct approach   │
│    - Why other options are suboptimal          │
│    - Updated problem state                      │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│ 5. CONTINUE TO NEXT STEP                        │
│    - Progress indicator update                  │
│    - Transition animation                       │
│    - Repeat from step 2 until complete          │
└─────────────────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│ 6. COMPLETION & SUMMARY                         │
│    - Full proof/solution visualization          │
│    - Key insights recap                         │
│    - Related problems suggestion                │
└─────────────────────────────────────────────────┘
```

### 2.2 Interaction Patterns

**Progressive Disclosure Implementation**
- Show only current step context
- Previous steps: Minimized accordion (expandable)
- Next steps: Hidden until current complete
- Problem statement: Sticky header (always visible)

**Error Handling & Growth Mindset**
- Wrong answer → Gentle explanation, not punishment
- "This approach would lead to..." explanation
- Allow retry without penalty
- Track attempts for personalization (not scoring)

---

## 3. Data Architecture

### 3.1 Problem/Proof Schema

```typescript
interface Problem {
  id: string;
  type: 'proof' | 'problem';

  // Metadata
  title: string;
  topic: string;                    // "Calculus", "Algebra", "Geometry"
  difficulty: 1 | 2 | 3 | 4 | 5;   // 1=Beginner, 5=Advanced
  estimatedTime: number;            // Minutes
  tags: string[];                   // ["derivatives", "chain-rule"]
  prerequisites?: string[];         // Problem IDs

  // Content
  statement: {
    text: string;                   // LaTeX/Markdown supported
    visual?: {
      type: 'image' | 'diagram' | 'graph';
      url: string;
      alt: string;
    };
  };

  // Learning objectives
  objectives: string[];             // What student will learn

  // Step-by-step solution
  steps: Step[];

  // Completion content
  summary: {
    keyInsights: string[];
    fullSolution: string;           // Complete proof/solution
    relatedProblems: string[];      // Problem IDs
  };
}

interface Step {
  id: string;
  order: number;

  // Current state display
  currentState: {
    description: string;            // "We now have: ..."
    visual?: VisualElement;
    equations?: string[];           // LaTeX
  };

  // Reflection prompt
  prompt: {
    question: string;               // "What should we do next?"
    hint?: string;                  // Optional hint (hidden by default)
    thinkingTime?: number;          // Suggested pause (seconds)
  };

  // Options for user selection
  options: Option[];

  // Correct answer index
  correctOptionIndex: number;

  // Feedback after selection
  feedback: {
    correct: {
      explanation: string;          // Why this is correct
      insight?: string;             // Key learning point
    };
    incorrect: {
      [optionIndex: number]: string; // Why each wrong option fails
    };
  };

  // Resulting state after this step
  resultState: {
    description: string;
    visual?: VisualElement;
    equations?: string[];
  };
}

interface Option {
  id: string;
  text: string;                     // The step to take
  visual?: VisualElement;           // Optional equation/diagram
  reasoning?: string;               // Why student might choose this
}

interface VisualElement {
  type: 'image' | 'svg' | 'latex' | 'diagram';
  content: string;
  caption?: string;
  alt: string;                      // Accessibility
}
```

### 3.2 User Progress Schema

```typescript
interface UserProgress {
  userId: string;

  // Overall stats
  stats: {
    problemsCompleted: number;
    totalSteps: number;
    correctFirstTries: number;
    averageAccuracy: number;
    studyTime: number;              // Total minutes
  };

  // Per-problem progress
  problemProgress: {
    [problemId: string]: {
      status: 'not-started' | 'in-progress' | 'completed';
      currentStepIndex: number;
      attempts: StepAttempt[];
      startedAt: Date;
      completedAt?: Date;
      bookmarked: boolean;
    };
  };

  // Learning analytics
  analytics: {
    strongTopics: string[];         // Topics with high accuracy
    needsWork: string[];            // Topics with low accuracy
    learningVelocity: number;       // Steps per session
  };
}

interface StepAttempt {
  stepId: string;
  selectedOption: number;
  isCorrect: boolean;
  attemptNumber: number;            // 1, 2, 3...
  timestamp: Date;
  timeSpent: number;                // Seconds on this step
}
```

### 3.3 Data Storage Strategy

**Phase 1 (Prototype/MVP)**
- Static JSON files in `/public/problems/`
- localStorage for user progress
- No backend required

**Phase 2 (Production)**
- Problems: Firestore/Supabase (read-heavy)
- User progress: Firestore/Supabase with real-time sync
- Analytics: Dedicated analytics service (Mixpanel/Amplitude)

---

## 4. Component Architecture

### 4.1 Component Hierarchy

```
App
├── Layout
│   ├── Header (sticky problem title, progress)
│   ├── Navigation (back, home, menu)
│   └── Footer (optional help, settings)
│
├── Pages
│   ├── HomePage
│   │   ├── ProblemList
│   │   │   ├── ProblemCard
│   │   │   └── FilterBar
│   │   └── UserStats
│   │
│   ├── ProblemPage
│   │   ├── ProblemStatement
│   │   ├── ProgressTracker
│   │   ├── StepContainer
│   │   │   ├── CurrentState
│   │   │   ├── ReflectionPrompt
│   │   │   ├── OptionSelector
│   │   │   │   └── OptionCard (x3)
│   │   │   └── FeedbackDisplay
│   │   └── PreviousStepsAccordion
│   │
│   └── CompletionPage
│       ├── SolutionSummary
│       ├── KeyInsights
│       └── NextSteps
│
└── Shared Components
    ├── MathRenderer (LaTeX)
    ├── DiagramViewer
    ├── ProgressBar
    ├── Button
    ├── Card
    └── Modal
```

### 4.2 Key Component Specifications

#### ProblemPage Component
```typescript
'use client';

interface ProblemPageProps {
  problemId: string;
}

export function ProblemPage({ problemId }: ProblemPageProps) {
  // State management
  const [problem, setProblem] = useState<Problem | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [attempts, setAttempts] = useState<StepAttempt[]>([]);

  // Computed values
  const currentStep = problem?.steps[currentStepIndex];
  const isComplete = currentStepIndex >= (problem?.steps.length ?? 0);
  const progress = (currentStepIndex / (problem?.steps.length ?? 1)) * 100;

  // Methods
  const handleOptionSelect = (optionIndex: number) => { ... };
  const handleContinue = () => { ... };
  const handlePrevious = () => { ... };

  return (
    <div className="problem-page">
      <ProblemStatement statement={problem?.statement} />
      <ProgressTracker current={currentStepIndex} total={problem?.steps.length} />

      {!isComplete ? (
        <StepContainer
          step={currentStep}
          selectedOption={selectedOption}
          showFeedback={showFeedback}
          onOptionSelect={handleOptionSelect}
          onContinue={handleContinue}
        />
      ) : (
        <CompletionSummary problem={problem} attempts={attempts} />
      )}
    </div>
  );
}
```

#### StepContainer Component (Core Interactive Element)
```typescript
'use client';

interface StepContainerProps {
  step: Step;
  selectedOption: number | null;
  showFeedback: boolean;
  onOptionSelect: (index: number) => void;
  onContinue: () => void;
}

export function StepContainer({
  step,
  selectedOption,
  showFeedback,
  onOptionSelect,
  onContinue
}: StepContainerProps) {
  return (
    <div className="step-container space-y-6 p-4">
      {/* Current State */}
      <CurrentState state={step.currentState} />

      {/* Reflection Prompt */}
      {!showFeedback && (
        <ReflectionPrompt prompt={step.prompt} />
      )}

      {/* Options */}
      {!showFeedback && (
        <OptionSelector
          options={step.options}
          selectedOption={selectedOption}
          onSelect={onOptionSelect}
        />
      )}

      {/* Feedback */}
      {showFeedback && (
        <FeedbackDisplay
          step={step}
          selectedOption={selectedOption!}
          onContinue={onContinue}
        />
      )}
    </div>
  );
}
```

---

## 5. Mobile-First UI/UX Specifications

### 5.1 Responsive Breakpoints

```typescript
const breakpoints = {
  mobile: '0px',      // 320px - 767px (primary target)
  tablet: '768px',    // 768px - 1023px
  desktop: '1024px',  // 1024px+
};
```

### 5.2 Layout Principles

**Mobile (320px - 767px)**
- Single column layout
- Full-width cards with 16px padding
- Sticky header with problem title (truncated)
- Bottom action buttons (Continue/Submit)
- Minimum 44x44px touch targets
- Font: 16px base (readability)

**Tablet (768px - 1023px)**
- Max width 720px, centered
- Increased padding: 24px
- Larger font: 18px base
- Side-by-side layout for some elements

**Desktop (1024px+)**
- Max width 960px, centered
- Enhanced visuals (larger diagrams)
- Keyboard shortcuts (Enter=Continue, 1-3=Options)
- Font: 18px base

### 5.3 Visual Design System

**Color Palette**
```css
:root {
  /* Primary (Learning/Progress) */
  --color-primary: #3B82F6;        /* Blue 500 */
  --color-primary-dark: #2563EB;   /* Blue 600 */

  /* Feedback */
  --color-correct: #10B981;        /* Green 500 */
  --color-incorrect: #EF4444;      /* Red 500 */
  --color-neutral: #6B7280;        /* Gray 500 */

  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9FAFB;         /* Gray 50 */
  --bg-elevated: #FFFFFF;

  /* Dark mode */
  --bg-primary-dark: #111827;      /* Gray 900 */
  --bg-secondary-dark: #1F2937;    /* Gray 800 */
  --bg-elevated-dark: #374151;     /* Gray 700 */

  /* Text */
  --text-primary: #111827;
  --text-secondary: #6B7280;
  --text-primary-dark: #F9FAFB;
  --text-secondary-dark: #D1D5DB;
}
```

**Typography**
```css
/* Headings */
h1 { font-size: 24px; font-weight: 700; line-height: 1.2; }
h2 { font-size: 20px; font-weight: 600; line-height: 1.3; }
h3 { font-size: 18px; font-weight: 600; line-height: 1.4; }

/* Body */
body { font-size: 16px; font-weight: 400; line-height: 1.6; }
.small { font-size: 14px; line-height: 1.5; }

/* Math content */
.math { font-family: 'Latin Modern Math', 'Computer Modern', serif; }
```

**Spacing Scale**
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
```

### 5.4 Animation & Transitions

**Purpose**: Guide attention, provide feedback, maintain engagement

```css
/* Transition timing */
--transition-fast: 150ms;
--transition-base: 250ms;
--transition-slow: 350ms;

/* Easing functions */
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

**Key Animations**
- Option selection: Scale + shadow (150ms)
- Feedback reveal: Slide up + fade (250ms)
- Step transition: Fade out → Fade in (350ms)
- Progress bar: Width transition (500ms ease-out)
- Correct answer: Gentle pulse (1 cycle)
- Incorrect answer: Subtle shake (1 cycle)

### 5.5 Accessibility Standards

**WCAG 2.1 Level AA Compliance**
- Color contrast ratio ≥ 4.5:1 (text)
- Color contrast ratio ≥ 3:1 (UI components)
- All interactive elements keyboard accessible
- Focus indicators clearly visible
- ARIA labels for screen readers
- Skip navigation links
- Semantic HTML (proper heading hierarchy)

**Math Accessibility**
- LaTeX rendered with MathJax/KaTeX
- Alt text for all mathematical expressions
- Screen reader announcements for feedback

---

## 6. Technical Implementation Stack

### 6.1 Core Technologies

**Framework & Language**
- Next.js 15 (App Router) - SSR/SSG for performance
- TypeScript 5 - Type safety
- React 18 - UI components

**Styling**
- Tailwind CSS 3.4.1 - Utility-first, mobile-first
- CSS Modules - Component-scoped styles
- `@media (prefers-color-scheme: dark)` - Dark mode

**Math Rendering**
- KaTeX or MathJax - LaTeX rendering
- `react-katex` or `react-mathjax` - React integration

**State Management**
- React Context API (sufficient for MVP)
- Zustand (if complexity grows)
- localStorage - Client-side persistence

**Animations**
- Framer Motion - React animation library
- CSS transitions - Simple interactions

**Testing**
- Jest + React Testing Library - Unit tests
- Playwright - E2E testing
- Visual regression: Percy or Chromatic

### 6.2 File Structure

```
/app
  /page.tsx                      # Home page
  /problems
    /[id]
      /page.tsx                  # Problem page
  /completed
    /[id]
      /page.tsx                  # Completion page
  /layout.tsx
  /globals.css

/components
  /problem
    /ProblemStatement.tsx
    /ProgressTracker.tsx
    /StepContainer.tsx
    /CurrentState.tsx
    /ReflectionPrompt.tsx
    /OptionSelector.tsx
    /OptionCard.tsx
    /FeedbackDisplay.tsx
    /CompletionSummary.tsx
  /shared
    /MathRenderer.tsx
    /Button.tsx
    /Card.tsx
    /ProgressBar.tsx
  /layout
    /Header.tsx
    /Navigation.tsx

/lib
  /data
    /problems.ts               # Problem data loader
    /sampleProblems.ts         # Sample problem definitions
  /hooks
    /useProgress.ts            # User progress hook
    /useProblem.ts             # Problem data hook
  /utils
    /mathHelpers.ts
    /progressCalculator.ts
  /types
    /problem.types.ts
    /progress.types.ts

/public
  /problems
    /calculus-derivative-1.json
    /algebra-quadratic-1.json
    /geometry-proof-1.json
  /images
    /diagrams

/tests
  /components
    /StepContainer.test.tsx
  /e2e
    /problem-flow.spec.ts
```

---

## 7. Performance Optimization

### 7.1 Load Time Targets

- Initial page load: < 2 seconds (3G network)
- Time to Interactive (TTI): < 3 seconds
- First Contentful Paint (FCP): < 1.5 seconds
- Lighthouse score: > 90

### 7.2 Optimization Strategies

**Code Splitting**
- Dynamic imports for problem data
- Route-based splitting (Next.js automatic)
- Component lazy loading for heavy elements (diagrams)

**Asset Optimization**
- SVG for diagrams (scalable, small)
- WebP images with PNG fallback
- Lazy load images below fold
- Preload critical fonts

**Caching Strategy**
- Static problem data: Cache indefinitely
- User progress: Update on change, sync on load
- Service worker: Cache shell, network-first for data

**Bundle Size**
- Keep initial bundle < 150KB (gzipped)
- Code splitting per route
- Tree-shaking unused code
- Use lightweight math library (KaTeX < MathJax)

---

## 8. Sample Problem Definition

```json
{
  "id": "calc-derivative-chain-rule-1",
  "type": "problem",
  "title": "Finding the Derivative using Chain Rule",
  "topic": "Calculus",
  "difficulty": 2,
  "estimatedTime": 8,
  "tags": ["derivatives", "chain-rule", "composition"],

  "statement": {
    "text": "Find the derivative of $f(x) = \\sin(x^2 + 1)$ with respect to $x$.",
    "visual": null
  },

  "objectives": [
    "Apply the chain rule to composite functions",
    "Identify inner and outer functions",
    "Combine derivatives correctly"
  ],

  "steps": [
    {
      "id": "step-1",
      "order": 1,
      "currentState": {
        "description": "We need to find $f'(x)$ where $f(x) = \\sin(x^2 + 1)$",
        "equations": ["f(x) = \\sin(x^2 + 1)"]
      },
      "prompt": {
        "question": "What is the first step in finding this derivative?",
        "hint": "Notice that this is a composition of two functions."
      },
      "options": [
        {
          "id": "opt-1",
          "text": "Identify this as a chain rule problem: recognize the outer function $\\sin(u)$ and inner function $u = x^2 + 1$",
          "reasoning": "Chain rule applies to composite functions"
        },
        {
          "id": "opt-2",
          "text": "Directly differentiate to get $\\cos(x^2 + 1)$",
          "reasoning": "Might forget to apply chain rule"
        },
        {
          "id": "opt-3",
          "text": "Expand $\\sin(x^2 + 1)$ using the sum formula",
          "reasoning": "Might confuse with trig identities"
        }
      ],
      "correctOptionIndex": 0,
      "feedback": {
        "correct": {
          "explanation": "Exactly! This is a composite function where $\\sin$ is applied to $x^2 + 1$. The chain rule states: $(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)$. Here, the outer function is $\\sin(u)$ and the inner function is $u = x^2 + 1$.",
          "insight": "Always identify the structure before differentiating."
        },
        "incorrect": {
          "1": "This would be the answer if we forgot the chain rule. When differentiating a composition, we must account for the derivative of the inner function.",
          "2": "The sine sum formula doesn't apply here. We have $\\sin$ of a single expression, not a sum of angles."
        }
      },
      "resultState": {
        "description": "Identified: outer function $f(u) = \\sin(u)$, inner function $u(x) = x^2 + 1$",
        "equations": [
          "f(u) = \\sin(u), \\quad u(x) = x^2 + 1"
        ]
      }
    },
    {
      "id": "step-2",
      "order": 2,
      "currentState": {
        "description": "We have identified: $f(u) = \\sin(u)$ and $u(x) = x^2 + 1$",
        "equations": [
          "f(u) = \\sin(u)",
          "u(x) = x^2 + 1"
        ]
      },
      "prompt": {
        "question": "What should we do next?",
        "hint": "The chain rule requires derivatives of both the outer and inner functions."
      },
      "options": [
        {
          "id": "opt-1",
          "text": "Find the derivative of the outer function: $f'(u) = \\cos(u)$",
          "reasoning": "Need outer derivative for chain rule"
        },
        {
          "id": "opt-2",
          "text": "Substitute $u = x^2 + 1$ back into the original function",
          "reasoning": "Might think we need to simplify first"
        },
        {
          "id": "opt-3",
          "text": "Find the derivative of both functions simultaneously",
          "reasoning": "Might rush the process"
        }
      ],
      "correctOptionIndex": 0,
      "feedback": {
        "correct": {
          "explanation": "Perfect! The derivative of $\\sin(u)$ with respect to $u$ is $\\cos(u)$. This is the first part of the chain rule formula.",
          "insight": "Break down chain rule into steps: outer derivative, then inner derivative."
        },
        "incorrect": {
          "1": "We're on the right track with decomposition, but we need the derivatives now, not the original functions.",
          "2": "Let's take it one step at a time. Finding the outer derivative first keeps our work organized."
        }
      },
      "resultState": {
        "description": "Outer function derivative found: $f'(u) = \\cos(u)$",
        "equations": [
          "f'(u) = \\cos(u)"
        ]
      }
    },
    {
      "id": "step-3",
      "order": 3,
      "currentState": {
        "description": "We have $f'(u) = \\cos(u)$ where $u = x^2 + 1$",
        "equations": [
          "f'(u) = \\cos(u)",
          "u = x^2 + 1"
        ]
      },
      "prompt": {
        "question": "Now what?",
        "hint": "We still need the derivative of the inner function."
      },
      "options": [
        {
          "id": "opt-1",
          "text": "Find the derivative of the inner function: $u'(x) = 2x$",
          "reasoning": "Chain rule needs both derivatives"
        },
        {
          "id": "opt-2",
          "text": "Substitute $u = x^2 + 1$ into $f'(u)$ to get final answer",
          "reasoning": "Might forget to multiply by inner derivative"
        },
        {
          "id": "opt-3",
          "text": "Set $\\cos(u) = 0$ to find critical points",
          "reasoning": "Wrong problem - we're finding derivative, not critical points"
        }
      ],
      "correctOptionIndex": 0,
      "feedback": {
        "correct": {
          "explanation": "Excellent! The derivative of $x^2 + 1$ with respect to $x$ is $2x$. Now we have both pieces needed for the chain rule.",
          "insight": "Chain rule: (outer derivative) × (inner derivative)"
        },
        "incorrect": {
          "1": "Close, but we're missing a crucial step. The chain rule requires multiplying by the derivative of the inner function.",
          "2": "We're finding the derivative, not critical points. Stay focused on the current task."
        }
      },
      "resultState": {
        "description": "Both derivatives found: $f'(u) = \\cos(u)$ and $u'(x) = 2x$",
        "equations": [
          "f'(u) = \\cos(u)",
          "u'(x) = 2x"
        ]
      }
    },
    {
      "id": "step-4",
      "order": 4,
      "currentState": {
        "description": "We have both pieces: $f'(u) = \\cos(u)$ and $u'(x) = 2x$ where $u = x^2 + 1$",
        "equations": [
          "f'(u) = \\cos(u)",
          "u'(x) = 2x",
          "u = x^2 + 1"
        ]
      },
      "prompt": {
        "question": "How do we combine these to get the final answer?",
        "hint": "Remember: chain rule is (outer)' × (inner)'"
      },
      "options": [
        {
          "id": "opt-1",
          "text": "Apply chain rule: $f'(x) = f'(u) \\cdot u'(x) = \\cos(x^2 + 1) \\cdot 2x$",
          "reasoning": "Correct application of chain rule formula"
        },
        {
          "id": "opt-2",
          "text": "Add them: $f'(x) = \\cos(u) + 2x$",
          "reasoning": "Might confuse operations"
        },
        {
          "id": "opt-3",
          "text": "Just use $f'(x) = \\cos(x^2 + 1)$",
          "reasoning": "Forgetting the inner derivative multiplication"
        }
      ],
      "correctOptionIndex": 0,
      "feedback": {
        "correct": {
          "explanation": "Perfect! The chain rule formula is $(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)$. Here: $\\cos(x^2 + 1) \\cdot 2x = 2x\\cos(x^2 + 1)$.",
          "insight": "The chain rule always multiplies the outer derivative (evaluated at inner function) by the inner derivative."
        },
        "incorrect": {
          "1": "The chain rule uses multiplication, not addition. We multiply the outer derivative by the inner derivative.",
          "2": "This misses the crucial chain rule component. We must multiply by the inner function's derivative."
        }
      },
      "resultState": {
        "description": "Final answer obtained!",
        "equations": [
          "f'(x) = 2x\\cos(x^2 + 1)"
        ]
      }
    }
  ],

  "summary": {
    "keyInsights": [
      "Chain rule applies when differentiating composite functions",
      "Always identify outer and inner functions first",
      "Formula: (outer)' evaluated at inner × (inner)'",
      "Order matters: substitute back before multiplying"
    ],
    "fullSolution": "$$\\frac{d}{dx}[\\sin(x^2 + 1)] = \\cos(x^2 + 1) \\cdot 2x = 2x\\cos(x^2 + 1)$$",
    "relatedProblems": [
      "calc-derivative-chain-rule-2",
      "calc-derivative-product-rule-1"
    ]
  }
}
```

---

## 9. Development Phases

### Phase 1: MVP (Weeks 1-2)
**Goal**: Working prototype with 3-5 sample problems

- [ ] Setup Next.js project structure
- [ ] Implement core data types
- [ ] Build basic UI components (no animations)
- [ ] Create 3 sample problems (varying difficulty)
- [ ] Implement problem flow (select → feedback → next)
- [ ] Add localStorage progress tracking
- [ ] Mobile-responsive styling
- [ ] Manual testing on mobile devices

**Success Criteria**: User can complete a problem end-to-end on mobile

### Phase 2: Enhanced UX (Weeks 3-4)
**Goal**: Polished experience with animations and feedback

- [ ] Add Framer Motion animations
- [ ] Implement progress visualization
- [ ] Add hint system
- [ ] Create 10+ problems across topics
- [ ] Add problem filtering/browsing
- [ ] Implement dark mode
- [ ] Accessibility audit (WCAG AA)
- [ ] User testing with 5-10 students

**Success Criteria**: Positive user feedback, smooth interactions

### Phase 3: Production Ready (Weeks 5-6)
**Goal**: Scalable, tested, deployable

- [ ] Backend integration (Firebase/Supabase)
- [ ] User authentication
- [ ] Analytics integration
- [ ] Performance optimization (Lighthouse > 90)
- [ ] Comprehensive testing (unit + E2E)
- [ ] Error boundaries and loading states
- [ ] 50+ problems with variety
- [ ] Beta launch

**Success Criteria**: App handles 100+ concurrent users, < 2s load time

---

## 10. Success Metrics

### Learning Effectiveness
- **Completion Rate**: % of started problems completed
- **First-Try Accuracy**: % correct on first attempt per step
- **Time to Completion**: Average time per problem/step
- **Retention**: Return visits within 7 days

### User Engagement
- **Session Duration**: Average time per session
- **Problems per Session**: Number attempted
- **Hint Usage**: Frequency of hint requests
- **Bookmark Rate**: % of problems bookmarked

### Technical Performance
- **Load Time**: < 2 seconds (median)
- **Error Rate**: < 1% of sessions
- **Crash Rate**: < 0.1% of sessions
- **Lighthouse Score**: > 90

### User Satisfaction
- **NPS Score**: Target > 50
- **User Feedback**: Qualitative insights
- **Task Success Rate**: % completing intended action

---

## 11. Future Enhancements

### V2 Features
- **AI-Generated Hints**: Personalized based on user's mistake
- **Spaced Repetition**: Review problems at optimal intervals
- **Collaborative Learning**: Share solutions, discuss with peers
- **Teacher Dashboard**: Create custom problems, track class progress
- **Video Explanations**: Optional video walkthrough per problem
- **LaTeX Input**: Let users type their own solution attempts
- **Achievement System**: Badges for milestones, streaks

### Advanced Features
- **Adaptive Difficulty**: AI adjusts problem difficulty based on performance
- **Multi-Language Support**: i18n for global reach
- **Offline Mode**: PWA with service worker
- **Voice Narration**: Audio explanations for accessibility
- **Graph Visualization**: Interactive diagrams for geometry/calculus
- **Export Progress**: PDF summary of completed proofs

---

## 12. Risk Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Math rendering performance on mobile | High | Medium | Use KaTeX (faster than MathJax), lazy load complex equations |
| Users skip reflection, just guess | High | High | Add optional timer before options appear, track skip rate |
| Content creation bottleneck | Medium | High | Create problem template, enable community contributions later |
| Cognitive overload from complex UI | High | Low | User testing at each phase, simplicity-first design |
| Browser compatibility issues | Medium | Low | Test on Chrome, Safari, Firefox; use polyfills |
| Accessibility barriers | Medium | Medium | Automated testing (Axe), manual screen reader testing |

---

## 13. References & Research

### Academic Sources
- Sweller, J. (1988). "Cognitive Load During Problem Solving"
- Chi, M. T. H. (1989). "Self-Explanations in Learning from Examples"
- Mayer, R. E. (2002). "Multimedia Learning"

### UX Research
- Nielsen Norman Group - Mobile UX Guidelines
- Material Design - Mobile Interaction Patterns
- Apple Human Interface Guidelines - iOS Design

### Educational Technology
- Khan Academy - Mastery-based learning
- Brilliant.org - Interactive problem solving
- Duolingo - Gamification and engagement

### Technical Documentation
- Next.js 15 Documentation
- React Testing Library Best Practices
- Web Content Accessibility Guidelines (WCAG) 2.1

---

**Document Version**: 1.0
**Last Updated**: 2025-11-08
**Author**: Claude (AI) + User Requirements
**Status**: Ready for Review & Implementation
