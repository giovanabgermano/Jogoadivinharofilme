import React, { useState } from 'react';
import { Player, FashionCategory } from '../types';
import { FASHION_ITEMS } from '../data/fashion';
import { AvatarDisplay } from './AvatarDisplay';
import { X, Sparkles, Lock, Check } from 'lucide-react';

interface WardrobeModalProps {
  player: Player;
  isOpen: boolean;
  onClose: () => void;
  onUpdateCustomization: (updatedCustomization: Player['customization']) => void;
}

export const WardrobeModal: React.FC<WardrobeModalProps> = ({
  player,
  isOpen,
  onClose,
  onUpdateCustomization
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FashionCategory>('head');
  const [tempCustomization, setTempCustomization] = useState(player.customization);

  if (!isOpen) return null;

  const categories: { key: FashionCategory; label: string; icon: string }[] = [
    { key: 'head', label: 'Cabeça & Chapéus', icon: '🧢' },
    { key: 'glasses', label: 'Óculos & Visores', icon: '👓' },
    { key: 'outfit', label: 'Roupas & Trajes', icon: '👕' },
    { key: 'accessory', label: 'Acessórios & Mão', icon: '🍿' }
  ];

  const categoryItems = FASHION_ITEMS.filter((i) => i.category === selectedCategory);

  const handleEquip = (itemId: string | null) => {
    let updated = { ...tempCustomization };
    if (selectedCategory === 'head') updated.headItem = itemId;
    if (selectedCategory === 'glasses') updated.glassesItem = itemId;
    if (selectedCategory === 'outfit') updated.outfitItem = itemId;
    if (selectedCategory === 'accessory') updated.accessoryItem = itemId;

    setTempCustomization(updated);
    onUpdateCustomization(updated);
  };

  const handleColorChange = (type: 'skin' | 'hair', color: string) => {
    const updated = {
      ...tempCustomization,
      [type === 'skin' ? 'skinColor' : 'hairColor']: color
    };
    setTempCustomization(updated);
    onUpdateCustomization(updated);
  };

  const isEquipped = (itemId: string | null) => {
    if (selectedCategory === 'head') return tempCustomization.headItem === itemId;
    if (selectedCategory === 'glasses') return tempCustomization.glassesItem === itemId;
    if (selectedCategory === 'outfit') return tempCustomization.outfitItem === itemId;
    if (selectedCategory === 'accessory') return tempCustomization.accessoryItem === itemId;
    return false;
  };

  const skinColors = ['#fcd34d', '#fbcfe8', '#fed7aa', '#d4a373', '#a16207', '#582f0e'];
  const hairColors = ['#1e293b', '#b45309', '#e11d48', '#0284c7', '#059669', '#cbd5e1'];

  return (
    <div
      id="wardrobe-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header do Guarda-Roupa */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-pink-500 via-rose-500 to-teal-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-xs text-xl">
              ✨
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                Guarda-Roupa & Estilo de {player.name}
              </h2>
              <p className="text-xs text-pink-100 font-medium">
                Desbloqueie novos itens de moda subindo de fase (+1000 pts)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo: Visualização do Avatar + Seletor de Itens */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Avatar Preview */}
          <div className="flex flex-col items-center p-5 bg-gradient-to-b from-slate-50 to-pink-50/50 rounded-2xl border-2 border-pink-200/60 w-full md:w-56 shrink-0 shadow-inner">
            <span className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
              Visual Atual
            </span>
            <AvatarDisplay
              customization={tempCustomization}
              playerColor={player.color}
              size="xl"
            />
            <span
              className="mt-3 font-extrabold text-sm"
              style={{ color: player.color }}
            >
              {player.name}
            </span>
            <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 mt-1 shadow-2xs">
              Fase Atual: {player.phase} ({player.score} pts)
            </span>

            {/* Tons de Pele & Cabelo Rápidos */}
            <div className="mt-4 w-full pt-3 border-t border-slate-200">
              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5 text-center">
                Tom de Pele
              </span>
              <div className="flex justify-center gap-1.5 mb-3">
                {skinColors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleColorChange('skin', c)}
                    className={`w-5 h-5 rounded-full border-2 transition-transform ${
                      tempCustomization.skinColor === c ? 'scale-125 border-slate-900 ring-2 ring-pink-400' : 'border-white'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5 text-center">
                Cor do Cabelo
              </span>
              <div className="flex justify-center gap-1.5">
                {hairColors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleColorChange('hair', c)}
                    className={`w-5 h-5 rounded-full border-2 transition-transform ${
                      tempCustomization.hairColor === c ? 'scale-125 border-slate-900 ring-2 ring-pink-400' : 'border-white'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Abas e Grid de Itens */}
          <div className="flex-1 w-full">
            {/* Categorias de Moda */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4 border-b border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.key
                      ? 'bg-navy-900 bg-[#0a192f] text-white shadow-sm scale-102'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Grid de Itens da Categoria */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Opção Nenhum Item */}
              <button
                type="button"
                onClick={() => handleEquip(null)}
                className={`p-3 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                  isEquipped(null)
                    ? 'border-pink-500 bg-pink-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 font-bold text-xs">
                    🚫
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-800 block">Nenhum</span>
                    <span className="text-[10px] text-slate-500">Desequipar item desta categoria</span>
                  </div>
                </div>
                {isEquipped(null) && <Check className="w-4 h-4 text-pink-600" />}
              </button>

              {/* Itens de Moda Disponíveis */}
              {categoryItems.map((item) => {
                const isUnlocked = player.unlockedItemIds.includes(item.id);
                const active = isEquipped(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={!isUnlocked}
                    onClick={() => handleEquip(item.id)}
                    className={`p-3 rounded-2xl border-2 text-left flex items-center justify-between transition-all relative ${
                      active
                        ? 'border-pink-500 bg-pink-50/80 shadow-xs ring-2 ring-pink-300/40'
                        : isUnlocked
                        ? 'border-slate-200 hover:border-teal-400 bg-white cursor-pointer'
                        : 'border-slate-200 bg-slate-50 opacity-65 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl border shadow-2xs shrink-0"
                        style={{
                          backgroundColor: isUnlocked ? item.color + '20' : '#e2e8f0',
                          borderColor: isUnlocked ? item.color + '50' : '#cbd5e1'
                        }}
                      >
                        {item.icon}
                      </div>
                      <div className="pr-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-xs text-slate-900 block truncate max-w-[140px]">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 line-clamp-1">
                          {item.description}
                        </p>
                        <span className="text-[9px] font-bold text-teal-700 mt-0.5 inline-block">
                          {isUnlocked ? (
                            <span className="text-emerald-600 flex items-center gap-0.5">
                              <Sparkles className="w-2.5 h-2.5" /> Desbloqueado
                            </span>
                          ) : (
                            <span className="text-amber-700 flex items-center gap-0.5">
                              <Lock className="w-2.5 h-2.5" /> Requer Fase {item.phaseRequired} ({(item.phaseRequired - 1) * 1000} pts)
                            </span>
                          )}
                        </span>
                      </div>
                    </div>

                    <div>
                      {active ? (
                        <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : !isUnlocked ? (
                        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                          <Lock className="w-3 h-3" />
                        </div>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Rodapé com botão Fechar */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-md"
          >
            Salvar & Voltar ao Jogo
          </button>
        </div>
      </div>
    </div>
  );
};
