import { useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { MOVIES_DATABASE } from './data/movies';
import { Movie, Player, FashionItem } from './types';
import { FASHION_ITEMS, INITIAL_PLAYER_CUSTOMIZATION } from './data/fashion';
import { Header } from './components/Header';
import { MovieCard } from './components/MovieCard';
import { MultiplayerScoreboard } from './components/MultiplayerScoreboard';
import { LobbySetup } from './components/LobbySetup';
import { WardrobeModal } from './components/WardrobeModal';
import { TomatoSplatter } from './components/TomatoSplatter';
import { VictoryModal } from './components/VictoryModal';
import { RulesModal } from './components/RulesModal';
import { PhaseAdvanceModal } from './components/PhaseAdvanceModal';
import { soundEffects } from './utils/audio';
import { Sparkles, Users, RotateCcw, Award } from 'lucide-react';

const STORAGE_KEYS = {
  SOUND: 'cine_sound_enabled',
};

export default function App() {
  // Game Setup & Mode
  const [inGame, setInGame] = useState<boolean>(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [activePlayerIndex, setActivePlayerIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMovieIndex, setActiveMovieIndex] = useState<number>(0);

  // Sound settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SOUND);
    return saved !== null ? saved === 'true' : true;
  });

  // Animation & Modals
  const [showTomato, setShowTomato] = useState<boolean>(false);
  const [wardrobePlayerIndex, setWardrobePlayerIndex] = useState<number | null>(null);
  const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
  const [phaseAdvanceData, setPhaseAdvanceData] = useState<{
    player: Player;
    newPhase: number;
    unlockedItems: FashionItem[];
  } | null>(null);
  const [winner, setWinner] = useState<Player | null>(null);

  // Sync sound settings with audio synthesis
  useEffect(() => {
    soundEffects.enabled = soundEnabled;
    localStorage.setItem(STORAGE_KEYS.SOUND, String(soundEnabled));
  }, [soundEnabled]);

  // Current active player
  const activePlayer = useMemo(() => {
    if (players.length === 0) {
      return {
        id: 'p-default',
        name: 'Jogador 1',
        color: '#e11d48',
        accentColor: '#f43f5e',
        score: 0,
        phase: 1,
        correctAnswers: 0,
        wrongAnswers: 0,
        unlockedItemIds: ['head-beret', 'glasses-3d', 'outfit-casual', 'acc-popcorn'],
        customization: INITIAL_PLAYER_CUSTOMIZATION
      } as Player;
    }
    return players[activePlayerIndex % players.length];
  }, [players, activePlayerIndex]);

  // Filter movies by category (if specified) and phase
  const filteredMovies = useMemo(() => {
    let list = MOVIES_DATABASE;
    if (selectedCategory && selectedCategory !== 'all') {
      // Filtrar com base em gênero ou tags
      list = list.filter((m) => {
        const cat = selectedCategory.toLowerCase();
        const genre = (m.genre || '').toLowerCase();
        if (cat === 'animation') return genre.includes('animação') || genre.includes('família');
        if (cat === 'action') return genre.includes('ação') || genre.includes('herói') || genre.includes('aventura');
        if (cat === 'sci-fi') return genre.includes('ficção') || genre.includes('fantasia');
        if (cat === 'classic') return m.year < 2000;
        return true;
      });
      // Fallback se filtragem retornar poucos filmes
      if (list.length < 5) list = MOVIES_DATABASE;
    }
    return list;
  }, [selectedCategory]);

  const currentMovie: Movie = useMemo(() => {
    if (filteredMovies.length === 0) return MOVIES_DATABASE[0];
    return filteredMovies[activeMovieIndex % filteredMovies.length];
  }, [filteredMovies, activeMovieIndex]);

  // Handler para iniciar o jogo pelo Lobby
  const handleStartGame = (configuredPlayers: Player[], category: string) => {
    setPlayers(configuredPlayers);
    setSelectedCategory(category);
    setActivePlayerIndex(0);
    setActiveMovieIndex(0);
    setWinner(null);
    setInGame(true);
  };

  // Passar turno para o próximo jogador
  const advanceTurn = useCallback(() => {
    setActivePlayerIndex((prev) => (prev + 1) % players.length);
    setActiveMovieIndex((prev) => (prev + 1) % filteredMovies.length);
  }, [players.length, filteredMovies.length]);

  // Manipulador de acerto (+10 pontos)
  const handleCorrectAnswer = (movie: Movie, guess: string, attempts: number) => {
    soundEffects.playCorrect();

    setPlayers((prevPlayers) => {
      const updated = [...prevPlayers];
      const p = { ...updated[activePlayerIndex] };
      const oldScore = p.score;
      const newScore = oldScore + 10;
      p.score = newScore;
      p.correctAnswers = (p.correctAnswers || 0) + 1;

      // Calcular nova fase (a cada 1000 pontos)
      const oldPhase = Math.floor(oldScore / 1000) + 1;
      const newPhase = Math.min(5, Math.floor(newScore / 1000) + 1);

      // Desbloquear itens de moda se subiu de fase
      if (newPhase > oldPhase) {
        p.phase = newPhase;
        const newlyUnlocked = FASHION_ITEMS.filter(
          (item) => item.phaseRequired === newPhase && !p.unlockedItemIds.includes(item.id)
        );
        p.unlockedItemIds = [...p.unlockedItemIds, ...newlyUnlocked.map((i) => i.id)];

        // Notificar subida de fase
        soundEffects.playPhaseLevelUp();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });

        setPhaseAdvanceData({
          player: p,
          newPhase,
          unlockedItems: newlyUnlocked
        });
      }

      // Checar condição de vitória (1000 pontos)
      if (newScore >= 1000 && !winner) {
        soundEffects.playVictory();
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.5 }
        });
        setWinner(p);
      }

      updated[activePlayerIndex] = p;
      return updated;
    });
  };

  // Manipulador de erro: som e animação de tomate na tela
  const handleWrongAnswer = (movie: Movie, guess: string) => {
    soundEffects.playTomatoSplatter();
    setShowTomato(true);

    setPlayers((prevPlayers) => {
      const updated = [...prevPlayers];
      if (updated[activePlayerIndex]) {
        updated[activePlayerIndex] = {
          ...updated[activePlayerIndex],
          wrongAnswers: (updated[activePlayerIndex].wrongAnswers || 0) + 1
        };
      }
      return updated;
    });
  };

  // Manipulador de pular filme (+0 pontos e passa a vez)
  const handleSkipMovie = (movie: Movie, attempts: number) => {
    // Apenas marca que pulou e prepara para avançar
  };

  // Ao clicar em Próximo Filme no MovieCard
  const handleNextMovie = () => {
    advanceTurn();
  };

  // Atualizar customização do avatar
  const handleUpdateCustomization = (updatedCustomization: Player['customization']) => {
    if (wardrobePlayerIndex === null) return;
    setPlayers((prev) => {
      const copy = [...prev];
      if (copy[wardrobePlayerIndex]) {
        copy[wardrobePlayerIndex] = {
          ...copy[wardrobePlayerIndex],
          customization: updatedCustomization
        };
      }
      return copy;
    });
  };

  // Reiniciar jogo
  const handleRestartGame = () => {
    setWinner(null);
    setPlayers((prev) =>
      prev.map((p) => ({
        ...p,
        score: 0,
        phase: 1,
        correctAnswers: 0,
        wrongAnswers: 0
      }))
    );
    setActivePlayerIndex(0);
    setActiveMovieIndex(0);
  };

  return (
    <div className="min-h-screen bg-slate-100/90 text-slate-800 flex flex-col selection:bg-pink-200">
      {/* Tomate Splatter Overlay */}
      <TomatoSplatter
        show={showTomato}
        onAnimationEnd={() => setShowTomato(false)}
      />

      {/* Header Fixo */}
      <Header
        activePlayer={activePlayer}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        onOpenWardrobe={() => setWardrobePlayerIndex(activePlayerIndex)}
        onOpenRules={() => setIsRulesOpen(true)}
        onResetLobby={() => setInGame(false)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-start">
        {!inGame ? (
          /* Tela Inicial: Seleção de Jogadores & Categorias */
          <LobbySetup onStartGame={handleStartGame} />
        ) : (
          /* Partida em Andamento */
          <div className="w-full animate-fadeIn space-y-4">
            {/* Placar em Tempo Real Multiplayer */}
            <MultiplayerScoreboard
              players={players}
              activePlayerIndex={activePlayerIndex}
              onOpenWardrobe={(idx) => setWardrobePlayerIndex(idx)}
            />

            {/* Card Principal de Adivinhação do Filme com Dica e Input */}
            <MovieCard
              movie={currentMovie}
              movieIndex={activeMovieIndex}
              totalMovies={filteredMovies.length}
              activePlayer={activePlayer}
              onCorrectAnswer={handleCorrectAnswer}
              onWrongAnswer={handleWrongAnswer}
              onSkipMovie={handleSkipMovie}
              onNextMovie={handleNextMovie}
            />

            {/* Atalhos Rápidos e Modo de Demonstração / Testes (+200 pts) */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-slate-500 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-600">Dica:</span>
                <span>Alterne turnos após cada palpite ou utilize os botões para testar o avanço de fase.</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    // Adicionar 250 pontos para testar subida de nível e moda
                    handleCorrectAnswer(currentMovie, currentMovie.titlePt, 1);
                    setPlayers((prev) => {
                      const copy = [...prev];
                      copy[activePlayerIndex].score += 250;
                      if (copy[activePlayerIndex].score >= 1000) {
                        copy[activePlayerIndex].phase = 2;
                      }
                      return copy;
                    });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs flex items-center gap-1 shadow-2xs cursor-pointer transition-colors"
                  title="Simular pontuação rápida para testar avanço de fase e desbloqueio"
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                  <span>+250 pts (Teste de Fase)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal de Guarda-Roupa / Customização de Avatar */}
      {wardrobePlayerIndex !== null && players[wardrobePlayerIndex] && (
        <WardrobeModal
          player={players[wardrobePlayerIndex]}
          isOpen={wardrobePlayerIndex !== null}
          onClose={() => setWardrobePlayerIndex(null)}
          onUpdateCustomization={handleUpdateCustomization}
        />
      )}

      {/* Modal de Subida de Fase e Desbloqueio de Moda */}
      {phaseAdvanceData && (
        <PhaseAdvanceModal
          player={phaseAdvanceData.player}
          newPhase={phaseAdvanceData.newPhase}
          unlockedItems={phaseAdvanceData.unlockedItems}
          isOpen={phaseAdvanceData !== null}
          onClose={() => setPhaseAdvanceData(null)}
          onOpenWardrobe={() => {
            const idx = players.findIndex((p) => p.id === phaseAdvanceData.player.id);
            setPhaseAdvanceData(null);
            setWardrobePlayerIndex(idx >= 0 ? idx : 0);
          }}
        />
      )}

      {/* Modal de Vitória (1000 pontos) */}
      {winner && (
        <VictoryModal
          winner={winner}
          players={players}
          isOpen={winner !== null}
          onRestart={handleRestartGame}
          onOpenWardrobe={(idx) => {
            setWardrobePlayerIndex(idx);
          }}
        />
      )}

      {/* Modal de Regras */}
      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />
    </div>
  );
}
