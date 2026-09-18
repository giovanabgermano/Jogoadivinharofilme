import React from 'react';
import { PHASE_CONFIG } from '../data/movies';
import { Sparkles, CheckCircle2, Lock } from 'lucide-react';

interface PhaseProgressBarProps {
  score: number;
  currentPhase: number;
  selectedFilterPhase: number | null;
  onSelectFilterPhase: (phase: number | null) => void;
}

export const PhaseProgressBar: React.FC<PhaseProgressBarProps> = ({
  score,
  currentPhase,
  selectedFilterPhase,
  onSelectFilterPhase,
}) => {
  // Pontos no ciclo atual de 1000
  const pointsInCycle = score % 1000;
  const progressPercent = currentPhase >= 5 && score >= 5000 
    ? 100 
    : Math.min(100, Math.max(0, (pointsInCycle / 1000) * 100));
  const pointsNeeded = 1000 - pointsInCycle;

  const currentConfig = PHASE_CONFIG.find(p => p.phase === currentPhase) || PHASE_CONFIG[0];

  return (
    <div id="phase-progress-card" className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs mb-6">
      {/* Top row: Phase title & Next phase goal */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${currentConfig.badgeColor}`}>
            Fase Atual: {currentPhase} de 5
          </span>
          <h2 className="text-sm sm:text-base font-bold text-slate-800">
            {currentConfig.name}
          </h2>
        </div>

        <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
          {currentPhase < 5 ? (
            <>
              <span>Faltam</span>
              <strong className="font-semibold text-slate-800">{pointsNeeded} pts</strong>
              <span>para a Fase {currentPhase + 1}</span>
            </>
          ) : (
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Nível Mestre Desbloqueado!
            </span>
          )}
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="space-y-1.5">
        <div className="relative w-full h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div
            id="phase-progress-indicator"
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
          <span>{pointsInCycle} pts</span>
          <span className="font-semibold text-slate-600">{progressPercent.toFixed(0)}% do caminho</span>
          <span>1000 pts</span>
        </div>
      </div>

      {/* Mini Roadmap / Step Badges */}
      <div className="mt-4 pt-3.5 border-t border-slate-100">
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 text-xs">
          {PHASE_CONFIG.map((cfg) => {
            const isUnlocked = currentPhase >= cfg.phase;
            const isCurrent = currentPhase === cfg.phase;
            const isFilterSelected = selectedFilterPhase === cfg.phase;

            return (
              <button
                key={cfg.phase}
                id={`phase-step-btn-${cfg.phase}`}
                onClick={() => {
                  if (isUnlocked) {
                    onSelectFilterPhase(isFilterSelected ? null : cfg.phase);
                  }
                }}
                disabled={!isUnlocked}
                className={`flex-1 min-w-[70px] sm:min-w-[90px] py-1.5 px-2 rounded-lg border text-center transition-all flex flex-col items-center gap-0.5 ${
                  isFilterSelected
                    ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-xs ring-1 ring-amber-400'
                    : isCurrent
                    ? 'border-amber-300 bg-amber-50/50 text-amber-900 font-medium'
                    : isUnlocked
                    ? 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 cursor-pointer'
                    : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed opacity-60'
                }`}
                title={
                  isUnlocked
                    ? `Fase ${cfg.phase}: ${cfg.name} (Clique para focar nesta fase)`
                    : `Bloqueado. Alcance ${cfg.pointsRequired} pontos para desbloquear a Fase ${cfg.phase}`
                }
              >
                <div className="flex items-center gap-1">
                  {isUnlocked ? (
                    isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                    ) : (
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    )
                  ) : (
                    <Lock className="w-3 h-3 text-slate-400" />
                  )}
                  <span className="font-semibold">Fase {cfg.phase}</span>
                </div>
                <span className="text-[10px] text-slate-500 line-clamp-1 truncate max-w-full">
                  {cfg.pointsRequired} pts
                </span>
              </button>
            );
          })}
        </div>

        {selectedFilterPhase && (
          <div className="mt-2 text-xs text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg flex items-center justify-between border border-amber-200">
            <span>
              Filtrando filmes da <strong>Fase {selectedFilterPhase}</strong>
            </span>
            <button
              onClick={() => onSelectFilterPhase(null)}
              className="text-amber-900 font-bold underline hover:opacity-80 ml-2"
            >
              Ver Todas as Fases
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
