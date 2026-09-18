import React, { useState } from 'react';
import { Sparkles, Users, Play, Film, User, Check } from 'lucide-react';
import { Player } from '../types';
import { INITIAL_PLAYER_CUSTOMIZATION } from '../data/fashion';
import { AvatarDisplay } from './AvatarDisplay';

interface LobbySetupProps {
  onStartGame: (players: Player[], selectedCategory: string) => void;
}

const DEFAULT_PLAYER_PALETTES = [
  { color: '#e11d48', accentColor: '#f43f5e', name: 'Jogador 1 (Rosa)' },
  { color: '#0a192f', accentColor: '#1e3a8a', name: 'Jogador 2 (Azul Marinho)' },
  { color: '#0d9488', accentColor: '#14b8a6', name: 'Jogador 3 (Verde Água)' },
  { color: '#9333ea', accentColor: '#a855f7', name: 'Jogador 4 (Roxo Pop)' }
];

export const LobbySetup: React.FC<LobbySetupProps> = ({ onStartGame }) => {
  const [playerCount, setPlayerCount] = useState<number>(2);
  const [playerNames, setPlayerNames] = useState<string[]>([
    'Cinéfilo 1',
    'Cinéfilo 2',
    'Cinéfilo 3',
    'Cinéfilo 4'
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Filmes', icon: '🎬', desc: 'Mix com todos os gêneros' },
    { id: 'animation', label: 'Animações & Família', icon: '🦁', desc: 'Disney, Pixar, Ghibli' },
    { id: 'action', label: 'Ação & Super-Heróis', icon: '💥', desc: 'Marvel, DC, Aventuras' },
    { id: 'sci-fi', label: 'Ficção & Fantasia', icon: '🚀', desc: 'Interestelar, Matrix, Magia' },
    { id: 'classic', label: 'Grandes Clássicos', icon: '🎞️', desc: 'Obras-primas premiadas' }
  ];

  const handleNameChange = (index: number, newName: string) => {
    const updated = [...playerNames];
    updated[index] = newName;
    setPlayerNames(updated);
  };

  const handleLaunch = () => {
    const activePlayers: Player[] = [];
    for (let i = 0; i < playerCount; i++) {
      const palette = DEFAULT_PLAYER_PALETTES[i];
      activePlayers.push({
        id: `p-${i + 1}`,
        name: playerNames[i].trim() || `Jogador ${i + 1}`,
        color: palette.color,
        accentColor: palette.accentColor,
        score: 0,
        phase: 1,
        correctAnswers: 0,
        wrongAnswers: 0,
        unlockedItemIds: ['head-beret', 'glasses-3d', 'outfit-casual', 'acc-popcorn'],
        customization: {
          ...INITIAL_PLAYER_CUSTOMIZATION,
          skinColor: ['#fcd34d', '#fed7aa', '#d4a373', '#fbcfe8'][i % 4],
          hairColor: ['#1e293b', '#b45309', '#e11d48', '#0284c7'][i % 4]
        }
      });
    }

    onStartGame(activePlayers, selectedCategory);
  };

  return (
    <div
      id="lobby-screen"
      className="w-full max-w-3xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl border-2 border-pink-200 shadow-xl overflow-hidden animate-fadeIn"
    >
      {/* Banner Principal com Rosa, Azul Marinho e Verde Água */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-pink-500 via-[#0a192f] to-teal-500 text-white text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-wider text-pink-100 border border-white/20 mb-3">
          <Film className="w-4 h-4 text-pink-200" /> Jogo de Adivinhação de Filmes
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight drop-shadow-sm">
          CineAdivinha Multiplayer
        </h1>
        <p className="text-xs sm:text-sm text-pink-100 mt-1 max-w-md mx-auto font-medium">
          Duelo de 2 a 4 jogadores! Adivinhe os filmes, desbloqueie roupas e acessórios para seu avatar e chegue a 1000 pontos para vencer!
        </p>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Seletor de Número de Jogadores (2 a 4) */}
        <div>
          <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-2">
            <Users className="w-4 h-4 text-pink-600" /> 1. Escolha o Número de Jogadores (2 a 4)
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[2, 3, 4].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setPlayerCount(count)}
                className={`py-3 px-4 rounded-2xl border-2 font-black text-sm sm:text-base flex flex-col items-center justify-center transition-all cursor-pointer ${
                  playerCount === count
                    ? 'border-pink-500 bg-pink-50 text-pink-900 ring-2 ring-pink-400/40 shadow-sm scale-102'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                }`}
              >
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xl">👥</span>
                  <span>{count} Jogadores</span>
                </div>
                <span className="text-[11px] font-medium text-slate-500">
                  {count === 2 ? 'Duelo Clássico' : count === 3 ? 'Trio Cinéfilo' : 'Disputa Máxima'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Nomes dos Jogadores e Prévia de Avatares */}
        <div>
          <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-2">
            <User className="w-4 h-4 text-teal-600" /> 2. Personalize os Nomes dos Participantes
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Array.from({ length: playerCount }).map((_, idx) => {
              const palette = DEFAULT_PLAYER_PALETTES[idx];
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-50/80 rounded-2xl border-2 border-slate-200"
                >
                  <AvatarDisplay
                    customization={{
                      ...INITIAL_PLAYER_CUSTOMIZATION,
                      skinColor: ['#fcd34d', '#fed7aa', '#d4a373', '#fbcfe8'][idx % 4],
                      hairColor: ['#1e293b', '#b45309', '#e11d48', '#0284c7'][idx % 4]
                    }}
                    playerColor={palette.color}
                    size="sm"
                  />
                  <div className="flex-1">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider block"
                      style={{ color: palette.color }}
                    >
                      Jogador {idx + 1}
                    </span>
                    <input
                      type="text"
                      maxLength={18}
                      value={playerNames[idx]}
                      onChange={(e) => handleNameChange(idx, e.target.value)}
                      placeholder={`Nome do Jogador ${idx + 1}`}
                      className="w-full mt-0.5 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seleção Opcional de Categoria de Filmes */}
        <div>
          <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-2">
            <Film className="w-4 h-4 text-[#0a192f]" /> 3. Escolha a Categoria de Filmes
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'border-teal-500 bg-teal-50/70 shadow-xs ring-2 ring-teal-400/40'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{cat.icon}</span>
                  <span className="font-extrabold text-xs text-slate-900">{cat.label}</span>
                </div>
                <p className="text-[10px] text-slate-500">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Resumo das Regras Rápidas */}
        <div className="p-3.5 bg-pink-50/50 rounded-2xl border border-pink-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-base">🍅</span>
            <span>Errou? Tomate esbagaça na tela com som!</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">🎯</span>
            <span>+10 pontos por acerto</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">👗</span>
            <span>1000 pts = Nova fase + Item de moda</span>
          </div>
        </div>

        {/* Botão de Iniciar Partida */}
        <button
          type="button"
          onClick={handleLaunch}
          className="w-full py-4 px-6 rounded-2xl font-black text-base sm:text-lg bg-gradient-to-r from-pink-600 via-rose-500 to-teal-500 hover:opacity-95 text-white shadow-lg flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-98 transition-all"
        >
          <Play className="w-5 h-5 fill-white" /> Iniciar Partida Multiplayer
        </button>
      </div>
    </div>
  );
};
