import { Option } from '@/lib/types/problem.types';

export interface ShuffledStep {
  shuffledOptions: Option[];
  shuffledCorrectIndex: number;
  shuffledToOriginalMap: number[];
}

/**
 * Shuffles the options array and returns the new correct index
 * Uses Fisher-Yates shuffle algorithm
 */
export function shuffleOptions(
  options: Option[],
  correctIndex: number
): ShuffledStep {
  // Create a copy of options with their original indices
  const indexedOptions = options.map((option, index) => ({
    option,
    originalIndex: index,
  }));

  // Fisher-Yates shuffle
  for (let i = indexedOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
  }

  // Extract shuffled options and create mapping
  const shuffledOptions = indexedOptions.map(item => item.option);
  const shuffledToOriginalMap = indexedOptions.map(item => item.originalIndex);

  // Find new position of correct answer
  const shuffledCorrectIndex = shuffledToOriginalMap.indexOf(correctIndex);

  return {
    shuffledOptions,
    shuffledCorrectIndex,
    shuffledToOriginalMap,
  };
}

/**
 * Maps a shuffled option index back to the original index
 * Used for feedback lookup
 */
export function getOriginalIndex(
  shuffledIndex: number,
  shuffledToOriginalMap: number[]
): number {
  return shuffledToOriginalMap[shuffledIndex];
}
