export type FashionCategory = 'head' | 'glasses' | 'outfit' | 'accessory';

export interface FashionItem {
  id: string;
  name: string;
  category: FashionCategory;
  phaseRequired: number; // 1 (default unlocked) to 5
  icon: string; // Emoji or SVG representation
  color: string;
  description: string;
}

export interface PlayerCustomization {
  skinColor: string;
  hairColor: string;
  headItem: string | null;     // FashionItem ID
  glassesItem: string | null;  // FashionItem ID
  outfitItem: string | null;   // FashionItem ID
  accessoryItem: string | null;// FashionItem ID
}

export interface Player {
  id: string;
  name: string;
  color: string; // Theme color (pink, navy, teal, purple)
  accentColor: string;
  score: number;
  phase: number;
  correctAnswers: number;
  wrongAnswers: number;
  unlockedItemIds: string[];
  customization: PlayerCustomization;
}

export interface Movie {
  id: string;
  titlePt: string;
  titleOriginal: string;
  aliases: string[];
  phase: 1 | 2 | 3 | 4 | 5;
  year: number;
  genre: string;
  director: string;
  mainClue: string;
  extraClues: string[];
  quote?: string;
  emojis: string;
  posterUrl: string;
  difficultyLabel: string;
  category?: 'animation' | 'action' | 'classic' | 'sci-fi' | 'drama' | 'comedy';
}

export interface GameHistoryItem {
  id: string;
  playerId: string;
  playerName: string;
  movieId: string;
  movieTitle: string;
  userGuess: string;
  correct: boolean;
  points: number;
  timestamp: number;
  phase: number;
  attemptsCount?: number;
}

export interface UserStats {
  totalScore: number;
  currentStreak: number;
  bestStreak: number;
  totalCorrect: number;
  totalSkipped: number;
  totalWrongAttempts: number;
  highestPhaseReached: number;
}
