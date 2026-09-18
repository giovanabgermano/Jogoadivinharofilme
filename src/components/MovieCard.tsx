import React, { useState, useEffect, useRef } from 'react';
import { Movie, Player } from '../types';
import { MatchResult, validateAnswer } from '../utils/answerValidation';
import { 
  Send, 
  SkipForward, 
  RotateCcw, 
  Lightbulb, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Film,
  Sparkles,
  Quote,
  Flame
} from 'lucide-react';
import { AvatarDisplay } from './AvatarDisplay';

interface MovieCardProps {
  movie: Movie;
  movieIndex: number;
  totalMovies: number;
  activePlayer: Player;
  onCorrectAnswer: (movie: Movie, guess: string, attempts: number) => void;
  onWrongAnswer: (movie: Movie, guess: string) => void;
  onSkipMovie: (movie: Movie, attempts: number) => void;
  onNextMovie: () => void;
}

type CardStatus = 'idle' | 'wrong' | 'near_miss' | 'solved' | 'skipped';

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  movieIndex,
  totalMovies,
  activePlayer,
  onCorrectAnswer,
  onWrongAnswer,
  onSkipMovie,
  onNextMovie,
}) => {
  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState<CardStatus>('idle');
  const [attempts, setAttempts] = useState(0);
  const [revealedClues, setRevealedClues] = useState<number>(0);
  const [imageBlurred, setImageBlurred] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [lastMatchedTitle, setLastMatchedTitle] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // Reset local state when movie or active player changes
  useEffect(() => {
    setGuess('');
    setStatus('idle');
    setAttempts(0);
    setRevealedClues(0);
    setImageError(false);
    setLastMatchedTitle(null);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [movie.id, activePlayer.id]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!guess.trim() || status === 'solved' || status === 'skipped') return;

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const validation: MatchResult = validateAnswer(guess, movie);

    if (validation.isCorrect) {
      setStatus('solved');
      setLastMatchedTitle(validation.matchedTitle || movie.titlePt);
      onCorrectAnswer(movie, guess, newAttempts);
    } else {
      if (validation.similarity >= 0.7) {
        setStatus('near_miss');
      } else {
        setStatus('wrong');
      }
      // Notifica o jogo para disparar animação e som de tomate!
      onWrongAnswer(movie, guess);
    }
  };

  const handleSkip = () => {
    setStatus('skipped');
    onSkipMovie(movie, attempts);
  };

  const handleTryAgain = () => {
    setStatus('idle');
    setGuess('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleRevealExtraClue = () => {
    if (revealedClues < movie.extraClues.length) {
      setRevealedClues(prev => prev + 1);
    }
  };

  return (
    <div
      id="movie-guessing-card"
      className="w-full bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-md transition-all"
    >
      {/* Indicador de Vez do Jogador Atual */}
      <div
        className="px-5 py-3 text-white flex items-center justify-between transition-colors duration-300"
        style={{
          background: `linear-gradient(135deg, ${activePlayer.color}, #0a192f)`
        }}
      >
        <div className="flex items-center gap-2.5">
          <AvatarDisplay
            customization={activePlayer.customization}
            playerColor={activePlayer.color}
            size="sm"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80">
                Turno Atual
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-ping" />
            </div>
            <h2 className="text-sm sm:text-base font-black tracking-tight text-white leading-none">
              {activePlayer.name}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black text-white border border-white/20">
            {activePlayer.score} pts
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/30 text-teal-100 border border-teal-400/40">
            Fase {activePlayer.phase}
          </span>
        </div>
      </div>

      {/* Card Header Information */}
      <div className="px-5 sm:px-7 py-3 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-white border border-slate-200 text-slate-700 shadow-2xs">
            Filme {movieIndex + 1} de {totalMovies}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            Fase {movie.phase} • {movie.difficultyLabel}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-slate-100 text-slate-600">
            Ano: {movie.year}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
            {movie.genre}
          </span>
          <span className="text-lg select-none" title="Emojis temáticos do filme">
            {movie.emojis}
          </span>
        </div>
      </div>

      {/* Main Content: Split Grid for Image + Clues */}
      <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Visual Movie Still / Image Section (5 cols) */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 shadow-inner group">
            {!imageError ? (
              <img
                src={movie.posterUrl}
                alt="Cena ou atmosfera relacionada ao filme"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  imageBlurred && status !== 'solved' && status !== 'skipped'
                    ? 'blur-md scale-105 contrast-125'
                    : 'blur-none scale-100'
                }`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 p-4 text-center">
                <Film className="w-12 h-12 mb-2 text-slate-300" />
                <span className="text-xs font-medium text-slate-500">
                  {movie.genre} • {movie.year}
                </span>
                <span className="text-2xl mt-2">{movie.emojis}</span>
              </div>
            )}

            {/* Mystery Blur Button */}
            {status !== 'solved' && status !== 'skipped' && !imageError && (
              <button
                type="button"
                onClick={() => setImageBlurred(!imageBlurred)}
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/50 hover:bg-black/70 text-white backdrop-blur-xs transition-colors cursor-pointer text-xs flex items-center gap-1"
                title={imageBlurred ? "Remover desfoque" : "Adicionar desfoque (Modo Difícil)"}
              >
                {imageBlurred ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span className="text-[10px] hidden sm:inline">
                  {imageBlurred ? "Desfocado" : "Desfocar"}
                </span>
              </button>
            )}

            {/* Revealed Movie overlay */}
            {(status === 'solved' || status === 'skipped') && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4 text-white animate-fadeIn">
                <span className="text-xs text-teal-300 font-black tracking-wide uppercase">
                  {status === 'solved' ? 'Filme Revelado' : 'Resposta'}
                </span>
                <h3 className="text-lg sm:text-xl font-black leading-tight drop-shadow-sm">
                  {movie.titlePt}
                </h3>
                {movie.titleOriginal !== movie.titlePt && (
                  <p className="text-xs text-slate-300 italic">
                    Original: {movie.titleOriginal}
                  </p>
                )}
                <p className="text-xs text-slate-300 mt-0.5">
                  Direção: {movie.director} ({movie.year})
                </p>
              </div>
            )}
          </div>

          <p className="text-[11px] text-slate-400 mt-2 text-center">
            Pista visual ilustrativa baseada na atmosfera do filme
          </p>
        </div>

        {/* Clues & Guessing Area (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
          {/* Main Clue Block */}
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-black uppercase tracking-wider text-pink-700 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-pink-500" />
                  Dica Principal
                </span>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                  Vale +10 pontos
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-pink-50/40 border-2 border-pink-200/80 text-slate-800 text-sm sm:text-base leading-relaxed font-medium shadow-2xs">
                {movie.mainClue}
              </div>
            </div>

            {/* Extra Progressive Clues */}
            {movie.extraClues && movie.extraClues.length > 0 && (
              <div className="space-y-2">
                {revealedClues > 0 && (
                  <div className="space-y-2 animate-fadeIn">
                    {movie.extraClues.slice(0, revealedClues).map((clue, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                      >
                        <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{clue}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quote teaser if revealed or solved */}
                {(revealedClues >= 2 || status === 'solved' || status === 'skipped') && movie.quote && (
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm italic flex items-start gap-2">
                    <Quote className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{movie.quote}</span>
                  </div>
                )}

                {/* Button to unlock next clue */}
                {revealedClues < movie.extraClues.length && status !== 'solved' && status !== 'skipped' && (
                  <button
                    id="reveal-extra-clue-btn"
                    onClick={handleRevealExtraClue}
                    className="text-xs text-pink-700 hover:text-pink-800 font-bold flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-pink-500" />
                    <span>
                      Precisa de ajuda? Revelar Dica Extra ({revealedClues}/{movie.extraClues.length})
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Interactive State Feedback & Inputs */}
          <div className="pt-2">
            {/* 1. Solved State */}
            {status === 'solved' && (
              <div id="status-solved-banner" className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-black text-base">Resposta Correta!</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 font-black text-xs">
                    +10 Pontos para {activePlayer.name}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-800">
                  Parabéns! Você acertou: <strong>{lastMatchedTitle || movie.titlePt}</strong>
                  {attempts > 1 ? ` em ${attempts} tentativas.` : ' de primeira!'}
                </p>
                <div className="flex justify-end pt-1">
                  <button
                    id="next-movie-button"
                    onClick={onNextMovie}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <span>Próximo Turno</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* 2. Skipped State */}
            {status === 'skipped' && (
              <div id="status-skipped-banner" className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-slate-500" />
                    <span className="font-bold text-sm sm:text-base">Filme Pulado (+0 pts)</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  O filme era: <strong className="text-slate-900">{movie.titlePt}</strong> ({movie.titleOriginal}).
                </p>
                <div className="flex justify-end pt-1">
                  <button
                    id="next-movie-skipped-button"
                    onClick={onNextMovie}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Passar a Vez</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* 3. Wrong Answer State */}
            {status === 'wrong' && (
              <div id="status-wrong-banner" className="p-3.5 rounded-2xl bg-red-50 border-2 border-red-300 text-red-900 space-y-1 mb-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-black">
                  <span className="text-base">🍅</span>
                  <span>Errou! Tomate esbagaçado na tela!</span>
                </div>
                <p className="text-xs text-red-700">
                  Tente novamente ou passe a vez para o próximo jogador.
                </p>
              </div>
            )}

            {/* 4. Near Miss State */}
            {status === 'near_miss' && (
              <div id="status-near-miss-banner" className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-900 space-y-1 mb-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Quase lá! Muito perto do título correto!</span>
                </div>
                <p className="text-xs text-amber-800">
                  Verifique se há letras trocadas ou tente o título em inglês/português.
                </p>
              </div>
            )}

            {/* Input Form */}
            {status !== 'solved' && status !== 'skipped' && (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label htmlFor="movie-guess-input" className="block text-xs font-bold text-slate-700">
                    Qual é o título deste filme, <strong style={{ color: activePlayer.color }}>{activePlayer.name}</strong>?
                  </label>
                  <div className="relative">
                    <input
                      ref={inputRef}
                      id="movie-guess-input"
                      type="text"
                      value={guess}
                      onChange={(e) => setGuess(e.target.value)}
                      placeholder="Ex: Titanic, O Poderoso Chefão, Interestelar, Matrix..."
                      className="w-full px-4 py-3 bg-white border-2 border-slate-300 focus:border-pink-500 rounded-2xl text-slate-900 text-sm placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-pink-500/20 transition-all font-medium"
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 block">
                    Aceita título em português ou inglês, maiúsculas/minúsculas e tolerância a pequenos erros de digitação.
                  </span>
                </div>

                {/* Defined Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
                  <div className="flex items-center gap-2">
                    {/* Botão Pular / Passar a Vez */}
                    <button
                      type="button"
                      id="skip-movie-btn"
                      onClick={handleSkip}
                      className="px-3.5 py-2 rounded-xl border border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Pular este filme (0 pontos e passa a vez)"
                    >
                      <SkipForward className="w-4 h-4 text-slate-500" />
                      <span>Pular</span>
                    </button>

                    {/* Botão Tentar Novamente (se já errou) */}
                    {(status === 'wrong' || status === 'near_miss') && (
                      <button
                        type="button"
                        id="try-again-btn"
                        onClick={handleTryAgain}
                        className="px-3 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Limpar campo para tentar novamente"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Tentar Novamente</span>
                      </button>
                    )}
                  </div>

                  {/* Botão Enviar Resposta */}
                  <button
                    type="submit"
                    id="submit-guess-btn"
                    disabled={!guess.trim()}
                    className="px-6 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>Enviar Resposta</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
