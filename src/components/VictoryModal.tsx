import React from 'react';
import { Player } from '../types';
import { AvatarDisplay } from './AvatarDisplay';
import { Trophy, Sparkles, RotateCcw, Medal } from 'lucide-react';

interface VictoryModalProps {
  winner: Player;
  players: Player[];
  isOpen: boolean;
  onRestart: () => void;
  onOpenWardrobe: (playerIndex: number) => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  winner,
  players,
  isOpen,
  onRestart,
  onOpenWardrobe
}) => {
  if (!isOpen) return null;

  // Ordena os jogadores por pontuação decrescente
  const rankedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div
      id="victory-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl border-4 border-amber-400 shadow-2xl overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
        {/* Banner Triunfal */}
        <div className="p-6 text-center bg-gradient-to-r from-pink-500 via-rose-500 to-teal-500 text-white relative">
          <div className="absolute top-2 left-2 text-2xl animate-spin-slow">✨</div>
          <div className="absolute top-2 right-2 text-2xl animate-spin-slow">🎉</div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-black uppercase tracking-widest text-amber-200 border border-white/20 mb-2">
            <Trophy className="w-4 h-4 text-amber-300" /> Vencedor Consagrado!
          </span>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-sm">
            {winner.name} Chegou a 1000 Pontos!
          </h1>
          <p className="text-xs sm:text-sm text-pink-100 mt-1 max-w-md mx-auto">
            Com conhecimento cinematográfico invejável, cruzou a linha de chegada em 1º Lugar!
          </p>
        </div>

        {/* Corpo: Destaque do Vencedor + Pódio do Jogo */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center">
          {/* Avatar Grande do Vencedor */}
          <div className="relative flex flex-col items-center mb-6">
            <div className="relative">
              <AvatarDisplay
                customization={winner.customization}
                playerColor={winner.color}
                size="xl"
              />
              <span className="absolute -top-3 -right-2 text-3xl filter drop-shadow">
                👑
              </span>
            </div>

            <span
              className="mt-3 text-lg font-black"
              style={{ color: winner.color }}
            >
              {winner.name}
            </span>
            <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200 mt-0.5">
              {winner.score} pontos acumulados
            </span>
          </div>

          {/* Placar Final / Ordem de Vitória */}
          <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-5">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Medal className="w-4 h-4 text-teal-600" /> Classificação Final da Partida
            </h3>

            <div className="space-y-2">
              {rankedPlayers.map((player, rankIdx) => {
                const isChampion = rankIdx === 0;
                return (
                  <div
                    key={player.id}
                    className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all ${
                      isChampion
                        ? 'bg-amber-50/80 border-amber-300 shadow-xs'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-xs ${
                          rankIdx === 0
                            ? 'bg-amber-400 text-amber-900'
                            : rankIdx === 1
                            ? 'bg-slate-300 text-slate-700'
                            : rankIdx === 2
                            ? 'bg-amber-700 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {rankIdx + 1}º
                      </span>

                      <AvatarDisplay
                        customization={player.customization}
                        playerColor={player.color}
                        size="sm"
                      />

                      <div>
                        <span
                          className="font-bold text-xs sm:text-sm block"
                          style={{ color: player.color }}
                        >
                          {player.name}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {player.correctAnswers} acertos • {player.wrongAnswers} erros
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-extrabold text-sm sm:text-base text-slate-900">
                        {player.score}
                      </span>
                      <span className="text-[10px] text-slate-500 ml-0.5">pts</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              type="button"
              onClick={onRestart}
              className="flex-1 py-3 px-4 rounded-xl font-black text-sm bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Jogar Novamente
            </button>
            <button
              type="button"
              onClick={() => {
                const winnerIndex = players.findIndex((p) => p.id === winner.id);
                onOpenWardrobe(winnerIndex >= 0 ? winnerIndex : 0);
              }}
              className="py-3 px-4 rounded-xl font-bold text-sm bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
              Customizar Avatar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
