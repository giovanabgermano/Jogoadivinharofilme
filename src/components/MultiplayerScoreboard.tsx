import React from 'react';
import { Player } from '../types';
import { AvatarDisplay } from './AvatarDisplay';
import { Trophy, Sparkles } from 'lucide-react';

interface MultiplayerScoreboardProps {
  players: Player[];
  activePlayerIndex: number;
  onOpenWardrobe: (playerIndex: number) => void;
}

export const MultiplayerScoreboard: React.FC<MultiplayerScoreboardProps> = ({
  players,
  activePlayerIndex,
  onOpenWardrobe
}) => {
  return (
    <div
      id="multiplayer-scoreboard"
      className="w-full bg-white/95 backdrop-blur-md rounded-2xl border-2 border-slate-200/80 shadow-md p-3 sm:p-4 mb-5"
    >
      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-xs sm:text-sm font-bold tracking-tight text-slate-800 uppercase flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-500" /> Placar em Tempo Real (Meta: 1000 pts)
          </h2>
        </div>
        <span className="text-[11px] font-semibold text-slate-500">
          Turno Atual: <strong className="text-slate-900 font-extrabold">{players[activePlayerIndex]?.name}</strong>
        </span>
      </div>

      {/* Grade de Jogadores (2 a 4) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {players.map((player, idx) => {
          const isTurn = idx === activePlayerIndex;
          const progressPercent = Math.min(100, (player.score / 1000) * 100);

          return (
            <div
              key={player.id}
              className={`relative rounded-xl p-3 border-2 transition-all duration-300 flex flex-col items-center justify-between ${
                isTurn
                  ? 'border-pink-500 bg-pink-50/60 shadow-md ring-2 ring-pink-400/40 -translate-y-0.5'
                  : 'border-slate-200 bg-slate-50/70 opacity-90 hover:opacity-100'
              }`}
            >
              {/* Badge indicadora de VEZ */}
              {isTurn && (
                <span className="absolute -top-2.5 px-2 py-0.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold text-[10px] rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                  🎯 Sua Vez
                </span>
              )}

              {/* Avatar clicável que abre o Guarda-roupa */}
              <button
                type="button"
                onClick={() => onOpenWardrobe(idx)}
                className="group relative cursor-pointer focus:outline-hidden"
                title={`Clique para customizar o avatar de ${player.name}`}
              >
                <AvatarDisplay
                  customization={player.customization}
                  playerColor={player.color}
                  size="md"
                />
                <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border border-slate-300 shadow-xs text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  👗
                </span>
              </button>

              {/* Nome do jogador */}
              <div className="text-center mt-2 w-full">
                <span
                  className="font-bold text-xs sm:text-sm truncate block"
                  style={{ color: player.color }}
                >
                  {player.name}
                </span>

                {/* Pontuação */}
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 leading-none">
                    {player.score}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">pts</span>
                </div>

                {/* Fase */}
                <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  Fase {player.phase}
                </span>
              </div>

              {/* Mini barra de progresso até os 1000 pts */}
              <div className="w-full mt-2">
                <div className="flex justify-between text-[9px] font-semibold text-slate-400 mb-0.5">
                  <span>Progresso</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${progressPercent}%`,
                      backgroundColor: player.color
                    }}
                  />
                </div>
              </div>

              {/* Botão sutil para customizar avatar */}
              <button
                type="button"
                onClick={() => onOpenWardrobe(idx)}
                className="mt-2 text-[10px] font-bold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100/80 px-2 py-1 rounded-md border border-teal-200 w-full transition-colors flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-teal-600" />
                Guarda-Roupa
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
