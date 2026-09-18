import React from 'react';
import { PlayerCustomization } from '../types';
import { FASHION_ITEMS } from '../data/fashion';

interface AvatarDisplayProps {
  customization: PlayerCustomization;
  playerColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showAccessories?: boolean;
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({
  customization,
  playerColor = '#f43f5e',
  size = 'md',
  showAccessories = true
}) => {
  const headItem = FASHION_ITEMS.find((i) => i.id === customization.headItem);
  const glassesItem = FASHION_ITEMS.find((i) => i.id === customization.glassesItem);
  const outfitItem = FASHION_ITEMS.find((i) => i.id === customization.outfitItem);
  const accessoryItem = FASHION_ITEMS.find((i) => i.id === customization.accessoryItem);

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-base',
    xl: 'w-36 h-36 text-xl'
  }[size];

  const headIconSize = {
    sm: 'text-sm -top-2',
    md: 'text-xl -top-3',
    lg: 'text-3xl -top-4',
    xl: 'text-5xl -top-6'
  }[size];

  const glassesSize = {
    sm: 'text-xs top-2',
    md: 'text-base top-3.5',
    lg: 'text-2xl top-5',
    xl: 'text-4xl top-7'
  }[size];

  const accessorySize = {
    sm: 'text-xs -right-1 -bottom-1',
    md: 'text-base -right-1.5 -bottom-1.5',
    lg: 'text-2xl -right-2 -bottom-2',
    xl: 'text-3xl -right-2 -bottom-2'
  }[size];

  return (
    <div
      className={`relative rounded-full flex items-center justify-center select-none shadow-md transition-transform duration-300 ${sizeClasses}`}
      style={{
        backgroundColor: playerColor + '18',
        border: `3px solid ${playerColor}`
      }}
    >
      {/* Corpo / Cabeça base */}
      <div
        className="w-4/5 h-4/5 rounded-full relative flex items-center justify-center overflow-visible"
        style={{ backgroundColor: customization.skinColor }}
      >
        {/* Cabelo simples estilizado */}
        <div
          className="absolute -top-1 w-3/4 h-2/5 rounded-t-full"
          style={{ backgroundColor: customization.hairColor }}
        />

        {/* Olhos felizes */}
        {!glassesItem && (
          <div className="flex gap-2 sm:gap-2.5 z-10">
            <div className="w-1.5 h-2 bg-slate-900 rounded-full" />
            <div className="w-1.5 h-2 bg-slate-900 rounded-full" />
          </div>
        )}

        {/* Sorriso simpático */}
        <div className="absolute bottom-2 sm:bottom-3 w-3 sm:w-4 h-1.5 border-b-2 border-slate-800 rounded-full" />

        {/* Óculos de Moda (se houver) */}
        {glassesItem && (
          <div
            className={`absolute z-20 flex items-center justify-center drop-shadow-sm ${glassesSize}`}
            title={glassesItem.name}
          >
            {glassesItem.icon}
          </div>
        )}

        {/* Item de Cabeça / Chapéu */}
        {headItem && (
          <div
            className={`absolute z-30 flex items-center justify-center drop-shadow-md animate-bounce-short ${headIconSize}`}
            title={headItem.name}
          >
            {headItem.icon}
          </div>
        )}

        {/* Roupa / Estilo no peitoral */}
        {outfitItem && (
          <div
            className="absolute -bottom-1 z-15 px-1 py-0.5 rounded-t-md text-[10px] sm:text-xs drop-shadow-xs"
            title={outfitItem.name}
          >
            {outfitItem.icon}
          </div>
        )}
      </div>

      {/* Acessório na mão / item segurado */}
      {showAccessories && accessoryItem && (
        <div
          className={`absolute z-30 bg-white/95 rounded-full p-0.5 sm:p-1 border border-slate-200 shadow-md ${accessorySize}`}
          title={accessoryItem.name}
        >
          {accessoryItem.icon}
        </div>
      )}
    </div>
  );
};
