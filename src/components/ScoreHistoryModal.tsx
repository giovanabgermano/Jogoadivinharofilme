import React, { useState } from 'react';
import { GameHistoryItem, UserStats } from '../types';
import { X, Trophy, CheckCircle2, XCircle, Flame, Percent, Trash2, Calendar } from 'lucide-react';

interface ScoreHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: GameHistoryItem[];
  stats: UserStats;
  onClearHistory: () => void;
}

export const ScoreHistoryModal: React.FC<ScoreHistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  stats,
  onClearHistory,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'skipped'>('all');

  if (!isOpen) return null;

  const filteredHistory = history.filter((item) => {
    if (filter === 'correct') return item.correct;
    if (filter === 'skipped') return !item.correct;
    return true;
  });

  const totalPlayed = stats.totalCorrect + stats.totalSkipped;
  const accuracyRate = totalPlayed > 0 ? Math.round((stats.totalCorrect / totalPlayed) * 100) : 0;

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' - ' + date.toLocaleDateString([], { day: '2-digit', month: '2-digit' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div
        id="history-modal"
        className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Histórico & Desempenho
              </h3>
              <p className="text-xs text-slate-500">
                Seu registro de pontuação e progresso
              </p>
            </div>
          </div>

          <button
            id="close-history-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Fechar modal de histórico"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-slate-50 border-b border-slate-100">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Total Pontos
            </span>
            <span className="text-xl font-black text-amber-700">{stats.totalScore}</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Filmes Acertados
            </span>
            <div className="flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xl font-black text-emerald-700">{stats.totalCorrect}</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Precisão
            </span>
            <div className="flex items-center justify-center gap-1">
              <Percent className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xl font-black text-blue-700">{accuracyRate}%</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Melhor Sequência
            </span>
            <div className="flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-xl font-black text-orange-600">{stats.bestStreak}x</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-5 sm:px-6 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Todos ({history.length})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filter === 'correct'
                  ? 'bg-emerald-700 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Acertos ({stats.totalCorrect})
            </button>
            <button
              onClick={() => setFilter('skipped')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filter === 'skipped'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Pulados ({stats.totalSkipped})
            </button>
          </div>

          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 font-medium transition-colors cursor-pointer"
              title="Limpar todo o histórico salvo"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar Histórico</span>
            </button>
          )}
        </div>

        {/* History Items Scrollable List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100 max-h-[360px]">
          {filteredHistory.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p>Nenhuma jogada registrada nesta categoria ainda.</p>
              <p className="text-xs text-slate-400 mt-1">
                Jogue uma rodada para registrar seus palpites!
              </p>
            </div>
          ) : (
            filteredHistory.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      item.correct
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {item.correct ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 leading-snug">
                      {item.movieTitle}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.correct
                        ? `Seu palpite: "${item.userGuess}" (${item.attemptsCount}ª tentativa)`
                        : 'Filme pulado sem resposta'}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full inline-block ${
                      item.correct
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {item.correct ? `+${item.points} pts` : '0 pts'}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {formatDate(item.timestamp)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
