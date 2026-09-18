import React from 'react';
import { Film, Trophy, HelpCircle, Volume2, VolumeX, Sparkles, Users } from 'lucide-react';
import { Player } from '../types';
import { AvatarDisplay } from './AvatarDisplay';

interface HeaderProps {
  activePlayer: Player;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenWardrobe: () => void;
  onOpenRules: () => void;
  onResetLobby: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePlayer,
  soundEnabled,
  onToggleSound,
  onOpenWardrobe,
  onOpenRules,
  onResetLobby,
}) => {
  return (
    <header id="app-header" className="w-full bg-white/95 backdrop-blur-md border-b-2 border-pink-100 sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-teal-400 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-[#0a192f] rounded-[14px] flex items-center justify-center text-pink-400">
              <Film className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-tight">
                Cine<span className="text-pink-600">Adivinha</span>
              </h1>
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                Multiplayer
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block font-medium">
              Vença chegando a 1000 pontos e desbloqueie roupas para o avatar
            </p>
          </div>
        </div>

        {/* Status do Jogador da Vez + Ações Rápidas */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Jogador Ativo Mini Platter */}
          <button
            type="button"
            onClick={onOpenWardrobe}
            className="flex items-center gap-2 px-3 py-1.5 bg-pink-50/80 hover:bg-pink-100/90 border border-pink-200 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
            title="Abrir Guarda-Roupa de Moda"
          >
            <AvatarDisplay
              customization={activePlayer.customization}
              playerColor={activePlayer.color}
              size="sm"
            />
            <div className="text-left hidden sm:block">
              <span className="text-[10px] text-slate-500 block uppercase leading-tight">Turno</span>
              <span className="font-extrabold text-slate-800 truncate max-w-[90px] block leading-tight">
                {activePlayer.name}
              </span>
            </div>
            <span className="text-xs font-black text-pink-700 bg-white px-2 py-0.5 rounded-md border border-pink-200">
              {activePlayer.score} pts
            </span>
          </button>

          {/* Botão Guarda-Roupa */}
          <button
            type="button"
            onClick={onOpenWardrobe}
            className="p-2 sm:px-3 sm:py-2 text-xs font-extrabold rounded-xl border border-teal-200 bg-teal-50 hover:bg-teal-100 text-teal-800 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            title="Abrir Galeria de Itens de Moda"
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="hidden md:inline">Guarda-Roupa</span>
          </button>

          {/* Botão Trocar Jogadores / Novo Jogo */}
          <button
            type="button"
            onClick={onResetLobby}
            className="p-2 sm:px-3 sm:py-2 text-xs font-extrabold rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            title="Voltar à tela de seleção de jogadores"
          >
            <Users className="w-4 h-4 text-slate-600" />
            <span className="hidden md:inline">Jogadores</span>
          </button>

          {/* Som Ativar/Desativar */}
          <button
            type="button"
            onClick={onToggleSound}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              soundEnabled
                ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                : 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100'
            }`}
            title={soundEnabled ? 'Desativar Sons' : 'Ativar Sons'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Regras */}
          <button
            type="button"
            onClick={onOpenRules}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Ver Regras do Jogo"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
