import React from 'react';
import { X, Trophy, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="rules-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-pink-500 via-[#0a192f] to-teal-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📖</span>
            <div>
              <h2 className="text-lg font-black tracking-tight">
                Regras do CineAdivinha Multiplayer
              </h2>
              <p className="text-xs text-pink-100">
                Como jogar, pontuar, customizar avatares e vencer
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* 1. Mecânica */}
          <div className="p-3.5 rounded-2xl bg-pink-50/60 border border-pink-200">
            <h3 className="font-extrabold text-pink-900 text-sm flex items-center gap-1.5 mb-1.5">
              <Users className="w-4 h-4 text-pink-600" /> Sistema de Turnos (2 a 4 Jogadores)
            </h3>
            <p className="text-slate-600">
              Cada jogador tenta adivinhar o filme no seu turno. Ao acertar ou passar a vez, o jogo passa automaticamente para o próximo jogador, mantendo a disputa dinâmica e equilibrada.
            </p>
          </div>

          {/* 2. Pontuação */}
          <div className="p-3.5 rounded-2xl bg-teal-50/60 border border-teal-200">
            <h3 className="font-extrabold text-teal-900 text-sm flex items-center gap-1.5 mb-1.5">
              <Trophy className="w-4 h-4 text-teal-600" /> Pontuação & Consequências
            </h3>
            <ul className="space-y-1.5 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Acerto:</strong> Ganha <strong>+10 pontos</strong> e acumula no seu placar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base shrink-0">🍅</span>
                <span><strong>Erro:</strong> Um tomate suculento se esbagaça na tela com som de <em>splat</em>! Você pode tentar novamente ou passar a vez.</span>
              </li>
            </ul>
          </div>

          {/* 3. Desbloqueio e Moda */}
          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200">
            <h3 className="font-extrabold text-amber-900 text-sm flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" /> Marcos de 1000 Pontos & Guarda-Roupa
            </h3>
            <p className="text-slate-600">
              Ao atingir <strong>1000 pontos</strong>, você passa de fase e desbloqueia novos itens de moda exclusivos (chapéus, óculos estilosos, trajes de gala e acessórios) para customizar o avatar do seu jogador na galeria!
            </p>
          </div>

          {/* 4. Vitória */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-extrabold text-slate-900 text-sm mb-1.5">
              👑 Condição de Vitória
            </h3>
            <p className="text-slate-600">
              O primeiro jogador a atingir a meta de <strong>1000 pontos</strong> vence a partida! Ao final, é exibido o pódio completo com a classificação e estatísticas de todos os participantes.
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-md"
          >
            Entendido, Vamos Jogar!
          </button>
        </div>
      </div>
    </div>
  );
};
