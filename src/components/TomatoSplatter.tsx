import React, { useEffect, useState } from 'react';

interface TomatoSplatterProps {
  show: boolean;
  onAnimationEnd: () => void;
}

export const TomatoSplatter: React.FC<TomatoSplatterProps> = ({ show, onAnimationEnd }) => {
  const [splatStage, setSplatStage] = useState<'idle' | 'flying' | 'splat' | 'drip'>('idle');

  useEffect(() => {
    if (show) {
      setSplatStage('flying');
      // Transição para o impacto rápido (180ms)
      const t1 = setTimeout(() => {
        setSplatStage('splat');
      }, 160);

      // Transição para escorrimento
      const t2 = setTimeout(() => {
        setSplatStage('drip');
      }, 900);

      // Finalização e remoção
      const t3 = setTimeout(() => {
        setSplatStage('idle');
        onAnimationEnd();
      }, 2300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      setSplatStage('idle');
    }
  }, [show, onAnimationEnd]);

  if (!show && splatStage === 'idle') return null;

  return (
    <div
      id="tomato-splatter-overlay"
      className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden"
    >
      {/* Tomate voando em direção à tela */}
      {splatStage === 'flying' && (
        <div className="animate-tomato-fly text-7xl select-none filter drop-shadow-xl">
          🍅
        </div>
      )}

      {/* Impacto / Esborrachamento na tela */}
      {(splatStage === 'splat' || splatStage === 'drip') && (
        <div className="relative flex flex-col items-center justify-center animate-splat-burst">
          {/* Mancha de molho vermelha espalhada com SVG dinâmico */}
          <svg
            className="w-72 sm:w-96 h-72 sm:h-96 text-red-600 drop-shadow-2xl opacity-95 transition-all duration-700"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            {/* Formato orgânico de mancha de tomate esmagado */}
            <path d="M95 15 C130 8, 160 35, 175 65 C190 95, 185 140, 155 165 C125 190, 80 195, 45 175 C10 155, 5 110, 20 75 C35 40, 60 22, 95 15 Z" />
            
            {/* Gotas e respingos laterais */}
            <circle cx="185" cy="40" r="10" />
            <circle cx="195" cy="110" r="7" />
            <circle cx="170" cy="180" r="12" />
            <circle cx="30" cy="45" r="9" />
            <circle cx="15" cy="140" r="11" />
            <circle cx="80" cy="190" r="8" />
            <circle cx="120" cy="195" r="14" />
            <circle cx="40" cy="15" r="6" />

            {/* Sementes amarelas de tomate visíveis */}
            <ellipse cx="90" cy="90" rx="3" ry="6" fill="#fef08a" transform="rotate(25 90 90)" />
            <ellipse cx="115" cy="105" rx="3" ry="5" fill="#fef08a" transform="rotate(-35 115 105)" />
            <ellipse cx="85" cy="120" rx="3" ry="6" fill="#fef08a" transform="rotate(45 85 120)" />
            <ellipse cx="125" cy="75" rx="2.5" ry="5" fill="#fef08a" transform="rotate(15 125 75)" />
          </svg>

          {/* Ramos verdes do topo do tomate esparramados */}
          <div className="absolute top-1/4 text-3xl sm:text-4xl filter drop-shadow">
            🌿
          </div>

          {/* Rastro escorrendo para baixo */}
          <div
            className={`w-10 sm:w-14 bg-red-600/90 rounded-b-full transition-all duration-1000 ${
              splatStage === 'drip' ? 'h-36 sm:h-48 opacity-80' : 'h-12 opacity-95'
            }`}
          />

          {/* Texto de efeito cômico */}
          <div className="absolute -bottom-8 px-4 py-1.5 bg-red-700 text-white font-extrabold text-sm sm:text-base rounded-full uppercase tracking-wider shadow-lg border-2 border-white animate-bounce">
            🍅 SPLAT! ERROU!
          </div>
        </div>
      )}
    </div>
  );
};
