import React from 'react';
import { Sparkles, Trophy, ArrowRight, Award } from 'lucide-react';
import { Player, FashionItem } from '../types';
import { AvatarDisplay } from './AvatarDisplay';

interface PhaseAdvanceModalProps {
  player: Player;
  newPhase: number;
  unlockedItems: FashionItem[];
  isOpen: boolean;
  onClose: () => void;
  onOpenWardrobe: () => void;
}

export const PhaseAdvanceModal: React.FC<PhaseAdvanceModalProps> = ({
  player,
  newPhase,
  unlockedItems,
  isOpen,
  onClose,
  onOpenWardrobe,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div
        id="phase-advance-modal"
        className="bg-white border-2 border-pink-300 rounded-3xl w-full max-w-md p-6 sm:p-7 text-center shadow-2xl relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-pink-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Big Icon */}
        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 animate-bounce">
          <Trophy className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-900 text-xs font-black uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-pink-600" />
          Fase Desbloqueada!
        </div>

        <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
          {player.name} Chegou à Fase {newPhase}!
        </h3>

        <p className="text-xs sm:text-sm font-bold text-pink-700 mb-4">
          Marco de 1000 pontos atingido com sucesso!
        </p>

        {/* Itens de Moda Desbloqueados */}
        {unlockedItems.length > 0 && (
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-left mb-5">
            <span className="text-[11px] font-black uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Novos Itens de Moda Desbloqueados!
            </span>
            <div className="grid grid-cols-2 gap-2">
              {unlockedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 p-2 bg-white rounded-xl border border-teal-100 shadow-2xs"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <span className="font-extrabold text-xs text-slate-900 block truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-teal-600 font-semibold block">
                      Disponível na Galeria
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={onOpenWardrobe}
            className="flex-1 py-3 px-4 bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs sm:text-sm rounded-xl border border-teal-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Customizar Avatar</span>
          </button>
          <button
            id="continue-after-phase-advance-btn"
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <span>Continuar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
