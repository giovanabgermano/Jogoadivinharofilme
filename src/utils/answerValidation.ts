import { Movie } from '../types';

/**
 * Remove acentos, caracteres especiais, pontuação e normaliza espaços
 */
export function normalizeString(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, ' ') // troca caracteres não alfanuméricos por espaço
    .replace(/\s+/g, ' ') // reduz múltiplos espaços
    .trim();
}

/**
 * Remove artigos comuns iniciais para comparação flexível
 */
export function removeLeadingArticles(str: string): string {
  const normalized = normalizeString(str);
  const articles = ['o ', 'a ', 'os ', 'as ', 'um ', 'uma ', 'uns ', 'umas ', 'the ', 'an '];
  for (const article of articles) {
    if (normalized.startsWith(article)) {
      return normalized.slice(article.length).trim();
    }
  }
  return normalized;
}

/**
 * Calcula a distância de Levenshtein entre duas strings
 */
export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substituição
          matrix[i][j - 1] + 1,     // inserção
          matrix[i - 1][j] + 1      // deleção
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export interface MatchResult {
  isCorrect: boolean;
  matchedTitle?: string;
  isTypoTolerated: boolean;
  similarity: number; // 0 to 1
}

/**
 * Valida a resposta do usuário contra os títulos do filme
 */
export function validateAnswer(userGuess: string, movie: Movie): MatchResult {
  const cleanGuess = normalizeString(userGuess);
  const cleanGuessNoArticles = removeLeadingArticles(userGuess);

  if (!cleanGuess) {
    return { isCorrect: false, isTypoTolerated: false, similarity: 0 };
  }

  // Coleta todos os títulos possíveis para validação
  const candidateTitles = [
    movie.titlePt,
    movie.titleOriginal,
    ...(movie.aliases || []),
  ];

  let bestSimilarity = 0;
  let matchedTitle: string | undefined;
  let isTypoTolerated = false;

  for (const title of candidateTitles) {
    const cleanTitle = normalizeString(title);
    const cleanTitleNoArticles = removeLeadingArticles(title);

    // 1. Verificação Exata (com e sem artigos)
    if (cleanGuess === cleanTitle || cleanGuessNoArticles === cleanTitleNoArticles) {
      return {
        isCorrect: true,
        matchedTitle: title,
        isTypoTolerated: false,
        similarity: 1.0,
      };
    }

    // 2. Tolerância a pequenos erros de digitação (Levenshtein)
    // Calcula com a string com artigos e sem artigos
    const dist1 = levenshteinDistance(cleanGuess, cleanTitle);
    const maxLen1 = Math.max(cleanGuess.length, cleanTitle.length);
    const sim1 = maxLen1 > 0 ? (maxLen1 - dist1) / maxLen1 : 0;

    const dist2 = levenshteinDistance(cleanGuessNoArticles, cleanTitleNoArticles);
    const maxLen2 = Math.max(cleanGuessNoArticles.length, cleanTitleNoArticles.length);
    const sim2 = maxLen2 > 0 ? (maxLen2 - dist2) / maxLen2 : 0;

    const bestDist = Math.min(dist1, dist2);
    const bestMaxLen = Math.min(maxLen1, maxLen2);
    const currentSim = Math.max(sim1, sim2);

    if (currentSim > bestSimilarity) {
      bestSimilarity = currentSim;
      matchedTitle = title;
    }

    // Critérios de tolerância:
    // Palavras com mais de 4 caracteres permitem 1 caractere de erro
    // Palavras com 9 ou mais caracteres permitem 2 caracteres de erro
    const maxAllowedDistance = bestMaxLen >= 9 ? 2 : bestMaxLen >= 5 ? 1 : 0;

    if (bestDist <= maxAllowedDistance) {
      isTypoTolerated = bestDist > 0;
      return {
        isCorrect: true,
        matchedTitle: title,
        isTypoTolerated,
        similarity: currentSim,
      };
    }
  }

  return {
    isCorrect: false,
    matchedTitle,
    isTypoTolerated: false,
    similarity: bestSimilarity,
  };
}
